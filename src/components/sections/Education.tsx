"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { education, languages } from "@/data";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-mono font-medium tracking-widest uppercase text-[#00D9FF] block mb-3">
            Background
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Education & Certs */}
          <div>
            <h3 className="text-xs font-mono text-[#64748B] uppercase tracking-widest mb-5">
              Credentials
            </h3>
            <div className="flex flex-col gap-3">
              {education.map((item, i) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="card-base flex items-start gap-3.5 p-4"
                >
                  <div className="mt-0.5 p-2 rounded-lg bg-[rgba(0,217,255,0.08)] flex-shrink-0">
                    {item.type === "degree" ? (
                      <GraduationCap size={15} className="text-[#00D9FF]" />
                    ) : (
                      <Award size={15} className="text-[#3B82F6]" />
                    )}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold leading-snug">
                      {item.degree}
                    </p>
                    <p className="text-[#64748B] text-xs mt-0.5">{item.institution}</p>
                    <span
                      className={`mt-1.5 inline-block text-[10px] font-mono px-2 py-0.5 rounded-full border ${
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
            <h3 className="text-xs font-mono text-[#64748B] uppercase tracking-widest mb-5">
              Languages
            </h3>
            <div className="flex flex-col gap-5">
              {languages.map((lang, i) => (
                <motion.div
                  key={lang.language}
                  initial={{ opacity: 0, x: 16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-white text-sm font-semibold">
                        {lang.language}
                      </span>
                      <span className="text-[#64748B] text-xs ml-2">{lang.level}</span>
                    </div>
                    <span className="text-[#00D9FF] text-xs font-mono">{lang.percent}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#1E293B] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${lang.percent}%` } : { width: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 + i * 0.15, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #00D9FF, #3B82F6)",
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
