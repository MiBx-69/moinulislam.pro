import { personal } from "@/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--text-tertiary)]">
        <p>
          &copy; {year}{" "}
          <span className="text-[var(--text-secondary)]">{personal.name}</span>
        </p>
        <p>
          Built with{" "}
          <span className="text-[var(--accent)]">Next.js</span> &{" "}
          <span className="text-[var(--accent)]">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
