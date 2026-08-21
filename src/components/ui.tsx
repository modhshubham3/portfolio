export function SectionHead({
  no,
  label,
  title,
}: {
  no: string;
  label: string;
  title: string;
}) {
  return (
    <>
      <div className="mb-4 font-mono text-[13px] uppercase tracking-[0.22em] text-accent">
        {no} · {label}
      </div>
      <h2 className="max-w-[22ch] text-balance font-serif text-[clamp(30px,4.2vw,46px)] font-semibold leading-[1.12]">
        {title}
      </h2>
      <div className="mt-[26px] h-[2px] w-16 bg-accent opacity-80" />
    </>
  );
}

export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-lg border border-line bg-chip px-3 py-1.5 text-[13.5px] font-semibold text-ink transition-colors duration-200 hover:border-accent hover:text-accent">
      {children}
    </span>
  );
}

export const btnCls =
  "inline-flex items-center gap-2 rounded-lg border border-line px-[18px] py-[9px] text-[14.5px] font-semibold text-ink no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_6px_18px_var(--accent-dim)]";

export const btnPrimaryCls =
  "inline-flex items-center gap-2 rounded-lg border border-accent bg-accent px-[18px] py-[9px] text-[14.5px] font-semibold text-accent-contrast no-underline transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_8px_26px_var(--accent-dim)]";
