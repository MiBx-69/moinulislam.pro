import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "custom-pos-crm",
    title: "Custom POS & CRM System",
    description:
      "Full-stack point-of-sale and CRM platform with automation, refund/exchange workflows, and SMS notifications. Built to streamline retail operations end-to-end.",
    tech: ["Python", "JavaScript", "PostgreSQL", "SMS API", "Redis"],
    featured: true,
    status: "live",
  },
  {
    id: "mibx-fastlane",
    title: "MiBx FastLane",
    description:
      "QR-based restaurant automation system handling order management and billing workflows. Customers scan, order, and pay — zero friction, zero manual entry.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "QR API", "Tailwind CSS"],
    featured: true,
    status: "live",
  },
  {
    id: "shopify-sms-webhook",
    title: "Shopify SMS Webhook Automation",
    description:
      "Real-time API integration for Shopify stores that sends automated order confirmation, shipping updates, and delivery notifications via SMS.",
    tech: ["Shopify API", "Node.js", "Webhook", "SMS Gateway", "JavaScript"],
    featured: true,
    status: "live",
  },
  {
    id: "mibrand-academy",
    title: "MiBrand Academy",
    description:
      "SEO and freelancing training platform with full course management, student progress tracking, and certification features. Built to scale online education.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Stripe"],
    featured: true,
    status: "live",
  },
  {
    id: "ai-automation-system",
    title: "Large-Scale AI Automation System",
    description:
      "Secure AI-driven automation architecture handling 1,000+ workflow processes per second. Designed for scalability, reliability, and enterprise-level throughput.",
    tech: ["Python", "AI APIs", "Redis", "Docker", "PostgreSQL"],
    featured: false,
    status: "live",
  },
  {
    id: "telegram-bots",
    title: "Telegram Automation Bots",
    description:
      "Suite of Telegram bots including OTP systems, proxy rotation tools, and admin dashboard bots. Scalable architecture for high-volume messaging automation.",
    tech: ["Python", "Telegram API", "PostgreSQL", "Redis", "Linux"],
    featured: false,
    status: "live",
  },
  {
    id: "review-management",
    title: "Custom Review Management Platform",
    description:
      "Multi-channel feedback collection and reputation management system that aggregates reviews, flags issues, and automates response workflows.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "API Integration", "Tailwind CSS"],
    featured: false,
    status: "live",
  },
  {
    id: "shopify-stores",
    title: "Advanced Shopify E-commerce Stores",
    description:
      "UX-, SEO-, and conversion-optimized Shopify storefronts for premium brands. Generated BDT 10+ lakh/month with under BDT 1 lakh ad spend.",
    tech: ["Shopify", "Liquid", "JavaScript", "SEO", "Meta Ads"],
    featured: false,
    status: "live",
  },
];
