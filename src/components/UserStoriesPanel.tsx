import { useState, useMemo, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  Search,
  CheckCircle2,
  XCircle,
  Circle,
  ArrowRight,
  ArrowLeft,
  Filter,
  X,
  Package,
  Settings as SettingsIcon,
  ShoppingCart,
  BarChart3,
  Users,
  Map,
  Wallet,
  Megaphone,
  ClipboardList,
  Target,
  DollarSign,
  Compass,
  Lightbulb,
  ClipboardCheck,
  MessageSquare,
  RotateCcw,
  Zap,
  Image as ImageIcon,
} from "lucide-react";
import userStoriesData from "@/lib/user-stories-data.json";
import { getSubModuleImages, getModuleImages, type StoryImage } from "@/lib/stories-image-map";

// ── Types ──
interface UserStory {
  id: number;
  module: string;
  subModule: string;
  ref: string;
  businessSolution: string;
  navigation: string;
  feature: string;
  outcome: string;
  grouping: string;
  custom: string;
  setupComments: string;
  status: string;
  userComments: string;
  trainingLink: string;
}

type VerifyStatus = "pending" | "verified" | "working" | "not-working";

// ── Module icons ──
const MODULE_ICONS: Record<string, typeof Package> = {
  "Product Management": Package,
  "Business Settings": SettingsIcon,
  "Order Management": ShoppingCart,
  "Reports & Analytics": BarChart3,
  "Employee Management": Users,
  "Zone & Module Setup": Map,
  "Financial Operations": DollarSign,
  "Wallet Management": Wallet,
  "Advertisement Management": Megaphone,
  "Item / Inventory Mgmt": ClipboardList,
  "Marketing & Promotions": Target,
};

const MODULE_COLORS: Record<string, string> = {
  "Product Management": "#f59e0b",
  "Business Settings": "#3b82f6",
  "Order Management": "#10b981",
  "Reports & Analytics": "#8b5cf6",
  "Employee Management": "#ec4899",
  "Zone & Module Setup": "#14b8a6",
  "Financial Operations": "#eab308",
  "Wallet Management": "#6366f1",
  "Advertisement Management": "#ef4444",
  "Item / Inventory Mgmt": "#84cc16",
  "Marketing & Promotions": "#d946ef",
};

