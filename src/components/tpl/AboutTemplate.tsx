import { CountUp } from "../ls/count-up";
import Reveal from "../Reveal";

/** His real production numbers — the template's demo figures do not apply. */
const stats = [
  {
    value: 2.7,
    decimals: 1,
    suffix: "",
    label: "Years in production",
    icon: (
      <path d="M12 8v4l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    ),
  },
  {
    value: 700,
    prefix: "~",
    label: "Buses live-tracked",
    icon: (
      <path d="M4 16V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10M4 16h16M4 16v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2m10 0v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2M7 8h10M7 12h10" />
    ),
  },
  {
    value: 6,
    prefix: "~",
    suffix: "M",
    label: "GPS packets daily",
    icon: (
      <path d="M3 12h4l3-8 4 16 3-8h4" />
    ),
  },
  {
    value: 3,
    label: "Transport authorities",
    icon: (
      <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" />
    ),
  },
];

export default function AboutTemplate() {
  return (
    <section id="about" className="px-6 pt-[104px]">
      <Reveal className="mx-auto grid max-w-[1340px] grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-14 max-[900px]:grid-cols-1 max-[900px]:gap-9">
        <div>
          <h2 className="text-[clamp(30px,4.4vw,46px)] font-extrabold leading-[1.1] tracking-[-0.02em]">
            Built for the{" "}
            <span className="bg-gradient-to-r from-[#7c3aed] via-[#5b6cf9] to-[#2f9bf5] bg-clip-text text-transparent">
              second year
            </span>{" "}
            of production
          </h2>
          <p className="mt-6 max-w-[58ch] text-[17px] leading-[1.7] text-muted">
            I&rsquo;m a software developer at Amnex Infotechnologies in Ahmedabad
            and the primary developer on AVLS — an Automatic Vehicle Location
            System that ingests GPS telemetry from Navi Mumbai&rsquo;s ~700 public
            buses, one packet per vehicle every ten seconds, with further
            deployments for Assam and Odisha.
          </p>
          <p className="mt-4 max-w-[58ch] text-[17px] leading-[1.7] text-muted">
            I work the whole stack: C#/ASP.NET Core services, Angular front-ends,
            PostgreSQL tuning, Kafka ingestion, and the Linux and GCP
            infrastructure underneath. The work I care about is the kind a live
            fleet demands — pipelines that can&rsquo;t drop packets, geofences that
            decide whether a bus really reached its stop, and tables that stay
            fast as history grows by millions of rows a day.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 max-[420px]:grid-cols-1">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-line bg-panel p-6 shadow-card transition-transform duration-200 hover:-translate-y-1"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[22px] w-[22px] text-accent"
                aria-hidden="true"
              >
                {s.icon}
              </svg>
              <CountUp
                value={s.value}
                decimals={s.decimals ?? 0}
                prefix={s.prefix ?? ""}
                suffix={s.suffix ?? ""}
                duration={1.8}
                triggerOnView
                className="mt-5 justify-start text-[34px] font-extrabold tabular-nums tracking-[-0.02em]"
                numberClassName="[&_span]:text-ink"
              />
              <p className="mt-1.5 text-[14.5px] text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
