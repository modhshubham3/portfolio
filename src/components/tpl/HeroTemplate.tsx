import { HangingIdCard } from "../ls/HangingIdCard";
import TrackedLink from "../TrackedLink";

const ACCENT = "#6d3bf5";

const idFacts = [
  { k: "Specialty", v: ".NET & Real-Time Systems" },
  { k: "Location", v: "Ahmedabad" },
  { k: "Experience", v: "2.7 Years" },
  { k: "Status", v: "Active", ok: true },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/modhshubham3",
    path: "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shubham-modh-26a23021b",
    path: "M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 8.98h3.5V21H3.2V8.98Zm5.7 0h3.35v1.64h.05c.47-.84 1.6-1.72 3.3-1.72 3.53 0 4.18 2.18 4.18 5.02V21h-3.5v-5.37c0-1.28-.02-2.93-1.9-2.93-1.9 0-2.2 1.4-2.2 2.84V21H8.9V8.98Z",
  },
  {
    label: "Email",
    href: "mailto:modhshubham3@gmail.com",
    path: "M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2.4.6L12 12.2l7.6-5.6H4.4Z",
  },
];

export default function HeroTemplate() {
  return (
    <section id="home" className="px-6 pt-[120px] max-[900px]:pt-[104px]">
      <div className="mx-auto grid max-w-[1120px] grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center gap-12 max-[900px]:grid-cols-1 max-[900px]:gap-4">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3.5 py-1.5 text-[13px] font-medium text-muted shadow-card">
            <span className="h-2 w-2 rounded-full bg-ok motion-safe:animate-pulse-dot" />
            Available for work
          </span>

          <h1 className="mt-6 text-[clamp(40px,6.4vw,72px)] font-extrabold leading-[1.05] tracking-[-0.03em]">
            Hi, I&rsquo;m
            <br />
            <span className="bg-gradient-to-r from-[#7c3aed] via-[#5b6cf9] to-[#2f9bf5] bg-clip-text text-transparent">
              Shubham Modh
            </span>
          </h1>

          <p className="mt-6 max-w-[52ch] text-[18px] leading-[1.65] text-muted">
            I build real-time systems that stay up. Full-stack .NET developer
            keeping ~700 public buses on the map, at roughly six million GPS
            packets a day.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-bg transition-transform duration-200 hover:-translate-y-0.5"
            >
              View Work <span aria-hidden="true">→</span>
            </a>
            <TrackedLink
              event="resume_open"
              where="hero"
              href="/ShubhamModh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-7 py-3.5 text-[15px] font-semibold shadow-card transition-transform duration-200 hover:-translate-y-0.5"
            >
              Resume <span aria-hidden="true">↓</span>
            </TrackedLink>
          </div>

          <div className="mt-8 flex items-center gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="text-muted transition-colors duration-200 hover:text-accent"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-[21px] w-[21px]">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center max-[900px]:mt-2">
          <HangingIdCard
            ropeLength={120}
            ropeColor="#2b3446"
            accentColor={ACCENT}
            name="Shubham Modh"
            role="Full-Stack .NET Developer"
          >
            <div className="flex h-full w-[248px] flex-col overflow-hidden">
              <div
                className="flex flex-col items-center px-4 pb-5 pt-4"
                style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #2f9bf5 100%)` }}
              >
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/70">
                  Portfolio
                </p>
                <div className="mt-3 grid h-[86px] w-[86px] place-items-center rounded-full border-[3px] border-white/70 bg-white/15 font-serif text-[38px] font-bold italic text-white backdrop-blur-sm">
                  S
                </div>
              </div>

              <div className="flex flex-1 flex-col bg-panel px-4 py-3.5">
                <p className="text-center text-[15px] font-bold leading-tight text-ink">
                  Shubham Modh
                </p>
                <p className="mt-1.5 self-center rounded-full border border-line px-2.5 py-1 text-[10.5px] font-semibold text-muted">
                  Full-Stack .NET Developer
                </p>

                <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2.5 rounded-lg border border-line p-2.5">
                  {idFacts.map((f) => (
                    <div key={f.k}>
                      <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-muted">
                        {f.k}
                      </p>
                      <p
                        className={`mt-0.5 text-[11px] font-bold leading-tight ${f.ok ? "text-ok" : "text-ink"}`}
                      >
                        {f.ok ? "● " : ""}
                        {f.v}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex items-end gap-[2px] px-1 pt-3" aria-hidden="true">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-[1px] bg-ink"
                      style={{
                        width: i % 3 === 0 ? "3px" : "1.5px",
                        height: `${8 + Math.abs(Math.sin(i * 1.3)) * 14}px`,
                      }}
                    />
                  ))}
                </div>
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="font-mono text-[9px] font-bold tracking-widest text-muted">
                    SM-2024-NET
                  </span>
                  <span className="font-mono text-[9px] tracking-widest text-muted">
                    AMNEX
                  </span>
                </div>
              </div>
            </div>
          </HangingIdCard>
        </div>
      </div>
    </section>
  );
}
