"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { certifications } from "@/data/resume";

const SkillOrb = dynamic(() => import("@/components/three/SkillOrb"), { ssr: false });

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 px-6">
      <div className="pointer-events-none absolute top-10 left-0 h-56 w-56 opacity-30">
        <SkillOrb color="#FF6FA8" size={0.9} />
      </div>

      <div className="mx-auto max-w-5xl relative">
        <SectionHeading
          eyebrow="Achievements"
          title="Certifications"
          description="Active credentials, with validity windows."
        />

        <div className="grid sm:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard strong className="p-6 h-full">
                <div className="rounded-xl glass inline-flex p-3 text-cyan mb-4">
                  <BadgeCheck size={20} />
                </div>
                <h3 className="font-display text-base text-ink leading-snug">{cert.name}</h3>
                <p className="text-sm text-violet mt-1">{cert.issuer}</p>
                <p className="text-xs font-mono text-muted mt-4">{cert.validity}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
