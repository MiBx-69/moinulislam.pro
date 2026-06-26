"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  TrendingUp,
  Cpu,
  Code2,
  ShoppingBag,
  BarChart2,
  Bot,
  Zap,
  Monitor,
  Layers,
} from "lucide-react";
import { skillGroups } from "@/data";

const ICON_MAP: Record<string, React.ElementType> = {
  Search,
  TrendingUp,
  Cpu,
  Code2,
  ShoppingBag,
  BarChart2,
  Bot,
  Zap,
  Monitor,
  Layers,
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-mono font-medium tracking-widest uppercase text-[#00D9FF] block mb-3">
            Toolkit
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-[#94A3B8] max-w-xl">
            Tools, platforms, and technologies I use to build and deliver results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => {
            const Icon = ICON_MAP[group.icon] ?? Code2;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="card-base p-5"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-2 rounded-lg bg-[rgba(0,217,255,0.08)]">
                    <Icon size={15} className="text-[#00D9FF]" />
                  </div>
                  <h3 className="font-heading font-semibold text-white text-sm">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
