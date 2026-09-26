import Typewriter from "./Typewriter";
import TrackedLink from "./TrackedLink";
import { btnCls, btnPrimaryCls } from "./ui";

const orbitChips: { ic: string; label: string; pos: string; delay: string }[] = [
  { ic: "PG", label: "PostgreSQL", pos: "top-[6%] right-[14%]", delay: "-0.4s" },
  { ic: "TS", label: "Angular", pos: "top-[24%] left-[4%]", delay: "-1.6s" },
  { ic: "C#", label: ".NET Core", pos: "top-[47%] right-0", delay: "-2.7s" },
  { ic: "K", label: "Kafka", pos: "bottom-[24%] left-[10%]", delay: "-3.4s" },
  { ic: "R", label: "Redis", pos: "bottom-[6%] right-[22%]", delay: "-4.2s" },
  { ic: "T38", label: "Tile38", pos: "top-[2%] left-[30%]", delay: "-5.0s" },
];

export default function Hero() {
  return (
    <header id="top" className="pb-[70px] pt-[90px]">
      <div className="mx-auto grid max-w-[1340px] grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-center gap-10 px-7 max-[900px]:grid-cols-1">
        <div>
          <div className="rise rise-1 mb-[26px] inline-flex items-center gap-[9px] font-mono text-[12.5px] uppercase tracking-[0.18em] text-accent">
            <span className="h-2 w-2 rounded-full bg-ok motion-safe:animate-pulse-dot" />
            Open to .NET backend &amp; full-stack roles
          </div>
          <h1 className="rise rise-2 text-balance font-serif text-[clamp(42px,6.5vw,76px)] font-semibold leading-[1.04]">
            Hi, I&rsquo;m
            <br />
            <span className="name-grad italic font-bold">Shubham Modh.</span>
          </h1>
          <div className="rise rise-3">
            <Typewriter />
          </div>
          <p className="rise rise-4 mt-[22px] max-w-[54ch] text-[18px] text-muted">
            Building real-time fleet-tracking platforms with ASP.NET Core,
            Angular, and PostgreSQL — close to 3 years shipping production systems
            that keep Navi Mumbai&rsquo;s ~700-bus public fleet on the map, with
            deployments across India.
          </p>
          <div className="rise rise-5 mt-[34px] flex flex-wrap gap-3.5">
            <a href="#projects" className={btnPrimaryCls}>
              View Projects ↓
            </a>
            <TrackedLink
              event="resume_open"
              where="hero"
              href="/ShubhamModh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={btnCls}
            >
              Resume (PDF)
            </TrackedLink>
            <a href="#contact" className={btnCls}>
              Get in touch ↓
            </a>
          </div>
          <div className="rise rise-5 mt-[46px] text-[15px] text-muted">
            <span className="text-accent">◎</span> Associate Software Developer
            · Amnex Infotechnologies · Ahmedabad, India
          </div>
        </div>

        <div aria-hidden="true" className="relative h-[420px] max-[900px]:hidden">
          <div className="absolute inset-[12%] rounded-full border border-dashed border-line motion-safe:animate-spin-slow" />
          <div className="absolute inset-[27%] rounded-full border border-dashed border-line motion-safe:animate-spin-slower" />
          <div className="absolute left-1/2 top-1/2 flex h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-[radial-gradient(circle_at_35%_30%,var(--accent-dim),transparent_70%),var(--panel)] font-serif text-[40px] font-bold italic text-accent shadow-[0_0_44px_var(--accent-dim)]">
            S
          </div>
          {orbitChips.map((c) => (
            <span
              key={c.label}
              style={{ animationDelay: c.delay }}
              className={`absolute ${c.pos} inline-flex items-center gap-[7px] whitespace-nowrap rounded-[10px] border border-line bg-panel px-3.5 py-2 text-[13.5px] font-semibold text-ink shadow-card transition-colors duration-200 hover:border-accent motion-safe:animate-bob`}
            >
              <span className="font-mono text-[10.5px] text-accent">{c.ic}</span>
              {c.label}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
