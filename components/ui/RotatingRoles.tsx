"use client";

import { useEffect, useState } from "react";

const TYPE_SPEED = 55;
const DELETE_SPEED = 30;
const HOLD_MS = 1400;
const GAP_MS = 300;

export default function RotatingRoles({
  roles,
  className = "",
}: {
  roles: string[];
  className?: string;
}) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting" | "gap">("typing");

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), TYPE_SPEED);
      } else {
        timeout = setTimeout(() => setPhase("holding"), HOLD_MS);
      }
    } else if (phase === "holding") {
      timeout = setTimeout(() => setPhase("deleting"), 0);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), DELETE_SPEED);
      } else {
        timeout = setTimeout(() => setPhase("gap"), GAP_MS);
      }
    } else if (phase === "gap") {
      setRoleIndex((i) => (i + 1) % roles.length);
      setPhase("typing");
    }

    return () => clearTimeout(timeout);
  }, [text, phase, roleIndex, roles]);

  return (
    <span className={className} aria-live="polite">
      <span className="sr-only">{roles.join(", ")}</span>
      <span aria-hidden="true">
        {text}
        <span className="inline-block w-[2px] h-[0.9em] align-middle ml-1 bg-cyan animate-pulse-glow" />
      </span>
    </span>
  );
}
