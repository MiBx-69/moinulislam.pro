import Link from "next/link";
import { Project } from "@/types";
import { DemoImage } from "@/components/ui/DemoImage";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link 
      href={`/projects/${project.id}`} 
      className="group flex flex-col rounded-[24px] md:rounded-[28px] overflow-hidden bg-[#15120F] border border-[#2A251F] hover:border-[#4A4237] shadow-xl hover:shadow-[0_16px_40px_rgba(31,27,23,0.4)] transition-all duration-500 h-full hover:-translate-y-1"
    >
      {/* Visual Area */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/10] bg-[#110E0C] overflow-hidden flex items-center justify-center p-6 border-b border-[#2A251F]">
        {project.image ? (
          <DemoImage 
            src={project.image}
            alt={project.title}
            type={project.imageType || "minimal"}
            containerClassName="transform group-hover:-translate-y-1 group-hover:scale-[1.03] transition-transform duration-700 max-h-[90%]"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-center relative bg-[radial-gradient(ellipse_at_center,rgba(23,125,99,0.06)_0%,transparent_70%)]">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
            <div className="relative z-10 p-6 rounded-2xl border border-[rgba(244,241,234,0.05)] bg-[rgba(31,27,23,0.4)] backdrop-blur-md">
              <span className="text-[#8C8278] font-mono text-[10px] uppercase tracking-[0.3em] block mb-2 opacity-80">
                Project Archive
              </span>
              <span className="text-[#F4F1EA] font-display text-2xl font-semibold tracking-tight opacity-90">
                {project.category || "Case Study"}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-grow p-8 md:p-10 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_100%_0%,rgba(191,130,48,0.04)_0%,transparent_70%)] pointer-events-none group-hover:bg-[radial-gradient(circle_at_100%_0%,rgba(191,130,48,0.08)_0%,transparent_70%)] transition-colors duration-500" />
        
        <div className="flex justify-between items-start mb-5 gap-4 relative z-10">
          {project.category && (
            <span className="text-[#BF8230] text-[11px] md:text-xs font-mono tracking-widest uppercase">
              {project.category}
            </span>
          )}
          {project.year && (
            <span className="text-[#8C8278] text-[11px] md:text-xs font-mono">
              {project.year}
            </span>
          )}
        </div>

        <h3 className="font-display text-2xl md:text-[32px] font-semibold text-[#F4F1EA] mb-4 group-hover:text-[#BF8230] transition-colors leading-[1.15] relative z-10">
          {project.title}
        </h3>
        
        <p className="text-[#8C8278] text-sm md:text-base leading-relaxed mb-8 flex-grow line-clamp-3 relative z-10">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2.5 mb-10 relative z-10">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="px-3 py-1.5 rounded-full bg-transparent border border-[#3A332B] text-[#A3998F] text-[10px] md:text-[11px] font-mono tracking-wider uppercase group-hover:border-[#5A534B] transition-colors">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-3 py-1.5 rounded-full bg-transparent border border-[#3A332B] text-[#A3998F] text-[10px] md:text-[11px] font-mono tracking-wider uppercase group-hover:border-[#5A534B] transition-colors">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 text-[#BF8230] text-sm md:text-base font-semibold mt-auto group-hover:brightness-125 transition-all relative z-10 w-fit">
          <span className="group-hover:underline underline-offset-4 decoration-2">View Case Study</span> 
          <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
