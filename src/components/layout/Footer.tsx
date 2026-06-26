import { personal } from "@/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1E293B] py-8 mt-8">
      <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#64748B]">
        <p>
          &copy; {year}{" "}
          <span className="text-[#94A3B8] font-medium">{personal.name}</span>
        </p>
        <p>
          Built with{" "}
          <span className="text-[#00D9FF]">Next.js</span>{" "}
          &amp;{" "}
          <span className="text-[#00D9FF]">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
