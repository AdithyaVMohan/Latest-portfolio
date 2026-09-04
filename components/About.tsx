"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { profile, summary, experience } from "@/data/resume";

const stats = [
  { label: "Years experience", value: "4+" },
  { label: "Employers", value: String(experience.length) },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
  <div className="mx-auto max-w-6xl">
    <div className="grid md:grid-cols-5 gap-10 lg:gap-8 items-center">

      {/* LEFT — PHOTO + STATS */}
<div className="md:col-span-2">

  {/* PHOTO — hidden on small devices */}
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="hidden md:block"
  >
    <GlassCard strong className="p-3">
      <div className="relative h-[420px] w-full overflow-hidden rounded-xl">
        <Image
          src={profile.summaryphoto}
          alt={`${profile.name}, Full Stack Developer`}
          fill
          sizes="(max-width: 768px) 90vw, 28rem"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />

        <div className="absolute bottom-4 left-4 right-4">
          <p className="font-display text-sm text-black">
            {profile.name}
          </p>

          <p className="text-sm font-mono text-cyan tracking-wide whitespace-nowrap">
            {profile.title}
          </p>
        </div>
      </div>
    </GlassCard>
  </motion.div>

  {/* STATS — visible on ALL devices */}
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-3 mt-4">
    {stats.map((s) => (
      <GlassCard
        key={s.label}
        className="p-4 text-center"
      >
        <p className="font-display text-2xl text-gradient">
          {s.value}
        </p>

        <p className="text-xs text-muted mt-1">
          {s.label}
        </p>
      </GlassCard>
    ))}
  </div>

</div>

      {/* RIGHT — ABOUT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.1,
        }}
        className="md:col-span-3"
      >
        {/* ABOUT HEADING */}
        <SectionHeading
          eyebrow="About"
          title="Turning Ideas Into Digital Experiences"
          description="A snapshot of who I am and how I work."
        />

        {/* ABOUT PARAGRAPHS */}
        <div className="space-y-5 mt-2">
          {summary.map((p, i) => (
            <p
              key={i}
              className="text-muted leading-relaxed text-sm text-justify font-mono"
            >
              {p}
            </p>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="divider-line my-3" />

        {/* CONTACT INFO */}
          <div className="flex flex-wrap gap-3">
            <GlassCard className="px-4 py-2">
              <span className="text-xs font-mono text-cyan">
                {profile.email}
              </span>
            </GlassCard>

            <GlassCard className="px-4 py-2">
              <span className="text-xs font-mono text-cyan">
                {profile.phone}
              </span>
            </GlassCard>

            <GlassCard className="px-4 py-2">
              <span className="text-xs font-mono text-cyan">
                {profile.location}
              </span>
            </GlassCard>
          </div>
      </motion.div>

    </div>
  </div>
</section>
  );
}
