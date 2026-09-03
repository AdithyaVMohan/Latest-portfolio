"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected builds"
          description="Full-stack applications spanning UI, APIs, auth, and schema design."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard strong className="p-7 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl glass p-2.5 text-cyan">
                      <Layers size={20} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-ink">{project.title}</h3>
                      <p className="text-xs font-mono text-violet tracking-wide">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} on GitHub`}
                      className="text-muted hover:text-cyan transition-colors shrink-0"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                <ul className="space-y-3 mb-6 flex-1">
                  {project.points.map((pt, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-sm text-muted leading-relaxed"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-violet/70" />

                      <span className="text-justify flex-1">
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/[0.03] border border-glass-border px-3 py-1 text-[11px] font-mono text-cyan"
                    >
                      {tech}
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
