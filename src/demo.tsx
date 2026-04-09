import { useCallback, useEffect, useRef, useState } from "react";
import { PromptInputBox } from "@/components/ui/ai-prompt-box";
import { sendToGemini, clearHistory, type GeminiResponse, setApiKey, getStoredApiKey } from "@/lib/gemini";
import { type DocImage } from "@/lib/image-registry";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, RotateCcw, X, ChevronLeft, ChevronRight, Info, ZoomIn, Settings, ExternalLink, Key, Check, Trash2 } from "lucide-react";

// ── Types ──
interface ChatMessage {
  id: string;
  role: "user" | "ai";
  text: string;
  images?: DocImage[];
}

// ═══════════════════════════════════════════════════════════════
//  IMAGE EXPLANATION DATA — When a user clicks an image,
//  this provides contextual how-to steps for that screenshot
// ═══════════════════════════════════════════════════════════════

function getImageExplanation(caption: string): { title: string; steps: string[]; tip: string } {
  const c = caption.toLowerCase();

  if (c.includes("add new item") || c.includes("name, description"))
    return { title: "Adding a New Product", steps: ["Enter the product name in Default, English, and Arabic languages", "Write a short description (shown in product cards) and long description (shown in detail page)", "Upload a product image with 1:1 aspect ratio (max 100KB, .jpg or .png)", "Upload a mandatory thumbnail image for listing grids"], tip: "Save as Draft first to review before publishing — especially useful for products that need manager approval." };
  if (c.includes("image upload") || c.includes("thumbnail"))
    return { title: "Product Image Requirements", steps: ["Product Image: Must be 1:1 aspect ratio (square)", "File size must be under 100KB for fast loading", "Only .jpg and .png formats are accepted", "Thumbnail is mandatory — it appears in search results and product grids"], tip: "Use the Gallery feature (Business Settings → Gallery) to upload images once and reuse across multiple products." };
  if (c.includes("store") && c.includes("category") && c.includes("price"))
    return { title: "Store & Category Assignment", steps: ["Select the Store where this product will be sold", "Choose the Category and Sub-Category", "Assign a Brand for brand-based filtering", "Set the Unit of measurement and Max Purchase quantity", "Enter the Price and any applicable discounts"], tip: "Products won't appear on the storefront if assigned to a disabled category or store." };
  if (c.includes("attribute") || c.includes("tag"))
    return { title: "Product Attributes & Tags", steps: ["Scroll to the Attributes section on the product form", "Add attributes like Color, Size, Material for filterable search", "Enter search tags — keywords customers might use", "Tags improve search accuracy and product visibility"], tip: "Well-tagged products get up to 40% more visibility in search results." };
  if (c.includes("variant") || (c.includes("color") && c.includes("size")))
    return { title: "Product Variants (Colors, Sizes)", steps: ["Select an Attribute type (e.g., Color or Size)", "Enter the variant value (e.g., Red, Large)", "Set a specific price for this variant", "Set the stock quantity for each variant separately"], tip: "Each variant maintains its own inventory count — when Red is sold out, Blue may still be available." };
  if (c.includes("product list") || c.includes("item list") || c.includes("full item list"))
    return { title: "Managing Your Product List", steps: ["Use the search bar to find products by name or SKU", "Filter by Category or Status (Active/Inactive/Draft)", "Click the Edit icon to modify any product", "Use the Status toggle to temporarily hide products", "Click Export to download the filtered list as Excel"], tip: "Use the '+' icon next to quantity for quick stock updates without opening the full editor." };
  if (c.includes("low stock"))
    return { title: "Low Stock Monitoring", steps: ["Navigate to Product Management → Low Stock", "Review all products below the reorder threshold", "Click on any item to update its stock quantity", "Export the list for supplier reorder forms"], tip: "Set up low-stock thresholds per product to get automated alerts before items run out." };
  if (c.includes("review"))
    return { title: "Customer Reviews Management", steps: ["View all customer reviews with ratings and comments", "Search reviews by product name or customer", "Delete inappropriate or fake reviews", "Export reviews for quality analysis"], tip: "Patterns in reviews indicate systemic issues worth investigating." };
  if (c.includes("bulk import"))
    return { title: "Bulk Import Process", steps: ["Download the official template first", "Fill in the template with your data", "Select 'Upload New Data' or 'Update Existing Data'", "Upload the completed Excel (.xls or .xlsx) file"], tip: "Image file names in the template must not exceed 30 characters." };
  if (c.includes("bulk export"))
    return { title: "Bulk Export Process", steps: ["Choose the export type: All Data, Date-wise, or ID-wise", "Apply any filters to narrow the export", "Click Export and download the Excel file", "Use this as a backup or starting point for bulk import"], tip: "Regular exports create offline backups for disaster recovery." };
  if (c.includes("categor") && !c.includes("sub"))
    return { title: "Category Management", steps: ["Navigate to Product Management → Categories", "Click 'Add New' and enter name in all languages", "Upload a 1:1 ratio image for the category", "Use the Status toggle to enable/disable categories"], tip: "Delete a category only when no products are linked to it." };
  if (c.includes("sub categ") || c.includes("sub category"))
    return { title: "Sub-Category Setup", steps: ["Navigate to Product Management → Sub Categories", "Click 'Add New' and select the parent category", "Enter the sub-category name in all languages", "Review the list for correct parent-child relationships"], tip: "Sub-categories help customers drill down to exactly what they need." };
  if (c.includes("unit"))
    return { title: "Units of Measurement", steps: ["Navigate to Product Management → Units", "Add units like kg, piece, metre, litre", "Provide names in all supported languages", "Remove duplicate units for consistency"], tip: "Using correct units prevents customer confusion about pricing." };
  if (c.includes("brand"))
    return { title: "Brand Management", steps: ["Navigate to Product Management → Brands", "Add brand name and upload the brand logo", "Use the Status toggle to enable/disable brands", "Search the brand list to find specific brands"], tip: "Brands enable customers to search and filter by preferred manufacturers." };
  if (c.includes("order") || c.includes("pending") || c.includes("accepted") || c.includes("delivered") || c.includes("invoice"))
    return { title: "Order Management Flow", steps: ["New orders appear as 'Pending' — click Accept to confirm", "Update status: Pending → Confirmed → Packed → Dispatched → Delivered", "Each status update triggers a customer notification", "Click any order to view details, generate invoice, or print delivery note"], tip: "Quick confirmation builds trust — customers are less likely to cancel." };
  if (c.includes("pos") || c.includes("checkout"))
    return { title: "Point of Sale (POS)", steps: ["Open the POS section from the navigation", "Search and select products for the order", "Enter customer details or select existing customer", "Review the order and complete checkout"], tip: "POS creates digital records for walk-in store transactions." };
  if (c.includes("flash sale"))
    return { title: "Flash Sale Setup", steps: ["Navigate to Marketing → Flash Sales", "Select products to include in the sale", "Set discounted prices for each product", "Schedule the exact start and end date/time"], tip: "Flash sales go live and expire automatically — no manual intervention needed." };
  if (c.includes("report") || c.includes("analytics") || c.includes("transaction") || c.includes("tax"))
    return { title: "Reports & Analytics", steps: ["Navigate to Reports & Analytics from the main menu", "Select the report type (Sales, Product, Store, Tax, etc.)", "Apply date range filters to narrow analysis", "Export any report as Excel or CSV"], tip: "Compare periods (this month vs last month) to identify trends." };
  if (c.includes("dashboard") || c.includes("navigation") || c.includes("sidebar"))
    return { title: "Admin Dashboard Navigation", steps: ["The left sidebar contains all main modules", "Click any module to expand its sub-sections", "Dashboard shows total orders, revenue, and customer count", "Use the top bar for search and notifications"], tip: "The dashboard is your daily health-check for the platform." };

  return { title: "Feature Overview", steps: ["This screenshot shows a section of the MyJinan admin panel", "Use the navigation sidebar to access this feature", "Refer to the AI assistant for detailed guidance"], tip: "Ask specific questions like 'How do I add a product?' for step-by-step instructions." };
}

