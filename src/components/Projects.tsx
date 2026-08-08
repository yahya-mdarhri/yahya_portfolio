import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          description="A mix of institutional data platforms, machine learning products, and public-facing digital workflows."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.1}>
              <div className="card group h-full overflow-hidden transition-transform hover:-translate-y-1">
                <div className={`h-2 w-full bg-gradient-to-r ${p.gradient}`} />
                <div className="p-6">
                  <span
                    className="text-xs font-semibold uppercase tracking-wide"
                    style={{ color: "var(--accent)" }}
                  >
                    {p.tag}
                  </span>
                  <h3 className="mt-2 text-lg font-bold">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {p.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
