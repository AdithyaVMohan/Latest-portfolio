import { profile } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted font-mono">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="text-xs text-muted font-mono">{profile.location}</p>
      </div>
    </footer>
  );
}
