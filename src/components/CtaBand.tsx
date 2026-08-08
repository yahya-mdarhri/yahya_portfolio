import { profile } from "@/data/portfolio";

export default function CtaBand({
  title = "Have work that should be shipping faster?",
  description = "Tell me the outcome you're after — I'll tell you honestly whether, and how, I can help get you there.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-t py-20 sm:py-24 text-center" style={{ borderColor: "var(--border)" }}>
      <div className="section-container">
        <div className="eyebrow flex items-center justify-center gap-2">
          <span className="dot">●</span> Available for projects
        </div>
        <h2 className="mx-auto mt-4 max-w-xl text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
        <p className="mx-auto mt-4 max-w-lg" style={{ color: "var(--muted)" }}>
          {description}
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Start a conversation →
        </a>
      </div>
    </section>
  );
}
