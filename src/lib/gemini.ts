import { KNOWLEDGE_BASE } from "./knowledge";

const CONFIG = {
  GEMINI_API_KEY: import.meta.env.VITE_GEMINI_API_KEY || "",
  MODEL: "gemini-2.5-flash",
  MAX_TOKENS: 4096,
};

// Full image catalog — the AI will reference these by tag
const IMAGE_CATALOG = `
=== AVAILABLE SCREENSHOTS ===
When answering, you MUST include relevant screenshot references using the exact format: [IMG:folder/filename|Caption]
Only use images from this list. Include 2-4 images per answer where relevant.

--- Product Management: Product Setup ---
[IMG:pm/img_01.jpeg|MyJinan Admin Dashboard — Main Navigation]
[IMG:pm/img_02.jpeg|Left Sidebar — Product Management Section]
[IMG:pm/img_03.jpeg|Product Setup Expanded — All Sub-Modules]
[IMG:pm/img_04.jpeg|Add New Item — Name, Description & Image Upload]
[IMG:pm/img_05.jpeg|Image Upload Areas — Item Image & Thumbnail]
[IMG:pm/img_06.jpeg|Store & Category Info + Price Information]
[IMG:pm/img_07.jpeg|Attribute Selection & Tags Input]
[IMG:pm/img_08.jpeg|Variant Pricing — Colors & Sizes]
[IMG:pm/img_09.jpeg|Product List — Sidebar Navigation & Search Filters]
[IMG:pm/img_10.jpeg|Full Item List View with Search, Export, and Product Table]
[IMG:pm/img_11.jpeg|Store Dropdown — Search & Select Store]
[IMG:pm/img_12.jpeg|Sub-Category Filter Dropdown]
[IMG:pm/img_13.jpeg|Product Table — Detailed Item List with Pagination]
[IMG:pm/img_14.jpeg|Left Sidebar — Low Stock List Selected]
[IMG:pm/img_15.jpeg|Low Stock List — Full View with Items at Zero Stock]
[IMG:pm/img_16.jpeg|Low Stock List — Search & Filter Bar]
[IMG:pm/img_17.jpeg|Left Sidebar — Review Selected]
[IMG:pm/img_18.jpeg|Item Reviews Page — Review List with Search & Export]
[IMG:pm/img_19.jpeg|Left Sidebar — Bulk Import Selected]
[IMG:pm/img_20.jpeg|Items Bulk Import — 3-Step Instruction Guide]
[IMG:pm/img_21.jpeg|Bulk Import — Template Download, Data Type Selection & File Upload]
[IMG:pm/img_22.jpeg|Left Sidebar — Bulk Export Selected]
[IMG:pm/img_23.jpeg|Items Bulk Export — 2-Step Guide with Type Selection]

--- Product Management: Categories ---
[IMG:pm/img_25.jpeg|Categories — Dashboard Main Navigation]
[IMG:pm/img_27.jpeg|Categories Expanded — All Sub-Modules]
[IMG:pm/img_28.jpeg|Navigation to Category Section]
[IMG:pm/img_29.jpeg|Add New Category — Name & Image Upload]
[IMG:pm/img_30.jpeg|Image Upload Area — Category Image]
[IMG:pm/img_31.jpeg|Full Category List View with Search, Export, and Table]
[IMG:pm/img_32.jpeg|Add New Sub Category — Name & Parent Category]
[IMG:pm/img_33.jpeg|Full Sub Category List View]
[IMG:pm/img_34.jpeg|Categories — Bulk Import Navigation]
[IMG:pm/img_35.jpeg|Categories Bulk Import — 3-Step Guide]
[IMG:pm/img_36.jpeg|Categories Bulk Import — Template & Upload]
[IMG:pm/img_37.jpeg|Categories — Bulk Export Navigation]
[IMG:pm/img_38.jpeg|Categories Bulk Export — 2-Step Guide]

--- Product Management: Attributes, Units, Brands ---
[IMG:pm/img_40.jpeg|Navigation to Attributes]
[IMG:pm/img_41.jpeg|Add New Attribute]
[IMG:pm/img_42.jpeg|Attributes List]
[IMG:pm/img_43.jpeg|Navigation to Units]
[IMG:pm/img_44.jpeg|Add New Unit]
[IMG:pm/img_45.jpeg|Units List]
[IMG:pm/img_46.jpeg|Brand Setup — Full View]
[IMG:pm/img_47.jpeg|Add New Brand — Name & Logo]

--- Order Management ---
[IMG:om/img_00.png|POS Section Navigation]
[IMG:om/img_01.png|POS — Search Products]
[IMG:om/img_03.png|POS — Product Selection Grid]
[IMG:om/img_04.png|POS — Product Search Results]
[IMG:om/img_05.png|POS — Customer Billing Section]
[IMG:om/img_06.png|POS — Customer Dropdown]
[IMG:om/img_07.png|POS — Review & Checkout]
[IMG:om/img_08.png|Order Management Navigation]
[IMG:om/img_09.png|Order Categories Overview]
[IMG:om/img_10.png|All Orders — Full List]
[IMG:om/img_11.png|Pending Orders List]
[IMG:om/img_12.png|Scheduled Orders]
[IMG:om/img_13.png|Accepted Orders]
[IMG:om/img_14.png|Processing Orders]
[IMG:om/img_15.png|Orders On The Way]
[IMG:om/img_16.png|Delivered Orders]
[IMG:om/img_17.png|Canceled Orders]
[IMG:om/img_18.png|Payment Failed Orders]
[IMG:om/img_19.png|Refunded Orders]
[IMG:om/img_21.png|Order Detail View — Summary & Items]
[IMG:om/img_23.png|Print Invoice View]
[IMG:om/img_24.png|Flash Sale Setup — Details & Validity]
[IMG:om/img_25.png|Flash Sale — Add Products & Discount]
[IMG:om/img_26.png|Managing Flash Sales — Edit & Delete]
[IMG:om/img_27.png|Flash Sales List View]

--- Reports & Analytics ---
[IMG:ra/img_00.png|Reports & Analytics Navigation]
[IMG:ra/img_01.png|Transaction Report — Filter Options]
[IMG:ra/img_02.png|Transaction Report — Summary Metrics & Table]
[IMG:ra/img_03.png|Transaction Report — Detailed View]
[IMG:ra/img_04.png|Item Report — Filter Options]
[IMG:ra/img_05.png|Item Report — Data Table]
[IMG:ra/img_06.png|Item Report — Export View]
[IMG:ra/img_07.png|Store Report — Summary & Sales Analytics]
[IMG:ra/img_08.png|Store Report — Order Breakdown]
[IMG:ra/img_09.png|Store Report — Sales Performance Table]
[IMG:ra/img_10.png|Store Report — Performance Chart]
[IMG:ra/img_11.png|Expense Report — Filters]
[IMG:ra/img_12.png|Expense Report — Table & Export]
[IMG:ra/img_13.png|Disbursement Report — Summary Dashboard]
[IMG:ra/img_14.png|Disbursement Report — Details]
[IMG:ra/img_19.png|Order Report — Filter Options]
[IMG:ra/img_20.png|Order Report — Table with Actions]
[IMG:ra/img_21.png|Order Report — Invoice View]
[IMG:ra/img_22.png|Tax Report — Tax Type Configuration]
[IMG:ra/img_23.png|Tax Report — Tax Rate Selection]
[IMG:ra/img_26.png|Tax Report — Results]
[IMG:ra/img_27.png|Vendor Tax Report — Summary Cards]
[IMG:ra/img_29.png|Vendor Tax Report — Vendor Table]
[IMG:ra/img_30.png|Vendor Tax Report — Export]
[IMG:ra/img_31.png|Parcel Tax Report — Summary]
[IMG:ra/img_33.png|Parcel Tax Report — Table]
[IMG:ra/img_34.png|Parcel Tax Report — Export]
`;

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

SCREENSHOTS:
You have access to a catalog of screenshots. When your answer relates to a screen or form in the admin panel, INCLUDE the relevant screenshot references using the EXACT tag format: [IMG:folder/filename|Caption]
- Place image tags on their own line, right after describing the relevant step or section.
- Include 2-5 images per answer where relevant.
- Only use images from the catalog — never invent image references.
- Choose images that directly illustrate what you are describing.

${IMAGE_CATALOG}

DOCUMENTATION:
${KNOWLEDGE_BASE}`;

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
