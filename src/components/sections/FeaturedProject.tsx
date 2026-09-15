"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Project } from "@/types";
import { DemoImage } from "@/components/ui/DemoImage";
import { projects } from "@/data/projects";

// By default we export the featured project from our data source
export function FeaturedProject({
  project = projects.find((p) => p.featured)!,
  isInView = true,
}: {
  project?: Project;
  isInView?: boolean;
}) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="col-span-1 sm:col-span-2 lg:col-span-3 mb-10 md:mb-16 w-full"
    >
      <Link href={`/projects/${project.id}`} className="block group relative rounded-[28px] md:rounded-[40px] overflow-hidden bg-[#15120F] border border-[#2A251F] shadow-2xl transition-all duration-500 hover:border-[#4A4237] hover:shadow-[0_24px_60px_rgba(31,27,23,0.3)] hover:-translate-y-1">
        {/* Subtle radial ambient lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(23,125,99,0.06)_0%,transparent_60%)] pointer-events-none group-hover:bg-[radial-gradient(circle_at_100%_100%,rgba(23,125,99,0.09)_0%,transparent_60%)] transition-colors duration-500" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(191,130,48,0.04)_0%,transparent_60%)] pointer-events-none group-hover:bg-[radial-gradient(circle_at_0%_0%,rgba(191,130,48,0.07)_0%,transparent_60%)] transition-colors duration-500" />
        
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-0">
          
          {/* LEFT: Content */}
          <div className="px-6 pb-12 pt-2 md:px-12 md:pb-16 lg:py-20 lg:pl-16 lg:pr-10 flex flex-col justify-center relative z-10 h-full">
            <span className="text-[#BF8230] text-xs md:text-sm font-mono tracking-widest uppercase mb-6 block">
              Flagship Case Study
            </span>
            <h3 className="font-display text-4xl md:text-5xl lg:text-[68px] font-semibold text-[#F4F1EA] mb-6 leading-[1.1] tracking-tight group-hover:text-[#BF8230] transition-colors duration-500">
              {project.title}
            </h3>
            <p className="text-[#A3998F] text-lg md:text-xl leading-relaxed mb-10 max-w-[500px]">
              {project.description}
            </p>

            {project.results && project.results.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-4 mb-12 pb-12 border-b border-[#2A251F]">
                {project.results.map((result, i) => (
                  <div key={i} className={i === 2 ? "col-span-2 md:col-span-1" : ""}>
                    <p className="font-display text-4xl md:text-5xl font-semibold text-[#F4F1EA] mb-2">{result.value}</p>
                    <p className="text-[#8C8278] text-[11px] md:text-xs font-mono uppercase tracking-widest leading-snug max-w-[120px]">{result.label}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-3 mb-12">
              {project.tags.map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full border border-[#2A251F] bg-[#1C1814] text-[#A3998F] text-[11px] md:text-xs font-mono tracking-wider uppercase group-hover:border-[#3A332B] transition-colors">
                  {tag}
                </span>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 text-[#BF8230] font-semibold text-lg group-hover:brightness-125 transition-all w-fit">
              <span className="group-hover:underline underline-offset-4 decoration-2">Read the Full Case Study</span> 
              <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

          {/* RIGHT: Visual */}
          <div className="relative pt-12 px-6 lg:p-0 flex flex-col justify-center items-center w-full h-full lg:min-h-[600px] overflow-hidden lg:pl-4">
            {project.image && (
              <DemoImage 
                src={project.image} 
                alt={`${project.title} Dashboard`} 
                type={project.imageType || "browser"}
                priority={true}
                containerClassName="w-full transform translate-y-4 lg:translate-y-8 lg:translate-x-12 scale-[1.05] lg:scale-110 group-hover:scale-[1.12] transition-transform duration-700 shadow-[0_30px_80px_rgba(0,0,0,0.6)] rounded-[20px] md:rounded-[28px] overflow-hidden origin-top-left" 
              />
            )}
          </div>

        </div>
      </Link>
    </motion.div>
  );
}
