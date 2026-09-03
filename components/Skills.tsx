"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { skillGroups } from "@/data/resume";

const SkillOrb = dynamic(() => import("@/components/three/SkillOrb"), { ssr: false });

const orbColors = ["#5FF0E0", "#7C5CFF", "#FF6FA8"];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="pointer-events-none absolute -top-10 right-0 h-72 w-72 opacity-40">
        <SkillOrb color="#7C5CFF" size={1} />
      </div>

      <div className="mx-auto max-w-6xl relative">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard className="p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: orbColors[i % orbColors.length] }}
                  />
                  <h3 className="font-display text-sm tracking-wide text-ink">{group.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-glass-border bg-white/[0.03] px-3 py-1 text-xs text-cyan hover:border-cyan/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
