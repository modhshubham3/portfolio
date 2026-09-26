"use client";

import { useEffect, useRef, useState } from "react";
import Dock from "../ls/Dock";

const icon = (d: string) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d={d} />
  </svg>
);

const go = (id: string) => () => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function DockBar() {
  // The dock floats over the page, so it gets out of the way while reading
  // downward and comes back the moment you scroll up.
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    lastY.current = window.scrollY;
    const read = () => {
      frame.current = null;
      const y = window.scrollY;
      const delta = y - lastY.current;
      if (Math.abs(delta) > 6) {
        setHidden(delta > 0 && y > 260);
        lastY.current = y;
      }
    };
    const onScroll = () => {
      if (frame.current === null) frame.current = requestAnimationFrame(read);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center transition-[transform,opacity] duration-300 ease-out max-[700px]:hidden ${
        hidden ? "translate-y-[140%] opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="pointer-events-auto">
        <Dock
          panelHeight={58}
          baseItemSize={42}
          magnification={62}
          items={[
            { icon: icon("M3 11.5 12 4l9 7.5M5 10v10h14V10"), label: "Home", onClick: go("home") },
            { icon: icon("M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0"), label: "About", onClick: go("about") },
            { icon: icon("M3 7h18v13H3zM8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"), label: "Projects", onClick: go("projects") },
            { icon: icon("M4 19V5m0 14h16M8 15V9m4 6V7m4 8v-4"), label: "Career", onClick: go("experience") },
            { icon: icon("m12 4 9 5-9 5-9-5 9-5ZM5 11v5l7 4 7-4v-5"), label: "Education", onClick: go("education") },
            { icon: icon("M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 .6L12 12l8-5.4"), label: "Contact", onClick: go("contact") },
          ]}
        />
      </div>
    </div>
  );
}
