"use client";

import { XCircle } from "lucide-react";

const problems = [
  "Daily order processing required repetitive manual work",
  "Handling roughly 50–100 orders per day created operational bottlenecks",
  "Delivery status and return workflows were difficult to manage manually",
  "Sales and operational reports required repetitive manual preparation",
  "Delivery-related customer communication required manual intervention",
  "Courier dispatch, tracking and status updates were fragmented",
  "Delivery value, returns, collections and expenses needed centralized visibility",
  "Order verification and fraud checking needed to happen inside the workflow",
];

const architectureSteps = [
  { name: "Shopify", desc: "Order Origin" },
  { name: "Order Management", desc: "Centralized Sync" },
  { name: "Fraud / Risk Check", desc: "Automated Verification" },
  { name: "Bulk Dispatch", desc: "Courier Integration" },
  { name: "Delivery Tracking", desc: "Real-time Updates" },
  { name: "Customer SMS", desc: "Automated Comms" },
  { name: "Returns & Finance", desc: "Full Visibility" },
  { name: "Analytics", desc: "KPI Reporting" },
];

export function ProblemSolution() {
  return (
    <section className="section-padding bg-[#FBF9F4]">
      <div className="container-wide">
        
        {/* Problems */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-[#FF5F56] block mb-4">
              The Challenge
            </span>
            <h3 className="font-display text-3xl md:text-4xl font-semibold text-[#1F1B17] mb-6">
              Manual Operations Bottleneck
            </h3>
            <p className="text-[#5A534B] leading-relaxed mb-8">
              Processing 50-100 daily orders through a fragmented system of Shopify, courier dashboards, and spreadsheets created massive overhead. Critical operational steps were siloed, leading to inefficiencies, delayed reporting, and manual error.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 border border-[#E6E0D5] shadow-sm">
            <h4 className="font-semibold text-[#1F1B17] mb-6 flex items-center gap-2">
              <XCircle className="text-[#FF5F56]" size={20} /> Key Friction Points
            </h4>
            <ul className="space-y-4">
              {problems.map((prob, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#5A534B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F56] mt-1.5 flex-shrink-0" />
                  {prob}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Solution & Architecture */}
        <div className="relative">
          <div className="text-center mb-16">
            <span className="text-xs font-mono tracking-widest uppercase text-[#177D63] block mb-4">
              The Solution
            </span>
            <h3 className="font-display text-3xl md:text-4xl font-semibold text-[#1F1B17] mb-6">
              A Unified Operational Workflow
            </h3>
            <p className="text-[#5A534B] leading-relaxed max-w-2xl mx-auto">
              MiBx Dispatch centralizes the entire operational lifecycle, removing friction from order entry to final financial reconciliation.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="hidden lg:flex items-center justify-between w-full max-w-5xl relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#E6E0D5] -translate-y-1/2 z-0" />
              {architectureSteps.map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center group">
                  <div className="w-12 h-12 rounded-xl bg-white border-2 border-[#177D63] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-3">
                    <span className="font-mono text-[#177D63] text-sm font-bold">{i + 1}</span>
                  </div>
                  <p className="font-semibold text-[#1F1B17] text-xs text-center">{step.name}</p>
                </div>
              ))}
            </div>

            <div className="lg:hidden flex flex-col gap-4 relative">
              <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-[#E6E0D5] z-0" />
              {architectureSteps.map((step, i) => (
                <div key={i} className="relative z-10 flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white border-2 border-[#177D63] flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="font-mono text-[#177D63] text-sm font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1F1B17] text-sm">{step.name}</p>
                    <p className="text-[#8C8278] text-xs">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
