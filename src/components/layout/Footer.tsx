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
    <footer className="relative overflow-hidden mt-8" style={{ background: "linear-gradient(160deg, #171310 0%, #1F1B17 60%, #23180D 100%)" }}>
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(23,125,99,0.5)] to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-[0.06]" />

      <div className="container-wide relative z-10 pt-16 pb-8">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          {/* Big name block */}
          <div className="lg:col-span-6">
            <a href="#hero" className="inline-block group">
              <span className="font-display text-5xl sm:text-6xl font-semibold text-[#F4F1EA] leading-none tracking-[-0.02em]">
                Moinul<span className="text-[#2FA483] group-hover:text-[#E8B463] transition-colors">.</span>
              </span>
            </a>
            <p className="mt-5 text-[#A39A8E] text-sm leading-relaxed max-w-sm">
              IT Executive, SEO Specialist &amp; AI Automation Engineer — building rankings,
              revenue and systems that run themselves.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2FA483] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2FA483]" />
              </span>
              <span className="text-xs text-[#A39A8E]">Available for new projects</span>
            </div>
          </div>

          {/* Nav column */}
          <div className="lg:col-span-3">
            <p className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-[#6E655A] mb-5">
              Explore
            </p>
            <ul className="space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-[#C9C0B2] hover:text-[#2FA483] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-3">
            <p className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-[#6E655A] mb-5">
              Contact
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-[#C9C0B2] hover:text-[#25D366] transition-colors">
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${personal.email}`} className="flex items-center gap-2.5 text-[#C9C0B2] hover:text-[#2FA483] transition-colors">
                  <Mail size={14} /> {personal.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personal.phone}`} className="flex items-center gap-2.5 text-[#C9C0B2] hover:text-[#2FA483] transition-colors">
                  <Phone size={14} /> {personal.phone}
                </a>
              </li>
              <li>
                <a href={personal.agencyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-[#C9C0B2] hover:text-[#E8B463] transition-colors">
                  <Globe size={14} /> mibrand.agency
                </a>
              </li>
              <li>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-[#C9C0B2] hover:text-[#E8B463] transition-colors">
                  <Link2 size={14} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[rgba(244,241,234,0.08)] pt-6 text-xs text-[#6E655A]">
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
