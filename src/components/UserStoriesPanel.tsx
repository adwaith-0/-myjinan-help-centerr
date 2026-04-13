import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ref as dbRef, onValue, update, remove, off } from "firebase/database";
import { db } from "@/lib/firebase";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown, ChevronRight, Search, XCircle, Circle,
  ArrowRight, ArrowLeft, X, Package, Settings as SettingsIcon, ShoppingCart,
  BarChart3, Users, Map, Wallet, Megaphone, ClipboardList, Target, DollarSign,
  Compass, Lightbulb, ClipboardCheck, MessageSquare, RotateCcw, CheckCircle2, ImageIcon,
  Shield, LayoutGrid, User, ZoomIn, ZoomOut, SlidersHorizontal, Star, TrendingUp,
} from "lucide-react";
import userStoriesData from "@/lib/user-stories-data.json";
import { getStoryImages, getModuleImages, type StoryImage } from "@/lib/stories-image-map";
import { ROLES, type RoleDef } from "@/lib/role-config";

// ─── Types ─────────────────────────────────────────────────────
interface UserStory {
  id: number; module: string; subModule: string; ref: string;
  businessSolution: string; navigation: string; feature: string;
  outcome: string; grouping: string; custom: string; setupComments: string;
  status: string; userComments: string; trainingLink: string;
}
type Status = "pending" | "working" | "not-working";

// ─── Constants ─────────────────────────────────────────────────
// Firebase RTDB path where all statuses are stored
const STATUSES_PATH = "statuses";

// ─── Live-Sync Indicator ────────────────────────────────────────
type SyncState = "connecting" | "live" | "error";
function SyncDot({ state }: { state: SyncState }) {
  const colors: Record<SyncState, string> = {
    connecting: "#ffd200",
    live: "#00f5a0",
    error: "#ef4444",
  };
  const labels: Record<SyncState, string> = {
    connecting: "Syncing…",
    live: "Live",
    error: "Offline",
  };
  const c = colors[state];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "4px 10px",
      borderRadius: 8, background: `${c}14`, border: `1px solid ${c}35`, flexShrink: 0 }}>
      <motion.div
        style={{ width: 7, height: 7, borderRadius: "50%", background: c,
          boxShadow: `0 0 8px ${c}` }}
        animate={state === "live" ? { scale: [1, 1.35, 1], opacity: [1, 0.7, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <span style={{ fontSize: 10.5, fontWeight: 700, color: c, letterSpacing: "0.04em" }}>
        {labels[state]}
      </span>
    </div>
  );
}

const MOD_GRAD: Record<string, [string, string]> = {
  "Product Management":       ["#f59e0b","#f97316"],
  "Business Settings":        ["#3b82f6","#6366f1"],
  "Order Management":         ["#10b981","#06b6d4"],
  "Reports & Analytics":      ["#8b5cf6","#ec4899"],
  "Employee Management":      ["#ec4899","#f43f5e"],
  "Zone & Module Setup":      ["#14b8a6","#3b82f6"],
  "Financial Operations":     ["#eab308","#f59e0b"],
  "Wallet Management":        ["#6366f1","#8b5cf6"],
  "Advertisement Management": ["#ef4444","#f97316"],
  "Item / Inventory Mgmt":    ["#84cc16","#10b981"],
  "Marketing & Promotions":   ["#d946ef","#6366f1"],
};
const MOD_ICON: Record<string, typeof Package> = {
  "Product Management": Package, "Business Settings": SettingsIcon,
  "Order Management": ShoppingCart, "Reports & Analytics": BarChart3,
  "Employee Management": Users, "Zone & Module Setup": Map,
  "Financial Operations": DollarSign, "Wallet Management": Wallet,
  "Advertisement Management": Megaphone, "Item / Inventory Mgmt": ClipboardList,
  "Marketing & Promotions": Target,
};
const ROLE_GRAD: Record<string, [string, string]> = {
  "super-admin":        ["#ef4444","#f97316"],
  "product-manager":    ["#f59e0b","#ffd200"],
  "operations-manager": ["#10b981","#00d9f5"],
  "finance-manager":    ["#eab308","#f59e0b"],
  "marketing-manager":  ["#d946ef","#f953c6"],
  "hr-admin":           ["#ec4899","#b91d73"],
  "platform-admin":     ["#3b82f6","#6366f1"],
};
const ROLE_ICON: Record<string, typeof Package> = {
  Shield, Package, ShoppingCart, DollarSign, Megaphone, Users,
  Settings: SettingsIcon,
};

const grad = (colors: [string, string]) => `linear-gradient(135deg,${colors[0]},${colors[1]})`;


// ─── CSS Injection ──────────────────────────────────────────────
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

*, *::before, *::after { box-sizing: border-box; }

.us-root {
  font-family: 'Inter', -apple-system, sans-serif;
  min-height: 100vh;
  background: #07091280;
  position: relative;
  color: #fff;
  overflow-x: hidden;
}

.us-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  background: radial-gradient(ellipse 80% 60% at 10% 0%,  #1a0533 0%, transparent 60%),
              radial-gradient(ellipse 60% 50% at 90% 10%,  #0c1a3a 0%, transparent 55%),
              radial-gradient(ellipse 70% 80% at 50% 100%, #0d0514 0%, transparent 70%),
              #070912;
  background-attachment: fixed;
}

.us-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle 400px at 15% 50%, rgba(99,102,241,0.08) 0%, transparent 70%),
    radial-gradient(circle 300px at 80% 20%, rgba(236,72,153,0.06) 0%, transparent 70%),
    radial-gradient(circle 500px at 60% 70%, rgba(16,185,129,0.04) 0%, transparent 70%);
  animation: bgPulse 12s ease-in-out infinite alternate;
}

@keyframes bgPulse {
  0%   { opacity: 0.6; }
  100% { opacity: 1; }
}

.us-wrap { position: relative; z-index: 1; }

/* ── Nav ── */
.us-nav {
  position: sticky; top: 0; z-index: 100;
  background: rgba(7,9,18,0.82);
  backdrop-filter: blur(28px) saturate(180%);
  -webkit-backdrop-filter: blur(28px) saturate(180%);
  border-bottom: 1px solid rgba(255,255,255,0.07);
  box-shadow: 0 1px 0 rgba(255,255,255,0.03), 0 4px 24px rgba(0,0,0,0.4);
}

/* ── Glass Card ── */
.us-glass {
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: 20px;
  box-shadow: 0 2px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06);
}

.us-glass-sm {
  background: rgba(255,255,255,0.035);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.25);
}

/* ── Module card ── */
.us-module {
  background: rgba(255,255,255,0.035);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;
  overflow: hidden;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease;
}
.us-module:hover { border-color: rgba(255,255,255,0.14); transform: translateY(-1px); box-shadow: 0 8px 32px rgba(0,0,0,0.35); }

