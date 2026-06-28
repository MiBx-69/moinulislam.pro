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
  Search, TrendingUp, Cpu, Code2, ShoppingBag, BarChart2, Bot, Zap, Monitor, Layers,
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 20% 50%, rgba(23,125,99,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-label">Toolkit</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1F1B17] mb-4">
            Technical Skills
          </h2>
          <p className="text-[#5A534B] max-w-xl leading-relaxed">
            Tools, platforms, and technologies I use to build and deliver results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => {
            const Icon = ICON_MAP[group.icon] ?? Code2;
            const isBlue = i % 2 === 1;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.08 + i * 0.09 }}
                className="card-base p-5 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-2.5 rounded-xl transition-transform group-hover:scale-105"
                    style={{
                      background: isBlue
                        ? "rgba(191,130,48,0.1)"
                        : "rgba(23,125,99,0.1)",
                    }}
                  >
                    <Icon
                      size={15}
                      style={{ color: isBlue ? "#BF8230" : "#177D63" }}
                    />
                  </div>
                  <h3 className="font-heading font-bold text-[#1F1B17] text-sm">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={isBlue ? "tag tag-blue" : "tag"}
                    >
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
