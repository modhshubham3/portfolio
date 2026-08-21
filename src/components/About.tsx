import Reveal from "./Reveal";
import { SectionHead } from "./ui";

const stats = [
  { label: "Shipping production code", value: "2.5+ yrs" },
  { label: "Buses live-tracked", value: "~700" },
  { label: "Transport authorities", value: "3" },
  { label: "GPS packets ingested daily", value: "~6M" },
];

export default function About() {
  return (
    <section id="about" className="pb-2.5 pt-[92px]">
      <Reveal className="mx-auto max-w-[1080px] px-7">
        <SectionHead no="01" label="About" title="I keep ~700 buses on the map, in real time." />
        <div className="mt-11 grid grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-start gap-11 max-[860px]:grid-cols-1">
          <div className="text-muted [&_strong]:font-semibold [&_strong]:text-ink">
            <p className="max-w-[62ch]">
              I&rsquo;m a software developer at <strong>Amnex Infotechnologies</strong>{" "}
              in Ahmedabad, and the primary developer on <strong>AVLS</strong> — an
              Automatic Vehicle Location System that ingests GPS telemetry from
              Navi Mumbai&rsquo;s ~700 public buses — one packet per vehicle every
              ~10 seconds — with a second state-level deployment for Assam. I work
              across the whole stack: the C#/ASP.NET Core services, the Angular
              front-end, the PostgreSQL database, the device-protocol parsers, and
              the Linux/Docker/GCP infrastructure they run on.
            </p>
            <p className="mt-4 max-w-[62ch]">
              The work I care about most is the kind a live fleet demands:
              real-time pipelines that can&rsquo;t drop packets, geospatial logic
              that decides whether a bus actually reached its stop, and databases
              that stay fast while history tables grow by millions of rows. I
              build for the second year of production, not just the launch demo.
            </p>
          </div>
          <div className="grid grid-cols-2 overflow-hidden rounded-[10px] border border-line bg-panel">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`p-6 max-[360px]:p-4 ${i % 2 === 1 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line" : ""}`}
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  {s.label}
                </div>
                <div className="mt-2 font-serif text-[34px] font-bold tabular-nums text-accent max-[360px]:text-[26px]">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