/* ── Story card ── */
.us-story { background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07); border-radius: 14px; overflow: hidden; transition: border-color 0.2s, background 0.2s; }
.us-story.working    { background: rgba(0,245,160,0.05); border-color: rgba(0,245,160,0.2); }
.us-story.not-working{ background: rgba(239,68,68,0.05);  border-color: rgba(239,68,68,0.22); border-left: 3px solid #ef4444; }

/* ── Status buttons ── */
.us-sbtn {
  flex: 1; display: flex; align-items: center; justify-content: center; gap: 6px;
  padding: 9px 14px; border-radius: 11px; font-size: 12.5px; font-weight: 700;
  cursor: pointer; font-family: inherit; transition: all 0.2s ease;
  border: 1px solid rgba(255,255,255,0.09); background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.45);
}
.us-sbtn:hover { background: rgba(255,255,255,0.09); color: rgba(255,255,255,0.85); transform: scale(1.02); }
.us-sbtn.working    { background: linear-gradient(135deg,#00f5a0,#10b981); border-color: transparent; color: #082820; box-shadow: 0 0 24px rgba(0,245,160,0.45); }
.us-sbtn.not-working{ background: linear-gradient(135deg,#ef4444,#b91d2a); border-color: transparent; color: #fff;    box-shadow: 0 0 24px rgba(239,68,68,0.45); }

/* ── Progress bar ── */
.us-bar { height: 3px; border-radius: 99px; background: rgba(255,255,255,0.07); overflow: hidden; }
.us-fill { height: 100%; border-radius: 99px; transition: width 0.9s cubic-bezier(.4,0,.2,1); }

/* ── Input ── */
.us-input {
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09);
  border-radius: 12px; color: #fff; font-family: inherit; font-size: 13.5px; width: 100%;
  transition: all 0.2s ease;
}
.us-input::placeholder { color: rgba(255,255,255,0.28); }
.us-input:focus { outline: none; border-color: rgba(99,102,241,0.5); background: rgba(255,255,255,0.07); box-shadow: 0 0 0 3px rgba(99,102,241,0.12); }

/* ── Ghost btn ── */
.us-btn {
  display: inline-flex; align-items: center; gap: 6px; padding: 9px 15px;
  border-radius: 11px; font-size: 12.5px; font-weight: 600; cursor: pointer;
  font-family: inherit; border: 1px solid rgba(255,255,255,0.11);
  background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.6);
  transition: all 0.2s ease; white-space: nowrap;
}
.us-btn:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); color: #fff; transform: translateY(-1px); }

/* ── Nav role pill ── */
.us-pill {
  display: inline-flex; align-items: center; gap: 5px; padding: 5px 11px;
  border-radius: 8px; font-size: 11.5px; font-weight: 700; cursor: pointer;
  font-family: inherit; border: 1px solid transparent;
  background: transparent; color: rgba(255,255,255,0.38); transition: all 0.18s ease;
  white-space: nowrap;
}
.us-pill:hover { color: rgba(255,255,255,0.75); background: rgba(255,255,255,0.07); }
.us-pill.on { color: #fff; background: rgba(255,255,255,0.09); border-color: rgba(255,255,255,0.16); }

/* ── Role card ── */
.us-role {
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09);
  border-radius: 18px; cursor: pointer; text-align: left; width: 100%;
  font-family: inherit; transition: all 0.25s ease; overflow: hidden; position: relative;
  padding: 20px;
}
.us-role:hover { border-color: rgba(255,255,255,0.18); transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,0.45); }

/* ── Stat card ── */
.us-stat { border-radius: 14px; padding: 18px; text-align: center; transition: transform 0.2s ease; }
.us-stat:hover { transform: translateY(-3px) scale(1.03); }

/* ── Navigation path ── */
.us-nav-step { font-size: 11px; padding: 4px 10px; border-radius: 7px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.6); }

/* ── Image thumbnail ── */
.us-thumb { flex-shrink: 0; cursor: pointer; border-radius: 10px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); transition: all 0.2s; }
.us-thumb:hover { border-color: rgba(255,255,255,0.25); transform: scale(1.03); }
.us-thumb img { display: block; width: 180px; height: 110px; object-fit: cover; object-position: top; }
.us-thumb-cap { font-size: 9px; color: rgba(255,255,255,0.4); padding: 5px 7px; background: rgba(0,0,0,0.65); margin: 0; }

/* ── Scrollbar ── */
::-webkit-scrollbar { width: 5px; height: 5px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.5); border-radius: 99px; }

/* ── Label above section ── */
.us-label { font-size: 10.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.3); }

@keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
.us-fadein { animation: fadeUp 0.4s cubic-bezier(.4,0,.2,1) both; }
`;

// ═══════════════════════════════════════════════════════════════
//  SVG Ring Progress
// ═══════════════════════════════════════════════════════════════
function Ring({ value, size = 128, stroke = 9 }: { value: number; size?: number; stroke?: number }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <defs>
          <linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f5a0" /><stop offset="100%" stopColor="#00d9f5" />
          </linearGradient>
        </defs>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={stroke} />
        <motion.circle
          cx={size/2} cy={size/2} r={r} fill="none" stroke="url(#rg)"
          strokeWidth={stroke} strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      <div style={{ position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
        <motion.p key={value} initial={{opacity:0,y:6}} animate={{opacity:1,y:0}}
          style={{ fontSize:22,fontWeight:900,color:"#fff",margin:0,letterSpacing:"-0.03em",lineHeight:1 }}>
          {value}%
        </motion.p>
        <p style={{ fontSize:8.5,color:"rgba(255,255,255,0.35)",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",margin:0 }}>Done</p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
//  Lightbox image gallery
// ═══════════════════════════════════════════════════════════════
function Gallery({ images, accent }: { images: StoryImage[]; accent: string }) {
  const [lb, setLb] = useState<number | null>(null);
  if (!images.length) return null;
  return (
    <>
      <div style={{ display:"flex",alignItems:"center",gap:6,marginBottom:8 }}>
        <ImageIcon style={{ width:12,height:12,color:accent }} />
        <span className="us-label" style={{ color:`${accent}cc` }}>Screenshots</span>
      </div>
      <div style={{ display:"flex",gap:8,overflowX:"auto",paddingBottom:4 }}>
        {images.map((img, i) => (
          <div key={i} className="us-thumb" onClick={() => setLb(i)}>
            <img src={img.url} alt={img.caption} loading="lazy" />
            <p className="us-thumb-cap">{img.caption}</p>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {lb !== null && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            style={{ position:"fixed",inset:0,zIndex:999,background:"rgba(0,0,0,0.93)",display:"flex",alignItems:"center",justifyContent:"center",padding:32 }}
            onClick={() => setLb(null)}>
            <motion.div initial={{scale:0.85,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:0.85,opacity:0}}
              style={{ position:"relative",maxWidth:920,width:"100%" }} onClick={e=>e.stopPropagation()}>
              <img src={images[lb].url} alt={images[lb].caption}
                style={{ width:"100%",maxHeight:"80vh",objectFit:"contain",borderRadius:14,border:"1px solid rgba(255,255,255,0.1)" }} />
              <p style={{ textAlign:"center",fontSize:12,color:"rgba(255,255,255,0.45)",marginTop:10 }}>{images[lb].caption} · {lb+1}/{images.length}</p>
              <button onClick={()=>setLb(null)} style={{ position:"absolute",top:-10,right:-10,width:30,height:30,borderRadius:"50%",background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.18)",color:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center" }}>
                <X style={{ width:14,height:14 }} />
              </button>
              {lb > 0 && (
                <button onClick={()=>setLb(lb-1)} style={{ position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",width:38,height:38,borderRadius:"50%",background:"rgba(0,0,0,0.6)",border:"1px solid rgba(255,255,255,0.12)",color:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center" }}>
                  <ArrowLeft style={{ width:18,height:18 }} />
                </button>
              )}
              {lb < images.length-1 && (
                <button onClick={()=>setLb(lb+1)} style={{ position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",width:38,height:38,borderRadius:"50%",background:"rgba(0,0,0,0.6)",border:"1px solid rgba(255,255,255,0.12)",color:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center" }}>
                  <ArrowRight style={{ width:18,height:18 }} />
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════
//  Story Card
// ═══════════════════════════════════════════════════════════════

// Refs that require pre-requisite check warning
const PREREQ_REFS = new Set([
  "PM-PRD-001","PM-PRD-002","PM-PRD-003","PM-PRD-004","PM-PRD-005",
  "PM-PRD-006","PM-PRD-007","PM-PRD-008","PM-PRD-009",
  "PM-PIB-001","PM-PIB-002",
  "PM-BIM-001","PM-BIM-002","PM-BIM-003",
]);

function needsPrereq(story: UserStory): boolean {
  if (PREREQ_REFS.has(story.ref)) return true;
  if (story.module !== "Product Management") return false;
  const sub = (story.subModule || "").toLowerCase();
  return sub.includes("add new") || sub.includes("bulk import") || sub.includes("product setup");
}

function StoryCard({ story, status, onSet, g, c }: {
  story: UserStory; status: Status; onSet: (s: Status) => void;
  g: string; c: string;
}) {
  const [open, setOpen] = useState(false);
  const navSteps = story.navigation ? story.navigation.split("→").map(s=>s.trim()).filter(Boolean) : [];
  const imgs = getStoryImages(story.ref, story.module, story.subModule);
  const isDark = ["#f59e0b","#ffd200","#eab308","#84cc16"].some(x => c.startsWith(x));
  const showPrereq = needsPrereq(story);

  return (
    <div className={`us-story ${status !== "pending" ? status : ""}`}>
      <div style={{ padding:"14px 16px" }}>
        {/* Ref + Feature */}
        <div style={{ display:"flex",alignItems:"flex-start",gap:10,marginBottom:12,cursor:"pointer" }} onClick={()=>setOpen(!open)}>
          <span style={{ background:g,borderRadius:8,padding:"3px 10px",fontSize:10,fontWeight:800,
            color:isDark?"#1a1000":"#fff",letterSpacing:"0.04em",flexShrink:0,marginTop:1 }}>
            {story.ref}
          </span>
          <p style={{ flex:1,fontSize:13.5,color:"rgba(255,255,255,0.87)",
            lineHeight:1.55,margin:0 }}>
            {story.feature}
          </p>
          <motion.div animate={{ rotate:open?180:0 }} transition={{ duration:0.18 }} style={{ flexShrink:0,marginTop:2 }}>
            <ChevronDown style={{ width:15,height:15,color:"rgba(255,255,255,0.28)" }} />
          </motion.div>
        </div>

        {/* Action buttons */}
        <div style={{ display:"flex",gap:8 }}>
          {(["working","not-working"] as Status[]).map(s => (
            <button key={s} onClick={()=>onSet(status===s?"pending":s)} className={`us-sbtn ${status===s?s:""}`}>
              {s==="working"     && <CheckCircle2 style={{ width:13,height:13 }} />}
              {s==="not-working" && <XCircle      style={{ width:13,height:13 }} />}
              {s==="working"?"Working":"Not Working"}
            </button>
          ))}
        </div>
      </div>

      {/* Expanded details */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}}
            transition={{ duration:0.26,ease:[0.4,0,0.2,1] }} style={{ overflow:"hidden" }}>
            <div style={{ padding:"12px 16px 16px",borderTop:"1px solid rgba(255,255,255,0.06)",display:"flex",flexDirection:"column",gap:12 }}>

              {/* ⚠️ Pre-requisite warning */}
              {showPrereq && (
                <div style={{
                  display:"flex",gap:10,padding:"12px 14px",borderRadius:12,
                  background:"rgba(251,191,36,0.07)",border:"1px solid rgba(251,191,36,0.28)",
                  boxShadow:"0 0 18px rgba(251,191,36,0.07)"
                }}>
                  <span style={{ fontSize:16,flexShrink:0,lineHeight:1 }}>⚠️</span>
                  <div>
                    <p style={{ fontSize:11.5,fontWeight:800,color:"#fbbf24",margin:"0 0 6px",textTransform:"uppercase",letterSpacing:"0.07em" }}>
                      Admin Pre-requisite
                    </p>
                    <p style={{ fontSize:12.5,color:"rgba(251,191,36,0.72)",lineHeight:1.65,margin:"0 0 9px" }}>
                      Before adding a new product, the{" "}
                      <strong style={{ color:"#fbbf24" }}>Category</strong>,{" "}
                      <strong style={{ color:"#fbbf24" }}>Sub-Category</strong>, and{" "}
                      <strong style={{ color:"#fbbf24" }}>Brand</strong>{" "}
                      must already exist in the system. If any are new or missing,{" "}
                      <strong style={{ color:"#fbbf24" }}>the admin must manually create each one first</strong>.
                    </p>
                    <div style={{ display:"flex",flexDirection:"column",gap:6 }}>
                      {([
                        { label:"Category",     path:"Product Management → Categories → Category → Add New" },
                        { label:"Sub-Category", path:"Product Management → Categories → Sub Category → Add New" },
                        { label:"Brand",        path:"Product Management → Brands → Add New Brand" },
                      ] as const).map(({ label, path }) => (
                        <div key={label} style={{ display:"flex",alignItems:"flex-start",gap:7 }}>
                          <ArrowRight style={{ width:11,height:11,color:"rgba(251,191,36,0.45)",flexShrink:0,marginTop:2 }} />
                          <span style={{ fontSize:11.5,color:"rgba(251,191,36,0.55)",lineHeight:1.5 }}>
                            <strong style={{ color:"rgba(251,191,36,0.9)" }}>{label}:</strong>{" "}{path}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Expected Outcome */}
              {story.outcome && (
                <div style={{ display:"flex",gap:10 }}>
                  <ClipboardCheck style={{ width:14,height:14,color:"#00f5a0",marginTop:2,flexShrink:0 }} />
                  <div>
                    <p className="us-label" style={{ color:"#00f5a0",marginBottom:4 }}>Expected Outcome</p>
                    <p style={{ fontSize:12.5,color:"rgba(255,255,255,0.48)",lineHeight:1.6,margin:0 }}>{story.outcome}</p>
                  </div>
                </div>
              )}

              {/* Navigation Path */}
              {navSteps.length > 0 && (
                <div style={{ display:"flex",gap:10 }}>
                  <Compass style={{ width:14,height:14,color:"#00d9f5",marginTop:2,flexShrink:0 }} />
                  <div>
                    <p className="us-label" style={{ color:"#00d9f5",marginBottom:8 }}>Navigation Path</p>
                    <div style={{ display:"flex",flexWrap:"wrap",alignItems:"center",gap:6 }}>
                      {navSteps.map((step, i) => (
                        <span key={i} style={{ display:"flex",alignItems:"center",gap:6 }}>
                          <span className="us-nav-step">{step}</span>
                          {i < navSteps.length-1 && <ArrowRight style={{ width:11,height:11,color:"rgba(255,255,255,0.2)" }} />}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Why This Matters */}
              {story.businessSolution && story.businessSolution !== "None" && (
                <div style={{ display:"flex",gap:10 }}>
                  <Lightbulb style={{ width:14,height:14,color:"#ffd200",marginTop:2,flexShrink:0 }} />
                  <div>
                    <p className="us-label" style={{ color:"#ffd200",marginBottom:4 }}>Why This Matters</p>
                    <p style={{ fontSize:12.5,color:"rgba(255,255,255,0.42)",lineHeight:1.6,margin:0 }}>{story.businessSolution}</p>
                  </div>
                </div>
              )}

              {/* Setup Notes */}
              {story.setupComments && story.setupComments !== "None" && story.setupComments.trim() !== "" && (
                <div style={{ display:"flex",gap:10 }}>
                  <MessageSquare style={{ width:14,height:14,color:"#b491ff",marginTop:2,flexShrink:0 }} />
                  <div>
                    <p className="us-label" style={{ color:"#b491ff",marginBottom:4 }}>Setup Notes</p>
                    <p style={{ fontSize:12.5,color:"rgba(255,255,255,0.42)",lineHeight:1.6,margin:0 }}>{story.setupComments}</p>
                  </div>
                </div>
              )}

              {/* Screenshots */}
              {imgs.length > 0 && (
                <div style={{ paddingTop:10,borderTop:"1px solid rgba(255,255,255,0.05)" }}>
                  <Gallery images={imgs} accent={c} />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
//  Module Accordion
// ═══════════════════════════════════════════════════════════════
function ModuleCard({ name, stories, statuses, onSet, defaultOpen, idx }: {
  name: string; stories: UserStory[]; statuses: Record<string,Status>;
  onSet: (ref:string,s:Status)=>void; defaultOpen: boolean; idx: number;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const Icon = MOD_ICON[name] || Package;
  const [c1, c2] = MOD_GRAD[name] || ["#6366f1","#8b5cf6"];
  const g = `linear-gradient(135deg,${c1},${c2})`;

  const counts = useMemo(() => {
    const r = { total:stories.length,working:0,"not-working":0,pending:0 };
    stories.forEach(s => { const st = statuses[s.ref]||"pending"; if(st in r) r[st as keyof typeof r]=(r[st as keyof typeof r] as number)+1; });
    return r;
  },[stories,statuses]);

  const pct = counts.total > 0 ? Math.round((counts.working/counts.total)*100) : 0;
  const modImgs = getModuleImages(name);

  return (
    <motion.div className="us-module"
      initial={{opacity:0,y:18}} animate={{opacity:1,y:0}}
      transition={{ delay:idx*0.055,duration:0.38,ease:[0.4,0,0.2,1] }}>

      {/* Header */}
      <button onClick={()=>setOpen(!open)} style={{ width:"100%",display:"flex",alignItems:"center",gap:14,padding:"17px 20px",background:"none",border:"none",cursor:"pointer",textAlign:"left" }}>
        
        {/* Gradient icon */}
        <div style={{ width:42,height:42,borderRadius:13,background:g,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:`0 4px 16px ${c1}40` }}>
          <Icon style={{ width:19,height:19,color:"#fff" }} />
        </div>

        {/* Name + Meta */}
        <div style={{ flex:1,minWidth:0 }}>
          <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:7 }}>
            <h3 style={{ fontSize:14,fontWeight:700,color:"#fff",margin:0,letterSpacing:"-0.01em" }}>{name}</h3>
            <span style={{ fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.4)",background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.1)",padding:"2px 7px",borderRadius:6 }}>
              {counts.total}
            </span>
          </div>
          {/* Progress + mini stats */}
          <div style={{ display:"flex",alignItems:"center",gap:10 }}>
            <div className="us-bar" style={{ flex:1,maxWidth:200 }}>
              <motion.div className="us-fill" style={{ background:g,width:`${pct}%` }}
                initial={{width:0}} animate={{width:`${pct}%`}} transition={{ duration:0.9,delay:idx*0.05,ease:[0.4,0,0.2,1] }} />
            </div>
            <span style={{ fontSize:11,fontWeight:800,color:c1,minWidth:28 }}>{pct}%</span>
            <div style={{ display:"flex",gap:8,marginLeft:"auto" }}>
              {counts.working>0 && <span style={{ display:"flex",alignItems:"center",gap:3,fontSize:10,fontWeight:700,color:"#00f5a0" }}><CheckCircle2 style={{ width:11,height:11 }}/>{counts.working}</span>}
              {counts["not-working"]>0 && <span style={{ display:"flex",alignItems:"center",gap:3,fontSize:10,fontWeight:700,color:"#ef4444" }}><XCircle style={{ width:11,height:11 }}/>{counts["not-working"]}</span>}
            </div>
          </div>
        </div>

        <motion.div animate={{ rotate:open?90:0 }} transition={{ duration:0.18 }}>
          <ChevronRight style={{ width:17,height:17,color:"rgba(255,255,255,0.22)" }} />
        </motion.div>
      </button>

      {/* Stories */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}}
            transition={{ duration:0.3,ease:[0.4,0,0.2,1] }} style={{ overflow:"hidden" }}>
            <div style={{ borderTop:"1px solid rgba(255,255,255,0.06)",padding:"12px 14px 16px",display:"flex",flexDirection:"column",gap:8 }}>
              {/* Module level images */}
              {modImgs.length > 0 && (
                <div style={{ borderRadius:12,background:"rgba(255,255,255,0.025)",border:"1px solid rgba(255,255,255,0.07)",padding:"10px 12px",marginBottom:4 }}>
                  <Gallery images={modImgs} accent={c1} />
                </div>
              )}
              {stories.map((story, i) => (
                <motion.div key={story.ref} initial={{opacity:0,x:-10}} animate={{opacity:1,x:0}} transition={{ delay:i*0.022,duration:0.2 }}>
                  <StoryCard
                    story={story}
                    status={statuses[story.ref]||"pending"}
                    onSet={s=>onSet(story.ref,s)}
                    g={g} c={c1}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════
//  Stat Card
// ═══════════════════════════════════════════════════════════════
function Stat({ label, value, icon: Icon, c1, c2, glow }: {
  label:string; value:number; icon:typeof CheckCircle2; c1:string; c2:string; glow:string;
}) {
  const dark = ["#f59e0b","#ffd200","#eab308","#00f5a0"].includes(c1);
  return (
    <div className="us-stat" style={{ background:`linear-gradient(135deg,${c1}18,${c2}0a)`,border:`1px solid ${c1}28`,boxShadow:glow }}>
      <div style={{ width:34,height:34,borderRadius:10,background:`linear-gradient(135deg,${c1},${c2})`,
        display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 10px",boxShadow:`0 4px 12px ${c1}40` }}>
        <Icon style={{ width:16,height:16,color:dark?"#0d1200":"#fff" }} />
      </div>
      <motion.p key={value} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}
        style={{ fontSize:28,fontWeight:900,color:c1,margin:"0 0 4px",letterSpacing:"-0.04em",lineHeight:1 }}>
        {value}
      </motion.p>
      <p className="us-label" style={{ color:`${c1}80`,margin:0 }}>{label}</p>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
//  Role Card
// ═══════════════════════════════════════════════════════════════
function RoleCard({ role, stories, statuses, onClick, idx }: {
  role:RoleDef; stories:UserStory[]; statuses:Record<string,Status>; onClick:()=>void; idx:number;
}) {
  const Icon = ROLE_ICON[role.icon] || User;
  const [c1,c2] = ROLE_GRAD[role.id] || ["#6366f1","#8b5cf6"];
  const g = grad([c1,c2]);

  const rs = useMemo(()=>stories.filter(s=>role.modules.includes(s.module)),[stories,role.modules]);
  const counts = useMemo(() => {
    const r = { total:rs.length,working:0,"not-working":0,pending:0 };
    rs.forEach(s=>{ const st=statuses[s.ref]||"pending"; if(st in r) r[st as keyof typeof r]=(r[st as keyof typeof r] as number)+1; });
    return r;
  },[rs,statuses]);
  const pct = counts.total > 0 ? Math.round((counts.working/counts.total)*100) : 0;

  return (
    <motion.button className="us-role" onClick={onClick}
      initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
      transition={{ delay:idx*0.07,duration:0.38,ease:[0.4,0,0.2,1] }}
      whileHover={{ y:-3 }} whileTap={{ scale:0.98 }}>
      {/* Glow orb */}
      <div style={{ position:"absolute",top:-50,right:-50,width:200,height:200,borderRadius:"50%",
        background:`radial-gradient(circle,${c1}18 0%,transparent 65%)`,pointerEvents:"none" }} />

      <div style={{ display:"flex",alignItems:"flex-start",gap:14,position:"relative" }}>
        {/* Icon badge */}
        <div style={{ width:50,height:50,borderRadius:14,background:g,display:"flex",alignItems:"center",
          justifyContent:"center",flexShrink:0,boxShadow:`0 6px 20px ${c1}45` }}>
          <Icon style={{ width:24,height:24,color:"#fff" }} />
        </div>

        {/* Content */}
        <div style={{ flex:1,minWidth:0 }}>
          <p style={{ fontSize:15,fontWeight:700,color:"#fff",margin:"0 0 3px",letterSpacing:"-0.01em" }}>{role.label}</p>
          <p style={{ fontSize:12,color:"rgba(255,255,255,0.38)",lineHeight:1.5,margin:"0 0 12px" }}>{role.description}</p>

          {/* Progress */}
          <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:8 }}>
            <div className="us-bar" style={{ flex:1 }}>
              <motion.div className="us-fill" style={{ background:g }} initial={{width:0}} animate={{width:`${pct}%`}} transition={{ duration:0.9,ease:[0.4,0,0.2,1] }} />
            </div>
            <span style={{ fontSize:11,fontWeight:800,color:c1,minWidth:32 }}>{pct}%</span>
          </div>

          {/* Mini stats */}
          <div style={{ display:"flex",alignItems:"center",gap:10 }}>
            <span style={{ fontSize:10.5,color:"rgba(255,255,255,0.28)" }}>
              {counts.total} stories · {role.modules.length} module{role.modules.length>1?"s":""}
            </span>
            <div style={{ display:"flex",gap:8,marginLeft:"auto" }}>
              {counts.working>0       && <span style={{ display:"flex",alignItems:"center",gap:3,fontSize:10,fontWeight:700,color:"#00f5a0" }}><CheckCircle2 style={{ width:10,height:10 }}/>{counts.working}</span>}
              {counts["not-working"]>0 && <span style={{ display:"flex",alignItems:"center",gap:3,fontSize:10,fontWeight:700,color:"#ef4444" }}><XCircle style={{ width:10,height:10 }}/>{counts["not-working"]}</span>}
              {counts.pending>0        && <span style={{ display:"flex",alignItems:"center",gap:3,fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.3)" }}><Circle style={{ width:10,height:10 }}/>{counts.pending}</span>}
            </div>
          </div>
        </div>

        <ChevronRight style={{ width:15,height:15,color:"rgba(255,255,255,0.22)",marginTop:4,flexShrink:0 }} />
      </div>
    </motion.button>
  );
}

// ═══════════════════════════════════════════════════════════════
//  MAIN PAGE
// ═══════════════════════════════════════════════════════════════
export default function UserStoriesPage() {
  const navigate = useNavigate();
  const stories: UserStory[] = useMemo(() => userStoriesData as UserStory[], []);

  const [statuses, setStatuses] = useState<Record<string,Status>>({});
  const [syncState, setSyncState] = useState<SyncState>("connecting");
  const [search, setSearch]     = useState("");
  const [fStatus, setFStatus]   = useState<Status|"all">("all");
  const [showF, setShowF]       = useState(false);
  const [zoom, setZoom]         = useState(100);
  const [view, setView]         = useState("overview"); // "overview"|"all"|roleId

  // ── Firebase real-time subscription ─────────────────────────
  const statusesRef = useRef(dbRef(db, STATUSES_PATH));

  useEffect(() => {
    const r = statusesRef.current;
    setSyncState("connecting");

    const unsub = onValue(
      r,
      (snapshot) => {
        const data = snapshot.val() as Record<string, Status> | null;
        setStatuses(data ?? {});
        setSyncState("live");
      },
      () => {
        // error callback — Firebase will keep retrying automatically
        setSyncState("error");
      }
    );

    return () => off(r, "value", unsub);
  }, []);

  // ── Push a single status update to Firebase ─────────────────
  const upStatus = useCallback((storyRef: string, s: Status) => {
    const r = dbRef(db, `${STATUSES_PATH}/${storyRef}`);
    if (s === "pending") {
      remove(r);
    } else {
      update(dbRef(db, STATUSES_PATH), { [storyRef]: s });
    }
  }, []);

  // ── Reset All — wipe the entire statuses node ──────────────
  const resetAll = useCallback(() => {
    remove(dbRef(db, STATUSES_PATH));
  }, []);

  const activeRole = useMemo(()=>{
    if(view==="overview"||view==="all") return null;
    return ROLES.find((r: RoleDef) => r.id===view)||null;
  },[view]);

  const roleGrad = (activeRole ? ROLE_GRAD[activeRole.id] || ["#6366f1","#8b5cf6"] : ["#6366f1","#8b5cf6"]) as [string,string];

  const scoped = useMemo(()=>{
    if(view==="overview"||view==="all") return stories;
    const role = ROLES.find((r: RoleDef) => r.id===view);
    return role ? stories.filter(s=>role.modules.includes(s.module)) : stories;
  },[stories,view]);

  const filtered = useMemo(()=>{
    let r=scoped;
    if(search.trim()){ const q=search.toLowerCase(); r=r.filter(s=>s.feature.toLowerCase().includes(q)||s.ref.toLowerCase().includes(q)||s.outcome.toLowerCase().includes(q)||s.module.toLowerCase().includes(q)||s.navigation.toLowerCase().includes(q)||s.subModule.toLowerCase().includes(q)); }
    if(fStatus!=="all") r=r.filter(s=>(statuses[s.ref]||"pending")===fStatus);
    return r;
  },[scoped,search,fStatus,statuses]);

  const grouped = useMemo(()=>{
    const m:Record<string,UserStory[]>={};
    filtered.forEach(s=>{ if(!m[s.module])m[s.module]=[]; m[s.module].push(s); });
    return Object.entries(m);
  },[filtered]);

  // Global counts
  const gCounts = useMemo(()=>{
    const c={working:0,"not-working":0,pending:0};
    stories.forEach(s=>{ const st=statuses[s.ref]||"pending"; if(st in c) c[st as keyof typeof c]=(c[st as keyof typeof c] as number)+1; });
    return c;
  },[stories,statuses]);
  const gTotal=stories.length;
  const gPct=gTotal>0?Math.round((gCounts.working/gTotal)*100):0;

  // Scoped counts
  const sCounts = useMemo(()=>{
    const c={working:0,"not-working":0,pending:0};
    scoped.forEach(s=>{ const st=statuses[s.ref]||"pending"; if(st in c) c[st as keyof typeof c]=(c[st as keyof typeof c] as number)+1; });
    return c;
  },[scoped,statuses]);
  const sTotal=scoped.length;
  const sPct=sTotal>0?Math.round((sCounts.working/sTotal)*100):0;

  const dc = view==="overview" ? gCounts : sCounts;
  const dt = view==="overview" ? gTotal  : sTotal;


  // Back logic
  function handleBack(){
    if(view==="overview") navigate("/");
    else setView("overview");
  }

  const isOverview = view==="overview";

  return (
    <div className="us-root" style={{ fontSize:`${zoom}%` }}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="us-bg" />

      <div className="us-wrap">
        {/* ════════════════════════════ NAV ════════════════════════════ */}
        <header className="us-nav">
          <div style={{ maxWidth:1120,margin:"0 auto",padding:"0 22px",height:58,display:"flex",alignItems:"center",gap:14 }}>

            {/* Logo + Breadcrumb */}
            <div style={{ display:"flex",alignItems:"center",gap:11,flexShrink:0 }}>
              <div style={{ width:34,height:34,borderRadius:9,background:"linear-gradient(135deg,#6366f1,#8b5cf6)",
                display:"flex",alignItems:"center",justifyContent:"center",
                boxShadow:"0 4px 14px rgba(99,102,241,0.5)",fontSize:11,fontWeight:900,color:"#fff" }}>
                MJ
              </div>
              <div style={{ display:"flex",alignItems:"center",gap:6 }}>
                <span style={{ fontSize:14,fontWeight:700,color:"rgba(255,255,255,0.9)",letterSpacing:"-0.01em" }}>MyJinan</span>
                <ChevronRight style={{ width:12,height:12,color:"rgba(255,255,255,0.2)" }} />
                <button
                  onClick={()=>!isOverview&&setView("overview")}
                  style={{ background:"none",border:"none",padding:0,cursor:isOverview?"default":"pointer",
                    fontSize:13,fontWeight:600,color:isOverview?"rgba(255,255,255,0.7)":"rgba(255,255,255,0.38)",
                    fontFamily:"inherit",transition:"color 0.15s" }}>
                  User Stories
                </button>
                {!isOverview && (
                  <>
                    <ChevronRight style={{ width:12,height:12,color:"rgba(255,255,255,0.18)" }} />
                    <span style={{ fontSize:13,fontWeight:700,color:"rgba(255,255,255,0.88)" }}>
                      {view==="all"?"All Modules":activeRole?.label}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Role quick-switch pills (only when not on overview) */}
            {!isOverview && (
              <div style={{ flex:1,display:"flex",alignItems:"center",gap:5,overflowX:"auto",padding:"0 2px" }}>
                <button className={`us-pill ${view==="all"?"on":""}`} onClick={()=>setView("all")}>
                  <LayoutGrid style={{ width:11,height:11 }} /> All
                </button>
                {ROLES.map((r: RoleDef) => {
                  const Icon=ROLE_ICON[r.icon]||User;
                  const [c1]=ROLE_GRAD[r.id]||["#6366f1","#8b5cf6"];
                  const on=view===r.id;
                  return (
                    <button key={r.id} className={`us-pill ${on?"on":""}`} onClick={()=>setView(r.id)}
                      style={on?{ color:c1,background:`${c1}18`,borderColor:`${c1}35` }:{}}>
                      <Icon style={{ width:11,height:11 }} />{r.label}
                    </button>
                  );
                })}
              </div>
            )}
            {isOverview && <div style={{ flex:1 }} />}

            {/* Right controls */}
            <div style={{ display:"flex",alignItems:"center",gap:7,flexShrink:0 }}>
              {/* Live sync indicator */}
              <SyncDot state={syncState} />
              {/* Zoom */}
              <div style={{ display:"flex",alignItems:"center",gap:3 }}>
                <button className="us-btn" onClick={()=>setZoom(z=>Math.max(75,z-10))} style={{ padding:"7px 10px" }}>
                  <ZoomOut style={{ width:13,height:13 }} />
                </button>
                <span style={{ fontSize:11,color:"rgba(255,255,255,0.28)",fontWeight:600,width:30,textAlign:"center" }}>{zoom}%</span>
                <button className="us-btn" onClick={()=>setZoom(z=>Math.min(135,z+10))} style={{ padding:"7px 10px" }}>
                  <ZoomIn style={{ width:13,height:13 }} />
                </button>
              </div>
              {/* Back */}
              <button className="us-btn" onClick={handleBack}>
                <ArrowLeft style={{ width:13,height:13 }} />
                {isOverview?"Back to Chat":"← Roles"}
              </button>
            </div>
          </div>
        </header>

        {/* ════════════════════ OVERVIEW ════════════════════ */}
        <AnimatePresence mode="wait">
          {isOverview ? (
            <motion.div key="ov" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0,y:-8}} transition={{ duration:0.28 }}
              style={{ maxWidth:1120,margin:"0 auto",padding:"30px 22px 80px",display:"flex",flexDirection:"column",gap:22 }}>

              {/* ── Hero ── */}
              <div className="us-glass us-fadein" style={{ padding:"30px 32px" }}>
                <div style={{ display:"flex",flexWrap:"wrap",alignItems:"center",gap:28 }}>
                  {/* Ring + title */}
                  <div style={{ display:"flex",alignItems:"center",gap:22,flex:1,minWidth:280 }}>
                    <Ring value={gPct} size={128} stroke={9} />
                    <div>
                      <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:6 }}>
                        <Star style={{ width:15,height:15,color:"#ffd200" }} />
                        <span className="us-label" style={{ color:"rgba(255,255,255,0.35)" }}>MyJinan Platform</span>
                      </div>
                      <h1 style={{ fontSize:26,fontWeight:900,color:"#fff",margin:"0 0 7px",letterSpacing:"-0.03em" }}>
                        Verification Dashboard
                      </h1>
                      <p style={{ fontSize:13,color:"rgba(255,255,255,0.4)",margin:"0 0 16px",lineHeight:1.65 }}>
                        Track and verify <strong style={{ color:"rgba(255,255,255,0.75)" }}>{gTotal}</strong> user stories across{" "}
                        <strong style={{ color:"rgba(255,255,255,0.75)" }}>{ROLES.length}</strong> roles.<br/>
                        Click a role below to begin verification.
                      </p>
                      <button className="us-btn" onClick={resetAll} style={{ fontSize:12 }}>
                        <RotateCcw style={{ width:12,height:12 }} /> Reset All
                      </button>
                    </div>
                  </div>

                  {/* 3 stat cards */}
                  <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,flexShrink:0 }}>
                    <Stat label="Working"     value={gCounts.working}        icon={CheckCircle2} c1="#00f5a0" c2="#10b981" glow="0 0 28px rgba(0,245,160,0.2)"  />
                    <Stat label="Not Working" value={gCounts["not-working"]} icon={XCircle}      c1="#ef4444" c2="#b91d2a" glow="0 0 28px rgba(239,68,68,0.2)"  />
                    <Stat label="Pending"     value={gCounts.pending}        icon={Circle}       c1="rgba(255,255,255,0.5)" c2="rgba(255,255,255,0.2)" glow="none" />
                  </div>
                </div>
              </div>

              {/* ── Role cards section ── */}
              <div>
                <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:16 }}>
                  <LayoutGrid style={{ width:15,height:15,color:"rgba(255,255,255,0.35)" }} />
                  <h2 style={{ fontSize:14,fontWeight:700,color:"rgba(255,255,255,0.6)",margin:0 }}>Select Admin Role</h2>
                  <div style={{ flex:1,height:1,background:"rgba(255,255,255,0.06)" }} />
                  <button className="us-btn" onClick={()=>setView("all")} style={{ fontSize:12 }}>
                    <TrendingUp style={{ width:12,height:12 }} /> All Modules
                  </button>
                </div>
                <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:12 }}>
                  {ROLES.map((role: RoleDef, i: number) => (
                    <RoleCard key={role.id} role={role} stories={stories} statuses={statuses} onClick={()=>setView(role.id)} idx={i} />
                  ))}
                </div>
              </div>
            </motion.div>

          ) : (
            // ════════════════════ ROLE/ALL VIEW ═══════════════════════
            <motion.div key="rv" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{ duration:0.28 }}
              style={{ maxWidth:1120,margin:"0 auto",padding:"26px 22px 80px",display:"flex",flexDirection:"column",gap:18 }}>

              {/* ── Role Hero ── */}
              <div className="us-glass" style={{
                padding:"26px 30px",
                ...(activeRole?{ background:`linear-gradient(135deg,${roleGrad[0]}10 0%,rgba(255,255,255,0.03) 60%)`,borderColor:`${roleGrad[0]}28` }:{}),
              }}>
                <div style={{ display:"flex",flexWrap:"wrap",alignItems:"center",gap:22 }}>
                  {/* Ring with role icon */}
                  <div style={{ position:"relative",flexShrink:0 }}>
                    <Ring value={sPct} size={112} stroke={8} />
                    {activeRole && (
                      <div style={{ position:"absolute",bottom:-4,right:-4,width:28,height:28,borderRadius:8,
                        background:grad(roleGrad),border:"2px solid rgba(7,9,18,0.85)",display:"flex",alignItems:"center",justifyContent:"center" }}>
                        {(()=>{ const Icon=ROLE_ICON[activeRole.icon]||User; return <Icon style={{ width:13,height:13,color:"#fff" }} />; })()}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div style={{ flex:1,minWidth:200 }}>
                    {activeRole && (
                      <div style={{ display:"inline-flex",alignItems:"center",gap:4,padding:"3px 10px",borderRadius:7,marginBottom:8,
                        background:`${roleGrad[0]}1a`,border:`1px solid ${roleGrad[0]}38`,
                        fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.07em",color:roleGrad[0] }}>
                        Role View
                      </div>
                    )}
                    <h1 style={{ fontSize:22,fontWeight:900,color:"#fff",margin:"0 0 5px",letterSpacing:"-0.03em" }}>
                      {activeRole?activeRole.label:"All Modules"}
                    </h1>
                    <p style={{ fontSize:13,color:"rgba(255,255,255,0.4)",margin:"0 0 12px",lineHeight:1.55 }}>
                      {activeRole?activeRole.description:`Complete overview of all ${Object.keys(MOD_ICON).length} platform modules`}
                    </p>
                    <p style={{ fontSize:12,color:"rgba(255,255,255,0.28)",margin:"0 0 14px" }}>
                      <strong style={{ color:"rgba(255,255,255,0.6)" }}>{sTotal}</strong> stories
                      {activeRole&&<> · <strong style={{ color:"rgba(255,255,255,0.6)" }}>{activeRole.modules.length}</strong> module{activeRole.modules.length>1?"s":""}</>}
                    </p>
                    <button className="us-btn" onClick={resetAll} style={{ fontSize:12 }}>
                      <RotateCcw style={{ width:12,height:12 }} /> Reset All
                    </button>
                  </div>

                  {/* Stats */}
                  <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:9,flexShrink:0 }}>
                    <Stat label="Working"     value={sCounts.working}        icon={CheckCircle2} c1="#00f5a0" c2="#10b981" glow="0 0 22px rgba(0,245,160,0.18)"  />
                    <Stat label="Not Working" value={sCounts["not-working"]} icon={XCircle}      c1="#ef4444" c2="#b91d2a" glow="0 0 22px rgba(239,68,68,0.18)"  />
                    <Stat label="Pending"     value={sCounts.pending}        icon={Circle}       c1="rgba(255,255,255,0.45)" c2="rgba(255,255,255,0.2)" glow="none" />
                  </div>
                </div>

                {/* Module chips */}
                {activeRole && (
                  <div style={{ marginTop:18,paddingTop:16,borderTop:"1px solid rgba(255,255,255,0.06)",display:"flex",flexWrap:"wrap",gap:8 }}>
                    {activeRole.modules.map((mod: string) => {
                      const [c1]=MOD_GRAD[mod]||["#6366f1","#8b5cf6"];
                      const Icon=MOD_ICON[mod]||Package;
                      return (
                        <span key={mod} style={{ display:"inline-flex",alignItems:"center",gap:6,padding:"6px 12px",borderRadius:9,
                          background:`${c1}18`,border:`1px solid ${c1}2e`,fontSize:12,fontWeight:700,color:c1 }}>
                          <Icon style={{ width:13,height:13 }} />{mod}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* ── Search & Filter ── */}
              <div className="us-glass-sm" style={{ padding:"13px 15px" }}>
                <div style={{ display:"flex",gap:9,alignItems:"center" }}>
                  <div style={{ flex:1,position:"relative" }}>
                    <Search style={{ position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",width:14,height:14,color:"rgba(255,255,255,0.25)" }} />
                    <input className="us-input" type="text" value={search} onChange={e=>setSearch(e.target.value)}
                      placeholder="Search feature, ref, module, navigation..." style={{ padding:"10px 38px 10px 38px" }} />
                    {search && (
                      <button onClick={()=>setSearch("")} style={{ position:"absolute",right:11,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"rgba(255,255,255,0.3)",padding:0 }}>
                        <X style={{ width:13,height:13 }} />
                      </button>
                    )}
                  </div>
                  <button className="us-btn" onClick={()=>setShowF(!showF)}
                    style={showF||fStatus!=="all"?{ borderColor:"rgba(255,210,0,0.35)",color:"#ffd200",background:"rgba(255,210,0,0.08)" }:{}}>
                    <SlidersHorizontal style={{ width:13,height:13 }} />
                    Filters
                    {fStatus!=="all"&&<span style={{ width:6,height:6,borderRadius:"50%",background:"#ffd200",display:"block" }}/>}
                  </button>
                </div>

                <AnimatePresence>
                  {showF && (
                    <motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{ duration:0.2 }} style={{ overflow:"hidden" }}>
                      <div style={{ paddingTop:12,marginTop:12,borderTop:"1px solid rgba(255,255,255,0.07)" }}>
                        <p className="us-label" style={{ marginBottom:8 }}>Filter by Status</p>
                        <div style={{ display:"flex",flexWrap:"wrap",gap:7 }}>
                          {([
                            { key:"all",          label:"All",          cnt:dt,                   c1:"rgba(255,255,255,0.7)", Icon:LayoutGrid   },
                            { key:"working",    label:"Working",      cnt:dc.working,           c1:"#00f5a0",              Icon:CheckCircle2 },
                            { key:"not-working",label:"Not Working",   cnt:dc["not-working"],    c1:"#ef4444",              Icon:XCircle      },
                            { key:"pending",    label:"Pending",       cnt:dc.pending,           c1:"rgba(255,255,255,0.45)",Icon:Circle      },
                          ] as const).map(({ key,label,cnt,c1,Icon })=>{
                            const on=fStatus===key;
                            return (
                              <button key={key} onClick={()=>setFStatus(fStatus===key?"all":key as Status|"all")}
                                style={{ display:"inline-flex",alignItems:"center",gap:6,padding:"7px 12px",borderRadius:9,
                                  border:`1px solid ${on?`${c1}40`:"rgba(255,255,255,0.08)"}`,
                                  background:on?`${c1}15`:"rgba(255,255,255,0.04)",
                                  color:on?c1:"rgba(255,255,255,0.38)",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit",transition:"all 0.18s" }}>
                                <Icon style={{ width:12,height:12 }} />{label} ({cnt})
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {(search||fStatus!=="all") && (
                  <p style={{ marginTop:9,fontSize:12,color:"rgba(255,255,255,0.25)" }}>
                    Showing <strong style={{ color:"rgba(255,255,255,0.55)" }}>{filtered.length}</strong> of {dt}
                  </p>
                )}
              </div>

              {/* ── Module Accordions ── */}
              <div style={{ display:"flex",flexDirection:"column",gap:12,paddingBottom:30 }}>
                {grouped.length===0 ? (
                  <div className="us-glass" style={{ padding:"60px 24px",textAlign:"center" }}>
                    <Search style={{ width:38,height:38,color:"rgba(255,255,255,0.1)",display:"block",margin:"0 auto 14px" }} />
                    <p style={{ fontSize:16,color:"rgba(255,255,255,0.28)",fontWeight:700,margin:"0 0 5px" }}>No stories found</p>
                    <p style={{ fontSize:13,color:"rgba(255,255,255,0.16)",margin:0 }}>Try a different search or clear filters</p>
                  </div>
                ) : grouped.map(([name,moduleStories],i)=>(
                  <ModuleCard key={name} name={name} stories={moduleStories} statuses={statuses} onSet={upStatus}
                    defaultOpen={grouped.length===1||(!!activeRole&&activeRole.modules.length===1)} idx={i} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
