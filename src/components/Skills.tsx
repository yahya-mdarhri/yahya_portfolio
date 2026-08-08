import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28" style={{ backgroundColor: "var(--surface-muted)" }}>
      <div className="section-container">
        <SectionHeading eyebrow="Toolbox" title="Skills & Expertise" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={(i % 3) * 0.08}>
              <div className="card h-full p-6">
                <h3 className="font-semibold" style={{ color: "var(--accent)" }}>
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag-pill rounded-full px-3 py-1.5 text-xs font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
