/* ═══════════════════════════════════════════════════════════════
   MyJinan Help Center — App Logic
   ═══════════════════════════════════════════════════════════════ */

// ╔════════════════════════════════════════════════════════════════╗
// ║  ⚙️  CONFIGURATION — Set your Google Gemini API key below   ║
// ╚════════════════════════════════════════════════════════════════╝
const CONFIG = {
    GEMINI_API_KEY: "YOUR_GEMINI_API_KEY_HERE",   // ← Replace with your Google Gemini API key
    MODEL: "gemini-2.0-flash",
    MAX_TOKENS: 2048,
};

// ── State ──
let conversationHistory = [];
let isProcessing = false;

// ── DOM Elements ──
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// ── System Prompt ──
const SYSTEM_PROMPT = `You are "MyJinan Assistant", a friendly and knowledgeable documentation expert for the MyJinan e-commerce admin platform.

RULES:
1. Answer ONLY based on the documentation provided below. Do NOT make up information.
2. Always include the exact navigation path when applicable (e.g., "Product Management → Categories → Add New").
3. Be concise but thorough. Use bullet points and numbered steps for clarity.
4. If a question is outside the documentation scope, politely say you can only help with MyJinan platform questions.
5. Use a warm, helpful tone. Address the user directly.
6. When describing steps, number them clearly.
7. If the question is vague, provide the most relevant answer and suggest related topics.
8. Format navigation paths in bold.
9. For how-to questions, always give step-by-step instructions.

${KNOWLEDGE_BASE}`;

// ═══════════════ CORE FUNCTIONS ═══════════════

async function sendMessage() {
    const text = userInput.value.trim();
    if (!text || isProcessing) return;

    // Check API key
    if (CONFIG.GEMINI_API_KEY === "YOUR_GEMINI_API_KEY_HERE" || !CONFIG.GEMINI_API_KEY) {
        appendMessage('ai', '⚠️ **API key not configured.** Please set your Google Gemini API key in the `app.js` file under `CONFIG.GEMINI_API_KEY` before deploying.', true);
        return;
    }

    // Hide welcome section
    const welcome = document.querySelector('.welcome-section');
    if (welcome) welcome.remove();

    // Add user message
    appendMessage('user', text);
    userInput.value = '';
    autoResize(userInput);

    // Add to history
    conversationHistory.push({ role: 'user', parts: [{ text }] });

    // Show typing indicator
    const typingEl = showTyping();
    isProcessing = true;
    sendBtn.disabled = true;

    try {
        const response = await callGeminiAPI(text);
        typingEl.remove();
        appendMessage('ai', response);
        conversationHistory.push({ role: 'model', parts: [{ text: response }] });
    } catch (error) {
        typingEl.remove();
        const errMsg = error.message || 'Something went wrong. Please try again.';
        appendMessage('ai', `❌ **Error:** ${errMsg}`, true);
    } finally {
        isProcessing = false;
        sendBtn.disabled = false;
        userInput.focus();
    }
}

async function callGeminiAPI(userQuestion) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${CONFIG.MODEL}:generateContent?key=${CONFIG.GEMINI_API_KEY}`;

    // Build conversation for context (keep last 10 messages for context window)
    const recentHistory = conversationHistory.slice(-10);

    const body = {
        system_instruction: {
            parts: [{ text: SYSTEM_PROMPT }]
        },
        contents: [
            ...recentHistory,
            { role: 'user', parts: [{ text: userQuestion }] }
        ],
        generationConfig: {
            maxOutputTokens: CONFIG.MAX_TOKENS,
            temperature: 0.4,
            topP: 0.9,
        }
    };

    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });

    if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        const errMsg = errorData?.error?.message || `API request failed (${res.status})`;
        throw new Error(errMsg);
    }

    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!text) {
        throw new Error('No response received from the AI model.');
    }

    return text;
}

// ═══════════════ UI FUNCTIONS ═══════════════

function appendMessage(role, text, isError = false) {
    const row = document.createElement('div');
    row.className = `message-row ${role}`;

    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = role === 'ai' ? '✨' : '👤';

    const bubble = document.createElement('div');
    bubble.className = `message-bubble ${isError ? 'error-bubble' : ''}`;
    bubble.innerHTML = formatMessage(text);

    row.appendChild(avatar);
    row.appendChild(bubble);
    chatMessages.appendChild(row);
    scrollToBottom();
}

function formatMessage(text) {
    // Convert markdown-like formatting to HTML
    let html = text
        // Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Inline code
        .replace(/`(.*?)`/g, '<code>$1</code>')
        // Navigation paths (→ arrows)
        .replace(/((?:[\w\s&]+\s*→\s*)+[\w\s&]+)/g, '<span class="nav-path">$1</span>')
        // Headers (### or ##)
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        .replace(/^## (.+)$/gm, '<h3>$1</h3>')
        // Numbered lists
        .replace(/^(\d+)\.\s(.+)$/gm, '<li>$2</li>')
        // Bullet points
        .replace(/^[-•]\s(.+)$/gm, '<li>$1</li>')
        // Line breaks to paragraphs
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');

    // Wrap consecutive <li> in <ul>
    html = html.replace(/((?:<li>.*?<\/li>\s*(?:<br>)?)+)/g, '<ul>$1</ul>');
    // Clean up <br> inside <ul>
    html = html.replace(/<ul>(.*?)<\/ul>/gs, (match) => match.replace(/<br>/g, ''));

    return `<p>${html}</p>`;
}

function showTyping() {
    const row = document.createElement('div');
    row.className = 'message-row ai';
    row.id = 'typingRow';

    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = '✨';

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    bubble.innerHTML = `
        <div class="typing-indicator">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;

    row.appendChild(avatar);
    row.appendChild(bubble);
    chatMessages.appendChild(row);
    scrollToBottom();
    return row;
}

function scrollToBottom() {
    requestAnimationFrame(() => {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    });
}

// ── Input Helpers ──

function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
}

function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
}

function askSuggestion(chip) {
    const text = chip.textContent.trim();
    userInput.value = text;
    sendMessage();
}

// ── Init ──
userInput.focus();
