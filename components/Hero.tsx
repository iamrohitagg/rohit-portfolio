import HeroGrid from "@/components/HeroGrid";
import LocalTime from "@/components/LocalTime";
import { experiences, profile, projects, yearsSince } from "@/lib/content";

const d = (ms: number) => ({ ["--d" as string]: `${ms}ms` });

const Hero = () => {
  const years = yearsSince(profile.careerStart);
  const company = experiences[0].company.replace(" Pvt. Ltd.", "");
  const gaatha = projects.find((p) => p.slug === "gaatha");

  const stats = [
    { value: `${years}+`, label: "Years shipping production software" },
    { value: `${projects.length * 10}K+`, label: "Installs across featured apps" },
    { value: gaatha?.results[1]?.value ?? "4.3", label: "Gaatha rating on Google Play", star: true },
  ];

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pb-20 pt-28 md:pb-28 md:pt-40"
    >
      <HeroGrid />

      <div className="container">
        {/* Meta row */}
        <div
          className="rise flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-sm text-muted-foreground"
          style={d(0)}
        >
          <p className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 motion-safe:animate-[pulse-dot_2.4s_ease-in-out_infinite]" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {profile.status}
          </p>
          <p className="tabular-nums">
            {profile.location} · <LocalTime timeZone={profile.timezone} suffix="IST" />
          </p>
        </div>

        {/* Statement */}
        <h1
          id="hero-title"
          className="rise mt-12 max-w-[11.6em] text-display font-medium md:mt-16"
          style={d(80)}
        >
          Mobile &amp; web products, engineered from{" "}
          <span className="em text-primary">first commit</span> to the{" "}
          <span className="em">app store</span>.
        </h1>

        {/* Intro + proof */}
        <div className="mt-14 grid gap-12 border-t pt-10 md:mt-20 md:grid-cols-12 md:gap-6">
          <div className="rise md:col-span-6 lg:col-span-5" style={d(200)}>
            <p className="text-lead text-muted-foreground">
              I&apos;m <span className="text-foreground">{profile.name}</span>, a{" "}
              {profile.role.toLowerCase()} with {years}+ years in React Native, React, Next.js and
              TypeScript, currently leading mobile development at {company}.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary group">
                View selected work
                <span className="nudge nudge-x" aria-hidden>
                  →
                </span>
              </a>
              <a href="#contact" className="btn-secondary">
                Get in touch
              </a>
            </div>
          </div>

          <dl className="rise grid grid-cols-3 self-start md:col-span-6 md:col-start-7" style={d(280)}>
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col gap-4 pr-3 ${i > 0 ? "border-l pl-4 sm:pl-6" : ""}`}
              >
                <dt className="order-2 max-w-[16ch] text-[0.8125rem] leading-snug text-muted-foreground sm:text-sm">
                  {s.label}
                </dt>
                <dd className="order-1 font-serif text-stat italic">
                  {s.value}
                  {s.star && (
                    <span className="ml-1 align-[0.6em] font-sans text-[0.32em] not-italic text-primary">
                      ★<span className="sr-only"> out of 5</span>
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Hero;
