"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Vertical reading-progress rail: a line down the right edge with a marker
 * that follows how far the page has been read, and a glow at the head.
 * Desktop only — on phones it would sit under the thumb.
 */
export default function ScrollTimeline() {
  const [progress, setProgress] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const read = () => {
      frame.current = null;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0);
    };
    const onScroll = () => {
      if (frame.current === null) frame.current = requestAnimationFrame(read);
    };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const pct = `${(progress * 100).toFixed(2)}%`;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed right-7 top-1/2 z-30 hidden h-[52vh] -translate-y-1/2 min-[1100px]:block"
    >
      {/* rail */}
      <div className="relative h-full w-[2px] rounded-full bg-line">
        {/* filled portion */}
        <div
          className="absolute left-0 top-0 w-full rounded-full bg-gradient-to-b from-[#7c3aed] to-[#2f9bf5]"
          style={{ height: pct }}
        />
        {/* head glow */}
        <span
          className="absolute left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed] opacity-40 blur-[6px]"
          style={{ top: pct }}
        />
        {/* marker */}
        <span
          className="absolute left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#7c3aed] bg-panel"
          style={{ top: pct }}
        />
      </div>
    </div>
  );
}
