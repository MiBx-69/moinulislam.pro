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
    <section id="experience" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(23,125,99,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-label">Career</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1F1B17] mb-4">
            Professional Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 top-3 bottom-3 w-px hidden sm:block" style={{ background: "linear-gradient(to bottom, rgba(23,125,99,0.3), rgba(23,125,99,0.05))" }} />

          <div className="flex flex-col gap-3">
            {experiences.map((exp, i) => {
              const isOpen = openId === exp.id;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.08 + i * 0.1 }}
                  className="sm:pl-14 relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-5 top-6 hidden sm:flex items-center justify-center -translate-x-1/2">
                    {exp.current ? (
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#177D63] opacity-40" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#177D63] shadow-[0_0_8px_rgba(23,125,99,0.8)]" />
                      </span>
                    ) : (
                      <span className="h-2.5 w-2.5 rounded-full bg-[#E6E0D5] border border-[#C9C0B2]" />
                    )}
                  </div>

                  <button
                    onClick={() => setOpenId(isOpen ? null : exp.id)}
                    className="w-full text-left card-base p-5 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="font-heading font-bold text-[#1F1B17] text-base leading-snug">
                            {exp.role}
                          </span>
                          {exp.current && (
                            <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[rgba(23,125,99,0.1)] text-[#177D63] border border-[rgba(23,125,99,0.25)]">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-[#8C8278]">
                          <span className="flex items-center gap-1.5">
                            <Briefcase size={11} />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={11} />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      <ChevronDown
                        size={15}
                        className={`flex-shrink-0 text-[#8C8278] transition-transform duration-300 mt-0.5 ${
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
                          <div className="mt-4 pt-4 border-t border-[#E6E0D5]">
                            <p className="text-[#5A534B] text-sm leading-relaxed mb-4">
                              {exp.description}
                            </p>
                            <ul className="space-y-2">
                              {exp.highlights.map((h) => (
                                <li key={h} className="flex items-start gap-2.5">
                                  <CheckCircle
                                    size={13}
                                    className="text-[#177D63] mt-0.5 flex-shrink-0"
                                  />
                                  <span className="text-[#5A534B] text-sm">{h}</span>
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
