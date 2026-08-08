"use client";

import { motion } from "framer-motion";
import { regressionProjects } from "@/data/portfolio";

const W = 440;
const H = 300;
const PAD = 34;

function scaleX(v: number) {
  return PAD + ((W - 2 * PAD) * v) / 10;
}
function scaleY(v: number) {
  return H - PAD - ((H - 2 * PAD) * v) / 10;
}

function linearFit(points: { x: number; y: number }[]) {
  const n = points.length;
  const sumX = points.reduce((s, p) => s + p.x, 0);
  const sumY = points.reduce((s, p) => s + p.y, 0);
  const sumXY = points.reduce((s, p) => s + p.x * p.y, 0);
  const sumXX = points.reduce((s, p) => s + p.x * p.x, 0);
  const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;
  return { slope, intercept };
}

export default function RegressionPlot() {
  const points = regressionProjects.map((p) => ({ x: p.complexity, y: p.impact, name: p.name }));
  const { slope, intercept } = linearFit(points);
  const x0 = 0.5;
  const x1 = 9.5;
  const y0 = slope * x0 + intercept;
  const y1 = slope * x1 + intercept;

  return (
    <div className="card relative overflow-hidden p-5">
      <div className="eyebrow flex items-center gap-2">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: "var(--deliver)", boxShadow: "0 0 8px var(--deliver)" }}
        />
        Signal · found &amp; fitted
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 w-full" role="img" aria-label="Scatter plot of project technical complexity versus business impact, with a fitted trend line">
        {[2, 4, 6, 8, 10].map((v) => (
          <line key={`h${v}`} x1={PAD} x2={W - PAD} y1={scaleY(v)} y2={scaleY(v)} stroke="var(--border)" strokeWidth={1} />
        ))}
        {[2, 4, 6, 8, 10].map((v) => (
          <line key={`v${v}`} x1={scaleX(v)} x2={scaleX(v)} y1={PAD} y2={H - PAD} stroke="var(--border)" strokeWidth={1} />
        ))}

        <line x1={PAD} x2={PAD} y1={PAD} y2={H - PAD} stroke="var(--faint)" strokeWidth={1.2} />
        <line x1={PAD} x2={W - PAD} y1={H - PAD} y2={H - PAD} stroke="var(--faint)" strokeWidth={1.2} />

        <text x={W / 2} y={H - 6} textAnchor="middle" fontSize={10} fontFamily="var(--font-mono)" fill="var(--muted)">
          Technical complexity →
        </text>
        <text x={12} y={H / 2} textAnchor="middle" fontSize={10} fontFamily="var(--font-mono)" fill="var(--muted)" transform={`rotate(-90 12 ${H / 2})`}>
          Business impact →
        </text>

        <motion.line
          x1={scaleX(x0)}
          y1={scaleY(y0)}
          x2={scaleX(x1)}
          y2={scaleY(y1)}
          stroke="var(--deliver)"
          strokeWidth={2.5}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />

        {points.map((p, i) => (
          <motion.g
            key={p.name}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 * i }}
          >
            <circle cx={scaleX(p.x)} cy={scaleY(p.y)} r={5.5} fill="var(--accent)" fillOpacity={0.85} />
            <title>{`${p.name} — complexity ${p.x}/10, impact ${p.y}/10`}</title>
          </motion.g>
        ))}
      </svg>

      <p className="mt-2 text-[11px]" style={{ color: "var(--faint)" }}>
        Illustrative positioning of real projects — self-estimated, not a measured metric.
      </p>
    </div>
  );
}
