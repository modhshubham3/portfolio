import Reveal from "./Reveal";
import { SectionHead } from "./ui";

const cardCls =
  "lift flex items-center gap-4 rounded-xl border border-line bg-panel px-[22px] py-5 text-ink no-underline shadow-card";

function CardBody({ k, v }: { k: string; v: string }) {
  return (
    <div className="min-w-0">
      <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{k}</div>
      <div className="mt-[3px] break-words font-semibold text-ink">{v}</div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="pb-2.5 pt-[92px]">
      <Reveal className="mx-auto max-w-[1080px] px-7">
        <SectionHead no="07" label="Contact" title="Let’s connect." />
        <p className="mt-[30px] max-w-[52ch] text-[18px] text-muted">
          I&rsquo;m open to backend and full-stack .NET roles. The fastest way to
          reach me is email or phone — I usually reply within a day.
        </p>
        <div className="mt-9 grid max-w-[860px] grid-cols-2 gap-4 max-[700px]:grid-cols-1">
          <a
            className={cardCls}
            href="mailto:modhshubham3@gmail.com?subject=Regarding%20a%20.NET%20role"
          >
            <CardBody k="Email" v="modhshubham3@gmail.com" />
            <span className="ml-auto text-accent">↗</span>
          </a>
          <a
            className={cardCls}
            href="https://www.linkedin.com/in/shubham-modh-26a23021b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardBody k="LinkedIn" v="Shubham Modh" />
            <span className="ml-auto text-accent">↗</span>
          </a>
          <a
            className={cardCls}
            href="https://github.com/modhshubham3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardBody k="GitHub" v="modhshubham3" />
            <span className="ml-auto text-accent">↗</span>
          </a>
          <a className={cardCls} href="tel:+918128027890">
            <CardBody k="Phone" v="+91 81280 27890" />
          </a>
          <div className={cardCls}>
            <CardBody k="Location" v="Ahmedabad, Gujarat, India" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
