"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { profile, stats } from "@/data/portfolio";
import RegressionPlot from "./RegressionPlot";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 sm:pt-20 pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 78% -8%, var(--accent-soft) 0%, transparent 70%), radial-gradient(50% 40% at 5% 12%, var(--deliver-soft) 0%, transparent 70%)",
        }}
      />

      <div className="section-container grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3">
            {profile.photo ? (
              <Image
                src={profile.photo}
                alt={profile.name}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
                style={{ border: "2px solid var(--accent)" }}
              />
            ) : (
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold"
                style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent)" }}
              >
                YM
              </span>
            )}
            <div className="eyebrow flex items-center gap-2">
              <span className="dot">●</span> Data Science · Project Delivery
            </div>
          </div>

          <h1 className="mt-5 text-4xl sm:text-6xl font-bold tracking-tight leading-[1.02]">
            I turn messy data
            <span
              className="block bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(100deg, var(--accent), #7da0ff 55%, var(--deliver))" }}
            >
              into shipped results.
            </span>
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-2 font-mono text-sm">
            <span>{profile.titles[1]}</span>
            <span style={{ color: "var(--faint)" }}>/</span>
            <span
              className="rounded-md border px-2 py-0.5 text-xs font-medium"
              style={{ color: "var(--deliver)", borderColor: "var(--deliver)" }}
            >
              PMP® Certified
            </span>
          </div>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
            {profile.pitch}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/offer"
              className="rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
              style={{ backgroundColor: "var(--accent)" }}
            >
              See what I offer →
            </Link>
            <Link
              href="/timeline"
              className="tag-pill rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-105"
            >
              My background
            </Link>
          </div>

          <div className="mt-10 flex gap-0 border-t pt-6" style={{ borderColor: "var(--border)" }}>
            {stats.slice(0, 3).map((s, i) => (
              <div key={s.label} className={`flex-1 ${i > 0 ? "border-l pl-4" : ""}`} style={{ borderColor: "var(--border)" }}>
                <div className="font-display text-2xl sm:text-3xl font-bold tracking-tight">{s.value}</div>
                <div className="font-mono mt-1 text-[10px] uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: "var(--muted)" }}>
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} /> {profile.location}
            </span>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-[var(--accent)]">
              <Mail size={14} /> {profile.email}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          <RegressionPlot />
        </motion.div>
      </div>
    </section>
  );
}
