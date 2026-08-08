import Link from "next/link";
import { ArrowRight, Briefcase, History, LayoutGrid } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SkillsRadar from "./SkillsRadar";

const links = [
  {
    href: "/offer",
    icon: Briefcase,
    title: "What I offer",
    text: "Six ways I can help — from PMP-certified project delivery to production ML.",
  },
  {
    href: "/timeline",
    icon: History,
    title: "My background",
    text: "The full path — roles, education, and certifications, in order.",
  },
  {
    href: "/projects",
    icon: LayoutGrid,
    title: "Selected work",
    text: "Real platforms and models shipped, with the outcomes they drove.",
  },
];

export default function HomeHighlights() {
  return (
    <section className="border-t py-20 sm:py-28" style={{ borderColor: "var(--border)" }}>
      <div className="section-container">
        <SectionHeading
          eyebrow="Proof, not just promises"
          title="Where my strengths actually sit"
          description="A self-assessed snapshot of where I add the most value — technical depth in data, backed by the discipline to deliver it."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <Reveal>
            <SkillsRadar />
          </Reveal>

          <Reveal delay={0.1} className="grid gap-4 sm:grid-cols-1">
            {links.map((l) => {
              const Icon = l.icon;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="card group flex items-center gap-4 p-5 transition-transform hover:-translate-y-1"
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent)" }}
                  >
                    <Icon size={20} />
                  </span>
                  <span className="flex-1">
                    <span className="block font-display font-semibold">{l.title}</span>
                    <span className="block text-sm" style={{ color: "var(--muted)" }}>
                      {l.text}
                    </span>
                  </span>
                  <ArrowRight
                    size={18}
                    className="shrink-0 transition-transform group-hover:translate-x-1"
                    style={{ color: "var(--faint)" }}
                  />
                </Link>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
