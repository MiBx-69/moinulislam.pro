"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { education, languages } from "@/data";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 70% 40%, rgba(59,130,246,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-label">Background</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education & Certs */}
          <div>
            <p className="text-[10px] font-mono text-[#64748B] uppercase tracking-widest mb-5 font-semibold">
              Credentials
            </p>
            <div className="flex flex-col gap-3">
              {education.map((item, i) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: -18 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="card-base flex items-start gap-3.5 p-4 group"
                >
                  <div
                    className="mt-0.5 p-2.5 rounded-xl flex-shrink-0 transition-transform group-hover:scale-105"
                    style={{
                      background:
                        item.type === "degree"
                          ? "rgba(0,217,255,0.09)"
                          : "rgba(59,130,246,0.09)",
                    }}
                  >
                    {item.type === "degree" ? (
                      <GraduationCap size={14} className="text-[#00D9FF]" />
                    ) : (
                      <Award size={14} className="text-[#3B82F6]" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-semibold leading-snug mb-0.5">
                      {item.degree}
                    </p>
                    <p className="text-[#64748B] text-xs mb-2">{item.institution}</p>
                    <span
                      className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${
                        item.type === "degree"
                          ? "bg-[rgba(0,217,255,0.08)] text-[#00D9FF] border-[rgba(0,217,255,0.2)]"
                          : "bg-[rgba(59,130,246,0.08)] text-[#3B82F6] border-[rgba(59,130,246,0.2)]"
                      }`}
                    >
                      {item.type === "degree" ? "Degree" : "Certification"}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <p className="text-[10px] font-mono text-[#64748B] uppercase tracking-widest mb-5 font-semibold">
              Languages
            </p>
            <div className="flex flex-col gap-7">
              {languages.map((lang, i) => (
                <motion.div
                  key={lang.language}
                  initial={{ opacity: 0, x: 18 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-white text-sm font-bold">{lang.language}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[rgba(0,217,255,0.08)] text-[#00D9FF] border border-[rgba(0,217,255,0.18)]">
                        {lang.level}
                      </span>
                    </div>
                    <span className="text-[#00D9FF] text-xs font-mono font-bold">{lang.percent}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#1a2640] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${lang.percent}%` } : { width: 0 }}
                      transition={{ duration: 1.0, delay: 0.4 + i * 0.18, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #00D9FF, #3B82F6)",
                        boxShadow: "0 0 8px rgba(0,217,255,0.4)",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
