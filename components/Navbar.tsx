"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navItems } from "@/data/resume";
import ThemeToggle from "@/components/ThemeToggle";

const whatsappUrl =
  "https://wa.me/971563787981?text=Hi%20Adithya%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20opportunity%20with%20you.";

const cvUrl = "/assets/AdithyaVMohan_Full_Stack_Developer.pdf";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`w-full max-w-8xl rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "glass-strong shadow-glass"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href="#hero"
          className="font-display text-sm sm:text-base tracking-wide text-ink hover:text-cyan transition-colors"
        >
          A<span className="text-cyan"></span>V
          <span className="text-violet">M</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-muted hover:text-ink transition-colors relative group"
              >
                {item.label}

                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyan to-violet transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Download CV */}
          <a
            href={cvUrl}
            download
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-mono tracking-wide text-ink hover:text-cyan hover:shadow-neon transition-all"
          >
            <Download size={14} />
            Download CV
          </a>

          {/* Let's Talk */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full glass px-4 py-2 text-xs font-mono tracking-wide text-cyan hover:shadow-neon transition-shadow"
          >
            Let&apos;s talk
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="text-ink"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="absolute top-20 left-4 right-4 glass-strong rounded-2xl p-6 md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {/* Mobile Navigation */}
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-base text-ink hover:text-cyan transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              {/* Mobile Download CV */}
              <li>
                <a
                  href={cvUrl}
                  download
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 text-base text-ink hover:text-cyan transition-colors"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </li>

              {/* Mobile Let's Talk */}
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="text-base text-cyan hover:text-ink transition-colors"
                >
                  Let&apos;s talk →
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
