import React, { useState, useEffect, useRef } from "react";
import "./ChatBot.css";
import assistantIcon from "../assets/images/assistant-svgrepo-com.svg";
import {
  SERVICES,
  findServiceByMessage,
  findServicesByMessage,
  buildServiceDetailsResponse,
  buildServicesListResponse,
  buildPricingResponse,
  buildAllServiceDetailsResponse
} from "../data/servicesData";

const CHAT_API_URL = import.meta.env.VITE_CHAT_API_URL || "/api/chat";
const CHAT_THREADS_KEY = "chatbot_threads";
const CHAT_ACTIVE_THREAD_KEY = "chatbot_active_thread";
const DEFAULT_THREAD_TITLE = "New chat";

const createThread = (title) => ({
  id: String(Date.now() + Math.floor(Math.random() * 1000)),
  title: title || DEFAULT_THREAD_TITLE,
  messages: [],
  updatedAt: Date.now()
});

const buildThreadTitle = (text) => {
  const clean = String(text || "").trim();
  if (!clean) {
    return DEFAULT_THREAD_TITLE;
  }

  const compact = clean.replace(/\s+/g, " ");
  return compact.length > 34 ? `${compact.slice(0, 34)}...` : compact;
};

const getThreadDisplayTitle = (thread, fallbackLanguage = "en") => {
  if (!thread) {
    return DEFAULT_THREAD_TITLE;
  }

  const hasCustomTitle = thread.title && thread.title !== DEFAULT_THREAD_TITLE;
  if (hasCustomTitle) {
    return thread.title;
  }

  const firstUserMessage = thread.messages?.find((message) => message.sender === "user")?.text;
  if (firstUserMessage) {
    return buildThreadTitle(firstUserMessage, fallbackLanguage);
  }

  return DEFAULT_THREAD_TITLE;
};

const STATIC_RESPONSES = {
  en: {
    hello: "Hi there! 👋 How can I help you today?",
    hi: "Hello! Welcome to Saviratech. What can I do for you?",
    smallTalk: "I'm doing great, thanks for asking. How are you? If you want, I can also help with any business, website, app, or marketing question.",
    capabilities:
      "I can help with general questions, business advice, and full details of our services including price, timeline, features, and best plan.",
    contact: "📞 You can contact us at:\n📧 Email: your@email.com\n📱 Phone: +91 XXXXX XXXXX\n💬 Or keep chatting with me for more info!",
    help: "I can help with services, pricing, timelines, included features, and project planning. Ask anything.",
    "thank you": "You're welcome! 😊 Is there anything else I can help with?",
    thanks: "Happy to help! Feel free to ask more questions. 🙌",
    bye: "Goodbye! Have a great day! 👋",
    default:
      "I can share complete details of every service including price, timeline, included features, best use case, and support."
  },
  hi: {
    hello: "नमस्ते! 👋 आज मैं आपकी कैसे मदद कर सकता हूँ?",
    hi: "हेलो! Saviratech में आपका स्वागत है। मैं आपकी क्या मदद कर सकता हूँ?",
    smallTalk: "मैं बढ़िया हूँ, पूछने के लिए धन्यवाद। आप कैसे हैं? आप business, website, app या marketing के बारे में कुछ भी पूछ सकते हैं।",
    capabilities:
      "मैं general questions, business guidance, और हमारी services की पूरी जानकारी दे सकता हूँ जैसे price, timeline, features और best plan.",
    contact: "📞 हमसे संपर्क करें:\n📧 ईमेल: your@email.com\n📱 फोन: +91 XXXXX XXXXX\n💬 या मुझसे और बात करें!",
    help: "मैं services, pricing, timeline, features और project planning में मदद कर सकता हूँ। जो पूछना हो पूछिए।",
    "thank you": "आपका स्वागत है! 😊 क्या कुछ और पूछना है?",
    thanks: "खुशी हुई मदद करके! और सवाल पूछिए। 🙌",
    bye: "अलविदा! आपका दिन शानदार हो! 👋",
    default:
      "मैं हर service की complete details दे सकता हूँ जैसे price, timeline, features, best use case और support।"
  }
};

