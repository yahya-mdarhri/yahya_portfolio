import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t py-8" style={{ borderColor: "var(--border)" }}>
      <div className="section-container flex flex-col items-center justify-between gap-4 text-sm sm:flex-row" style={{ color: "var(--muted)" }}>
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>Built with Next.js &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}
