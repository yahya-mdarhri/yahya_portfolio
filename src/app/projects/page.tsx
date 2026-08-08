import type { Metadata } from "next";
import Projects from "@/components/Projects";
import CtaBand from "@/components/CtaBand";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Projects — ${profile.name}`,
  description: "Real platforms and models shipped, with the outcomes they drove.",
};

export default function ProjectsPage() {
  return (
    <>
      <div className="pt-16 sm:pt-24" />
      <Projects />
      <CtaBand
        title="Got a project like one of these?"
        description="Happy to talk through scope, approach, and what a realistic timeline looks like."
      />
    </>
  );
}
