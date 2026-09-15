import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "mibx-dispatch",
    title: "MiBx Dispatch",
    description:
      "A custom operations platform built to connect Shopify orders, fraud intelligence, bulk dispatch, courier tracking, delivery/return workflows, customer communication, finance and business reporting into one operational system.",
    tags: ["Next.js", "TypeScript", "Shopify API", "Automation", "Operations"]
  },
  {
    id: "investment-platform",
    title: "Investment Platform",
    description:
      "Full-stack investment platform with user/admin panels, tiered investment plans, referral system, and security-focused architecture.",
    tags: ["Next.js", "PostgreSQL", "Security", "Finance"],
  },
  {
    id: "pos-crm",
    title: "POS & CRM System",
    description:
      "Retail workflow automation featuring POS, customer management, refund/exchange processing, and SMS integration.",
    tags: ["Python", "PostgreSQL", "SMS API", "Retail Workflow"],
  },
  {
    id: "stock-inventory",
    title: "Stock & Inventory Management System",
    description:
      "Real-time inventory and multi-warehouse management with order lifecycle tracking, delivery assignment, and operational dashboard.",
    tags: ["Node.js", "PostgreSQL", "Logistics", "Operations"],
  },
  {
    id: "shopify-sms",
    title: "Shopify SMS Automation",
    description:
      "Shopify Webhook integration for automated order confirmation, shipping, and delivery notifications.",
    tags: ["Shopify API", "Webhooks", "SMS Gateway"],
  },
  {
    id: "review-platform",
    title: "Review Management Platform",
    description:
      "Review aggregation and reputation management system with issue detection and automated response workflows.",
    tags: ["Next.js", "API Integration", "Automation"],
  },
  {
    id: "mibrand-academy",
    title: "MiBrand Academy",
    description:
      "Learning management system handling course enrollment, student progress tracking, and certificate generation.",
    tags: ["Next.js", "TypeScript", "E-learning"],
  },
  {
    id: "mibx-fastlane",
    title: "MiBx FastLane",
    description:
      "Restaurant automation platform enabling QR ordering, digital menus, and seamless payment workflows without staff intervention.",
    tags: ["Next.js", "QR API", "SaaS"],
  },
  {
    id: "ai-automation",
    title: "AI Automation Systems",
    description:
      "High-volume processing architecture leveraging AI APIs, background jobs, and Redis for scalable automation workflows.",
    tags: ["Python", "AI APIs", "Redis", "Architecture"],
  },
];
