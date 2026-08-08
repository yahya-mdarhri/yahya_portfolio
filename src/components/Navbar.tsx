"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/data/portfolio";

const links = [
  { href: "/", label: "Home" },
  { href: "/offer", label: "What I Offer" },
  { href: "/timeline", label: "Timeline" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${scrolled ? "backdrop-blur-md border-b" : ""}`}
      style={{
        borderColor: scrolled ? "var(--border)" : "transparent",
        backgroundColor: scrolled ? "color-mix(in srgb, var(--background) 85%, transparent)" : "transparent",
      }}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        <Link href="/" className="font-display font-bold tracking-tight text-lg">
          Yahya<span style={{ color: "var(--accent)" }}>.</span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm transition-colors"
                style={{ color: active ? "var(--foreground)" : "var(--muted)", fontWeight: active ? 600 : 400 }}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={`mailto:${profile.email}`}
            className="font-mono rounded-lg border px-4 py-2 text-xs transition-colors"
            style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
          >
            Let&apos;s talk →
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="tag-pill flex h-9 w-9 items-center justify-center rounded-full"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t" style={{ borderColor: "var(--border)", backgroundColor: "var(--background)" }}>
          <div className="section-container flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm"
                style={{ color: "var(--foreground)" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium"
              style={{ color: "var(--accent)" }}
            >
              Let&apos;s talk →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
