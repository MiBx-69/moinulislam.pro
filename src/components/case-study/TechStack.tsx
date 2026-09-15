"use client";

import { CheckCircle2 } from "lucide-react";

const techStack = [
  { category: "Frontend", tools: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend & Data", tools: ["Supabase", "PostgreSQL", "Redis", "QStash"] },
  { category: "Integrations", tools: ["Shopify API", "Pathao Courier API", "Webhooks", "SMS APIs"] },
];

export function TechStack() {
  return (
    <section className="section-padding bg-white border-t border-[#E6E0D5]">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs font-mono tracking-widest uppercase text-[#177D63] block mb-4">
              Architecture
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#1F1B17]">
              Technology Stack
            </h2>
            <p className="text-[#5A534B] mt-4">
              Built for performance, scalability, and seamless API integration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techStack.map((group, i) => (
              <div key={i} className="bg-[#FBF9F4] rounded-2xl p-6 border border-[#E6E0D5]">
                <h3 className="font-semibold text-[#1F1B17] mb-4 border-b border-[#E6E0D5] pb-2">
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.tools.map((tool, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-[#5A534B]">
                      <CheckCircle2 size={14} className="text-[#177D63]" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
