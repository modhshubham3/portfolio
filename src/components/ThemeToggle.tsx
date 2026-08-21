"use client";

import { useCallback, useEffect, useState } from "react";

function currentTheme(): "dark" | "light" {
  const stamped = document.documentElement.getAttribute("data-theme");
  if (stamped === "dark" || stamped === "light") return stamped;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export default function ThemeToggle() {
  const [label, setLabel] = useState("Toggle color theme");

  useEffect(() => {
    setLabel(
      `Switch to ${currentTheme() === "dark" ? "light" : "dark"} theme`,
    );
  }, []);

  const toggle = useCallback(() => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("sm-theme", next);
    } catch {
      /* storage unavailable — theme still applies for this visit */
    }
    setLabel(`Switch to ${next === "dark" ? "light" : "dark"} theme`);
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-line text-[16px] text-ink hover:border-accent hover:text-accent"
    >
      ◐
    </button>
  );
}
