"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ParallaxDecor } from "@/components/ui/ParallaxDecor";
import { GraduationCap, Award, ExternalLink, Star } from "lucide-react";
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
            "radial-gradient(ellipse 50% 40% at 70% 40%, rgba(191,130,48,0.04) 0%, transparent 70%)",
        }}
      />

      <ParallaxDecor flip />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-label">08 · Background</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1F1B17] tracking-[-0.01em] mb-4">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education & Certs */}
          <div>
            <p className="text-[10px] font-mono text-[#8C8278] uppercase tracking-widest mb-5 font-semibold">
              Credentials
            </p>
            <div className="flex flex-col gap-3">
              {education.map((item, i) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: -18 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className={`card-base flex items-start gap-3.5 p-4 group ${
                    item.featured
                      ? "!border-[rgba(23,125,99,0.4)] shadow-[0_6px_22px_rgba(23,125,99,0.12)]"
                      : ""
                  }`}
                >
                  {item.featured && (
                    <span className="absolute top-0 right-0 flex items-center gap-1 text-[9px] font-mono font-bold uppercase tracking-wider text-[#177D63] bg-[rgba(23,125,99,0.1)] pl-2 pr-2.5 py-1 rounded-bl-xl">
                      <Star size={10} className="fill-[#177D63]" />
                      Featured
                    </span>
                  )}
                  <div
                    className="mt-0.5 p-2.5 rounded-xl flex-shrink-0 transition-transform group-hover:scale-105"
                    style={{
                      background:
                        item.type === "degree"
                          ? "rgba(23,125,99,0.09)"
                          : "rgba(191,130,48,0.09)",
                    }}
                  >
                    {item.type === "degree" ? (
                      <GraduationCap size={14} className="text-[#177D63]" />
                    ) : (
                      <Award size={14} className="text-[#BF8230]" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#1F1B17] text-sm font-semibold leading-snug mb-0.5">
                      {item.degree}
                    </p>
                    <p className="text-[#8C8278] text-xs mb-2">{item.institution}</p>
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${
                          item.type === "degree"
                            ? "bg-[rgba(23,125,99,0.08)] text-[#177D63] border-[rgba(23,125,99,0.2)]"
                            : "bg-[rgba(191,130,48,0.08)] text-[#BF8230] border-[rgba(191,130,48,0.2)]"
                        }`}
                      >
                        {item.type === "degree" ? "Degree" : "Certification"}
                      </span>
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-[#177D63] hover:text-[#0E5540] transition-colors"
                        >
                          View credential
                          <ExternalLink size={10} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <p className="text-[10px] font-mono text-[#8C8278] uppercase tracking-widest mb-5 font-semibold">
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
                      <span className="text-[#1F1B17] text-sm font-bold">{lang.language}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[rgba(23,125,99,0.08)] text-[#177D63] border border-[rgba(23,125,99,0.18)]">
                        {lang.level}
                      </span>
                    </div>
                    <span className="text-[#177D63] text-xs font-mono font-bold">{lang.percent}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#E6E0D5] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${lang.percent}%` } : { width: 0 }}
                      transition={{ duration: 1.0, delay: 0.4 + i * 0.18, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #177D63, #BF8230)",
                        boxShadow: "0 0 8px rgba(23,125,99,0.4)",
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
