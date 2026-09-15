import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { DemoImage } from "@/components/ui/DemoImage";
import { CTABanner } from "@/components/sections/CTABanner";

// Import bespoke MiBx components
import { FeatureShowcase } from "@/components/case-study/FeatureShowcase";
import { MobileExperience } from "@/components/case-study/MobileExperience";
import { TechStack } from "@/components/case-study/TechStack";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) return { title: "Not Found" };

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) notFound();

  // Find next/prev projects for navigation
  const currentIndex = projects.findIndex((p) => p.id === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main className="bg-[#F4F1EA] min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(191,130,48,0.08) 0%, transparent 70%)",
          }}
        />
        
        <div className="container-wide relative z-10">
          <Link href="/projects" className="inline-flex items-center gap-2 text-[#8C8278] hover:text-[#BF8230] transition-colors mb-8 font-medium text-sm">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="font-display text-5xl md:text-7xl font-semibold text-[#1F1B17] tracking-tight mb-6">
              {project.title}
            </h1>
            <h2 className="text-xl md:text-2xl text-[#BF8230] font-medium mb-8">
              {project.category} {project.year && `• ${project.year}`}
            </h2>
            <p className="text-[#5A534B] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Primary Visual */}
          {project.image ? (
            <div className="relative max-w-6xl mx-auto">
              <DemoImage 
                src={project.image} 
                alt={`${project.title} Platform`} 
                type={project.imageType || "browser"}
                containerClassName="opacity-95 hover:opacity-100 transition-opacity duration-500" 
                priority
              />
            </div>
          ) : (
            <div className="relative max-w-6xl mx-auto aspect-[16/9] md:aspect-[21/9] bg-[#171411] rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col items-center justify-center border border-[#3A332B] shadow-2xl">
              <span className="text-[#3A332B] font-display text-9xl md:text-[200px] font-bold tracking-tighter leading-none z-10">
                {project.title.charAt(0)}
              </span>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(191,130,48,0.05)_0%,transparent_60%)]" />
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end z-20">
                <span className="text-[#8C8278] font-mono text-sm tracking-wider uppercase">{project.category}</span>
                <span className="text-[#8C8278] font-mono text-sm">{project.year}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 2. Problem & Solution Context */}
      {(project.problem || project.solution) && (
        <section className="section-padding bg-[#FBF9F4]">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
              {/* Problem */}
              {project.problem && (
                <div>
                  <span className="text-xs font-mono tracking-widest uppercase text-[#FF5F56] block mb-4">
                    The Challenge
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl font-semibold text-[#1F1B17] mb-6">
                    Friction & Bottlenecks
                  </h3>
                  <div className="space-y-4">
                    {project.problem.map((p, i) => (
                      <p key={i} className="text-[#5A534B] leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Solution */}
              {project.solution && (
                <div>
                  <span className="text-xs font-mono tracking-widest uppercase text-[#177D63] block mb-4">
                    The Solution
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl font-semibold text-[#1F1B17] mb-6">
                    Strategic Implementation
                  </h3>
                  <div className="space-y-4">
                    {project.solution.map((p, i) => (
                      <p key={i} className="text-[#5A534B] leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 3. Bespoke MiBx Dispatch Components (Conditional) */}
      {slug === "mibx-dispatch" && (
        <>
          <FeatureShowcase />
          <MobileExperience />
        </>
      )}

      {/* 4. Features Grid (For non-mibx projects or general features) */}
      {project.features && slug !== "mibx-dispatch" && (
        <section className="section-padding bg-[#171411] text-[#F4F1EA]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="text-xs font-mono tracking-widest uppercase text-[#BF8230] block mb-4">
                Capabilities
              </span>
              <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                Key Features
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, i) => (
                <div key={i} className="bg-[#1F1B17] border border-[#26221D] p-6 rounded-2xl flex items-start gap-4">
                  <CheckCircle2 className="text-[#BF8230] flex-shrink-0 mt-1" size={20} />
                  <p className="text-[#E6E0D5] leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Metrics & Results */}
      {project.results && project.results.length > 0 && (
        <section className="section-padding bg-white border-y border-[#E6E0D5]">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-[#E6E0D5]">
              {project.results.map((result, i) => (
                <div key={i} className="flex flex-col items-center text-center pt-8 md:pt-0 first:pt-0">
                  <span className="font-display text-5xl md:text-6xl font-bold text-[#1F1B17] mb-2 tracking-tighter">
                    {result.value}
                  </span>
                  <span className="text-[#8C8278] font-medium tracking-wide uppercase text-sm">
                    {result.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Tags & Role Info */}
      <section className="py-16 bg-[#F4F1EA]">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-16">
            {project.tags.map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-lg bg-white border border-[#E6E0D5] text-[#5A534B] text-sm font-mono tracking-wide shadow-sm">
                {tag}
              </span>
            ))}
          </div>

          {/* Next/Prev Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-[#E6E0D5]">
            {prevProject ? (
              <Link href={`/projects/${prevProject.id}`} className="group flex flex-col">
                <span className="text-[#8C8278] text-sm mb-1 group-hover:text-[#BF8230] transition-colors">Previous Project</span>
                <span className="font-display font-semibold text-[#1F1B17] text-xl">{prevProject.title}</span>
              </Link>
            ) : <div />}
            
            {nextProject ? (
              <Link href={`/projects/${nextProject.id}`} className="group flex flex-col text-right">
                <span className="text-[#8C8278] text-sm mb-1 group-hover:text-[#BF8230] transition-colors">Next Project</span>
                <span className="font-display font-semibold text-[#1F1B17] text-xl">{nextProject.title}</span>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* Conditional Tech Stack for mibx-dispatch */}
      {slug === "mibx-dispatch" && <TechStack />}

      <CTABanner />
    </main>
  );
}
