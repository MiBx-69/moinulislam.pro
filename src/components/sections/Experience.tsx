"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown, MapPin, Briefcase, CheckCircle } from "lucide-react";
import { experiences } from "@/data";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openId, setOpenId] = useState<string | null>("universes");

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-mono font-medium tracking-widest uppercase text-[#00D9FF] block mb-3">
            Career
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Professional Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-[#1E293B] hidden sm:block" />

          <div className="flex flex-col gap-3">
            {experiences.map((exp, i) => {
              const isOpen = openId === exp.id;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.09 }}
                  className="sm:pl-12 relative"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2.5 top-5 w-3 h-3 rounded-full border-2 hidden sm:block -translate-x-1/2 transition-colors duration-300 ${
                      exp.current
                        ? "bg-[#00D9FF] border-[#00D9FF] shadow-[0_0_8px_rgba(0,217,255,0.6)]"
                        : "bg-[#1E293B] border-[#334155]"
                    }`}
                  />

                  <button
                    onClick={() => setOpenId(isOpen ? null : exp.id)}
                    className="w-full text-left card-base p-5 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="font-heading font-semibold text-white text-base">
                            {exp.role}
                          </span>
                          {exp.current && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[rgba(0,217,255,0.1)] text-[#00D9FF] border border-[rgba(0,217,255,0.2)]">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-[#64748B]">
                          <span className="flex items-center gap-1">
                            <Briefcase size={12} />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      <ChevronDown
                        size={16}
                        className={`flex-shrink-0 text-[#64748B] transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 border-t border-[#1E293B]">
                            <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                              {exp.description}
                            </p>
                            <ul className="space-y-2">
                              {exp.highlights.map((h) => (
                                <li key={h} className="flex items-start gap-2.5">
                                  <CheckCircle
                                    size={13}
                                    className="text-[#00D9FF] mt-0.5 flex-shrink-0"
                                  />
                                  <span className="text-[#94A3B8] text-sm">{h}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
