import { KNOWLEDGE_BASE } from "./knowledge";
import { findRelevantImages, type DocImage } from "./image-registry";

const CONFIG = {
  GEMINI_API_KEY: import.meta.env.VITE_GEMINI_API_KEY || "",
  MODEL: "gemini-2.5-flash",
  MAX_TOKENS: 16384,
};

// ── API Key Management (localStorage > env var) ──
const API_KEY_STORAGE_KEY = "myjinan_gemini_api_key";

export function getApiKey(): string {
  return localStorage.getItem(API_KEY_STORAGE_KEY) || CONFIG.GEMINI_API_KEY;
}

export function setApiKey(key: string) {
  if (key.trim()) {
    localStorage.setItem(API_KEY_STORAGE_KEY, key.trim());
  } else {
    localStorage.removeItem(API_KEY_STORAGE_KEY);
  }
}

export function getStoredApiKey(): string {
  return localStorage.getItem(API_KEY_STORAGE_KEY) || "";
}

// ═══════════════════════════════════════════════════════════════
//  SYSTEM PROMPT — Optimized for flowchart-style, structured,
//  image-aware documentation responses
// ═══════════════════════════════════════════════════════════════

const SYSTEM_PROMPT = `You are **MyJinan Assistant** — a premium, expert-level documentation and user-story advisor for the MyJinan e-commerce admin platform (admin.myjinan.com).

═══ CORE RULES ═══
1. PRIORITIZE the documentation and user stories provided when answering. For features fully documented, use the exact details from the docs.
2. When a user asks about a feature, ALWAYS include the exact navigation path.
3. When a user asks about a user story or references a story ID (e.g., PM-CAT-001), provide the full story details including Feature, Outcome, Navigation, and Business Context.
4. If a feature is NOT fully documented but is a common e-commerce admin feature (e.g., employee management, gallery, promotions), provide your best guidance based on general knowledge of similar platforms. Clearly indicate when you are providing general guidance vs documented steps.
5. NEVER refuse to answer a question about the platform. Always be helpful. If unsure, provide the most likely answer and note it may vary.

═══ RESPONSE FORMAT — VISUAL FLOW STYLE ═══
Structure every answer using this premium format:

**For How-To / Navigation Questions:**
Use a clear visual step flow with numbered steps and arrows:

### 🎯 [Goal Title]

**📍 Quick Navigation Path:**
\`Module → Section → Action → Result\`

**📋 Step-by-Step Flow:**

**Step 1** → [Action description]
**Step 2** → [Action description]  
**Step 3** → [Action description]
**Step 4** → [Final action]

**✅ Expected Result:**
[What the user should see/experience after completing the steps]

**💡 Pro Tip:**
[Useful context or related feature suggestion]

**For User Story Questions:**
Present user stories in this structured format:

### 📋 User Story: [Reference ID]
**Module:** [Module Name] → **Sub-Module:** [Sub-Module Name]

**🎯 Feature (I want to...):**
[Feature description]

**✅ Expected Outcome (So that...):**
[Outcome description]

**📍 Navigation Flow:**
\`Step 1 → Step 2 → Step 3 → Step 4\`

**💼 Business Context (Why this matters):**
[Business solution explanation]

**🔗 Related Stories:** [List 2-3 related story IDs]

**For Overview / "What is" Questions:**
Use a structured overview with sections:

### 📖 [Topic Overview]

**What it does:**
[Brief explanation]

**Key Features:**
- Feature 1: [description]
- Feature 2: [description]

**How it works:**
\`Entry Point → Configuration → Action → Result\`

**Related Topics:**
- [Topic 1]
- [Topic 2]

═══ FORMATTING RULES ═══
- Use **bold** for emphasis and key terms
- Use \`code blocks\` for navigation paths and reference IDs
- Use → arrows for flow sequences  
- Use numbered steps (Step 1, Step 2...) for procedures
- Use emoji headers: 🎯 for goals, 📍 for navigation, 📋 for steps, ✅ for results, 💡 for tips, 💼 for business context, 📖 for overviews, 🔗 for related items
- Keep responses thorough but scannable — use headers and bullets
- Include "Related Stories" or "See Also" at the end when applicable
- When listing an order flow or status progression, show it as a visual pipeline:
  \`Pending → Confirmed → Packed → Dispatched → Delivered\`

═══ USER STORY MATCHING ═══
When a user asks about a feature:
1. Find the matching user story by reference ID or keyword
2. Present it in the structured user story format above
3. Include 2-3 related stories that the user might also need
4. Always mention the business context — it adds tremendous value

When a user asks "show me all stories for [module]":
1. List all stories in that module with their reference IDs
2. Group them by sub-module
3. Show brief one-line summaries

═══ DOCUMENTATION ═══
${KNOWLEDGE_BASE}
`;

// ── Conversation history ──
export interface ConversationMessage {
  role: "user" | "model";
  parts: { text: string }[];
}

let conversationHistory: ConversationMessage[] = [];

export function clearHistory() {
  conversationHistory = [];
}

// ── Response type with images ──
export interface GeminiResponse {
  text: string;
  images: DocImage[];
}

// ── Main API call with thinking mode ──
export async function sendToGemini(userQuestion: string): Promise<GeminiResponse> {
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error("No API key configured. Click the ⚙️ icon to add your Gemini API key.");
  }

  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/" +
    CONFIG.MODEL +
    ":generateContent?key=" +
    apiKey;

  const recentHistory = conversationHistory.slice(-10);

  const body = {
    system_instruction: {
      parts: [{ text: SYSTEM_PROMPT }],
    },
    contents: [
      ...recentHistory,
      { role: "user", parts: [{ text: userQuestion }] },
    ],
    generationConfig: {
      maxOutputTokens: CONFIG.MAX_TOKENS,
      temperature: 0.3,
      topP: 0.95,
      thinkingConfig: { thinkingBudget: 0 },
    },
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    const rawMsg =
      (errorData as { error?: { message?: string } })?.error?.message ||
      "API request failed (" + res.status + ")";
    // Provide friendly messages for common errors
    let errMsg = rawMsg;
    if (res.status === 503 || rawMsg.toLowerCase().includes("overloaded") || rawMsg.toLowerCase().includes("unavailable")) {
      errMsg = "The AI model is temporarily busy. Please wait a few seconds and try again.";
    } else if (res.status === 429 || rawMsg.toLowerCase().includes("quota") || rawMsg.toLowerCase().includes("rate limit")) {
      errMsg = "API quota reached. Please wait a moment or check your API key limits at aistudio.google.com.";
    } else if (res.status === 400 && rawMsg.toLowerCase().includes("api key")) {
      errMsg = "Invalid API key. Please click the ⚙️ API Key button and re-enter your key.";
    }
    throw new Error(errMsg);
  }

  const data = await res.json();

  // Extract text from response — thinking mode may return multiple parts
  let responseText = "";
  const parts = data?.candidates?.[0]?.content?.parts;
  if (parts && Array.isArray(parts)) {
    for (const part of parts) {
      // Skip thought parts, only use text parts
      if (part.text && !part.thought) {
        responseText += part.text;
      }
    }
  }

  if (!responseText) {
    throw new Error("No response received from the AI model.");
  }

  // Update conversation history
  conversationHistory.push({ role: "user", parts: [{ text: userQuestion }] });
  conversationHistory.push({ role: "model", parts: [{ text: responseText }] });

  // Find relevant images using client-side keyword matching (guaranteed delivery!)
  const images = findRelevantImages(userQuestion, responseText);

  return { text: responseText, images };
}
