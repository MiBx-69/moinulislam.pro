"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { personal } from "@/data";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();
  const pathname = usePathname();
  
  const isDarkTheme = pathname.startsWith("/projects");

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
            ? isDarkTheme 
              ? "bg-[rgba(23,20,17,0.85)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)] shadow-[0_1px_0_rgba(191,130,48,0.06)]"
              : "bg-[rgba(244,241,234,0.92)] backdrop-blur-xl border-b border-[rgba(31,27,23,0.06)] shadow-[0_1px_0_rgba(23,125,99,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className={`font-heading font-bold text-xl tracking-tight transition-colors group ${
              isDarkTheme ? "text-[#F4F1EA] hover:text-[#BF8230]" : "text-[#1F1B17] hover:text-[#177D63]"
            }`}
          >
            Moinul
            <span className={`transition-colors ${isDarkTheme ? "text-[#BF8230] group-hover:text-[#F4F1EA]" : "text-[#177D63] group-hover:text-[#1F1B17]"}`}>.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.includes("#") ? link.href.split("#")[1] : "";
              const isActive = isDarkTheme 
                ? link.href === "/projects"
                : (sectionId ? activeSection === sectionId : false);
              
              const activeClasses = isDarkTheme
                ? "text-[#BF8230] bg-[rgba(191,130,48,0.1)]"
                : "text-[#177D63] bg-[rgba(23,125,99,0.08)]";
              const inactiveClasses = isDarkTheme
                ? "text-[#A3998F] hover:text-[#F4F1EA] hover:bg-[rgba(255,255,255,0.04)]"
                : "text-[#5A534B] hover:text-[#1F1B17] hover:bg-[rgba(31,27,23,0.04)]";

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-sm rounded-lg transition-all duration-200 font-medium ${
                    isActive ? activeClasses : inactiveClasses
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href={personal.cvUrl}
              download
              className={`ml-3 flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 border ${
                isDarkTheme 
                  ? "text-[#A3998F] border-[#3A332B] hover:text-[#F4F1EA] hover:border-[rgba(191,130,48,0.4)]" 
                  : "text-[#5A534B] border-[#E6E0D5] hover:text-[#1F1B17] hover:border-[rgba(23,125,99,0.4)]"
              }`}
            >
              <Download size={14} />
              CV
            </a>
            <a
              href={isDarkTheme ? "/#contact" : "#contact"}
              className={`ml-2 px-5 py-2 text-sm font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 ${
                isDarkTheme
                  ? "bg-[#BF8230] text-[#171411] hover:bg-[#A67028] shadow-md shadow-[rgba(191,130,48,0.2)] hover:shadow-[rgba(191,130,48,0.35)]"
                  : "bg-[#177D63] text-[#F4F1EA] hover:bg-[#13694F] shadow-md shadow-[rgba(23,125,99,0.2)] hover:shadow-[rgba(23,125,99,0.35)]"
              }`}
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isDarkTheme ? "text-[#A3998F] hover:text-[#F4F1EA]" : "text-[#5A534B] hover:text-[#1F1B17]"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={`fixed inset-0 z-40 backdrop-blur-xl flex flex-col pt-20 px-6 ${
          isDarkTheme ? "bg-[rgba(23,20,17,0.98)]" : "bg-[rgba(244,241,234,0.98)]"
        }`}>
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`py-4 text-xl font-semibold border-b transition-colors ${
                  isDarkTheme 
                    ? "text-[#A3998F] border-[#3A332B] hover:text-[#BF8230]" 
                    : "text-[#5A534B] border-[#E6E0D5] hover:text-[#177D63]"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={personal.cvUrl}
              download
              onClick={() => setMobileOpen(false)}
              className={`mt-6 flex items-center justify-center gap-2 py-3.5 font-semibold border rounded-xl transition-colors ${
                isDarkTheme
                  ? "text-[#F4F1EA] border-[#3A332B] hover:border-[rgba(191,130,48,0.4)]"
                  : "text-[#1F1B17] border-[#E6E0D5] hover:border-[rgba(23,125,99,0.4)]"
              }`}
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href={isDarkTheme ? "/#contact" : "#contact"}
              onClick={() => setMobileOpen(false)}
              className={`mt-3 py-3.5 text-center font-bold rounded-xl transition-colors shadow-lg ${
                isDarkTheme
                  ? "bg-[#BF8230] text-[#171411] hover:bg-[#A67028] shadow-[rgba(191,130,48,0.2)]"
                  : "bg-[#177D63] text-[#F4F1EA] hover:bg-[#13694F] shadow-[rgba(23,125,99,0.2)]"
              }`}
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
