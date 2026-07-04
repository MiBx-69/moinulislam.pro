"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { GhostNumber } from "@/components/ui/GhostNumber";
import { ArrowUpRight } from "lucide-react";
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
    rotateX.set((py - 0.5) * -7);
    rotateY.set((px - 0.5) * 9);
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
      transition={{ duration: 0.45, delay: 0.04 + index * 0.06 }}
      style={{ perspective: 900 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
        className="card-base p-5 flex flex-col group relative h-full"
      >
        {/* Cursor spotlight */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-[inherit]"
          style={{
            opacity: spot.on ? 1 : 0,
            background: `radial-gradient(280px circle at ${spot.x}% ${spot.y}%, rgba(23,125,99,0.09), transparent 65%)`,
          }}
        />

        {/* Top glow line on hover */}
        <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[rgba(23,125,99,0.5)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="flex items-start justify-between gap-2 mb-3" style={{ transform: "translateZ(24px)" }}>
          <h3 className="font-heading font-bold text-[#1F1B17] text-sm leading-snug group-hover:text-[#177D63] transition-colors duration-200">
            {project.title}
          </h3>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 p-1.5 rounded-lg text-[#8C8278] hover:text-[#177D63] hover:bg-[rgba(23,125,99,0.08)] transition-all"
              aria-label="Live link"
            >
              <ArrowUpRight size={14} />
            </a>
          ) : (
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#E6E0D5] mt-1.5" />
          )}
        </div>

        <p className="text-sm text-[#8C8278] leading-relaxed mb-4 flex-1" style={{ transform: "translateZ(14px)" }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E6E0D5]" style={{ transform: "translateZ(18px)" }}>
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
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
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 80%, rgba(191,130,48,0.04) 0%, transparent 70%)",
        }}
      />

      <GhostNumber n="06" flip />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-label">06 · Portfolio</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1F1B17] tracking-[-0.01em] mb-4">
            Key Projects
          </h2>
          <p className="text-[#5A534B] max-w-xl leading-relaxed">
            A selection of automation systems, platforms, and tools I&apos;ve designed and shipped.
            <span className="hidden lg:inline text-[#8C8278]"> Hover a card — they respond.</span>
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
