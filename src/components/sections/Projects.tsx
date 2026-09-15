"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { GhostNumber } from "@/components/ui/GhostNumber";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "@/data";
import type { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { DemoImage } from "@/components/ui/DemoImage";

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

function FeaturedProject({
  project,
  isInView,
}: {
  project: Project;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="col-span-1 sm:col-span-2 lg:col-span-3 mb-10 md:mb-16"
    >
      <Link href={`/projects/${project.id}`} className="block group relative rounded-[24px] md:rounded-[32px] overflow-hidden bg-[#1F1B17] border border-[#3A332B] shadow-2xl transition-all duration-500 hover:border-[#5A534B]">
        {/* Subtle radial ambient lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_50%,rgba(191,130,48,0.04)_0%,transparent_50%)] pointer-events-none" />
        
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-16">
          
          {/* LEFT: Content */}
          <div className="px-6 pt-10 pb-4 md:p-12 lg:p-16 lg:pr-0 flex flex-col justify-center relative z-10">
            <span className="text-[#BF8230] text-xs md:text-sm font-mono tracking-widest uppercase mb-4 block">
              Flagship Case Study
            </span>
            <h3 className="font-display text-4xl md:text-5xl lg:text-[64px] font-semibold text-[#F4F1EA] mb-6 leading-tight group-hover:text-[#BF8230] transition-colors duration-400">
              {project.title}
            </h3>
            <p className="text-[#8C8278] text-base md:text-lg leading-relaxed mb-10 max-w-[480px]">
              {project.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-4 mb-10 pb-10 border-b border-[#3A332B]">
              <div>
                <p className="font-display text-3xl md:text-4xl font-bold text-[#F4F1EA] mb-1.5">15+</p>
                <p className="text-[#8C8278] text-[10px] md:text-xs font-mono uppercase tracking-widest">Problems Solved</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl font-bold text-[#F4F1EA] mb-1.5">~25%</p>
                <p className="text-[#8C8278] text-[10px] md:text-xs font-mono uppercase tracking-widest">Workload Reduced</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="font-display text-3xl md:text-4xl font-bold text-[#F4F1EA] mb-1.5">1K+</p>
                <p className="text-[#8C8278] text-[10px] md:text-xs font-mono uppercase tracking-widest">Bulk Processing</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 mb-12">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full border border-[#3A332B] text-[#A3998F] text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 text-[#BF8230] font-semibold group-hover:brightness-125 transition-all">
              <span className="group-hover:underline underline-offset-4 decoration-2">Read the Full Case Study</span> 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* RIGHT: Visual */}
          <div className="relative px-6 pb-10 md:px-12 md:pb-12 lg:p-16 lg:pl-0 flex flex-col justify-center items-center w-full h-full">
            <DemoImage 
              src="/demo-data/dashboard.png" 
              alt="MiBx Dispatch Dashboard" 
              type="browser"
              containerClassName="w-full transform group-hover:-translate-y-2 group-hover:scale-[1.01] transition-transform duration-700 shadow-[0_20px_60px_rgba(0,0,0,0.5)]" 
            />
          </div>

        </div>
      </Link>
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
          {projects.map((project, i) => {
            if (project.id === "mibx-dispatch") {
              return <FeaturedProject key={project.id} project={project} isInView={isInView} />;
            }
            return <TiltCard key={project.id} project={project} index={i} isInView={isInView} />;
          })}
        </div>
      </div>
    </section>
  );
}
