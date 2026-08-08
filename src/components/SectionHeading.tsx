import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <span className="eyebrow flex items-center gap-2">
        <span className="dot">●</span> {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
