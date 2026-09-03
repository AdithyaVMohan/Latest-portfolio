"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import CitySilhouette from "@/components/ui/CitySilhouette";
import { profile } from "@/data/resume";

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: profile.location, href: undefined },
  { icon: Github, label: "GitHub", value: "AdithyaVMohan", href: profile.links.github },
  { icon: Linkedin, label: "LinkedIn", value: "Adithya V Mohan", href: profile.links.linkedin, },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      <CitySilhouette className="absolute bottom-0 left-0 w-full h-40 opacity-40" />
      <div className="absolute inset-0 bg-grid-glow opacity-60" />

      <div className="mx-auto max-w-4xl relative">
        <SectionHeading
          eyebrow="Contact"
          align="center"
          title="Let's build something"
          description="Actively seeking Full Stack Developer opportunities in Dubai and across the UAE — open to a conversation."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <GlassCard strong className="p-8 sm:p-10">
            <div className="grid sm:grid-cols-2 gap-5">
              {channels.map((c) => {
                const Icon = c.icon;
                const content = (
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl glass p-3 text-cyan shrink-0">
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted">{c.label}</p>
                      <p className="text-sm text-ink truncate">{c.value}</p>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-xl p-3 hover:bg-white/[0.04] transition-colors"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={c.label} className="rounded-xl p-3">
                    {content}
                  </div>
                );
              })}
            </div>
      
              <div className="mt-8 flex justify-center">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                    profile.email
                  )}&su=${encodeURIComponent(
                    "Full Stack Developer Opportunity"
                  )}&body=${encodeURIComponent(
                    "Hi Adithya,\n\nI came across your portfolio and would like to connect with you regarding a potential opportunity.\nLooking forward to hearing from you.\n\nRegards"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-violet px-8 py-3.5 text-sm font-medium text-void shadow-neon hover:scale-[1.03] active:scale-[0.98] transition-transform"
                >
                  <Mail size={16} />
                  Send an email
                </a>
              </div>

          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
