"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { CTABanner } from "@/components/sections/CTABanner";

// Extract unique categories
const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  // Separate featured from regular for the "All" view
  // If we are filtering, we just show everything in the grid.
  const featuredProject = projects.find((p) => p.featured);
  
  // Exclude featured project from grid if we are in "All" view to avoid duplication
  const gridProjects = activeCategory === "All" && featuredProject
    ? filteredProjects.filter((p) => p.id !== featuredProject.id)
    : filteredProjects;

  return (
    <main className="bg-[#171411] min-h-screen pt-32 md:pt-48 pb-24">
      {/* Hero Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 mb-16 md:mb-24">
        <span className="text-[#BF8230] text-xs font-mono tracking-[0.2em] uppercase mb-4 block">
          SELECTED WORK
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-[84px] font-bold text-[#F4F1EA] tracking-tight mb-8 leading-[1.1]">
          Projects <span className="text-[#BF8230] italic font-medium">&</span> Systems
        </h1>
        <p className="text-lg md:text-xl text-[#8C8278] max-w-2xl leading-relaxed">
          An archive of digital products, automation workflows, and platforms I've architected to solve real business problems.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 mb-16 md:mb-20">
        <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar border-b border-[#26221D] scroll-smooth">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as string)}
              className={`px-5 py-2.5 rounded-full text-sm font-mono tracking-wide transition-all whitespace-nowrap flex-shrink-0 ${
                activeCategory === category
                  ? "bg-[#BF8230] text-[#171411] font-semibold"
                  : "bg-transparent text-[#8C8278] hover:text-[#F4F1EA] hover:bg-[#26221D]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Project (Only show on 'All' view) */}
      {activeCategory === "All" && featuredProject && (
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 mb-24 md:mb-36">
          <div className="mb-8">
            <span className="text-[#F4F1EA] text-sm md:text-base font-mono tracking-widest uppercase">
              Featured Project
            </span>
          </div>
          <FeaturedProject />
        </div>
      )}

      {/* Project Grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 mb-32 md:mb-40">
        {activeCategory === "All" && gridProjects.length > 0 && (
          <div className="mb-10">
            <span className="text-[#F4F1EA] text-sm md:text-base font-mono tracking-widest uppercase">
              Selected Projects
            </span>
          </div>
        )}
        {gridProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
            {gridProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="py-32 text-center border border-[#26221D] rounded-[32px] bg-[#1F1B17]">
            <p className="text-[#8C8278] font-mono mb-3 uppercase tracking-widest text-sm">No projects found</p>
            <h3 className="text-[#F4F1EA] font-display text-3xl font-medium">Try selecting a different category.</h3>
          </div>
        )}
      </div>

      <CTABanner />
    </main>
  );
}
