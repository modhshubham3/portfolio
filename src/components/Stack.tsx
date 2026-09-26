import Reveal from "./Reveal";
import { Chip, SectionHead } from "./ui";

const groups: { cat: string; chips: string[] }[] = [
  { cat: "Languages", chips: ["C#", "TypeScript", "JavaScript", "SQL"] },
  {
    cat: "Backend",
    chips: [
      "ASP.NET Core",
      "Web API",
      "Entity Framework Core",
      "ADO.NET",
      "LINQ",
      "SignalR",
      "TCP sockets",
      "Microservices",
    ],
  },
  { cat: "Frontend", chips: ["Angular", "Kendo UI", "Google Maps API"] },
  {
    cat: "Databases",
    chips: [
      "PostgreSQL",
      "Stored procedures",
      "Partitioning",
      "Execution-plan tuning",
      "FDW",
      "Logical replication",
      "MongoDB",
    ],
  },
  { cat: "Data & Messaging", chips: ["Apache Kafka", "Redis", "Tile38 (geospatial)"] },
  {
    cat: "DevOps & Security",
    chips: [
      "Linux",
      "Docker",
      "Jenkins CI/CD",
      "Google Cloud",
      "Kibana",
      "Git",
      "Keycloak / IDAM",
      "JWT",
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="pb-2.5 pt-[92px]">
      <Reveal className="mx-auto max-w-[1340px] px-7">
        <SectionHead no="02" label="Stack" title="Tools I work with, day to day." />
        <div className="mt-[46px] grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
          {groups.map((g) => (
            <div
              key={g.cat}
              className="lift rounded-xl border border-line bg-panel p-[22px] shadow-card"
            >
              <div className="mb-4 flex items-baseline justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink">
                  <span className="text-[10px] text-accent">● </span>
                  {g.cat}
                </span>
                <span className="font-mono text-[11.5px] text-muted">
                  {String(g.chips.length).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-wrap gap-[9px]">
                {g.chips.map((c) => (
                  <Chip key={c}>{c}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
