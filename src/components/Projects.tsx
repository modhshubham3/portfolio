import { BorderBeam } from "./ls/border-beam";
import Reveal from "./Reveal";
import { Chip, SectionHead } from "./ui";

type Project = {
  flip?: boolean;
  vtag: string;
  pn: string;
  vtitle: string;
  vsub: string;
  eyebrow: string;
  plead: string;
  bullets: React.ReactNode[];
  chips: string[];
  svg: React.ReactNode;
};

const mono = "var(--font-plex-mono), Consolas, monospace";

const projects: Project[] = [
  {
    vtag: "Live · ~700 vehicles",
    pn: "01 / PROJECT",
    vtitle: "AVLS — Vehicle Tracking Platform",
    vsub: "Real-time tracking for Navi Mumbai’s ~700-bus fleet, plus Assam.",
    eyebrow: "Full-Stack Developer · Flagship Module",
    plead:
      "The live map a transport authority runs its fleet on — positions, trips, ETAs, and incidents, refreshed with every ~10-second GPS packet.",
    bullets: [
      <span key="1">
        <strong>Live tracking map</strong> — vehicle positions, status, and
        movement trails on Google Maps
      </span>,
      <span key="2">
        <strong>Trip management</strong> — scheduled vs actual trips, trip
        start/close, schedule adherence
      </span>,
      <span key="3">
        <strong>Geofence-based stop-arrival detection</strong> with ETA
        computation for upcoming stops
      </span>,
      <span key="4">
        <strong>Route replay</strong> and real-time incident detection
        (overspeed, route violation, bus bunching, missed stop, panic) with a
        control-room alert panel
      </span>,
      <span key="5">
        Kept fast in production via <strong>partitioned history tables</strong>{" "}
        and tuned stored procedures
      </span>,
    ],
    chips: ["ASP.NET Core", "Angular", "PostgreSQL", "Kafka", "Redis", "Tile38"],
    svg: (
      <svg viewBox="0 0 480 330" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
        <polyline
          points="40,250 120,210 190,225 260,170 330,150 420,90"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.5"
          opacity="0.85"
        />
        <circle cx="120" cy="210" r="5" fill="var(--muted)" />
        <circle cx="260" cy="170" r="5" fill="var(--muted)" />
        <circle cx="420" cy="90" r="5" fill="var(--muted)" />
        <circle cx="190" cy="225" r="8" fill="var(--accent)" />
        <circle cx="190" cy="225" r="16" fill="none" stroke="var(--accent)" opacity="0.35" />
        <circle cx="330" cy="150" r="8" fill="var(--ok)" />
      </svg>
    ),
  },
  {
    flip: true,
    vtag: "Streaming · every ~10s per vehicle",
    pn: "02 / PROJECT",
    vtitle: "GPS Device Ingestion Pipeline",
    vsub: "Raw device bytes in, clean geospatial data out — for every deployment.",
    eyebrow: "Backend Developer · Cross-Client",
    plead:
      "The shared pipeline that turns raw TCP frames from GPS and on-board units into the data every AVLS screen depends on.",
    bullets: [
      <span key="1">
        Device panels parsing <strong>vendor protocol frames over raw TCP</strong>{" "}
        across multiple vendors and firmware variants
      </span>,
      <span key="2">
        Publishing to <strong>Kafka</strong> and feeding PostgreSQL, Redis, and
        Tile38 for tracking and geofencing
      </span>,
      <span key="3">
        Built for <strong>reliability under load</strong> — thread-safe packet
        processing, tuned Kafka consumers, and TCP framing that survives split
        and merged packets
      </span>,
    ],
    chips: [".NET", "TCP sockets", "Kafka", "Tile38"],
    svg: (
      <svg viewBox="0 0 480 330" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
        <rect x="30" y="140" width="86" height="42" rx="8" fill="var(--panel)" stroke="var(--line)" />
        <text x="73" y="166" textAnchor="middle" fill="var(--muted)" fontSize="16" fontFamily={mono}>
          GPS
        </text>
        <path d="M116 161 H 210" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 7" />
        <rect x="210" y="140" width="96" height="42" rx="8" fill="var(--panel)" stroke="var(--line)" />
        <text x="258" y="166" textAnchor="middle" fill="var(--accent)" fontSize="16" fontFamily={mono}>
          Kafka
        </text>
        <path d="M306 161 C 340 161, 340 96, 376 96" fill="none" stroke="var(--muted)" strokeWidth="2" />
        <path d="M306 161 H 376" stroke="var(--muted)" strokeWidth="2" />
        <path d="M306 161 C 340 161, 340 226, 376 226" fill="none" stroke="var(--muted)" strokeWidth="2" />
        <rect x="376" y="75" width="84" height="40" rx="8" fill="var(--panel)" stroke="var(--line)" />
        <text x="418" y="100" textAnchor="middle" fill="var(--muted)" fontSize="15" fontFamily={mono}>
          PG
        </text>
        <rect x="376" y="141" width="84" height="40" rx="8" fill="var(--panel)" stroke="var(--line)" />
        <text x="418" y="166" textAnchor="middle" fill="var(--muted)" fontSize="15" fontFamily={mono}>
          Redis
        </text>
        <rect x="376" y="207" width="84" height="40" rx="8" fill="var(--panel)" stroke="var(--line)" />
        <text x="418" y="232" textAnchor="middle" fill="var(--muted)" fontSize="15" fontFamily={mono}>
          Tile38
        </text>
      </svg>
    ),
  },
  {
    vtag: "Safety-critical path",
    pn: "03 / PROJECT",
    vtitle: "Emergency Panic Alert System",
    vsub: "From a panic button on a bus to every control-room screen.",
    eyebrow: "Full-Stack Developer · Real-Time Alerts",
    plead:
      "An on-board emergency alert path that pushes panic events to operators’ screens the moment they happen.",
    bullets: [
      <span key="1">
        Database trigger + <strong>SignalR real-time push</strong> + global
        on-screen alert across the application
      </span>,
      <span key="2">
        <strong>Priority handling</strong> in the ingestion pipeline so panic
        packets go ahead of routine GPS traffic
      </span>,
      <span key="3">
        Built for one deployment, then{" "}
        <strong>ported into a second transport authority&rsquo;s</strong>{" "}
        production system
      </span>,
    ],
    chips: ["SignalR", "PostgreSQL triggers", "ASP.NET Core", "Angular"],
    svg: (
      <svg viewBox="0 0 480 330" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
        <circle cx="110" cy="160" r="10" fill="var(--accent)" />
        <circle cx="110" cy="160" r="26" fill="none" stroke="var(--accent)" opacity="0.5" />
        <circle cx="110" cy="160" r="44" fill="none" stroke="var(--accent)" opacity="0.25" />
        <path
          d="M150 160 C 220 160, 240 110, 310 110"
          fill="none"
          stroke="var(--muted)"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        <path
          d="M150 160 C 220 160, 240 210, 310 210"
          fill="none"
          stroke="var(--muted)"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        <rect x="310" y="86" width="120" height="48" rx="8" fill="var(--panel)" stroke="var(--line)" />
        <rect x="310" y="186" width="120" height="48" rx="8" fill="var(--panel)" stroke="var(--line)" />
        <circle cx="332" cy="110" r="6" fill="var(--ok)" />
        <circle cx="332" cy="210" r="6" fill="var(--ok)" />
      </svg>
    ),
  },
  {
    flip: true,
    vtag: "3 client deployments",
    pn: "04 / PROJECT",
    vtitle: "Masters & Passenger Systems",
    vsub: "The data backbone every other module builds on.",
    eyebrow: "Full-Stack Developer · Multi-Client",
    plead:
      "Master data and access control across three transport authorities, plus the passenger-facing modules built on top.",
    bullets: [
      <span key="1">
        <strong>Route &amp; geofence creation</strong> on the Google Maps API;
        depot, vehicle, employee, and user management
      </span>,
      <span key="2">
        <strong>Keycloak / IDAM login</strong> with per-client role-based menus;{" "}
        <strong>FDW</strong> for one client, <strong>logical replication</strong>{" "}
        for another
      </span>,
      <span key="3">
        <strong>Passenger-information (PIS) displays</strong> running on
        hardware from two different vendors
      </span>,
    ],
    chips: ["ASP.NET Core", "Angular", "Google Maps API", "Keycloak", "PostgreSQL FDW"],
    svg: (
      <svg viewBox="0 0 480 330" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
        <circle cx="240" cy="120" r="34" fill="var(--panel)" stroke="var(--accent)" strokeWidth="1" />
        <text x="240" y="126" textAnchor="middle" fill="var(--accent)" fontSize="15" fontFamily={mono}>
          Masters
        </text>
        <path d="M240 154 V 200" stroke="var(--muted)" strokeWidth="2" />
        <path d="M240 200 H 120 V 232" stroke="var(--muted)" strokeWidth="2" fill="none" />
        <path d="M240 200 V 232" stroke="var(--muted)" strokeWidth="2" />
        <path d="M240 200 H 360 V 232" stroke="var(--muted)" strokeWidth="2" fill="none" />
        <rect x="80" y="232" width="80" height="36" rx="7" fill="var(--panel)" stroke="var(--line)" />
        <text x="120" y="255" textAnchor="middle" fill="var(--muted)" fontSize="15" fontFamily={mono}>
          NMMT
        </text>
        <rect x="200" y="232" width="80" height="36" rx="7" fill="var(--panel)" stroke="var(--line)" />
        <text x="240" y="255" textAnchor="middle" fill="var(--muted)" fontSize="15" fontFamily={mono}>
          ASTC
        </text>
        <rect x="320" y="232" width="80" height="36" rx="7" fill="var(--panel)" stroke="var(--line)" />
        <text x="360" y="255" textAnchor="middle" fill="var(--muted)" fontSize="15" fontFamily={mono}>
          OSRTC
        </text>
      </svg>
    ),
  },
  {
    vtag: "Booking → refund → revenue",
    pn: "05 / PROJECT",
    vtitle: "OPRS — Online Passenger Revenue System",
    vsub: "Ticket booking, refunds, and revenue reporting for state transport.",
    eyebrow: "Full-Stack Developer · Revenue Systems",
    plead:
      "The booking-to-refund money trail of a state transport operation, reported from every angle.",
    bullets: [
      <span key="1">
        Built the <strong>reports module — 50+ transactional reports</strong>{" "}
        covering sales, collections, refunds, and service-wise revenue
      </span>,
      <span key="2">
        Delivered full-stack features on <strong>booking and refund workflows</strong>{" "}
        — ASP.NET Core Web APIs, Angular screens, and PostgreSQL stored
        procedures
      </span>,
    ],
    chips: ["ASP.NET Core", "Angular", "PostgreSQL", "Stored procedures"],
    svg: (
      <svg viewBox="0 0 480 330" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
        <rect x="55" y="105" width="150" height="80" rx="10" fill="var(--panel)" stroke="var(--line)" />
        <path d="M160 105 V 185" stroke="var(--line)" strokeDasharray="5 6" />
        <text x="108" y="150" textAnchor="middle" fill="var(--accent)" fontSize="15" fontFamily={mono}>
          TICKET
        </text>
        <path d="M205 145 H 275" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 7" />
        <rect x="275" y="115" width="120" height="60" rx="8" fill="var(--panel)" stroke="var(--line)" />
        <text x="335" y="150" textAnchor="middle" fill="var(--muted)" fontSize="15" fontFamily={mono}>
          REFUND
        </text>
        <rect x="60" y="232" width="18" height="40" fill="var(--accent)" opacity="0.45" />
        <rect x="88" y="212" width="18" height="60" fill="var(--accent)" opacity="0.7" />
        <rect x="116" y="244" width="18" height="28" fill="var(--accent)" opacity="0.3" />
        <rect x="144" y="222" width="18" height="50" fill="var(--accent)" opacity="0.55" />
        <path d="M55 272 H 180" stroke="var(--line)" strokeWidth="2" />
      </svg>
    ),
  },
];

