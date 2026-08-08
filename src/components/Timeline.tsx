import { Award, Briefcase, GraduationCap, Heart } from "lucide-react";
import Reveal from "./Reveal";
import { timeline } from "@/data/portfolio";

const icons = {
  role: Briefcase,
  education: GraduationCap,
  certification: Award,
  volunteering: Heart,
};

export default function Timeline() {
  return (
    <div className="relative ml-1.5">
      <div
        aria-hidden
        className="absolute left-[15px] top-1.5 bottom-1.5 w-px"
        style={{ background: "linear-gradient(var(--accent), var(--border) 70%, transparent)" }}
      />

      <div className="space-y-9">
        {timeline.map((item, i) => {
          const Icon = icons[item.kind];
          const color = item.current ? "var(--deliver)" : "var(--accent)";
          return (
            <Reveal key={item.title + item.year} delay={Math.min(i * 0.06, 0.4)}>
              <div className="relative pl-12">
                <div
                  className="absolute left-0 top-0.5 flex h-8 w-8 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: "var(--background)",
                    border: `2px solid ${color}`,
                    boxShadow: `0 0 0 4px ${item.current ? "var(--deliver-soft)" : "var(--accent-soft)"}`,
                  }}
                >
                  <Icon size={13} style={{ color }} />
                </div>

                <div className="font-mono text-xs tracking-wide" style={{ color }}>
                  {item.year}
                  {item.current && <span className="ml-2 font-sans font-semibold">· NOW</span>}
                </div>
                <div className="font-display mt-1 text-lg font-semibold">{item.title}</div>
                <div className="mt-0.5 text-sm" style={{ color: "var(--muted)" }}>
                  {item.org}
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {item.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