// ── LocalStorage ──
const STORAGE_KEY = "myjinan-stories-v3";
function loadStatuses(): Record<string, VerifyStatus> {
  try { const raw = localStorage.getItem(STORAGE_KEY); return raw ? JSON.parse(raw) : {}; } catch { return {}; }
}
function saveStatuses(data: Record<string, VerifyStatus>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// ═══════════════════════════════════════════════════════════════
//  STORY CARD — Full card with BIG labeled status buttons
// ═══════════════════════════════════════════════════════════════

function ImageGallery({ images, accentColor }: { images: StoryImage[]; accentColor: string }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  if (images.length === 0) return null;

  return (
    <>
      <div className="flex items-center gap-2 mb-2">
        <ImageIcon className="w-3.5 h-3.5" style={{ color: accentColor }} />
        <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: `${accentColor}cc` }}>Screenshots</p>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setLightbox(i)}
            className="shrink-0 cursor-pointer group rounded-lg overflow-hidden border border-white/10 hover:border-white/25 transition-all hover:scale-[1.02]"
          >
            <img
              src={img.url}
              alt={img.caption}
              className="w-[180px] h-[110px] object-cover object-top"
              loading="lazy"
            />
            <p className="text-[9px] text-white/40 px-2 py-1.5 bg-black/60 truncate group-hover:text-white/70 transition-colors">{img.caption}</p>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-8"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[lightbox].url}
                alt={images[lightbox].caption}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl border border-white/10"
              />
              <p className="text-center text-sm text-white/60 mt-3">{images[lightbox].caption}</p>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              {/* Nav arrows */}
              {lightbox > 0 && (
                <button
                  onClick={() => setLightbox(lightbox - 1)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              )}
              {lightbox < images.length - 1 && (
                <button
                  onClick={() => setLightbox(lightbox + 1)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
              <p className="text-center text-[10px] text-white/30 mt-1">{lightbox + 1} / {images.length}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function StoryCard({
  story,
  status,
  onSetStatus,
  accentColor,
}: {
  story: UserStory;
  status: VerifyStatus;
  onSetStatus: (s: VerifyStatus) => void;
  accentColor: string;
}) {
  const [expanded, setExpanded] = useState(false);

  const navSteps = story.navigation
    ? story.navigation.split("→").map((s) => s.trim()).filter(Boolean)
    : [];

  // Card background + border based on status
  const cardStyle =
    status === "verified"
      ? "bg-emerald-600/20 border-emerald-500/40 shadow-emerald-500/10"
      : status === "working"
      ? "bg-blue-600/20 border-blue-500/40 shadow-blue-500/10"
      : status === "not-working"
      ? "bg-red-600/20 border-red-500/40 shadow-red-500/10"
      : "bg-[#0d1117] border-white/8";

  return (
    <motion.div
      layout
      className={`rounded-xl border ${cardStyle} shadow-lg overflow-hidden transition-colors duration-300`}
    >
      {/* Main row */}
      <div className="p-4">
        {/* Top: Ref + Feature */}
        <div className="flex items-start gap-3 mb-3 cursor-pointer" onClick={() => setExpanded(!expanded)}>
          <span
            className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg shrink-0 mt-0.5"
            style={{ backgroundColor: `${accentColor}20`, color: accentColor, border: `1px solid ${accentColor}30` }}
          >
            {story.ref}
          </span>
          <p className={`flex-1 text-sm leading-relaxed ${
            status === "verified" ? "text-white/50 line-through decoration-white/20" : "text-white/90"
          }`}>
            {story.feature}
          </p>
          <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.15 }} className="shrink-0 mt-1">
            <ChevronDown className="w-4 h-4 text-white/30" />
          </motion.div>
        </div>

        {/* STATUS BUTTONS — BIG and clearly labeled */}
        <div className="flex items-center gap-2">
          {/* VERIFIED */}
          <button
            onClick={() => onSetStatus(status === "verified" ? "pending" : "verified")}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
              status === "verified"
                ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/40 scale-[1.02]"
                : "bg-white/5 border border-white/10 text-emerald-400 hover:bg-emerald-500/15 hover:border-emerald-500/30 hover:scale-[1.01]"
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            Verified
          </button>

          {/* WORKING */}
          <button
            onClick={() => onSetStatus(status === "working" ? "pending" : "working")}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
              status === "working"
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/40 scale-[1.02]"
                : "bg-white/5 border border-white/10 text-blue-400 hover:bg-blue-500/15 hover:border-blue-500/30 hover:scale-[1.01]"
            }`}
          >
            <Zap className="w-4 h-4" />
            Working
          </button>

          {/* NOT WORKING */}
          <button
            onClick={() => onSetStatus(status === "not-working" ? "pending" : "not-working")}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
              status === "not-working"
                ? "bg-red-500 text-white shadow-lg shadow-red-500/40 scale-[1.02]"
                : "bg-white/5 border border-white/10 text-red-400 hover:bg-red-500/15 hover:border-red-500/30 hover:scale-[1.01]"
            }`}
          >
            <XCircle className="w-4 h-4" />
            Not Working
          </button>
        </div>
      </div>

      {/* Expanded details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-1 border-t border-white/5 space-y-3 mt-1">
              {story.outcome && (
                <div className="flex items-start gap-2.5">
                  <ClipboardCheck className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-0.5">Expected Outcome</p>
                    <p className="text-xs text-white/50 leading-relaxed">{story.outcome}</p>
                  </div>
                </div>
              )}
              {navSteps.length > 0 && (
                <div className="flex items-start gap-2.5">
                  <Compass className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider mb-1.5">Navigation Path</p>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {navSteps.map((step, i) => (
                        <span key={i} className="flex items-center gap-1.5">
                          <span className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-white/60">{step}</span>
                          {i < navSteps.length - 1 && <ArrowRight className="w-3 h-3 text-white/15" />}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {story.businessSolution && story.businessSolution !== "None" && (
                <div className="flex items-start gap-2.5">
                  <Lightbulb className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-amber-400 uppercase tracking-wider mb-0.5">Why This Matters</p>
                    <p className="text-xs text-white/40 leading-relaxed">{story.businessSolution}</p>
                  </div>
                </div>
              )}
              {story.setupComments && story.setupComments !== "None" && story.setupComments.trim() !== "" && (
                <div className="flex items-start gap-2.5">
                  <MessageSquare className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-purple-400 uppercase tracking-wider mb-0.5">Setup Notes</p>
                    <p className="text-xs text-white/40 leading-relaxed">{story.setupComments}</p>
                  </div>
                </div>
              )}
              {/* SubModule Images */}
              {(() => {
                const imgs = getSubModuleImages(story.module, story.subModule);
                return imgs.length > 0 ? (
                  <div className="mt-2 pt-2 border-t border-white/5">
                    <ImageGallery images={imgs} accentColor={accentColor} />
                  </div>
                ) : null;
              })()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════
//  MODULE ACCORDION
// ═══════════════════════════════════════════════════════════════

function ModuleAccordion({
  moduleName,
  stories,
  statuses,
  onSetStatus,
  defaultOpen,
}: {
  moduleName: string;
  stories: UserStory[];
  statuses: Record<string, VerifyStatus>;
  onSetStatus: (ref: string, s: VerifyStatus) => void;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const IconComp = MODULE_ICONS[moduleName] || Package;
  const color = MODULE_COLORS[moduleName] || "#f59e0b";

  const counts = useMemo(() => {
    const c = { total: stories.length, verified: 0, working: 0, "not-working": 0, pending: 0 };
    stories.forEach((s) => {
      const st = statuses[s.ref] || "pending";
      c[st]++;
    });
    return c;
  }, [stories, statuses]);

  const done = counts.verified + counts.working;
  const pct = counts.total > 0 ? Math.round((done / counts.total) * 100) : 0;

  return (
    <div className="rounded-2xl bg-[#0a0e1a] border border-white/8 overflow-hidden shadow-xl">
      {/* Module header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 px-5 py-4 hover:bg-white/[0.02] transition-colors group"
      >
        {/* Module icon */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg"
          style={{ background: `linear-gradient(135deg, ${color}30, ${color}10)`, border: `1.5px solid ${color}40` }}
        >
          <IconComp className="w-5 h-5" style={{ color }} />
        </div>

        {/* Module info */}
        <div className="flex-1 text-left min-w-0">
          <div className="flex items-center gap-2.5 mb-1.5">
            <h3 className="text-[15px] font-bold text-white truncate">{moduleName}</h3>
            <span className="text-[11px] text-white/25 font-medium">{counts.total} stories</span>
          </div>
          {/* Progress bar */}
          <div className="flex items-center gap-3">
            <div className="h-1.5 flex-1 max-w-[250px] rounded-full bg-white/5 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${color}, ${color}cc)` }}
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.6 }}
              />
            </div>
            <span className="text-[11px] text-white/35 font-bold tabular-nums">{pct}%</span>
            {/* Mini counts */}
            <div className="flex items-center gap-2 ml-auto">
              {counts.verified > 0 && (
                <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />{counts.verified}
                </span>
              )}
              {counts.working > 0 && (
                <span className="flex items-center gap-1 text-[10px] font-bold text-blue-400">
                  <Zap className="w-3 h-3" />{counts.working}
                </span>
              )}
              {counts["not-working"] > 0 && (
                <span className="flex items-center gap-1 text-[10px] font-bold text-red-400">
                  <XCircle className="w-3 h-3" />{counts["not-working"]}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Chevron */}
        <motion.div animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.15 }} className="shrink-0">
          <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-white/40 transition-colors" />
        </motion.div>
      </button>

      {/* Stories */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/5 p-4 space-y-3">
              {/* Module-level image gallery */}
              {(() => {
                const moduleImgs = getModuleImages(moduleName);
                return moduleImgs.length > 0 ? (
                  <div className="rounded-xl bg-white/[0.02] border border-white/5 p-3 mb-2">
                    <ImageGallery images={moduleImgs} accentColor={color} />
                  </div>
                ) : null;
              })()}
              {stories.map((story, i) => (
                <motion.div
                  key={story.ref}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.02, duration: 0.2 }}
                >
                  <StoryCard
                    story={story}
                    status={statuses[story.ref] || "pending"}
                    onSetStatus={(s) => onSetStatus(story.ref, s)}
                    accentColor={color}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
//  CIRCULAR PROGRESS
// ═══════════════════════════════════════════════════════════════

function CircularProgress({ value, size = 100, stroke = 8 }: { value: number; size?: number; stroke?: number }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={stroke} />
        <motion.circle
          cx={size / 2} cy={size / 2} r={radius} fill="none"
          stroke={value >= 100 ? "#10b981" : value > 50 ? "#f59e0b" : "#ef4444"}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-black text-white tabular-nums">{value}%</span>
        <span className="text-[8px] text-white/30 font-semibold uppercase tracking-widest">Complete</span>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
//  MAIN PAGE
// ═══════════════════════════════════════════════════════════════

export default function UserStoriesPage() {
  const navigate = useNavigate();
  const stories: UserStory[] = userStoriesData as UserStory[];
  const [statuses, setStatuses] = useState<Record<string, VerifyStatus>>(loadStatuses);
  const [search, setSearch] = useState("");
  const [filterModule, setFilterModule] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<VerifyStatus | "all">("all");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => { saveStatuses(statuses); }, [statuses]);

  const updateStatus = useCallback((ref: string, s: VerifyStatus) => {
    setStatuses((prev) => {
      const next = { ...prev };
      if (s === "pending") delete next[ref]; else next[ref] = s;
      return next;
    });
  }, []);

  const resetAll = useCallback(() => { setStatuses({}); }, []);

  const modules = useMemo(() => {
    const m: string[] = [];
    stories.forEach((s) => { if (!m.includes(s.module)) m.push(s.module); });
    return m;
  }, [stories]);

  const filtered = useMemo(() => {
    let r = stories;
    if (search.trim()) {
      const q = search.toLowerCase();
      r = r.filter((s) =>
        s.feature.toLowerCase().includes(q) || s.ref.toLowerCase().includes(q) ||
        s.outcome.toLowerCase().includes(q) || s.subModule.toLowerCase().includes(q) ||
        s.module.toLowerCase().includes(q) || s.navigation.toLowerCase().includes(q)
      );
    }
    if (filterModule) r = r.filter((s) => s.module === filterModule);
    if (filterStatus !== "all") r = r.filter((s) => (statuses[s.ref] || "pending") === filterStatus);
    return r;
  }, [stories, search, filterModule, filterStatus, statuses]);

  const grouped = useMemo(() => {
    const map: Record<string, UserStory[]> = {};
    filtered.forEach((s) => { if (!map[s.module]) map[s.module] = []; map[s.module].push(s); });
    return Object.entries(map);
  }, [filtered]);

  const total = stories.length;
  const counts = useMemo(() => {
    const c = { verified: 0, working: 0, "not-working": 0, pending: 0 };
    stories.forEach((s) => { c[statuses[s.ref] || "pending"]++; });
    return c;
  }, [stories, statuses]);

  const pct = total > 0 ? Math.round(((counts.verified + counts.working) / total) * 100) : 0;

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(125%_125%_at_50%_101%,rgba(245,87,2,1)_10.5%,rgba(245,120,2,1)_16%,rgba(245,140,2,1)_17.5%,rgba(245,170,100,1)_25%,rgba(238,174,202,1)_40%,rgba(202,179,214,1)_65%,rgba(148,201,233,1)_100%)]">

      {/* ── Sticky Nav ── */}
      <header className="sticky top-0 z-50 bg-[#070b14]/95 backdrop-blur-md border-b border-white/10 shadow-2xl">
        <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Left: Logo big */}
          <div className="flex items-center gap-3">
            <img src="/myjinan-logo.png" alt="MyJinan" className="w-10 h-10 rounded-xl bg-white object-contain p-0.5 shadow-lg" />
            <div>
              <p className="text-base font-black text-white leading-tight">MyJinan</p>
              <p className="text-[10px] text-white/30 font-semibold">User Stories</p>
            </div>
          </div>
          {/* Right: Back */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white/80 hover:text-white hover:bg-white/20 transition-all text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Chat
          </button>
        </div>
      </header>

      <main className="max-w-[1100px] mx-auto px-6 py-8 space-y-6">

        {/* ── Dashboard Hero ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-[#070b14] border border-white/8 p-6 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Circular Progress */}
            <CircularProgress value={pct} size={120} stroke={10} />

            {/* Title + description */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-black text-white mb-2">Verification Dashboard</h1>
              <p className="text-sm text-white/40 leading-relaxed mb-4">
                Track and verify <span className="text-white/70 font-bold">{total}</span> user stories across <span className="text-white/70 font-bold">{modules.length}</span> modules.
                Use the buttons on each story to set its status.
              </p>
              {/* Reset */}
              <button
                onClick={resetAll}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white/40 bg-white/5 border border-white/8 hover:bg-white/10 hover:text-white/70 transition-colors mx-auto md:mx-0"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset All Status
              </button>
            </div>

            {/* Stat boxes */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 min-w-[110px] text-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto mb-1.5" />
                <p className="text-3xl font-black text-emerald-400 tabular-nums">{counts.verified}</p>
                <p className="text-[10px] text-emerald-400/60 font-bold mt-0.5">VERIFIED</p>
              </div>
              <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-4 min-w-[110px] text-center">
                <Zap className="w-6 h-6 text-blue-400 mx-auto mb-1.5" />
                <p className="text-3xl font-black text-blue-400 tabular-nums">{counts.working}</p>
                <p className="text-[10px] text-blue-400/60 font-bold mt-0.5">WORKING</p>
              </div>
              <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-4 min-w-[110px] text-center">
                <XCircle className="w-6 h-6 text-red-400 mx-auto mb-1.5" />
                <p className="text-3xl font-black text-red-400 tabular-nums">{counts["not-working"]}</p>
                <p className="text-[10px] text-red-400/60 font-bold mt-0.5">ISSUES</p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/8 p-4 min-w-[110px] text-center">
                <Circle className="w-6 h-6 text-white/30 mx-auto mb-1.5" />
                <p className="text-3xl font-black text-white/50 tabular-nums">{counts.pending}</p>
                <p className="text-[10px] text-white/20 font-bold mt-0.5">PENDING</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Search & Filters ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.3 }}
          className="rounded-2xl bg-[#070b14] border border-white/8 p-4 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by feature, ref, module, navigation..."
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/5 border border-white/8 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/20 focus:ring-2 focus:ring-white/5 transition-all"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`h-[46px] px-5 rounded-xl flex items-center gap-2 text-sm font-bold transition-all ${
                showFilters || filterModule || filterStatus !== "all"
                  ? "bg-amber-500/15 border border-amber-500/30 text-amber-400 shadow-lg shadow-amber-500/10"
                  : "bg-white/5 border border-white/8 text-white/40 hover:text-white/70 hover:bg-white/10"
              }`}
            >
              <Filter className="w-4 h-4" />
              Filters
              {(filterModule || filterStatus !== "all") && <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />}
            </button>
          </div>

          {/* Filter chips */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="mt-4 pt-4 border-t border-white/5 space-y-4">
                  {/* Module filter */}
                  <div>
                    <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2">Module</p>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setFilterModule(null)}
                        className={`text-xs px-3 py-1.5 rounded-lg border font-bold transition-all ${
                          !filterModule ? "bg-white/15 border-white/20 text-white" : "border-white/8 text-white/30 hover:text-white/60"
                        }`}
                      >All Modules</button>
                      {modules.map((m) => {
                        const Icon = MODULE_ICONS[m] || Package;
                        const c = MODULE_COLORS[m] || "#f59e0b";
                        return (
                          <button
                            key={m}
                            onClick={() => setFilterModule(filterModule === m ? null : m)}
                            className={`text-xs px-3 py-1.5 rounded-lg border font-bold transition-all flex items-center gap-1.5 ${
                              filterModule === m
                                ? "border-white/20 text-white"
                                : "border-white/8 text-white/30 hover:text-white/60"
                            }`}
                            style={filterModule === m ? { backgroundColor: `${c}20`, borderColor: `${c}40` } : {}}
                          >
                            <Icon className="w-3.5 h-3.5" style={filterModule === m ? { color: c } : {}} />
                            {m}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  {/* Status filter */}
                  <div>
                    <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2">Status</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { key: "all" as const, label: "All", count: total, color: "text-white", bg: "bg-white/15", border: "border-white/20" },
                        { key: "verified" as const, label: "Verified", count: counts.verified, color: "text-emerald-400", bg: "bg-emerald-500/15", border: "border-emerald-500/30", Icon: CheckCircle2 },
                        { key: "working" as const, label: "Working", count: counts.working, color: "text-blue-400", bg: "bg-blue-500/15", border: "border-blue-500/30", Icon: Zap },
                        { key: "not-working" as const, label: "Not Working", count: counts["not-working"], color: "text-red-400", bg: "bg-red-500/15", border: "border-red-500/30", Icon: XCircle },
                        { key: "pending" as const, label: "Pending", count: counts.pending, color: "text-white/50", bg: "bg-white/10", border: "border-white/15", Icon: Circle },
                      ].map(({ key, label, count, color, bg, border, Icon }) => (
                        <button
                          key={key}
                          onClick={() => setFilterStatus(filterStatus === key ? "all" : key)}
                          className={`text-xs px-3 py-1.5 rounded-lg border font-bold transition-all flex items-center gap-1.5 ${
                            filterStatus === key ? `${bg} ${border} ${color}` : "border-white/8 text-white/30 hover:text-white/60"
                          }`}
                        >
                          {Icon && <Icon className="w-3.5 h-3.5" />}
                          {label} ({count})
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {(search || filterModule || filterStatus !== "all") && (
            <p className="mt-3 text-xs text-white/25">
              Showing <span className="font-bold text-white/50">{filtered.length}</span> of {total} stories
              {filterModule && <span className="text-amber-400 font-bold"> · {filterModule}</span>}
            </p>
          )}
        </motion.div>

        {/* ── Module List ── */}
        <section className="space-y-4 pb-16">
          {grouped.length === 0 ? (
            <div className="rounded-2xl bg-[#070b14] border border-white/8 flex flex-col items-center py-20">
              <Search className="w-12 h-12 text-white/10 mb-4" />
              <p className="text-base text-white/30 font-semibold">No stories found</p>
              <p className="text-xs text-white/15 mt-1">Try a different search or clear your filters</p>
            </div>
          ) : (
            grouped.map(([name, moduleStories], i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.3 }}
              >
                <ModuleAccordion
                  moduleName={name}
                  stories={moduleStories}
                  statuses={statuses}
                  onSetStatus={updateStatus}
                  defaultOpen={!!filterModule || grouped.length === 1}
                />
              </motion.div>
            ))
          )}
        </section>
      </main>
    </div>
  );
}
