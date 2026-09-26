import MobileMenu from "../MobileMenu";
import ThemeToggle from "../ThemeToggle";

const links = [
  { no: "01", href: "#home", label: "Home" },
  { no: "02", href: "#about", label: "About" },
  { no: "03", href: "#projects", label: "Projects" },
  { no: "04", href: "#experience", label: "Career" },
  { no: "05", href: "#education", label: "Education" },
  { no: "06", href: "#contact", label: "Contact" },
];

export default function NavPill() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-5">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1120px] items-center gap-5 rounded-[18px] border border-line bg-panel px-5 py-3 shadow-card backdrop-blur-md"
      >
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#2f9bf5] font-serif text-[15px] font-bold italic text-white">
            S
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-bold tracking-[-0.01em]">
              Shubham Modh
            </span>
            <span className="block font-mono text-[9.5px] uppercase tracking-[0.2em] text-muted">
              Portfolio
            </span>
          </span>
        </a>

        <ul className="ml-auto flex list-none items-center gap-7 max-[880px]:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[14.5px] font-medium text-muted transition-colors duration-200 hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 min-[881px]:ml-0">
          <MobileMenu sections={links} />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
