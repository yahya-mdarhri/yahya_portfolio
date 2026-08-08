import { Briefcase, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28" style={{ backgroundColor: "var(--surface-muted)" }}>
      <div className="section-container">
        <SectionHeading
          eyebrow="Career Path"
          title="Professional Experience"
          description="Leading digital, data, and innovation projects from scoping to deployment — across academia, a startup, and financial services."
        />

        <div className="relative">
          <div
            className="absolute left-[19px] top-2 bottom-2 hidden sm:block w-px"
            style={{ backgroundColor: "var(--border)" }}
            aria-hidden
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <Reveal key={exp.role + exp.org} delay={i * 0.1}>
                <div className="relative sm:pl-14">
                  <div
                    className="absolute left-0 top-0 hidden sm:flex h-10 w-10 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    <Briefcase size={18} />
                  </div>

                  <div className="card p-6 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className="font-medium" style={{ color: "var(--accent)" }}>
                          {exp.org}
                        </p>
                      </div>
                      <span className="tag-pill rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <p className="mt-2 flex items-center gap-1.5 text-sm" style={{ color: "var(--muted)" }}>
                      <MapPin size={14} /> {exp.location}
                    </p>

                    <div className="mt-5 space-y-4">
                      {exp.bullets.map((b) => (
                        <div key={b.title}>
                          <p className="font-semibold text-sm">{b.title}</p>
                          <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                            {b.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
