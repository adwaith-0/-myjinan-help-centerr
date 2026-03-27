import { KNOWLEDGE_BASE } from "./knowledge";

const CONFIG = {
  GEMINI_API_KEY: import.meta.env.VITE_GEMINI_API_KEY || "",
  MODEL: "gemini-2.5-flash",
  MAX_TOKENS: 2048,
};

const SYSTEM_PROMPT = `You are "MyJinan Assistant", a friendly and knowledgeable documentation expert for the MyJinan e-commerce admin platform.

RULES:
1. Answer ONLY based on the documentation provided below. Do NOT make up information.
2. Always include the exact navigation path when applicable (e.g., "Product Management → Categories → Add New").
3. Be concise but thorough. Use bullet points and numbered steps for clarity.
4. If a question is outside the documentation scope, politely say you can only help with MyJinan platform questions.
5. Use a warm, helpful tone. Address the user directly.
6. When describing steps, number them clearly.
7. If the question is vague, provide the most relevant answer and suggest related topics.
8. Format navigation paths in bold using markdown (**path**).
9. For how-to questions, always give step-by-step instructions.
10. Use markdown formatting for readability (bold, lists, headers).

` + KNOWLEDGE_BASE;

export interface ConversationMessage {
  role: "user" | "model";
  parts: { text: string }[];
}

let conversationHistory: ConversationMessage[] = [];

export function clearHistory() {
  conversationHistory = [];
}

export async function sendToGemini(userQuestion: string): Promise<string> {
  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/" +
    CONFIG.MODEL +
    ":generateContent?key=" +
    CONFIG.GEMINI_API_KEY;

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
      temperature: 0.4,
      topP: 0.9,
    },
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    const errMsg =
      (errorData as { error?: { message?: string } })?.error?.message ||
      "API request failed (" + res.status + ")";
    throw new Error(errMsg);
  }

  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error("No response received from the AI model.");
  }

  // Update history
  conversationHistory.push({ role: "user", parts: [{ text: userQuestion }] });
  conversationHistory.push({ role: "model", parts: [{ text }] });

  return text;
}
