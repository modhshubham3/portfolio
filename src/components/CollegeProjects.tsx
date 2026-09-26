import Reveal from "./Reveal";
import { SectionHead } from "./ui";

const projects: { tag: string; name: string; text: string; stack: string }[] = [
  {
    tag: "Government-funded innovation project",
    name: "Fruit & Vegetable Quality Detection",
    text: "AI/ML-powered, sensor-based system that assesses produce quality by analysing size, colour, ripeness, and firmness — validated through calibration cycles and regular model updates.",
    stack: "Machine Learning · Sensor integration",
  },
  {
    tag: "Innovation project",
    name: "Weed Detection in Farms",
    text: "AI/ML weed-detection system on a mounted sprayer sensor that differentiates crops from weeds in real time and adjusts sprayer speed accordingly.",
    stack: "Machine Learning · Real-time detection",
  },
  {
    tag: "Hackathon · Gujarat Police",
    name: "QR Citizen Feedback System",
    text: "Web app where citizens scan a QR code to give feedback on policing, letting officers monitor public perception at police-station, sub-division, district, and city level.",
    stack: "Web application · QR workflows",
  },
];

export default function CollegeProjects() {
  return (
    <section id="academic" className="pb-2.5 pt-[92px]">
      <Reveal className="mx-auto max-w-[1340px] px-7">
        <SectionHead
          no="06"
          label="Academic Projects"
          title="Where the building habit started."
        />
        <p className="mt-[26px] max-w-[62ch] text-muted">
          Before shipping production transit systems, I built these during my
          engineering years — two of them selected under Gujarat&rsquo;s{" "}
          <span className="font-semibold text-ink">
            Student Startup &amp; Innovation Policy (SSIP)
          </span>
          , including one that received government funding.
        </p>
        <div className="mt-9 grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
          {projects.map((p) => (
            <div
              key={p.name}
              className="lift flex flex-col rounded-xl border border-line bg-panel p-6 shadow-card"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                {p.tag}
              </div>
              <h3 className="mt-2.5 font-serif text-[19px] font-bold">{p.name}</h3>
              <p className="mt-2 text-[15px] text-muted">{p.text}</p>
              <div className="mt-auto pt-4 font-mono text-xs text-accent">{p.stack}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
