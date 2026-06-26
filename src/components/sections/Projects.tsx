"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 80%, rgba(59,130,246,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-label">Portfolio</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Key Projects
          </h2>
          <p className="text-[#94A3B8] max-w-xl leading-relaxed">
            A selection of automation systems, platforms, and tools I&apos;ve designed and shipped.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 22 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.04 + i * 0.06 }}
              className="card-base p-5 flex flex-col group relative"
            >
              {/* Top glow line on hover */}
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[rgba(0,217,255,0.5)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-heading font-bold text-white text-sm leading-snug group-hover:text-[#00D9FF] transition-colors duration-200">
                  {project.title}
                </h3>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 p-1.5 rounded-lg text-[#64748B] hover:text-[#00D9FF] hover:bg-[rgba(0,217,255,0.08)] transition-all"
                    aria-label="Live link"
                  >
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#1E293B] mt-1.5" />
                )}
              </div>

              <p className="text-sm text-[#64748B] leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1a2640]">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
