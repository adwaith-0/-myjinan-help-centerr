import { useState, useRef, useEffect } from "react";
import { PromptInputBox } from "@/components/ui/ai-prompt-box";
import { sendToGemini, clearHistory } from "@/lib/gemini";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, RotateCcw } from "lucide-react";

interface ChatMessage {
  id: string;
  role: "user" | "ai";
  text: string;
}

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

export default function GradientChatApp() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = { id: crypto.randomUUID(), role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const reply = await sendToGemini(text.trim());
      setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "ai", text: reply }]);
    } catch (err) {
      const errorText = err instanceof Error ? err.message : "Something went wrong.";
      setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "ai", text: "❌ **Error:** " + errorText }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([]);
    clearHistory();
  };

  const hasMessages = messages.length > 0;

  return (
    <div className="flex flex-col w-full h-screen bg-[radial-gradient(125%_125%_at_50%_101%,rgba(245,87,2,1)_10.5%,rgba(245,120,2,1)_16%,rgba(245,140,2,1)_17.5%,rgba(245,170,100,1)_25%,rgba(238,174,202,1)_40%,rgba(202,179,214,1)_65%,rgba(148,201,233,1)_100%)]">

      {/* Reset button (top right) */}
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

      {/* Messages area (scrollable, above prompt) */}
      <div className={`flex-1 overflow-y-auto transition-all duration-500 ${hasMessages ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className="max-w-[560px] mx-auto w-full px-4 pt-14 pb-4 space-y-3">
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
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                  msg.role === "user"
                    ? "bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-tr-sm"
                    : "bg-black/20 backdrop-blur-md border border-white/10 text-white/90 rounded-tl-sm"
                }`}
              >
                {msg.role === "user" ? (
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                ) : (
                  <div
                    className="text-sm leading-relaxed [&_strong]:text-white"
                    dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.text) }}
                  />
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

      {/* Centered prompt area */}
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
    </div>
  );
}
