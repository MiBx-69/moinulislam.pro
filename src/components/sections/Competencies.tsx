"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { competencies } from "@/data";
import {
  Search,
  TrendingUp,
  Bot,
  ShoppingBag,
  Users,
  BarChart2,
  Zap,
  Shield,
  Target,
  Briefcase,
  PenTool,
  Share2,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Search,
  TrendingUp,
  Bot,
  ShoppingBag,
  Users,
  BarChart2,
  Zap,
  Shield,
  Target,
  Briefcase,
  PenTool,
  Share2,
};

export function Competencies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="competencies" className="section-padding" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-mono font-medium tracking-widest uppercase text-[#00D9FF] block mb-3">
            What I Do
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Core Competencies
          </h2>
          <p className="text-[#94A3B8] max-w-xl">
            A broad set of skills covering digital growth, technical systems, and business operations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {competencies.map((item, i) => {
            const Icon = ICON_MAP[item.icon] ?? Search;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                className="card-base flex items-start gap-3 p-4"
              >
                <div className="mt-0.5 p-2 rounded-lg bg-[rgba(0,217,255,0.08)] flex-shrink-0">
                  <Icon size={16} className="text-[#00D9FF]" />
                </div>
                <span className="text-sm text-[#94A3B8] leading-snug">{item.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
