"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-14 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gradient">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted text-base sm:text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
