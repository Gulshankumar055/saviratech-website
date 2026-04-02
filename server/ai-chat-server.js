import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import { SERVICES } from "../src/data/servicesData.js";

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 8787);
const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";

app.use(cors());
app.use(express.json({ limit: "1mb" }));

const hasApiKey = Boolean(process.env.OPENAI_API_KEY);
const openai = hasApiKey ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null;

const serviceSummary = SERVICES.map((s) => ({
  title: s.title,
  price: s.priceValue,
  timeline: s.timeline,
  features: s.features,
  bestFor: s.bestFor,
  support: s.support,
}));

const systemPrompt = `You are Saviratech's AI sales and support assistant.

Rules:
- Be accurate, concise, and professional.
- Always reply in the same language as the user's latest message (support multilingual and Hinglish).
- Prefer Saviratech services information for pricing/timeline/feature questions.
- If user asks unrelated general question, still answer helpfully.
- Never invent company-specific commitments not in provided data.
- If exact price depends on scope, say that clearly and ask 1-2 clarifying questions.

Saviratech services data (source of truth):
${JSON.stringify(serviceSummary, null, 2)}
`;

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, aiConfigured: hasApiKey, model });
});

app.post("/api/chat", async (req, res) => {
  try {
    const message = String(req.body?.message || "").trim();
    const language = String(req.body?.language || "en").toLowerCase();
    const history = Array.isArray(req.body?.history) ? req.body.history : [];

    if (!message) {
      return res.status(400).json({ reply: "Please send a valid message." });
    }

    if (!openai) {
      return res.status(503).json({
        reply:
          language === "hi"
            ? "AI server configured nahi hai. OPENAI_API_KEY set karein."
            : "AI server is not configured. Set OPENAI_API_KEY.",
      });
    }

    const response = await openai.chat.completions.create({
      model,
      temperature: 0.4,
      messages: [
        { role: "system", content: systemPrompt },
        {
          role: "system",
          content:
            language === "hi"
              ? "User likely used Hindi/Hinglish. Prefer Hindi/Hinglish response tone."
              : "Reply in the same language the user uses in the latest message.",
        },
        ...history
          .slice(-8)
          .filter((item) => item && typeof item.content === "string" && (item.role === "user" || item.role === "assistant"))
          .map((item) => ({ role: item.role, content: item.content })),
        { role: "user", content: message },
      ],
    });

    const reply = response.choices?.[0]?.message?.content?.trim();
    if (!reply) {
      return res.status(502).json({ reply: "I could not generate a reply right now. Please try again." });
    }

    return res.json({ reply });
  } catch (error) {
    console.error("/api/chat error", error);
    return res.status(500).json({ reply: "Something went wrong. Please try again." });
  }
});

app.listen(port, () => {
  console.log(`AI chat server running on http://localhost:${port}`);
  console.log(`Model: ${model}`);
  console.log(`OPENAI_API_KEY configured: ${hasApiKey ? "yes" : "no"}`);
});
