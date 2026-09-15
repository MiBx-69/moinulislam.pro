"use client";

import Image from "next/image";
import { DemoImage } from "@/components/ui/DemoImage";

const features = [
  {
    title: "Order Lifecycle Management",
    description: "Full visibility into Preparing, On Hold, Dispatched, Delivered, Partial Delivery, Cancelled, and Returned states.",
    highlights: ["Dispatch", "WhatsApp", "SMS", "Report", "Fraud Check"],
    image: "/demo-data/orders.png",
    reverse: false
  },
  {
    title: "Core Logistics Workflow",
    description: "Seamless courier dispatch with bulk selection, CSV import/export, period filtering, and status management.",
    highlights: ["Courier Integration", "Tracking", "Bulk Actions", "Status Sync"],
    image: "/demo-data/dispatches.png",
    reverse: true
  },
  {
    title: "Business Intelligence Reporting",
    description: "Comprehensive analytics covering total orders, success rates, revenue trends, and delivery pending amounts.",
    highlights: ["All-in-One CSV", "Summary PDF", "Zone Analytics", "COD Analytics"],
    image: "/demo-data/report.png",
    reverse: false
  },
  {
    title: "Operational Finance Visibility",
    description: "Track available fund balance, bank/cash received, operating expenses, and recent transactions centrally.",
    highlights: ["Expense Categories", "Received Funds", "Financial Visibility"],
    image: "/demo-data/finance.png",
    reverse: true
  },
  {
    title: "System Integrations",
    description: "The platform acts as a central hub, connecting Shopify, Pathao Courier, Webhooks, Fraud & Risk APIs, and SMS notifications.",
    highlights: ["Shopify Sync", "Webhooks", "Team Management", "Shipping & Returns"],
    image: "/demo-data/settings.png",
    reverse: false
  }
];

export function FeatureShowcase() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        
        <div className="text-center mb-24">
          <span className="text-xs font-mono tracking-widest uppercase text-[#177D63] block mb-4">
            Feature Deep Dive
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1F1B17]">
            Purpose-Built for Operations
          </h2>
        </div>

        <div className="space-y-32">
          {features.map((feature, idx) => (
            <div key={idx} className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
              
              <div className="flex-1 space-y-6">
                <h3 className="font-display text-3xl font-semibold text-[#1F1B17]">
                  {feature.title}
                </h3>
                <p className="text-[#5A534B] text-lg leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  {feature.highlights.map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-lg bg-[#F4F1EA] text-[#5A534B] text-xs font-semibold border border-[#E6E0D5]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-1 w-full relative">
                <DemoImage 
                  src={feature.image} 
                  alt={feature.title} 
                  type="browser"
                  imageClassName="drop-shadow-xl" 
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
