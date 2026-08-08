import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile, stats } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeading eyebrow="About Me" title="From data science to leading projects" />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed" style={{ color: "var(--foreground)" }}>
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={0.2} className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="card p-5">
                <p className="text-3xl font-bold" style={{ color: "var(--accent)" }}>
                  {s.value}
                </p>
                <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
