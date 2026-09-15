import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "mibx-dispatch",
    title: "MiBx Dispatch",
    description: "A custom operations platform built to connect Shopify orders, fraud intelligence, bulk dispatch, courier tracking, delivery/return workflows, customer communication, finance and business reporting into one operational system.",
    fullDescription: "MiBx Dispatch is an AI-powered order management and courier dispatch platform designed to centralize and automate complex ecommerce operations. By integrating deeply with Shopify and multiple local couriers, the system handles the entire post-purchase workflow from fraud detection and bulk dispatch to real-time tracking, return management, and financial reconciliation.",
    category: "Operations",
    year: "2023",
    role: "Lead Systems Architect",
    status: "Completed",
    featured: true,
    image: "/demo-data/dashboard.png",
    imageType: "browser",
    tags: ["Next.js", "TypeScript", "Shopify API", "Automation", "Operations"],
    problem: [
      "Manual order entry, dispatch processing, reporting, and return management consumed significant operational time.",
      "The lack of a unified dashboard meant teams were constantly switching between Shopify, courier portals, and spreadsheets, leading to errors and delays."
    ],
    solution: [
      "A centralized order and courier operations platform featuring bulk dispatch, automated reporting, delivery management, and return workflows.",
      "The system acts as the single source of truth, automating status updates back to Shopify and notifying customers via SMS automatically."
    ],
    features: [
      "Bulk dispatch & waybill generation",
      "Shopify order synchronization",
      "Multi-courier API integrations",
      "Delivery & Return management",
      "COD & financial reconciliation",
      "Sales & KPI reporting dashboards",
      "Automated customer communication"
    ],
    results: [
      { value: "15+", label: "Problems Solved" },
      { value: "~25%", label: "Workload Reduced" },
      { value: "1K+", label: "Bulk Processing" }
    ]
  },
  {
    id: "investment-platform",
    title: "Investment Platform",
    description: "Full-stack investment platform with user/admin panels, tiered investment plans, referral system, and security-focused architecture.",
    fullDescription: "A comprehensive investment management platform providing secure user portals for tracking investments, managing tiered plans, and processing deposits/withdrawals. The platform includes a robust admin backend for monitoring transactions, user verification, and referral network management.",
    category: "Finance",
    year: "2023",
    role: "Full Stack Developer",
    status: "Completed",
    featured: false,
    tags: ["Next.js", "PostgreSQL", "Security", "Finance"],
    problem: [
      "Managing investment portfolios and tracking user deposits manually is prone to errors and lacks scalability.",
      "Users needed a secure, transparent portal to view their ROI and manage referrals."
    ],
    solution: [
      "Developed a full-stack, highly secure platform with automated ROI calculations and tiered plan management.",
      "Built a comprehensive administrative dashboard for KYC, transaction approval, and system auditing."
    ],
    features: [
      "Tiered investment plans",
      "Multi-level referral system",
      "Secure deposit & withdrawal workflows",
      "Real-time ROI tracking",
      "Admin transaction management"
    ]
  },
  {
    id: "pos-crm",
    title: "POS & CRM System",
    description: "Retail workflow automation featuring POS, customer management, refund/exchange processing, and SMS integration.",
    category: "Operations",
    year: "2022",
    role: "Backend Engineer",
    status: "Completed",
    featured: false,
    tags: ["Python", "PostgreSQL", "SMS API", "Retail Workflow"],
    problem: [
      "Retail locations were using fragmented systems for point-of-sale, customer relationship management, and inventory."
    ],
    solution: [
      "Unified the retail workflow into a single application that handles POS transactions, customer profiles, and automated SMS receipts."
    ],
    features: [
      "Point of Sale (POS) interface",
      "Customer Relationship Management (CRM)",
      "Refund and exchange workflows",
      "Automated SMS notifications",
      "Inventory synchronization"
    ]
  },
  {
    id: "stock-inventory",
    title: "Stock & Inventory Management",
    description: "Real-time inventory and multi-warehouse management with order lifecycle tracking, delivery assignment, and operational dashboard.",
    category: "Logistics",
    year: "2022",
    status: "Completed",
    featured: false,
    tags: ["Node.js", "PostgreSQL", "Logistics", "Operations"],
    problem: [
      "Tracking stock across multiple warehouses resulted in inventory discrepancies and delayed fulfillment."
    ],
    solution: [
      "Implemented a real-time tracking system that synchronizes stock levels, manages purchase orders, and assigns deliveries efficiently."
    ],
    features: [
      "Multi-warehouse tracking",
      "Order lifecycle management",
      "Delivery assignment routing",
      "Low-stock alerts",
      "Operational reporting"
    ]
  },
  {
    id: "shopify-sms",
    title: "Shopify SMS Automation",
    description: "Shopify Webhook integration for automated order confirmation, shipping, and delivery notifications.",
    category: "Shopify",
    year: "2023",
    status: "Completed",
    featured: false,
    tags: ["Shopify API", "Webhooks", "SMS Gateway"],
    problem: [
      "Customer support was overwhelmed with 'where is my order' inquiries due to lack of proactive communication."
    ],
    solution: [
      "Built a middleware application that consumes Shopify webhooks and triggers intelligent SMS notifications at key fulfillment stages."
    ],
    features: [
      "Webhook ingestion engine",
      "Dynamic SMS templates",
      "Order confirmation alerts",
      "Out-for-delivery notifications"
    ]
  },
  {
    id: "review-platform",
    title: "Review Management Platform",
    description: "Review aggregation and reputation management system with issue detection and automated response workflows.",
    category: "Software & SaaS",
    year: "2024",
    status: "Completed",
    featured: false,
    tags: ["Next.js", "API Integration", "Automation"],
    problem: [
      "Monitoring and responding to customer reviews across multiple platforms was a manual, time-consuming process."
    ],
    solution: [
      "Created an aggregation dashboard that centralizes reviews, highlights urgent issues, and streamlines the response workflow."
    ],
    features: [
      "Multi-platform review aggregation",
      "Sentiment analysis & issue detection",
      "Automated response templates",
      "Reputation reporting"
    ]
  },
  {
    id: "mibrand-academy",
    title: "MiBrand Academy",
    description: "Learning management system handling course enrollment, student progress tracking, and certificate generation.",
    category: "Software & SaaS",
    year: "2023",
    status: "Completed",
    featured: false,
    tags: ["Next.js", "TypeScript", "E-learning"],
    problem: [
      "Needed a branded, centralized platform for onboarding and training."
    ],
    solution: [
      "Developed a custom LMS that handles video streaming, progress tracking, and automated certification upon completion."
    ],
    features: [
      "Course enrollment workflows",
      "Student progress tracking",
      "Automated PDF certificate generation",
      "Admin curriculum management"
    ]
  },
  {
    id: "mibx-fastlane",
    title: "MiBx FastLane",
    description: "Restaurant automation platform enabling QR ordering, digital menus, and seamless payment workflows without staff intervention.",
    category: "Software & SaaS",
    year: "2024",
    status: "Completed",
    featured: false,
    tags: ["Next.js", "QR API", "SaaS"],
    problem: [
      "High staffing costs and ordering delays during peak restaurant hours."
    ],
    solution: [
      "Built a seamless self-service platform where customers can scan, order, and pay directly from their tables using their smartphones."
    ],
    features: [
      "Dynamic QR code generation",
      "Real-time digital menus",
      "Contactless payments",
      "Kitchen Display System (KDS) integration"
    ]
  },
  {
    id: "ai-automation",
    title: "AI Automation Systems",
    description: "High-volume processing architecture leveraging AI APIs, background jobs, and Redis for scalable automation workflows.",
    category: "AI",
    year: "2024",
    status: "Completed",
    featured: false,
    tags: ["Python", "AI APIs", "Redis", "Architecture"],
    problem: [
      "Manual data processing and categorization could not scale with increased business volume."
    ],
    solution: [
      "Designed a distributed asynchronous architecture that utilizes AI to automatically categorize, tag, and process incoming data streams."
    ],
    features: [
      "Asynchronous background processing",
      "AI-driven data categorization",
      "Redis message brokering",
      "Scalable worker architecture"
    ]
  }
];
