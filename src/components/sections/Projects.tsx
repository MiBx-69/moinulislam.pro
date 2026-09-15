"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Maximize2 } from "lucide-react";
import { GhostNumber } from "@/components/ui/GhostNumber";
import { projects } from "@/data";
import type { Project } from "@/types";

function TiltCard({
  project,
  index,
  isInView,
}: {
  project: Project;
  index: number;
  isInView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [spot, setSpot] = useState({ x: 50, y: 50, on: false });
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 220, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 220, damping: 18 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateX.set((py - 0.5) * -5);
    rotateY.set((px - 0.5) * 7);
    setSpot({ x: px * 100, y: py * 100, on: true });
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setSpot((s) => ({ ...s, on: false }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: 0.05 + index * 0.055 }}
      style={{ perspective: 1000 }}
      className={project.featured ? "sm:col-span-2 lg:col-span-3" : ""}
    >
      <motion.article
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
        className={`card-base group relative overflow-hidden ${project.featured ? "lg:grid lg:grid-cols-[1.2fr_0.8fr]" : "flex flex-col"}`}
      >
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: spot.on ? 1 : 0,
            background: `radial-gradient(360px circle at ${spot.x}% ${spot.y}%, rgba(23,125,99,0.09), transparent 65%)`,
          }}
        />

        {project.image ? (
          <div className="relative min-h-[250px] overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E6E0D5] bg-[#EEE9DF]">
            <Image
              src={project.image}
              alt={`${project.title} interface preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
            <div className="absolute left-4 bottom-4 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-black/55 backdrop-blur text-[10px] uppercase tracking-[0.14em] text-white font-semibold">
                {project.category ?? "Case Study"}
              </span>
            </div>
          </div>
        ) : null}

        <div className="relative p-5 sm:p-6 flex flex-col" style={{ transform: "translateZ(18px)" }}>
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#177D63] mb-1">
                {project.featured ? "Featured case study" : project.category ?? "Project"}
              </p>
              <h3 className="font-heading font-bold text-[#1F1B17] text-base sm:text-lg leading-snug group-hover:text-[#177D63] transition-colors">
                {project.title}
              </h3>
            </div>
            <Maximize2 size={16} className="text-[#A79D91] shrink-0" />
          </div>

          <p className="text-sm text-[#6B6258] leading-relaxed mb-5 flex-1">
            {project.description}
          </p>

          {project.metrics?.length ? (
            <div className="grid grid-cols-2 gap-2 mb-5">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-[#E6E0D5] bg-[#FBF9F4] px-3 py-2.5">
                  <div className="text-[10px] uppercase tracking-[0.12em] text-[#8C8278]">{metric.label}</div>
                  <div className="mt-1 font-heading font-bold text-sm text-[#1F1B17]">{metric.value}</div>
                </div>
              ))}
            </div>
          ) : null}

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.slice(0, project.featured ? 8 : 6).map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-3 border-t border-[#E6E0D5]">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#177D63] hover:text-[#0E5540]"
              >
                Live system <ExternalLink size={13} />
              </a>
            ) : null}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B6258] hover:text-[#1F1B17]"
              >
                Source <Github size={13} />
              </a>
            ) : null}
            {!project.liveUrl && !project.githubUrl ? (
              <span className="text-xs font-medium text-[#8C8278]">Built for production workflows</span>
            ) : null}
            <ArrowUpRight size={14} className="ml-auto text-[#A79D91] group-hover:text-[#177D63] transition-colors" />
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 80%, rgba(191,130,48,0.04) 0%, transparent 70%)" }}
      />
      <GhostNumber n="06" flip />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 lg:mb-12"
        >
          <span className="section-label">06 · Selected Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1F1B17] tracking-[-0.01em] mb-4">
            Systems that <span className="accent-text">actually ship.</span>
          </h2>
          <p className="text-[#5A534B] max-w-2xl leading-relaxed">
            Real-world e-commerce, automation and growth systems — shown as case studies instead of a flat project list.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <TiltCard key={project.id} project={project} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
