"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(11,15,25,0.92)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)] shadow-[0_1px_0_rgba(0,217,255,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="font-heading font-bold text-xl text-white tracking-tight hover:text-[#00D9FF] transition-colors group"
          >
            Moinul
            <span className="text-[#00D9FF] group-hover:text-white transition-colors">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-sm rounded-lg transition-all duration-200 font-medium ${
                    isActive
                      ? "text-[#00D9FF] bg-[rgba(0,217,255,0.08)]"
                      : "text-[#94A3B8] hover:text-white hover:bg-[rgba(255,255,255,0.04)]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contact"
              className="ml-3 px-5 py-2 text-sm font-bold rounded-xl bg-[#00D9FF] text-[#0B0F19] hover:bg-[#00c4e8] transition-all duration-200 shadow-md shadow-[rgba(0,217,255,0.2)] hover:shadow-[rgba(0,217,255,0.35)] hover:-translate-y-0.5"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-[#94A3B8] hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[rgba(11,15,25,0.98)] backdrop-blur-xl flex flex-col pt-20 px-6">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-4 text-xl font-semibold text-[#94A3B8] border-b border-[#1a2640] hover:text-[#00D9FF] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 py-3.5 text-center font-bold bg-[#00D9FF] text-[#0B0F19] rounded-xl hover:bg-[#00c4e8] transition-colors shadow-lg shadow-[rgba(0,217,255,0.2)]"
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
