"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 sm:pt-24 pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, var(--accent-soft) 0%, transparent 70%)",
        }}
      />

      <div className="section-container grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="tag-pill inline-flex items-center rounded-full px-3 py-1 text-xs font-medium">
            Available for new projects &amp; opportunities
          </span>

          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
            {profile.name}
          </h1>

          <p className="mt-4 text-lg sm:text-xl font-medium" style={{ color: "var(--accent)" }}>
            {profile.titles.join("  ·  ")}
          </p>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
            Turning fragmented data and paper-based processes into structured,
            trustworthy systems — leading projects end-to-end from scoping to
            deployment, at the intersection of data science and project
            management.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
              style={{ backgroundColor: "var(--accent)" }}
            >
              View my projects
            </a>
            <a
              href="#contact"
              className="tag-pill rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-105"
            >
              Let&apos;s talk
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm" style={{ color: "var(--muted)" }}>
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} /> {profile.location}
            </span>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-[var(--accent)]">
              <Mail size={16} /> {profile.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <Phone size={16} /> {profile.phone}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="animate-float relative aspect-square w-full">
            <div
              className="absolute inset-0 rounded-[2.5rem] rotate-6"
              style={{ background: "linear-gradient(135deg, var(--accent), #0ea5e9)" }}
            />
            <div className="card absolute inset-3 flex items-center justify-center overflow-hidden rounded-[2rem]">
              <span className="text-7xl font-bold" style={{ color: "var(--accent)" }}>
                YM
              </span>
            </div>
          </div>
          <div className="card absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl px-4 py-3 shadow-lg">
            <span className="flex h-9 w-9 items-center justify-center rounded-full text-white font-bold" style={{ backgroundColor: "var(--accent)" }}>
              P
            </span>
            <div className="text-xs leading-tight">
              <p className="font-semibold">PMP® Certified</p>
              <p style={{ color: "var(--muted)" }}>PMI, 2026</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-16 flex justify-center">
        <a href="#about" aria-label="Scroll to about section" className="animate-float">
          <ArrowDown size={20} style={{ color: "var(--muted)" }} />
        </a>
      </div>
    </section>
  );
}
