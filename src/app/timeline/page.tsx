import type { Metadata } from "next";
import { Languages as LanguagesIcon } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";
import { languages, profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Timeline — ${profile.name}`,
  description: "The full path — roles, education, and certifications, in order.",
};

export default function TimelinePage() {
  return (
    <>
      <section className="pt-16 pb-8 sm:pt-24">
        <div className="section-container">
          <SectionHeading
            eyebrow="The one-pager"
            title="A short history."
            description="Where I've been, what I built, and how I picked up the PMP discipline that keeps data projects on the rails."
          />
        </div>
      </section>
      <section className="pb-20 sm:pb-28">
        <div className="section-container">
          <Timeline />

          <div className="mt-14 flex flex-wrap items-center gap-3 border-t pt-8" style={{ borderColor: "var(--border)" }}>
            <span className="flex items-center gap-2 text-sm font-medium">
              <LanguagesIcon size={16} style={{ color: "var(--accent)" }} /> Languages
            </span>
            {languages.map((l) => (
              <span key={l.name} className="tag-pill rounded-full px-3 py-1.5 text-xs font-medium">
                {l.name} · {l.level}
              </span>
            ))}
          </div>
        </div>
      </section>
      <Gallery />
      <CtaBand
        title="Curious how this background applies to your project?"
        description="Happy to walk through the details behind any line on this timeline."
      />
    </>
  );
}