const alsoShipped = [
  {
    name: "GRMS — Grievance Management System",
    text: "Citizen grievance registration, assignment, and resolution workflows for transport operations — APIs, screens, and status tracking end to end.",
    stack: "ASP.NET Core · Angular · PostgreSQL",
  },
  {
    name: "DMS — Depot Management System",
    text: "The daily bookkeeping of a bus depot — vehicles, staff, and operational records — managed through full-stack workflows.",
    stack: "ASP.NET Core · Angular · PostgreSQL",
  },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="mt-[70px] grid grid-cols-2 items-center gap-[46px] first-of-type:mt-[52px] max-[900px]:grid-cols-1 max-[900px]:gap-6">
      <div
        className={`grid-bg lift relative min-h-[330px] overflow-hidden rounded-[14px] border border-line p-[26px] shadow-card max-[900px]:aspect-[480/330] max-[900px]:min-h-0 ${p.flip ? "order-2 max-[900px]:order-none" : ""}`}
      >
        <BorderBeam
          size={110}
          duration={9}
          borderThickness={1.5}
          colorFrom="var(--accent)"
          colorTo="transparent"
        />
        <span className="relative z-10 font-mono text-[12.5px] text-ok">● {p.vtag}</span>
        <div className="absolute inset-0">{p.svg}</div>
        <div className="absolute bottom-[22px] left-[26px] right-[26px]">
          <div className="font-mono text-[11.5px] tracking-[0.16em] text-accent">{p.pn}</div>
          <h3 className="mt-1.5 font-serif text-[27px] font-bold">{p.vtitle}</h3>
          <p className="mt-1 text-[14.5px] text-muted">{p.vsub}</p>
        </div>
      </div>
      <div>
        <div className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
          {p.eyebrow}
        </div>
        <p className="text-balance text-[21px] font-semibold leading-[1.4]">{p.plead}</p>
        <ul className="mt-[18px] grid list-none gap-2.5">
          {p.bullets.map((b, i) => (
            <li
              key={i}
              className="relative pl-[18px] text-muted before:absolute before:left-[2px] before:text-accent before:content-['•'] [&_strong]:font-semibold [&_strong]:text-ink"
            >
              {b}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-[9px]">
          {p.chips.map((c) => (
            <Chip key={c}>{c}</Chip>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="pb-2.5 pt-[92px]">
      <Reveal className="mx-auto max-w-[1080px] px-7">
        <SectionHead
          no="03"
          label="Selected Work"
          title="Production systems shipped at Amnex Infotechnologies."
        />
        {projects.map((p) => (
          <ProjectCard key={p.pn} p={p} />
        ))}

        <div className="mt-[70px] font-mono text-[12.5px] uppercase tracking-[0.2em] text-muted">
          Also shipped
        </div>
        <div className="mt-5 grid grid-cols-2 gap-5 max-[700px]:grid-cols-1">
          {alsoShipped.map((s) => (
            <div
              key={s.name}
              className="lift rounded-xl border border-line bg-panel p-6 shadow-card"
            >
              <h3 className="font-serif text-[19px] font-bold">{s.name}</h3>
              <p className="mt-2 text-[15.5px] text-muted">{s.text}</p>
              <div className="mt-3.5 font-mono text-xs text-accent">{s.stack}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
