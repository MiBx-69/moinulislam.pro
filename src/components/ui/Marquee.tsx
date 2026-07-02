"use client";

const ITEMS = [
  "SEO Specialist",
  "AI Automation",
  "Shopify Expert",
  "Digital Marketing",
  "Prompt Engineering",
  "Web Development",
  "CRM Systems",
  "Paid Advertising",
  "E-commerce Growth",
  "Linux Systems",
];

function Row({ reverse = false }: { reverse?: boolean }) {
  const content = [...ITEMS, ...ITEMS];
  return (
    <div className="flex overflow-hidden select-none" aria-hidden="true">
      <div
        className={`flex flex-shrink-0 items-center gap-0 whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {content.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className={
                reverse
                  ? "font-display italic text-lg md:text-xl text-transparent px-6"
                  : "font-heading font-bold text-lg md:text-xl text-[#F8F6F1] px-6"
              }
              style={
                reverse
                  ? { WebkitTextStroke: "1px rgba(23,125,99,0.45)" }
                  : undefined
              }
            >
              {item}
            </span>
            <span className={reverse ? "text-[#BF8230]/60" : "text-[#7BC4AE]"}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/** Eye-catching double marquee ribbon between hero and about. */
export function Marquee() {
  return (
    <div className="relative py-10 overflow-hidden" aria-hidden="true">
      {/* Filled emerald ribbon, tilted */}
      <div className="rotate-[-1.6deg] scale-[1.02]">
        <div className="bg-gradient-to-r from-[#0E5540] via-[#177D63] to-[#0E5540] py-3.5 shadow-[0_12px_36px_rgba(23,125,99,0.28)]">
          <Row />
        </div>
      </div>
      {/* Outline ghost ribbon, opposite direction */}
      <div className="rotate-[1.2deg] -mt-2 opacity-90 hidden md:block">
        <div className="py-2.5">
          <Row reverse />
        </div>
      </div>
    </div>
  );
}
