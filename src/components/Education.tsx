import Reveal from "./Reveal";
import { SectionHead } from "./ui";

const entries = [
  {
    degree: "B.E., Computer Engineering",
    school: "Vishwakarma Government Engineering College, Ahmedabad",
    cgpa: "CGPA 8.12 / 10",
    years: "2021 – 2024",
  },
  {
    degree: "Diploma, Computer Engineering",
    school: "Ganpat University, Mehsana",
    cgpa: "CGPA 9.48 / 10",
    years: "2018 – 2021",
  },
];

export default function Education() {
  return (
    <section id="education" className="pb-2.5 pt-[92px]">
      <Reveal className="mx-auto max-w-[1080px] px-7">
        <SectionHead no="05" label="Education" title="Foundations." />
        <div className="mt-11 grid gap-4">
          {entries.map((e) => (
            <div
              key={e.degree}
              className="lift flex flex-wrap items-center justify-between gap-x-5 gap-y-2.5 rounded-xl border border-line bg-panel px-[26px] py-[22px] shadow-card"
            >
              <div>
                <div className="font-serif text-xl font-bold">{e.degree}</div>
                <div className="mt-[3px] text-muted">{e.school}</div>
              </div>
              <div className="text-right font-mono text-[13px] text-muted">
                <span className="text-accent">{e.cgpa}</span>
                <br />
                {e.years}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
