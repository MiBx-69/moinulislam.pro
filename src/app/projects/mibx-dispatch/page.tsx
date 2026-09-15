import { Metadata } from "next";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { ProblemSolution } from "@/components/case-study/ProblemSolution";
import { FeatureShowcase } from "@/components/case-study/FeatureShowcase";
import { MobileExperience } from "@/components/case-study/MobileExperience";
import { TechStack } from "@/components/case-study/TechStack";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "MiBx Dispatch Case Study",
  description: "A custom operations platform built to connect Shopify orders, fraud intelligence, bulk dispatch, courier tracking, delivery/return workflows, and finance.",
};

export default function MiBxDispatchPage() {
  return (
    <main className="bg-[#F4F1EA]">
      <CaseStudyHero />
      <ProblemSolution />
      <FeatureShowcase />
      <MobileExperience />
      <TechStack />
      <CTABanner />
    </main>
  );
}