// ═══════════════════════════════════════════════════════════════
//  IMAGE DETAIL PANEL — Opens when user clicks any image
//  Shows the screenshot + step-by-step how-to explanation
// ═══════════════════════════════════════════════════════════════

function ImageDetailPanel({
  image, onClose, onPrev, onNext, hasPrev, hasNext, total, currentIndex,
}: {
  image: DocImage; onClose: () => void; onPrev: () => void; onNext: () => void;
  hasPrev: boolean; hasNext: boolean; total: number; currentIndex: number;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  const explanation = getImageExplanation(image.caption);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-[95vw] max-h-[95vh] flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden bg-black/40 border border-white/10 backdrop-blur-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/60 transition-all">
          <X className="w-4 h-4" />
        </button>

        {/* Image side */}
        <div className="relative flex-shrink-0 bg-black/20 flex items-center justify-center" style={{ maxWidth: "60vw", maxHeight: "80vh" }}>
          {hasPrev && (
            <button onClick={onPrev} className="absolute left-2 z-10 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {hasNext && (
            <button onClick={onNext} className="absolute right-2 z-10 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
          <img src={image.url} alt={image.caption} className="max-h-[80vh] max-w-full object-contain" />
        </div>

        {/* Explanation panel */}
        <div className="w-full md:w-[340px] flex-shrink-0 p-5 overflow-y-auto bg-black/30 backdrop-blur-xl border-l border-white/5" style={{ maxHeight: "80vh" }}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[11px] font-semibold text-white/50 uppercase tracking-wider">How-To Guide</span>
            </div>
            <span className="text-[11px] text-white/40">{currentIndex + 1} / {total}</span>
          </div>
          <p className="text-xs text-amber-200/80 mb-3 pb-2 border-b border-white/5">{image.caption}</p>
          <h3 className="text-sm font-bold text-white mb-3">{explanation.title}</h3>
          <div className="space-y-2 mb-4">
            {explanation.steps.map((step, i) => (
              <div key={i} className="flex gap-2.5 items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-amber-500/30 to-orange-500/30 border border-amber-500/30 flex items-center justify-center mt-0.5">
                  <span className="text-[10px] font-bold text-amber-300">{i + 1}</span>
                </div>
                <p className="text-xs text-white/75 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 px-3 py-2.5">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-xs">💡</span>
              <span className="text-[10px] font-semibold text-amber-300 uppercase tracking-wider">Pro Tip</span>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">{explanation.tip}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════
//  INLINE IMAGE CARD — Shown under each step in the response
//  Clicking opens the full ImageDetailPanel with explanation
// ═══════════════════════════════════════════════════════════════

function InlineImageCard({
  image,
  onClick,
}: {
  image: DocImage;
  onClick: () => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="w-full my-2 group relative rounded-xl overflow-hidden border border-white/10 hover:border-amber-400/40 transition-all hover:shadow-lg hover:shadow-amber-500/10 cursor-pointer bg-black/10 backdrop-blur-sm text-left"
    >
      <div className="relative">
        <img
          src={image.url}
          alt={image.caption}
          className="w-full max-h-[200px] object-cover group-hover:scale-[1.02] transition-transform duration-300 bg-white/5"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-7 h-7 rounded-full bg-amber-500/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <ZoomIn className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-[10px] text-white/90 leading-tight">{image.caption}</p>
        </div>
      </div>
      <div className="px-3 py-1.5 flex items-center gap-1.5 border-t border-white/5">
        <div className="w-1 h-2.5 rounded-full bg-amber-400/60" />
        <p className="text-[10px] text-white/40 truncate">{image.caption}</p>
        <span className="ml-auto text-[9px] text-amber-400/60 whitespace-nowrap">Click for guide →</span>
      </div>
    </motion.button>
  );
}

// ═══════════════════════════════════════════════════════════════
//  MARKDOWN RENDERER — Returns HTML string with flow-step blocks
//  and navigation breadcrumbs. Step markers are used to inject
//  inline images at the correct positions.
// ═══════════════════════════════════════════════════════════════

function renderMarkdown(text: string): string {
  let html = text
    .replace(/```([\s\S]*?)```/g, '<pre class="bg-black/30 backdrop-blur-sm rounded-xl p-3 my-2 overflow-x-auto text-sm font-mono text-white/90 border border-white/10"><code>$1</code></pre>')
    .replace(/`([^`]+)`/g, '<code class="bg-black/20 px-1.5 py-0.5 rounded text-amber-200 text-sm font-mono">$1</code>')
    .replace(/\*\*(.*?)\*\*/g, "<strong class='text-white font-semibold'>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/^### (.+)$/gm, '<h3 class="text-sm font-bold text-white mt-4 mb-2">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-sm font-bold text-white mt-4 mb-2 border-b border-white/10 pb-1">$1</h2>');

  // Flow steps: **Step N** → description → add marker for image injection
  html = html.replace(
    /\*\*Step (\d+)\*\*\s*[→:]\s*(.+)/g,
    '<div class="flow-step-block"><div class="flow-step-num">$1</div><div class="flow-step-text">$2</div></div><!-- STEP_IMAGE_$1 -->'
  );

  // Callout blocks
  const callouts: [RegExp, string][] = [
    [/^(<strong[^>]*>)?✅([^<]*?)(<\/strong>)?$/gm, "bg-emerald-500/10 border-emerald-500/30"],
    [/^(<strong[^>]*>)?💡([^<]*?)(<\/strong>)?$/gm, "bg-amber-500/10 border-amber-500/30"],
    [/^(<strong[^>]*>)?💼([^<]*?)(<\/strong>)?$/gm, "bg-purple-500/10 border-purple-500/30"],
    [/^(<strong[^>]*>)?📍([^<]*?)(<\/strong>)?$/gm, "bg-cyan-500/10 border-cyan-500/30"],
    [/^(<strong[^>]*>)?🔗([^<]*?)(<\/strong>)?$/gm, "bg-blue-500/10 border-blue-500/30"],
  ];
  for (const [regex, cls] of callouts) {
    html = html.replace(regex, `<div class="callout-card ${cls} rounded-lg border-l-2 px-3 py-2 my-2 text-sm text-white/85">$1$2$3</div>`);
  }

  // Navigation breadcrumbs (3+ segments with arrows)
  html = html.replace(
    /((?:[\w\s&/]+\s*→\s*){2,}[\w\s&/]+)/g,
    (match) => {
      const segs = match.split("→").map(s => s.trim());
      if (segs.length < 3) return match;
      return '<span class="nav-crumbs">' +
        segs.map((s, i) => `<span class="nav-pill">${s}</span>` + (i < segs.length - 1 ? '<span class="nav-arrow">→</span>' : '')).join('') +
        '</span>';
    }
  );

  html = html
    .replace(/^(\d+)\.\s(.+)$/gm, '<li class="ml-4 mb-0.5 list-decimal text-white/85 text-sm">$2</li>')
    .replace(/^[-•]\s(.+)$/gm, '<li class="ml-4 mb-0.5 list-disc text-white/85 text-sm">$1</li>')
    .replace(/\n\n/g, "</p><p class='mb-1.5'>")
    .replace(/\n/g, "<br/>");

  html = html.replace(/((?:<li[^>]*>.*?<\/li>\s*(?:<br\/>)?)+)/g, "<ul class='my-1.5 space-y-0.5'>$1</ul>");
  html = html.replace(/<ul[^>]*>(.*?)<\/ul>/gs, (m) => m.replace(/<br\/>/g, ""));
  html = html.replace(/<br\/>---<br\/>/g, '<hr class="border-white/10 my-3" />');

  return "<p class='mb-1.5'>" + html + "</p>";
}

// ═══════════════════════════════════════════════════════════════
//  RESPONSE RENDERER — Splits markdown at step markers and
//  injects inline images under the correct step
// ═══════════════════════════════════════════════════════════════

function ResponseWithInlineImages({
  text,
  images,
  onImageClick,
}: {
  text: string;
  images: DocImage[];
  onImageClick: (allImages: DocImage[], index: number) => void;
}) {
  const htmlContent = renderMarkdown(text);

  // If no images or no step markers, just render the full HTML
  if (!images.length) {
    return (
      <div
        className="text-sm leading-relaxed [&_strong]:text-white"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    );
  }

  // Count how many step markers exist in the content
  const stepMarkerRegex = /<!-- STEP_IMAGE_(\d+) -->/g;
  const markers: { marker: string; stepNum: number }[] = [];
  let match;
  while ((match = stepMarkerRegex.exec(htmlContent)) !== null) {
    markers.push({ marker: match[0], stepNum: parseInt(match[1]) });
  }

  // If no step markers found, distribute images between paragraphs
  if (markers.length === 0) {
    if (!images.length) {
      return (
        <div
          className="text-sm leading-relaxed [&_strong]:text-white"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      );
    }

    // Split HTML at paragraph boundaries and inject images between them
    const paragraphs = htmlContent.split(/<\/p>\s*<p/);
    if (paragraphs.length <= 1) {
      // Single block of text — show images after it
      return (
        <div>
          <div
            className="text-sm leading-relaxed [&_strong]:text-white"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
          {images.map((img, i) => (
            <InlineImageCard key={i} image={img} onClick={() => onImageClick(images, i)} />
          ))}
        </div>
      );
    }

    // Distribute images between paragraphs
    const interval = Math.max(1, Math.floor(paragraphs.length / (images.length + 1)));
    let imgI = 0;
    return (
      <div>
        {paragraphs.map((para, i) => {
          const html = i === 0 ? para + "</p>" : "<p" + para + (i < paragraphs.length - 1 ? "</p>" : "");
          const showImage = imgI < images.length && (i + 1) % interval === 0;
          const currentImg = showImage ? images[imgI] : null;
          if (showImage) imgI++;
          return (
            <div key={i}>
              <div
                className="text-sm leading-relaxed [&_strong]:text-white"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              {currentImg && (
                <InlineImageCard image={currentImg} onClick={() => onImageClick(images, imgI - 1)} />
              )}
            </div>
          );
        })}
        {/* Show any remaining images */}
        {imgI < images.length && images.slice(imgI).map((img, i) => (
          <InlineImageCard key={`r${i}`} image={img} onClick={() => onImageClick(images, imgI + i)} />
        ))}
      </div>
    );
  }

  // Split content at step markers and inject images inline
  const parts: { html: string; imageIndex: number | null }[] = [];
  let remaining = htmlContent;
  let imgIdx = 0;

  for (let m = 0; m < markers.length; m++) {
    const splitPoint = remaining.indexOf(markers[m].marker);
    if (splitPoint === -1) continue;

    const before = remaining.slice(0, splitPoint);
    remaining = remaining.slice(splitPoint + markers[m].marker.length);

    parts.push({ html: before, imageIndex: imgIdx < images.length ? imgIdx : null });
    imgIdx++;
  }
  // Add remaining content after last marker
  if (remaining.trim()) {
    parts.push({ html: remaining, imageIndex: null });
  }

  return (
    <div>
      {parts.map((part, i) => (
        <div key={i}>
          <div
            className="text-sm leading-relaxed [&_strong]:text-white"
            dangerouslySetInnerHTML={{ __html: part.html }}
          />
          {part.imageIndex !== null && images[part.imageIndex] && (
            <InlineImageCard
              image={images[part.imageIndex]}
              onClick={() => onImageClick(images, part.imageIndex!)}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
//  API KEY MODAL — Popup to enter/update Gemini API key
// ═══════════════════════════════════════════════════════════════

function ApiKeyModal({ onClose }: { onClose: () => void }) {
  const [key, setKey] = useState(getStoredApiKey());
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setApiKey(key);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 1200);
  };

  const handleClear = () => {
    setKey("");
    setApiKey("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-md mx-4 rounded-2xl bg-[#1a1a2e]/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 pt-5 pb-3 border-b border-white/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/30 to-orange-500/30 flex items-center justify-center">
                <Key className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">API Key Settings</h3>
                <p className="text-[11px] text-white/40">Configure your Gemini API key</p>
              </div>
            </div>
            <button onClick={onClose} className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-5 py-4 space-y-4">
          {/* Instructions */}
          <div className="rounded-xl bg-amber-500/8 border border-amber-500/15 px-3.5 py-3">
            <p className="text-xs text-white/70 leading-relaxed mb-2">
              To use this assistant, you need a <strong className="text-white">Gemini API key</strong>. Follow these steps:
            </p>
            <ol className="text-xs text-white/60 space-y-1 ml-3 list-decimal">
              <li>Visit Google AI Studio (link below)</li>
              <li>Sign in with your Google account</li>
              <li>Click <strong className="text-white/80">"Get API Key"</strong> → <strong className="text-white/80">"Create API Key"</strong></li>
              <li>Copy the key and paste it below</li>
            </ol>
            <a
              href="https://aistudio.google.com/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/15 border border-blue-500/25 text-blue-300 hover:text-blue-200 hover:bg-blue-500/25 transition-all text-xs font-medium"
            >
              <ExternalLink className="w-3 h-3" />
              Open Google AI Studio
            </a>
          </div>

          {/* Key input */}
          <div>
            <label className="text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-1.5 block">API Key</label>
            <div className="relative">
              <input
                type="password"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="Paste your Gemini API key here..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/30 border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-amber-500/40 focus:ring-1 focus:ring-amber-500/20 transition-all font-mono"
              />
              {key && (
                <button
                  onClick={handleClear}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-md bg-white/5 hover:bg-red-500/20 flex items-center justify-center text-white/30 hover:text-red-400 transition-all"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              )}
            </div>
            <p className="text-[10px] text-white/30 mt-1.5">Your key is stored locally in your browser and never sent to any server except Google's API.</p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleSave}
              disabled={!key.trim()}
              className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold hover:from-amber-400 hover:to-orange-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg shadow-amber-500/20"
            >
              {saved ? (
                <><Check className="w-4 h-4" /> Saved!</>
              ) : (
                <><Key className="w-3.5 h-3.5" /> Save Key</>
              )}
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/60 text-sm hover:bg-white/10 hover:text-white transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════
//  MAIN APP — Original gradient design preserved
// ═══════════════════════════════════════════════════════════════

export default function GradientChatApp() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lightbox, setLightbox] = useState<{ images: DocImage[]; index: number } | null>(null);
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);
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
        const response: GeminiResponse = await sendToGemini(text.trim());
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "ai",
            text: response.text,
            images: response.images.length > 0 ? response.images : undefined,
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
      {/* Top bar — Settings + Reset */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => setShowApiKeyModal(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:bg-black/30 transition-all text-xs font-medium"
        >
          <Settings className="w-3 h-3" />
          API Key
        </button>
      </div>
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
                  <ResponseWithInlineImages
                    text={msg.text}
                    images={msg.images || []}
                    onImageClick={(imgs, idx) => setLightbox({ images: imgs, index: idx })}
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
                  <div className="flex items-center gap-2">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-white/60"
                        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                    <span className="text-[11px] text-white/40 ml-1">Thinking deeply...</span>
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
            placeholder="Ask about features, user stories, or navigation..."
          />
        </div>
      </div>

      {/* Image Detail Panel — opens on image click */}
      <AnimatePresence>
        {lightbox && (
          <ImageDetailPanel
            image={lightbox.images[lightbox.index]}
            onClose={() => setLightbox(null)}
            onPrev={() => setLightbox((prev) => prev ? { ...prev, index: Math.max(0, prev.index - 1) } : null)}
            onNext={() => setLightbox((prev) => prev ? { ...prev, index: Math.min(prev.images.length - 1, prev.index + 1) } : null)}
            hasPrev={lightbox.index > 0}
            hasNext={lightbox.index < lightbox.images.length - 1}
            total={lightbox.images.length}
            currentIndex={lightbox.index}
          />
        )}
      </AnimatePresence>

      {/* API Key Settings Modal */}
      <AnimatePresence>
        {showApiKeyModal && (
          <ApiKeyModal onClose={() => setShowApiKeyModal(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
