import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "mibx-dispatch",
    title: "MiBx Dispatch — E-commerce Operations ERP",
    description:
      "A production e-commerce operations platform connecting Shopify order workflows with courier dispatch, delivery states, returns, finance tracking, fraud checks, SMS notifications, reporting, and live operational KPIs.",
    tags: ["Next.js", "TypeScript", "Shopify API", "Pathao API", "Webhooks", "PostgreSQL", "Automation"],
    image: "/projects/mibx-dispatch/hero-demo.png",
    gallery: [
      "/projects/mibx-dispatch/dashboard.png",
      "/projects/mibx-dispatch/orders.png",
      "/projects/mibx-dispatch/dispatches.png",
      "/projects/mibx-dispatch/report.png",
      "/projects/mibx-dispatch/finance.png",
      "/projects/mibx-dispatch/settings.png",
      "/projects/mibx-dispatch/mobile-dashboard.png",
      "/projects/mibx-dispatch/mobile-orders.png",
      "/projects/mibx-dispatch/mobile-report.png",
      "/projects/mibx-dispatch/mobil-setting.png",
    ],
    liveUrl: "https://orders.universesraw.com",
    githubUrl: "https://github.com/MiBx-69/mibx-69",
    category: "Featured · E-commerce Automation",
    featured: true,
    metrics: [
      { label: "Dispatch capacity", value: "1,000+ orders" },
      { label: "Operational workflows", value: "End-to-end" },
      { label: "Sync", value: "Real-time webhook + on-demand" },
      { label: "Reporting", value: "CSV + PDF analytics" },
    ],
  },
  {
    id: "pos-crm",
    title: "Custom POS & CRM System",
    description:
      "Full-stack point-of-sale and CRM platform with automation, refund/exchange workflows, customer lifecycle management, and notification pipelines designed to reduce repetitive retail operations.",
    tags: ["Python", "PostgreSQL", "SMS API", "Automation", "CRM", "Full-Stack"],
    category: "Business Automation",
  },
  {
    id: "shopify-sms",
    title: "Shopify SMS Webhook Automation",
    description:
      "Real-time Shopify API and webhook integration that automates order confirmations, shipping updates, delivery notifications, and customer communication events.",
    tags: ["Shopify API", "Webhooks", "Node.js", "SMS Gateway", "E-commerce"],
    category: "E-commerce Automation",
  },
  {
    id: "shopify-stores",
    title: "Advanced Shopify E-commerce Websites",
    description:
      "UX-, SEO-, and conversion-focused Shopify storefronts for premium brands, combining storefront engineering, technical SEO, paid acquisition, and CRO.",
    tags: ["Shopify", "SEO", "Liquid", "Meta Ads", "CRO"],
    category: "E-commerce Growth",
    metrics: [
      { label: "Monthly revenue", value: "BDT 10+ lakh" },
      { label: "Ad spend", value: "Under BDT 1 lakh" },
    ],
  },
  {
    id: "review-platform",
    title: "Custom Review Management Platform",
    description:
      "Multi-channel feedback and reputation management platform that centralizes customer reviews, flags issues, and supports automated response workflows.",
    tags: ["Next.js", "Node.js", "API Integration", "PostgreSQL", "Automation"],
    category: "SaaS & Automation",
  },
  {
    id: "telegram-bots",
    title: "Telegram Automation Bots",
    description:
      "A suite of Telegram automation tools spanning OTP verification, admin workflows, proxy rotation, and high-volume messaging operations.",
    tags: ["Python", "Telegram API", "PostgreSQL", "Redis", "Linux"],
    category: "Automation Engineering",
  },
  {
    id: "mibrand-academy",
    title: "MiBrand Academy",
    description:
      "SEO and freelancing training platform with course management, learner progress tracking, certificates, and structured learning journeys.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "E-learning"],
    category: "Education Platform",
  },
  {
    id: "mibx-fastlane",
    title: "MiBx FastLane",
    description:
      "QR-first restaurant automation system where customers browse menus, place orders, and pay digitally while staff get a streamlined order and billing workflow.",
    tags: ["Next.js", "QR API", "Node.js", "PostgreSQL", "SaaS"],
    category: "SaaS & Operations",
  },
  {
    id: "ai-automation",
    title: "Large-Scale AI Automation Systems",
    description:
      "AI-driven automation architecture built for high-throughput workflows, API orchestration, secure processing, and reliable background execution.",
    tags: ["Python", "AI APIs", "Redis", "Docker", "PostgreSQL"],
    category: "AI Engineering",
    metrics: [{ label: "Workflow throughput", value: "1,000+ / sec" }],
  },
  {
    id: "investment-platform",
    title: "Complete Investment Platform",
    description:
      "End-to-end investment platform with separate customer and admin experiences, tiered plans, deposits, withdrawals, referral mechanics, rewards, purchases, and hardened security workflows.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Security", "Admin Panel", "Production"],
    category: "FinTech Platform",
  },
  {
    id: "ecommerce-stock-delivery",
    title: "AI-Built Stock & Delivery Management System",
    description:
      "Operational inventory and delivery system for online businesses with real-time stock control, multi-warehouse inventory, order lifecycle management, courier assignment, and live dashboards.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AI Coding", "Logistics", "E-commerce"],
    category: "Featured · Logistics Automation",
  },
];
