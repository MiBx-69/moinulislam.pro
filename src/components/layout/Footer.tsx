import { personal } from "@/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[rgba(31,27,23,0.05)] py-10 mt-8 overflow-hidden">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(23,125,99,0.2)] to-transparent" />

      <div className="container-wide">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#8C8278]">
          <div className="flex items-center gap-3">
            <span className="font-heading font-bold text-[#1F1B17] text-base">
              Moinul<span className="text-[#177D63]">.</span>
            </span>
            <span className="text-[#E6E0D5]">|</span>
            <p>
              &copy; {year}{" "}
              <span className="text-[#5A534B]">{personal.name}</span>
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <a href="#hero" className="hover:text-[#177D63] transition-colors">
              Back to top ↑
            </a>
            <span>
              Built with{" "}
              <span className="text-[#177D63] font-semibold">Next.js</span>
              {" & "}
              <span className="text-[#BF8230] font-semibold">Tailwind CSS</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
