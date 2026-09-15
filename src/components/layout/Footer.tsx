import { Mail, Phone, Globe, Link2, MessageCircle } from "lucide-react";
import { personal } from "@/data";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${personal.whatsapp}`;

  return (
    <footer className="relative overflow-hidden mt-16" style={{ background: "linear-gradient(160deg, #171310 0%, #1F1B17 60%, #23180D 100%)" }}>
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(23,125,99,0.5)] to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-[0.06]" />

      <div className="container-wide relative z-10 pt-24 lg:pt-32 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Big name block */}
          <div className="lg:col-span-6">
            <a href="#hero" className="inline-block group">
              <span className="font-display text-5xl sm:text-6xl font-semibold text-[#F4F1EA] leading-none tracking-[-0.02em]">
                Moinul<span className="text-[#2FA483] group-hover:text-[#E8B463] transition-colors">.</span>
              </span>
            </a>
            <p className="mt-6 text-[#A39A8E] text-sm md:text-base leading-relaxed max-w-sm">
              IT Executive, SEO Specialist &amp; AI Automation Engineer — building rankings,
              revenue and systems that run themselves.
            </p>
            <div className="mt-8 flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2FA483] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2FA483]" />
              </span>
              <span className="text-xs md:text-sm text-[#A39A8E] font-medium tracking-wide">Available for new projects</span>
            </div>
          </div>

          {/* Nav column */}
          <div className="lg:col-span-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#6E655A] mb-6">
              Explore
            </p>
            <ul className="space-y-4">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-base text-[#C9C0B2] hover:text-[#2FA483] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#6E655A] mb-6">
              Contact
            </p>
            <ul className="space-y-4 text-base">
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#C9C0B2] hover:text-[#25D366] transition-colors group">
                  <MessageCircle size={16} className="text-[#6E655A] group-hover:text-[#25D366] transition-colors" /> WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${personal.email}`} className="flex items-center gap-3 text-[#C9C0B2] hover:text-[#2FA483] transition-colors group">
                  <Mail size={16} className="text-[#6E655A] group-hover:text-[#2FA483] transition-colors" /> {personal.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personal.phone}`} className="flex items-center gap-3 text-[#C9C0B2] hover:text-[#2FA483] transition-colors group">
                  <Phone size={16} className="text-[#6E655A] group-hover:text-[#2FA483] transition-colors" /> {personal.phone}
                </a>
              </li>
              <li>
                <a href={personal.agencyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#C9C0B2] hover:text-[#E8B463] transition-colors group">
                  <Globe size={16} className="text-[#6E655A] group-hover:text-[#E8B463] transition-colors" /> mibrand.agency
                </a>
              </li>
              <li>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#C9C0B2] hover:text-[#E8B463] transition-colors group">
                  <Link2 size={16} className="text-[#6E655A] group-hover:text-[#E8B463] transition-colors" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[rgba(244,241,234,0.08)] pt-8 text-xs text-[#6E655A]">
          <p>
            &copy; {year} <span className="text-[#A39A8E]">{personal.name}</span> · Dhaka, Bangladesh
          </p>
          <p>
            Built with <span className="text-[#2FA483] font-semibold">Next.js</span>
            {" & "}
            <span className="text-[#E8B463] font-semibold">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
