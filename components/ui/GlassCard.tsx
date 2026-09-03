"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";

export default function GlassCard({
  children,
  className = "",
  strong = false,
  glow = true,
}: {
  children: ReactNode;
  className?: string;
  strong?: boolean;
  glow?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`relative overflow-hidden rounded-2xl ${
        strong ? "glass-strong" : "glass"
      } shadow-glass ${className}`}
    >
      {glow && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100"
          style={{
            background: `radial-gradient(320px circle at ${pos.x}% ${pos.y}%, rgba(95,240,224,0.12), transparent 70%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
