import { personal } from "@/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[rgba(255,255,255,0.05)] py-10 mt-8 overflow-hidden">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,217,255,0.2)] to-transparent" />

      <div className="container-wide">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#64748B]">
          <div className="flex items-center gap-3">
            <span className="font-heading font-bold text-white text-base">
              Moinul<span className="text-[#00D9FF]">.</span>
            </span>
            <span className="text-[#1E293B]">|</span>
            <p>
              &copy; {year}{" "}
              <span className="text-[#94A3B8]">{personal.name}</span>
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <a href="#hero" className="hover:text-[#00D9FF] transition-colors">
              Back to top ↑
            </a>
            <span>
              Built with{" "}
              <span className="text-[#00D9FF] font-semibold">Next.js</span>
              {" & "}
              <span className="text-[#3B82F6] font-semibold">Tailwind CSS</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
