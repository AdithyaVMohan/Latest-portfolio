"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { education, languages } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" className="relative py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Education"
          title="Foundations"
          description="Academic background in computer science and hardware engineering."
        />

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard className="p-7 h-full relative overflow-hidden">
                <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-violet/10 blur-2xl" />
                <div className="rounded-xl glass inline-flex p-3 text-cyan mb-4">
                  <GraduationCap size={22} />
                </div>
                <h3 className="font-display text-lg text-ink leading-snug">{edu.degree}</h3>
                <p className="text-sm text-violet mt-1">{edu.school}</p>
                <div className="flex items-center gap-3 mt-4 text-xs font-mono text-muted">
                  <span>{edu.period}</span>
                  <span className="h-1 w-1 rounded-full bg-muted/50" />
                  <span className="text-cyan">{edu.score}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <GlassCard className="p-6">
            <h3 className="section-eyebrow mb-4">Languages</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <p className="text-ink text-sm font-medium">{lang.name}</p>
                  <p className="text-xs text-muted mt-0.5">{lang.abilities.join(" · ")}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
