"use client";

import { motion } from "framer-motion";
import { radarSkills } from "@/data/portfolio";

const SIZE = 320;
const CENTER = SIZE / 2;
const RADIUS = SIZE / 2 - 70;
const MAX = 10;
const RINGS = [2, 4, 6, 8, 10];

function pointFor(index: number, total: number, value: number) {
  const angle = -Math.PI / 2 + (index * 2 * Math.PI) / total;
  const r = (RADIUS * value) / MAX;
  return { x: CENTER + r * Math.cos(angle), y: CENTER + r * Math.sin(angle) };
}

function labelPointFor(index: number, total: number) {
  const angle = -Math.PI / 2 + (index * 2 * Math.PI) / total;
  const r = RADIUS + 22;
  return { x: CENTER + r * Math.cos(angle), y: CENTER + r * Math.sin(angle) };
}

export default function SkillsRadar() {
  const total = radarSkills.length;
  const valuePoints = radarSkills.map((s, i) => pointFor(i, total, s.value));
  const polygon = valuePoints.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <div className="card p-5">
      <div className="eyebrow flex items-center gap-2">
        <span className="dot">●</span> Self-assessed
      </div>
      <h3 className="mt-2 font-display text-lg font-semibold">Skills radar</h3>

      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="mx-auto mt-2 w-full max-w-sm" style={{ overflow: "visible" }}>
        {RINGS.map((level) => {
          const ringPoints = radarSkills.map((_, i) => pointFor(i, total, level));
          return (
            <polygon
              key={level}
              points={ringPoints.map((p) => `${p.x},${p.y}`).join(" ")}
              fill="none"
              stroke="var(--border)"
              strokeWidth={1}
            />
          );
        })}

        {radarSkills.map((_, i) => {
          const outer = pointFor(i, total, MAX);
          return (
            <line
              key={i}
              x1={CENTER}
              y1={CENTER}
              x2={outer.x}
              y2={outer.y}
              stroke="var(--border)"
              strokeWidth={1}
            />
          );
        })}

        <motion.polygon
          points={polygon}
          fill="var(--accent)"
          fillOpacity={0.22}
          stroke="var(--accent)"
          strokeWidth={2}
          strokeLinejoin="round"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
        />

        {valuePoints.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={3.5} fill="var(--deliver)" />
        ))}

        {radarSkills.map((s, i) => {
          const lp = labelPointFor(i, total);
          const anchor = Math.abs(lp.x - CENTER) < 4 ? "middle" : lp.x > CENTER ? "start" : "end";
          return (
            <text
              key={s.axis}
              x={lp.x}
              y={lp.y}
              textAnchor={anchor}
              dominantBaseline="middle"
              fontSize={10.5}
              fontFamily="var(--font-mono)"
              fill="var(--muted)"
            >
              {s.axis}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
