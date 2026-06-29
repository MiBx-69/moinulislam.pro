"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  "hero",
  "about",
  "services",
  "competencies",
  "achievements",
  "experience",
  "projects",
  "skills",
  "education",
  "contact",
];

export function useActiveSection(): string {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}
