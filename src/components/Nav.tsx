import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
import TrackedLink from "./TrackedLink";
import { btnCls } from "./ui";

const sections = [
  { no: "01.", label: "About", href: "#about" },
  { no: "02.", label: "Stack", href: "#stack" },
  { no: "03.", label: "Projects", href: "#projects" },
  { no: "04.", label: "Experience", href: "#experience" },
  { no: "05.", label: "Education", href: "#education" },
  { no: "06.", label: "Academic", href: "#academic" },
];

export default function Nav() {
  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 border-b border-line bg-[var(--nav-bg)] backdrop-blur-[10px]"
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[60] focus:rounded-lg focus:border focus:border-line focus:bg-panel focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-[62px] max-w-[1340px] items-center gap-6 px-7 max-[380px]:gap-3">
        <a href="#top" className="font-serif text-[21px] font-bold text-ink no-underline">
          Shubham<span className="text-accent">.</span>
        </a>
        <div className="ml-auto flex items-center gap-[18px] max-[380px]:gap-2.5">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="navlink text-[14.5px] text-ink no-underline transition-colors duration-200 hover:text-accent max-[860px]:hidden"
            >
              <span className="mr-[3px] font-mono text-xs text-accent">{s.no}</span>
              {s.label}
            </a>
          ))}
          <a
            href="#contact"
            className="navlink text-[14.5px] text-ink no-underline transition-colors duration-200 hover:text-accent"
          >
            <span className="mr-[3px] font-mono text-xs text-accent">07.</span>
            Contact
          </a>
          <TrackedLink
            event="resume_open"
            where="nav"
            href="/ShubhamModh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={btnCls}
          >
            Resume
          </TrackedLink>
          <MobileMenu sections={sections} />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
