import Reveal from "./Reveal";
import { SectionHead } from "./ui";

const bullets: React.ReactNode[] = [
  <span key="1">
    Owned and delivered the <strong>AVLS module</strong> across municipal and
    state transport deployments (NMMT — Navi Mumbai; ASTC — Assam) — APIs,
    front-end, database, and production support.
  </span>,
  <span key="2">
    Delivered across the platform&rsquo;s other modules — <strong>GPS/OBU
    device ingestion, Masters</strong> (routes, geofences, depots, users, with
    OSRTC — Odisha as a third client), <strong>OPRS, GRMS, DMS, and PIS
    displays</strong> — with ASP.NET Core Web APIs, Angular screens, and
    PostgreSQL stored procedures.
  </span>,
  <span key="3">
    Kept the platform <strong>fast at production scale</strong> — PostgreSQL
    partitioning and query tuning, Kafka pipeline reliability, and .NET service
    optimization.
  </span>,
];

export default function Experience() {
  return (
    <section id="experience" className="pb-2.5 pt-[92px]">
      <Reveal className="mx-auto max-w-[1080px] px-7">
        <SectionHead no="04" label="Experience" title="Where I’ve been shipping." />
        <div className="relative mt-[46px] border-l-2 border-line py-1 pl-[30px]">
          <span className="absolute -left-[7px] top-2.5 h-3 w-3 rounded-full bg-accent" />
          <h3 className="font-serif text-[25px] font-bold">
            Associate Software Developer{" "}
            <span className="font-semibold text-accent">· Amnex Infotechnologies</span>
          </h3>
          <div className="mt-2 font-mono text-[12.5px] uppercase tracking-[0.12em] text-muted">
            Feb 2024 – Present · Ahmedabad, India
          </div>
          <ul className="mt-5 grid list-none gap-2.5">
            {bullets.map((b, i) => (
              <li
                key={i}
                className="relative pl-[18px] text-muted before:absolute before:left-[2px] before:text-accent before:content-['•'] [&_strong]:font-semibold [&_strong]:text-ink"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
