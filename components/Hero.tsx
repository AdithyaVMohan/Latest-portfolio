"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Github, Mail, MapPin } from "lucide-react";
import { profile, targetRoles } from "@/data/resume";
import CitySilhouette from "@/components/ui/CitySilhouette";
import RotatingRoles from "@/components/ui/RotatingRoles";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const merntItems = [
  {
    name: "MongoDB",
    short: "M",
    color: "text-[#47A248]",
    bg: "bg-[#47A248]/10",
    position:
      "top-[4%] left-[2%] md:top-[6%] md:left-[2%]",
    delay: 0,
  },
  {
    name: "Express",
    short: "Ex",
    color: "text-white",
    bg: "bg-white/10",
    position:
      "bottom-[8%] left-[0%] md:bottom-[10%] md:left-[1%]",
    delay: 0.8,
  },
  {
    name: "React",
    short: "⚛",
    color: "text-[#61DAFB]",
    bg: "bg-[#61DAFB]/10",
    position:
      "top-[10%] right-[0%] md:top-[7%] md:right-[1%]",
    delay: 1.5,
  },
  {
    name: "Node.js",
    short: "N",
    color: "text-[#339933]",
    bg: "bg-[#339933]/10",
    position:
      "bottom-[4%] right-[1%] md:bottom-[3%] md:right-[2%]",
    delay: 2.2,
  },
  {
    name: "PostgreSQL",
    short: "PG",
    color: "text-[#4169E1]",
    bg: "bg-[#4169E1]/10",
    position:
    "top-1/2 right-[-3%] md:right-[-10%]",
    delay: 3,
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-[100svh]
        flex
        items-center
        overflow-hidden
        pt-24
        pb-16
        md:pt-28
        md:pb-20
      "
    >
      {/* Ambient gradient wash */}
      <div className="absolute inset-0 bg-grid-glow" />

      <div
        className="
          absolute
          -top-40
          -left-40
          h-96
          w-96
          rounded-full
          bg-violet/20
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          top-1/3
          -right-32
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-cyan/10
          blur-[140px]
        "
      />

      {/* City storytelling layer */}
      <CitySilhouette
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-40
          sm:h-56
          opacity-60
        "
      />

      {/* Main content */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          w-full
          px-6
          grid
          md:grid-cols-2
          gap-8
          md:gap-14
          items-center
        "
      >
        {/* =====================================================
            PROFILE PHOTO
            MOBILE: ABOVE NAME
            DESKTOP: RIGHT SIDE
        ===================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.3,
          }}
          className="
            relative
            mx-auto
            aspect-square
            w-[65vw]
            max-w-[280px]
            md:w-full
            md:max-w-md
            order-1
            md:order-2
          "
        >
          {/* =================================================
              MERN FLOATING BADGES
          ================================================== */}

          {merntItems.map((tech) => (
            <motion.div
              key={tech.name}
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -7, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.6,
                  delay: tech.delay,
                },
                scale: {
                  duration: 0.6,
                  delay: tech.delay,
                },
                y: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: tech.delay,
                },
              }}
              className={`
                absolute
                ${tech.position}
                z-20
                flex
                flex-col
                items-center
                justify-center
                gap-1.5
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.035]
                backdrop-blur-md
                px-3
                py-2.5
                shadow-[0_0_25px_rgba(95,240,224,0.06)]
                transition-all
                duration-300
                hover:scale-110
                hover:border-white/[0.15]
              `}
            >
              {/* Icon */}
             <span
                className={`
                  flex
                  h-10
                  w-10
                  sm:h-11
                  sm:w-11
                  items-center
                  justify-center
                  rounded-lg
                  ${tech.bg}
                  font-mono
                  text-sm
                  sm:text-base
                  font-bold
                  ${tech.color}
                `}
              >
                {tech.short}
              </span>

              {/* Label */}
              <span
                className="
                  hidden
                  sm:block
                  font-mono
                  text-[10px]
                  tracking-wide
                  text-muted
                "
              >
                {tech.name}
              </span>
            </motion.div>
          ))}

          {/* Profile image */}
          <motion.div
            className="
              absolute
              inset-[12%]
              z-10
              overflow-hidden
              rounded-full
              animate-float
            "
          >
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              sizes="(max-width: 768px) 55vw, 28rem"
              className="object-cover"
              priority
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-void/40
                via-transparent
                to-transparent
              "
            />
          </motion.div>
        </motion.div>

        {/* =====================================================
            TEXT CONTENT
            MOBILE: BELOW PHOTO
            DESKTOP: LEFT SIDE
        ===================================================== */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="
            order-2
            md:order-1
            text-center
            md:text-left
          "
        >
          {/* Open to opportunities */}
          <motion.div
            variants={item}
            className="
              mb-4
              flex
              items-center
              justify-center
              md:justify-start
            "
          >
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan/10
                bg-cyan/5
                px-3
                py-1.5
                font-mono
                text-[11px]
                tracking-wide
                text-cyan
              "
            >
              <span className="text-cyan text-sm leading-none">
                ★
              </span>

              Open to new opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="
              mt-0
              md:mt-5
              font-display
              font-extrabold
              leading-none
              tracking-[-0.055em]
              whitespace-nowrap
              text-[clamp(1.6rem,7vw,4.5rem)]
            "
          >
            <span className="text-gradient">
              {profile.name}
            </span>
          </motion.h1>

          {/* Rotating roles */}
          <motion.div
            variants={item}
            className="
              mt-4
              h-12
              flex
              items-center
              justify-center
              md:justify-start
              font-mono
              text-2xl
              sm:text-3xl
              md:text-4xl
              text-cyan
              tracking-wide
            "
          >
            <RotatingRoles roles={targetRoles} />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="
              mt-5
              text-base
              sm:text-lg
              text-muted
              max-w-lg
              mx-auto
              md:mx-0
              leading-relaxed
              font-mono
            "
          >
            Building end-to-end web applications with{" "}
            <span className="text-ink">
              React.js, Next.js, Node.js, PostgreSQL
            </span>{" "}
            and{" "}
            <span className="text-ink">
              TypeScript
            </span>{" "}
            — from requirements through deployment.
          </motion.p>

          {/* Technology stack */}
          <motion.div
            variants={item}
            className="
              mt-6
              flex
              flex-wrap
              justify-center
              md:justify-start
              gap-2
            "
          >
            {profile.stack.map((s) => (
              <span
                key={s}
                className="
                  glass
                  rounded-full
                  px-3.5
                  py-1.5
                  text-xs
                  font-mono
                  tracking-wide
                  text-cyan
                "
              >
                {s}
              </span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="
              mt-9
              flex
              flex-wrap
              items-center
              justify-center
              md:justify-start
              gap-4
            "
          >
            {/* Get in touch */}
            <a
              href="#contact"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-cyan
                to-violet
                px-6
                py-3
                text-sm
                font-medium
                text-void
                shadow-neon
                hover:scale-[1.03]
                active:scale-[0.98]
                transition-transform
              "
            >
              <Mail size={16} />
              Get in touch
            </a>

            {/* GitHub */}
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                glass
                px-6
                py-3
                text-sm
                font-medium
                text-ink
                hover:text-cyan
                transition-colors
              "
            >
              <Github size={16} />
              GitHub
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={item}
            className="
              mt-8
              flex
              items-center
              justify-center
              md:justify-start
              gap-2
              text-sm
              text-muted
              font-mono
            "
          >
            <MapPin
              size={14}
              className="text-cyan"
            />

            {profile.residency}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll down */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          text-muted
          hover:text-cyan
          transition-colors
          animate-pulse-glow
        "
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}