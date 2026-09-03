"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ArrowDown, Github, Mail, MapPin } from "lucide-react";
import { profile, targetRoles } from "@/data/resume";
import CitySilhouette from "@/components/ui/CitySilhouette";
import RotatingRoles from "@/components/ui/RotatingRoles";

const StackCore = dynamic(() => import("@/components/three/StackCore"), { ssr: false });

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 pb-20"
    >
      {/* Ambient gradient wash */}
      <div className="absolute inset-0 bg-grid-glow" />
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-violet/20 blur-[120px]" />
      <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-cyan/10 blur-[140px]" />

      {/* City storytelling layer */}
      <CitySilhouette className="absolute bottom-0 left-0 w-full h-40 sm:h-56 opacity-60" />

      <div className="relative z-10 mx-auto max-w-6xl w-full px-6 grid md:grid-cols-2 gap-14 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* <motion.span variants={item} className="section-eyebrow">
            Full Stack Developer · Sharjah, UAE
          </motion.span> */}

          <motion.h1
            variants={item}
            className="
              mt-5
              font-display
              font-extrabold
              leading-none
              tracking-[-0.055em]
              whitespace-nowrap
              text-[clamp(2.25rem,5vw,5rem)]
            "
          >
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-4 h-12 flex items-center font-mono text-3xl sm:text-4xl text-cyan tracking-wide"
          >
            <RotatingRoles roles={targetRoles} />
          </motion.div>

          <motion.p variants={item} className="mt-5 text-lg sm:text-base text-muted max-w-lg leading-relaxed font-mono">
            Building end-to-end web applications with{" "}
            <span className="text-ink">React.js, Next.js, Node.js, PostgreSQL</span> and{" "}
            <span className="text-ink">TypeScript</span> — from requirements through
            deployment.
          </motion.p>

          <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
            {profile.stack.map((s) => (
              <span
                key={s}
                className="glass rounded-full px-3.5 py-1.5 text-xs font-mono tracking-wide text-cyan"
              >
                {s}
              </span>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-violet px-6 py-3 text-sm font-medium text-void shadow-neon hover:scale-[1.03] active:scale-[0.98] transition-transform"
            >
              <Mail size={16} /> Get in touch
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-ink hover:text-cyan transition-colors"
            >
              <Github size={16} /> GitHub
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex items-center gap-2 text-sm text-muted font-mono"
          >
            <MapPin size={14} className="text-cyan" />
            {profile.residency}
          </motion.div>
        </motion.div>

        {/* Photo + 3D signature element */}
       <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 1,
    ease: [0.16, 1, 0.3, 1],
    delay: 0.3,
  }}
  className="relative mx-auto aspect-square w-full max-w-md"
>
  {/* Animated elements */}
  <div className="absolute inset-0 z-0">
    <StackCore />
  </div>

  {/* Profile image */}
  <div className="absolute inset-[10%] z-10 rounded-full glass-strong shadow-neon overflow-hidden animate-float">
   <Image
      src={profile.photo}
      alt={profile.name}
      fill
      sizes="(max-width: 768px) 70vw, 28rem"
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-t from-void/40 via-transparent to-transparent" />
  </div>
</motion.div>
</div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-cyan transition-colors animate-pulse-glow"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
