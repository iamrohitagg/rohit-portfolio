import SectionHeading from "@/components/SectionHeading";
import { experiences, formatDuration, formatMonth, profile, yearsSince } from "@/lib/content";

const Experience = () => {
  const company = experiences[0].company;

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="border-y bg-card py-28 md:py-40"
    >
      <div className="container">
        <SectionHeading
          id="experience-title"
          index="02"
          label="Experience"
          title={
            <>
              From shipping features to <span className="em">leading mobile</span> development.
            </>
          }
        />

        <div className="grid gap-y-14 md:grid-cols-12 md:gap-x-6">
          {/* Company summary */}
          <aside className="md:col-span-3" data-reveal>
            <div className="md:sticky md:top-28">
              <p className="text-[1.0625rem] font-medium tracking-[-0.01em]">
                {company.replace(" Pvt. Ltd.", "")}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {formatMonth(profile.careerStart)} — Present
              </p>
              <p className="mt-6 flex items-baseline gap-2 text-sm text-muted-foreground">
                <span className="font-serif text-4xl italic text-foreground">
                  {yearsSince(profile.careerStart)}+
                </span>
                years, {experiences.length} roles, one team
              </p>
            </div>
          </aside>

          {/* Timeline */}
          <ol className="relative md:col-span-9">
            <span className="absolute bottom-2 left-[7px] top-2 w-px bg-border-strong" aria-hidden />
            {experiences.map((exp, i) => {
              const current = !exp.end;
              return (
                <li
                  key={exp.position}
                  className="relative pb-16 pl-10 last:pb-0 md:pb-20 md:pl-14"
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
                >
                  <span
                    aria-hidden
                    className={`absolute left-0 top-[0.55rem] flex h-[15px] w-[15px] items-center justify-center rounded-full border ${
                      current ? "border-primary bg-card" : "border-border-strong bg-card"
                    }`}
                  >
                    <span className={`h-[7px] w-[7px] rounded-full ${current ? "bg-primary" : "bg-subtle"}`} />
                  </span>

                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <h3 className="text-h3 font-medium">{exp.position}</h3>
                    <p className="shrink-0 text-sm tabular-nums text-muted-foreground">
                      {formatMonth(exp.start)} — {exp.end ? formatMonth(exp.end) : "Present"}
                    </p>
                  </div>
                  <p className="mt-2 flex flex-wrap items-center gap-x-2 text-sm text-subtle">
                    {exp.company}
                    <span aria-hidden>·</span>
                    {formatDuration(exp.start, exp.end)}
                    {current && (
                      <>
                        <span aria-hidden>·</span>
                        <span className="text-primary">Current role</span>
                      </>
                    )}
                  </p>

                  <p className="mt-6 max-w-[60ch] text-[1.0625rem] leading-relaxed">{exp.summary}</p>

                  <ul className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-6">
                    {exp.highlights.map((h) => (
                      <li key={h} className="border-t pt-4 text-sm leading-relaxed text-muted-foreground">
                        {h}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
