"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-mono font-medium tracking-widest uppercase text-[#00D9FF] block mb-3">
            Portfolio
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Key Projects
          </h2>
          <p className="text-[#94A3B8] max-w-xl">
            A selection of automation systems, platforms, and tools I&apos;ve designed and shipped.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.05 + i * 0.07 }}
              className="card-base p-5 flex flex-col group"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-heading font-semibold text-white text-sm leading-snug group-hover:text-[#00D9FF] transition-colors">
                  {project.title}
                </h3>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 text-[#64748B] hover:text-[#00D9FF] transition-colors"
                    aria-label="Live link"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>

              <p className="text-sm text-[#94A3B8] leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
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
