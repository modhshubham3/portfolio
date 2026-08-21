"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Full-Stack .NET Developer",
  "Real-Time Fleet Systems",
  "PostgreSQL · Kafka",
];

export default function Typewriter() {
  const [text, setText] = useState(ROLES[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let roleIndex = 0;
    let charIndex = ROLES[0].length;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      const word = ROLES[roleIndex];
      if (!deleting) {
        charIndex++;
        if (charIndex >= word.length) {
          charIndex = word.length;
          deleting = true;
          setText(word);
          timer = setTimeout(tick, 2200);
          return;
        }
      } else {
        charIndex--;
        if (charIndex <= 0) {
          charIndex = 0;
          deleting = false;
          roleIndex = (roleIndex + 1) % ROLES.length;
        }
      }
      setText(ROLES[roleIndex].slice(0, charIndex) || " ");
      timer = setTimeout(tick, deleting ? 40 : 75);
    }

    timer = setTimeout(tick, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-6 min-h-[1.6em] font-mono text-[16.5px] text-ink">
      <span className="mr-2 text-accent">&gt;</span>
      <span>{text}</span>
      <span
        aria-hidden="true"
        className="ml-[3px] inline-block h-[1.15em] w-[2px] animate-blink bg-accent align-text-bottom motion-reduce:animate-none"
      />
    </div>
  );
}
