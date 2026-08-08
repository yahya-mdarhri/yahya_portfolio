import { Award, GraduationCap, Heart, Languages as LanguagesIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { certifications, education, languages, volunteering } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeading eyebrow="Background" title="Education & Beyond" />

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full p-6 sm:p-7">
              <h3 className="flex items-center gap-2 font-semibold">
                <GraduationCap size={20} style={{ color: "var(--accent)" }} />
                Education
              </h3>
              <div className="mt-5 space-y-5">
                {education.map((e) => (
                  <div key={e.degree} className="border-l-2 pl-4" style={{ borderColor: "var(--border)" }}>
                    <p className="font-medium text-sm">{e.degree}</p>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>
                      {e.school} · {e.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card h-full p-6 sm:p-7">
              <h3 className="flex items-center gap-2 font-semibold">
                <Award size={20} style={{ color: "var(--accent)" }} />
                Certifications
              </h3>
              <div className="mt-5 space-y-5">
                {certifications.map((c) => (
                  <div key={c.name} className="border-l-2 pl-4" style={{ borderColor: "var(--border)" }}>
                    <p className="font-medium text-sm">{c.name}</p>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>
                      {c.issuer} · {c.period}
                    </p>
                  </div>
                ))}
              </div>

              <h3 className="mt-8 flex items-center gap-2 font-semibold">
                <LanguagesIcon size={20} style={{ color: "var(--accent)" }} />
                Languages
              </h3>
              <div className="mt-4 space-y-2">
                {languages.map((l) => (
                  <div key={l.name} className="flex items-center justify-between text-sm">
                    <span className="font-medium">{l.name}</span>
                    <span className="tag-pill rounded-full px-3 py-1 text-xs">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="card p-6 sm:p-7">
              <h3 className="flex items-center gap-2 font-semibold">
                <Heart size={20} style={{ color: "var(--accent)" }} />
                Volunteering
              </h3>
              <div className="mt-5 space-y-4">
                {volunteering.map((v) => (
                  <div key={v.role}>
                    <p className="font-medium text-sm">
                      {v.role} — {v.org}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                      {v.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
