import { useCallback, useEffect, useRef, useState } from "react";
import { PromptInputBox } from "@/components/ui/ai-prompt-box";
import { sendToGemini, clearHistory } from "@/lib/gemini";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, RotateCcw, X, ChevronLeft, ChevronRight } from "lucide-react";

// ── Types ──
interface DocImage {
  url: string;
  caption: string;
}

interface ChatMessage {
  id: string;
  role: "user" | "ai";
  text: string;
  images?: DocImage[];
}

// ── Parse [IMG:path|caption] tags from AI response ──
function parseImagesFromResponse(raw: string): { text: string; images: DocImage[] } {
  const images: DocImage[] = [];
  const text = raw.replace(/\[IMG:([\w/._-]+)\|([^\]]+)\]/g, (_match, path, caption) => {
    images.push({ url: `/docs/${path}`, caption });
    return ""; // remove tag from text
  });
  // Clean up any leftover double blank lines
  const cleaned = text.replace(/\n{3,}/g, "\n\n").trim();
  return { text: cleaned, images };
}

// ── Markdown renderer ──
function renderMarkdown(text: string): string {
  let html = text
    .replace(/```([\s\S]*?)```/g, '<pre class="bg-black/30 backdrop-blur-sm rounded-xl p-3 my-2 overflow-x-auto text-sm font-mono text-white/90 border border-white/10"><code>$1</code></pre>')
    .replace(/`([^`]+)`/g, '<code class="bg-black/20 px-1.5 py-0.5 rounded text-amber-200 text-sm font-mono">$1</code>')
    .replace(/\*\*(.*?)\*\*/g, "<strong class='text-white font-semibold'>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/((?:[\w\s&]+\s*→\s*)+[\w\s&]+)/g, '<span class="text-amber-200 font-medium">$1</span>')
    .replace(/^### (.+)$/gm, '<h3 class="text-sm font-bold text-white mt-3 mb-1.5">$1</h3>')
    .replace(/^## (.+)$/gm, '<h3 class="text-sm font-bold text-white mt-3 mb-1.5">$1</h3>')
    .replace(/^(\d+)\.\s(.+)$/gm, '<li class="ml-4 mb-0.5 list-decimal text-white/85 text-sm">$2</li>')
    .replace(/^[-•]\s(.+)$/gm, '<li class="ml-4 mb-0.5 list-disc text-white/85 text-sm">$1</li>')
    .replace(/\n\n/g, "</p><p class='mb-1.5'>")
    .replace(/\n/g, "<br/>");
  html = html.replace(/((?:<li[^>]*>.*?<\/li>\s*(?:<br\/>)?)+)/g, "<ul class='my-1.5 space-y-0'>$1</ul>");
  html = html.replace(/<ul[^>]*>(.*?)<\/ul>/gs, (match) => match.replace(/<br\/>/g, ""));
  return "<p class='mb-1.5'>" + html + "</p>";
}

// ── Lightbox ──
function ImageLightbox({
  images,
  initialIndex,
  onClose,
}: {
  images: DocImage[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(initialIndex);
  const img = images[idx];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIdx((i) => (i > 0 ? i - 1 : images.length - 1));
      if (e.key === "ArrowRight") setIdx((i) => (i < images.length - 1 ? i + 1 : 0));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [images.length, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
        >
          <X className="w-4 h-4 text-white" />
        </button>

        <motion.img
          key={idx}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          src={img.url}
          alt={img.caption}
          className="max-w-full max-h-[80vh] rounded-xl border border-white/10 shadow-2xl object-contain bg-white"
        />

        <p className="mt-3 text-sm text-white/70 text-center max-w-md">{img.caption}</p>
        <p className="mt-1 text-xs text-white/40">
          {idx + 1} / {images.length}
        </p>

        {images.length > 1 && (
          <>
            <button
              onClick={() => setIdx((i) => (i > 0 ? i - 1 : images.length - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={() => setIdx((i) => (i < images.length - 1 ? i + 1 : 0))}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
}

// ── Image Gallery (inline in chat bubble) ──
function ImageGallery({
  images,
  onImageClick,
}: {
  images: DocImage[];
  onImageClick: (images: DocImage[], index: number) => void;
}) {
  return (
    <div className="mt-3 pt-3 border-t border-white/10">
      <div className="flex items-center gap-1.5 mb-2">
        <div className="w-1 h-3 rounded-full bg-amber-400/70" />
        <span className="text-[11px] font-semibold text-white/50 uppercase tracking-wider">
          Related Screenshots
        </span>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: "thin" }}>
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => onImageClick(images, i)}
            className="flex-shrink-0 group relative rounded-lg overflow-hidden border border-white/10 hover:border-amber-400/40 transition-all hover:shadow-lg hover:shadow-amber-500/5"
          >
            <img
              src={img.url}
              alt={img.caption}
              className="h-28 w-auto max-w-[220px] object-cover group-hover:scale-105 transition-transform duration-200 bg-white"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-[10px] text-white/90 leading-tight line-clamp-2">{img.caption}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ══════════════ Main App ══════════════
export default function GradientChatApp() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lightbox, setLightbox] = useState<{ images: DocImage[]; index: number } | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = useCallback(
    async (text: string) => {
      if (!text.trim() || isLoading) return;

      const userMsg: ChatMessage = { id: crypto.randomUUID(), role: "user", text: text.trim() };
      setMessages((prev) => [...prev, userMsg]);
      setIsLoading(true);

      try {
        const rawReply = await sendToGemini(text.trim());
        const { text: cleanText, images } = parseImagesFromResponse(rawReply);
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "ai",
            text: cleanText,
            images: images.length > 0 ? images : undefined,
          },
        ]);
      } catch (err) {
        const errorText = err instanceof Error ? err.message : "Something went wrong.";
        setMessages((prev) => [
          ...prev,
          { id: crypto.randomUUID(), role: "ai", text: "❌ **Error:** " + errorText },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading]
  );

  const handleReset = () => {
    setMessages([]);
    clearHistory();
  };

  const hasMessages = messages.length > 0;

  return (
    <div className="flex flex-col w-full h-screen bg-[radial-gradient(125%_125%_at_50%_101%,rgba(245,87,2,1)_10.5%,rgba(245,120,2,1)_16%,rgba(245,140,2,1)_17.5%,rgba(245,170,100,1)_25%,rgba(238,174,202,1)_40%,rgba(202,179,214,1)_65%,rgba(148,201,233,1)_100%)]">
      {/* Reset button */}
      <AnimatePresence>
        {hasMessages && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleReset}
            className="fixed top-4 right-4 z-50 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:bg-black/30 transition-all text-xs font-medium"
          >
            <RotateCcw className="w-3 h-3" />
            New chat
          </motion.button>
        )}
      </AnimatePresence>

      {/* Messages area */}
      <div
        className={`flex-1 overflow-y-auto transition-all duration-500 ${
          hasMessages ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-[640px] mx-auto w-full px-4 pt-14 pb-4 space-y-3">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.role === "ai" && (
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center mr-2 mt-1">
                  <Sparkles className="w-3.5 h-3.5 text-white/80" />
                </div>
              )}
              <div
                className={`max-w-[88%] rounded-2xl px-4 py-2.5 ${
                  msg.role === "user"
                    ? "bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-tr-sm"
                    : "bg-black/20 backdrop-blur-md border border-white/10 text-white/90 rounded-tl-sm"
                }`}
              >
                {msg.role === "user" ? (
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                ) : (
                  <>
                    <div
                      className="text-sm leading-relaxed [&_strong]:text-white"
                      dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.text) }}
                    />
                    {msg.images && msg.images.length > 0 && (
                      <ImageGallery
                        images={msg.images}
                        onImageClick={(imgs, idx) => setLightbox({ images: imgs, index: idx })}
                      />
                    )}
                  </>
                )}
              </div>
            </motion.div>
          ))}

          {/* Typing indicator */}
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex justify-start"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center mr-2 mt-1">
                  <Sparkles className="w-3.5 h-3.5 text-white/80" />
                </div>
                <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl rounded-tl-sm px-5 py-3.5">
                  <div className="flex items-center gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-white/60"
                        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Prompt area */}
      <div
        className={`w-full transition-all duration-500 ease-in-out ${
          hasMessages ? "pb-6" : "flex-1 flex items-center justify-center pb-20"
        }`}
      >
        <div className="w-full max-w-[520px] mx-auto px-4">
          <PromptInputBox
            onSend={(msg) => handleSend(msg)}
            isLoading={isLoading}
            placeholder="Type your message here..."
          />
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <ImageLightbox
            images={lightbox.images}
            initialIndex={lightbox.index}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
