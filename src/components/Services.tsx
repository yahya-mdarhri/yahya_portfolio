import { Compass, Database, Network, Repeat, ShieldCheck, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { services } from "@/data/portfolio";

const icons = [Compass, Database, Sparkles, Network, Repeat, ShieldCheck];

export default function Services() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => {
        const Icon = icons[i % icons.length];
        const isDeliver = s.variant === "deliver";
        return (
          <Reveal key={s.title} delay={(i % 3) * 0.08}>
            <div className="card group relative h-full overflow-hidden p-6 transition-transform hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs" style={{ color: "var(--faint)" }}>
                  {s.index}
                </span>
                {isDeliver && (
                  <span className="font-mono text-xs font-semibold" style={{ color: "var(--deliver)" }}>
                    PMP®
                  </span>
                )}
              </div>

              <span
                className="mt-4 flex h-10 w-10 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: isDeliver ? "var(--deliver-soft)" : "var(--accent-soft)",
                  color: isDeliver ? "var(--deliver)" : "var(--accent)",
                }}
              >
                <Icon size={19} />
              </span>

              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {s.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className="font-mono rounded-md border px-2 py-1 text-[11px]" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