const TRANSLATIONS = {
  en: {
    title: "Chat with us",
    placeholder: "Type your message...",
    send: "Send",
    clearHistory: "Clear Chat",
    newChat: "New Chat",
    conversation: "Conversation"
  },
  hi: {
    title: "हमारे साथ चैट करें",
    placeholder: "अपना संदेश टाइप करें...",
    send: "भेजें",
    clearHistory: "यह चैट साफ करें",
    newChat: "नई चैट",
    conversation: "चैट चुनें"
  }
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [threads, setThreads] = useState(() => {
    try {
      const savedThreads = localStorage.getItem(CHAT_THREADS_KEY);
      const parsedThreads = savedThreads ? JSON.parse(savedThreads) : [];

      if (Array.isArray(parsedThreads) && parsedThreads.length > 0) {
        return parsedThreads;
      }

      return [createThread("en")];
    } catch {
      return [createThread("en")];
    }
  });
  const [activeThreadId, setActiveThreadId] = useState(() => {
    try {
      return localStorage.getItem(CHAT_ACTIVE_THREAD_KEY) || "";
    } catch {
      return "";
    }
  });
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const language = "en";
  const messagesEndRef = useRef(null);
  const activeThread = threads.find((thread) => thread.id === activeThreadId) || threads[0];
  const messages = React.useMemo(() => activeThread?.messages || [], [activeThread]);

  const detectUserLanguage = (text) => {
    const value = (text || "").toLowerCase();

    // Devanagari script detection
    if (/[\u0900-\u097F]/.test(value)) {
      return "hi";
    }

    // Common Hindi/Hinglish phrases typed in English characters
    const hinglishHints = [
      "kya",
      "kaise",
      "kese",
      "kr",
      "kar",
      "bta",
      "bata",
      "mujhe",
      "mera",
      "meri",
      "aap",
      "tum",
      "hai",
      "nahi",
      "kyu",
      "kaun",
      "kitna",
      "service ke bare",
      "price kitna"
    ];

    if (hinglishHints.some((hint) => value.includes(hint))) {
      return "hi";
    }

    return "en";
  };

  useEffect(() => {
    localStorage.setItem(CHAT_THREADS_KEY, JSON.stringify(threads));
  }, [threads]);

  useEffect(() => {
    if (activeThread?.id) {
      localStorage.setItem(CHAT_ACTIVE_THREAD_KEY, activeThread.id);
    }
  }, [activeThread]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const hasAnyKeyword = (message, keywords) => keywords.some((word) => message.includes(word));

  const appendMessageToThread = (threadId, message) => {
    setThreads((prev) =>
      prev.map((thread) => {
        if (thread.id !== threadId) {
          return thread;
        }

        return {
          ...thread,
          messages: [...thread.messages, message],
          updatedAt: Date.now()
        };
      })
    );
  };

  const updateThreadTitleIfNeeded = (threadId, userText, detectedLanguage) => {
    setThreads((prev) =>
      prev.map((thread) => {
        if (thread.id !== threadId) {
          return thread;
        }

        const isUntitled =
          thread.title === DEFAULT_THREAD_TITLE;

        if (!isUntitled) {
          return thread;
        }

        return {
          ...thread,
          title: buildThreadTitle(userText, detectedLanguage),
          updatedAt: Date.now()
        };
      })
    );
  };

  const startNewChat = () => {
    const existingEmptyThread = threads.find(
      (thread) => thread.messages.length === 0 && thread.title === DEFAULT_THREAD_TITLE
    );

    if (existingEmptyThread) {
      setActiveThreadId(existingEmptyThread.id);
      setInput("");
      setIsTyping(false);
      return;
    }

    const newThread = createThread();
    setThreads((prev) => [newThread, ...prev]);
    setActiveThreadId(newThread.id);
    setInput("");
    setIsTyping(false);
  };

  const getRuleBasedResponse = (userMessage, preferredLanguage) => {
    const lowerMessage = userMessage.toLowerCase().trim();
    const responseLanguage = preferredLanguage || detectUserLanguage(userMessage);

    const detailWords = [
      "detail",
      "details",
      "full detail",
      "complete",
      "explain",
      "about",
      "batao",
      "btao",
      "bataye",
      "btaye",
      "include",
      "included",
      "what is in",
      "kya kya",
      "sab kuch",
      "bare",
      "baare",
      "ke bare",
      "बताओ",
      "बता",
      "इसमें क्या"
    ];

    const allServicesWords = [
      "all services",
      "all service",
      "every service",
      "har service",
      "sab service",
      "sab services",
      "sabhi services",
      "services ke bare",
      "services ke baare",
      "service details"
    ];

    const matchedServices = findServicesByMessage(lowerMessage);

    if (hasAnyKeyword(lowerMessage, allServicesWords)) {
      return buildAllServiceDetailsResponse(responseLanguage);
    }

    if (matchedServices.length > 1 && hasAnyKeyword(lowerMessage, detailWords)) {
      return matchedServices
        .map((service) => buildServiceDetailsResponse(service, responseLanguage))
        .join("\n\n--------------------\n\n");
    }

    if (matchedServices.length === 1) {
      return buildServiceDetailsResponse(matchedServices[0], responseLanguage);
    }

    const serviceMatch = findServiceByMessage(lowerMessage);
    if (serviceMatch) {
      return buildServiceDetailsResponse(serviceMatch, responseLanguage);
    }

    const serviceWords = ["service", "services", "what do you do", "offer", "portfolio", "sev", "सेवा", "kaam", "aap kya krte", "kya offer", "what can you do"];
    if (hasAnyKeyword(lowerMessage, serviceWords)) {
      return buildServicesListResponse(responseLanguage);
    }

    const pricingWords = ["price", "pricing", "cost", "charges", "rate", "quote", "budget", "कीमत", "price kitna", "kitna lagega", "cost kya hogi", "kharcha"];
    if (hasAnyKeyword(lowerMessage, pricingWords)) {
      return buildPricingResponse(responseLanguage);
    }

    const contactWords = ["contact", "phone", "email", "call", "reach", "संपर्क", "number", "kaise contact", "address"];
    if (hasAnyKeyword(lowerMessage, contactWords)) {
      return STATIC_RESPONSES[responseLanguage].contact;
    }

    const helpWords = ["help", "assist", "support", "madad", "मदद", "guide", "suggest"];
    if (hasAnyKeyword(lowerMessage, helpWords)) {
      return STATIC_RESPONSES[responseLanguage].help;
    }

    const howAreYouWords = ["how are you", "kese ho", "kaise ho", "kya haal", "kaisa hai"];
    if (hasAnyKeyword(lowerMessage, howAreYouWords)) {
      return STATIC_RESPONSES[responseLanguage].smallTalk;
    }

    const capabilityWords = ["what can you do", "tum kya kar sakte", "aap kya kar sakte", "capabilities", "kya kya", "who are you"];
    if (hasAnyKeyword(lowerMessage, capabilityWords)) {
      return STATIC_RESPONSES[responseLanguage].capabilities;
    }

    const basicKeywords = ["hello", "hi", "thank you", "thanks", "bye", "hii", "hey"];
    const matched = basicKeywords.find((keyword) => lowerMessage.includes(keyword));
    if (matched) {
      return STATIC_RESPONSES[responseLanguage][matched] || STATIC_RESPONSES[responseLanguage].default;
    }

    return `${STATIC_RESPONSES[responseLanguage].default}\n\n${buildServicesListResponse(responseLanguage)}`;
  };

  const getBotResponse = async (userMessage, preferredLanguage, recentMessages) => {
    if (CHAT_API_URL) {
      try {
        const res = await fetch(CHAT_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: userMessage,
            language: preferredLanguage,
            history: recentMessages,
            services: SERVICES
          })
        });

        if (res.ok) {
          const data = await res.json();
          if (typeof data?.reply === "string" && data.reply.trim()) {
            return data.reply;
          }
        }
      } catch {
        // Fail silently and fallback to deterministic local responses.
      }
    }

    return getRuleBasedResponse(userMessage, preferredLanguage);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const submittedText = input;
    const detectedLanguage = detectUserLanguage(submittedText);
    const targetThreadId = activeThread?.id;
    if (!targetThreadId) {
      return;
    }

    const recentMessages = messages.slice(-8).map((msg) => ({
      role: msg.sender === "user" ? "user" : "assistant",
      content: msg.text
    }));

    const userMessage = {
      id: Date.now(),
      text: submittedText,
      sender: "user",
      timestamp: new Date().toLocaleTimeString(detectedLanguage === "hi" ? "hi-IN" : "en-US", {
        hour: "2-digit",
        minute: "2-digit"
      })
    };

    updateThreadTitleIfNeeded(targetThreadId, submittedText, detectedLanguage);
    appendMessageToThread(targetThreadId, userMessage);
    setInput("");
    setIsTyping(true);

    setTimeout(async () => {
      const botResponse = {
        id: Date.now() + 1,
        text: await getBotResponse(submittedText, detectedLanguage, recentMessages),
        sender: "bot",
        timestamp: new Date().toLocaleTimeString(detectedLanguage === "hi" ? "hi-IN" : "en-US", {
          hour: "2-digit",
          minute: "2-digit"
        })
      };
      appendMessageToThread(targetThreadId, botResponse);
      setIsTyping(false);
    }, 900);
  };

  const clearHistory = () => {
    const currentThreadId = activeThread?.id;
    if (!currentThreadId) {
      return;
    }

    if (threads.length > 1) {
      const remainingThreads = threads.filter((thread) => thread.id !== currentThreadId);
      setThreads(remainingThreads);
      setActiveThreadId(remainingThreads[0]?.id || "");
      return;
    }

    setThreads((prev) =>
      prev.map((thread) => {
        if (thread.id !== currentThreadId) {
          return thread;
        }

        return {
          ...thread,
          title: DEFAULT_THREAD_TITLE,
          messages: [],
          updatedAt: Date.now()
        };
      })
    );
  };

  const t = TRANSLATIONS[language];

  return (
    <div className="chatbot-container">
      <button
        className="chatbot-button"
        onClick={() => setIsOpen(!isOpen)}
        title={isOpen ? "Close" : "Open Chat"}
      >
        {isOpen ? "✕" : <img src={assistantIcon} alt="Assistant" className="chatbot-button-icon" />}
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-info">
              <h4>{t.title}</h4>
              <span className="status">Online</span>
            </div>
            <button
              className="close-btn"
              onClick={() => setIsOpen(false)}
              title="Close"
            >
              ✕
            </button>
          </div>

          <div className="chat-session-controls">
            <label htmlFor="chat-thread-select" className="thread-label">
              {t.conversation}
            </label>
            <div className="thread-actions-row">
              <select
                id="chat-thread-select"
                className="thread-select"
                value={activeThread?.id || ""}
                onChange={(e) => setActiveThreadId(e.target.value)}
              >
                {threads
                  .slice()
                  .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
                  .map((thread) => (
                    <option key={thread.id} value={thread.id}>
                      {getThreadDisplayTitle(thread, language)}
                    </option>
                  ))}
              </select>

              <button type="button" className="new-chat-btn" onClick={startNewChat}>
                {t.newChat}
              </button>
            </div>
          </div>

          <div className="chatbot-messages">
            {messages.length === 0 ? (
              <div className="welcome-message">
                <p>
                  {language === "hi"
                    ? "👋 स्वागत है! मुझसे कुछ भी पूछें"
                    : "👋 Hello! Ask me anything!"}
                </p>
              </div>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`message ${msg.sender === "user" ? "user-message" : "bot-message"}`}
                >
                  <div className="message-content">
                    {msg.text}
                    <span className="message-time">{msg.timestamp}</span>
                  </div>
                </div>
              ))
            )}

            {isTyping && (
              <div className="message bot-message">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="chatbot-input">
            <input
              type="text"
              placeholder={t.placeholder}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isTyping}
            />
            <button type="submit" className="send-button" disabled={isTyping || !input.trim()}>
              📤
            </button>
          </form>

          <button className="clear-history-btn" onClick={clearHistory}>
            {t.clearHistory}
          </button>
        </div>
      )}
    </div>
  );
}
