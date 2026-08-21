"use client";

import { useState } from "react";

export default function MobileMenu({
  sections,
}: {
  sections: { no: string; label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative hidden max-[860px]:block">
      <button
        type="button"
        aria-label="Open section menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-[38px] w-[38px] items-center justify-center rounded-lg border border-line text-[17px] text-ink hover:border-accent hover:text-accent"
      >
        {open ? "✕" : "☰"}
      </button>
      {open && (
        <div className="absolute right-0 top-[50px] z-50 min-w-[190px] rounded-xl border border-line bg-panel p-2 shadow-card">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3.5 py-2.5 text-[14.5px] text-ink no-underline hover:bg-chip hover:text-accent"
            >
              <span className="mr-1.5 font-mono text-xs text-accent">{s.no}</span>
              {s.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
