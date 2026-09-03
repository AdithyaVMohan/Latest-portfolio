"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where the work happened"
          description="Ordered from most recent — each role built on the last."
        />

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan via-violet to-transparent" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={job.employer}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative"
              >
                {/* Timeline dot */}
                <span
                  className={`absolute -left-8 sm:-left-10 top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                    job.current
                      ? "bg-cyan border-cyan shadow-neon"
                      : "bg-void border-violet"
                  }`}
                />

                <GlassCard className="p-6">
                  {/* Role + Period */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="font-display text-lg text-ink">
                      {job.role}
                    </h3>

                    <span className="text-xs font-mono text-cyan">
                      {job.period}
                    </span>
                  </div>

                  {/* Employer + Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <p className="text-sm text-violet">
                      {job.employer}
                    </p>

                    {job.tag && (
                      <span className="rounded-full bg-violet/15 px-2 py-0.5 text-[10px] font-mono text-violet tracking-wide">
                        {job.tag}
                      </span>
                    )}

                    {job.current && (
                      <span className="rounded-full bg-cyan/15 px-2 py-0.5 text-[10px] font-mono text-cyan tracking-wide">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Experience points */}
                  <ul className="space-y-3">
                    {job.points.map((pt, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2"
                      >
                        {/* Bullet */}
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan/70" />

                        {/* Paragraph - same alignment as About */}
                        <p className="flex-1 text-muted leading-relaxed text-sm text-justify font-mono">
                          {pt}
                        </p>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

