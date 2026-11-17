type Props = {
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  id: string;
};

/**
 * Shared section opener: eyebrow sits in a 3-column rail, the heading is
 * offset into the remaining 9 columns. Every section uses this exact rhythm.
 */
export default function SectionHeading({ index, label, title, intro, id }: Props) {
  return (
    <header className="mb-14 grid gap-y-5 md:mb-24 md:grid-cols-12 md:gap-x-6" data-reveal>
      <p className="eyebrow flex items-center gap-3 self-start md:col-span-3 md:pt-5">
        <span className="tabular-nums text-primary">{index}</span>
        <span className="h-px w-6 bg-border-strong" aria-hidden />
        {label}
      </p>
      <div className="md:col-span-9">
        <h2 id={id} className="max-w-[17ch] text-h2 font-medium">
          {title}
        </h2>
        {intro && (
          <p className="mt-6 max-w-[54ch] text-lead text-muted-foreground">{intro}</p>
        )}
      </div>
    </header>
  );
}
