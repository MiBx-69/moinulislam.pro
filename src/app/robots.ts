import type { MetadataRoute } from "next";

const SITE_URL = "https://moinulislam.pro";

/**
 * robots.txt — allow all standard search engines AND AI crawlers
 * (GPTBot, ClaudeBot, Google-Extended, PerplexityBot, etc.) so the
 * content can be indexed, extracted and cited by LLM/answer engines.
 */
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "Google-Extended",
    "GoogleOther",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "PerplexityBot",
    "Perplexity-User",
    "CCBot",
    "Applebot",
    "Applebot-Extended",
    "Amazonbot",
    "Bytespider",
    "Meta-ExternalAgent",
    "cohere-ai",
    "YouBot",
    "DuckAssistBot",
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiBots.map((bot) => ({ userAgent: bot, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
