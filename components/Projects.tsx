/* eslint-disable @next/next/no-img-element -- static export: images are pre-optimised WebP in /public */
import SectionHeading from "@/components/SectionHeading";
import { projects, type Project } from "@/lib/content";

function ProjectTitle({ project, index }: { project: Project; index: number }) {
  return (
    <div className="flex items-center gap-4 md:gap-5">
      <img
        src={project.icon}
        alt=""
        width={64}
        height={64}
        loading="lazy"
        className="h-12 w-12 shrink-0 rounded-xl border bg-white object-cover md:h-16 md:w-16"
      />
      <div>
        <p className="eyebrow flex items-center gap-2">
          <span className="tabular-nums text-primary">0{index + 1}</span>
          <span aria-hidden>·</span>
          {project.kicker}
        </p>
        <h3
          id={`${project.slug}-title`}
          className="mt-2 text-[clamp(2.25rem,4.6vw,4rem)] font-medium leading-none tracking-[-0.045em]"
        >
          {project.title}
        </h3>
      </div>
    </div>
  );
}

function PlayLink({ project, className = "" }: { project: Project; className?: string }) {
  if (!project.liveLink) return null;
  return (
    <a
      href={project.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-secondary group ${className}`}
    >
      {project.liveLabel ?? "View live"}
      <span className="nudge" aria-hidden>
        ↗
      </span>
      <span className="sr-only">(opens {project.title} in a new tab)</span>
    </a>
  );
}

function SourceNote({ project }: { project: Project }) {
  return project.githubLink ? (
    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="link-draw text-sm">
      Source code ↗
    </a>
  ) : (
    <span className="text-sm text-subtle">Source: private client codebase</span>
  );
}

function Results({ project }: { project: Project }) {
  return (
    <dl className="grid grid-cols-2 gap-6">
      {project.results.map((r) => (
        <div key={r.label} className="flex flex-col-reverse gap-2">
          <dt className="text-sm leading-snug text-muted-foreground">{r.label}</dt>
          <dd className="font-serif text-[clamp(2.5rem,3.6vw,3.25rem)] italic leading-none">{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/* --- Layout A: full-width showcase stage ------------------------------- */

// Vertical offsets give the row a gentle arc, highest in the middle.
const arc = [44, 12, -20, 12, 44];

function Showcase({ project, index }: { project: Project; index: number }) {
  return (
    <article aria-labelledby={`${project.slug}-title`}>
      <div className="mb-8 flex flex-col gap-6 md:mb-10 md:flex-row md:items-end md:justify-between" data-reveal>
        <ProjectTitle project={project} index={index} />
        <PlayLink project={project} className="self-start md:self-auto" />
      </div>

      <div
        data-reveal
        className="group relative h-[440px] overflow-hidden rounded-xl border bg-[#15112b] sm:h-[520px] md:h-[640px]"
      >
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-4 transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[calc(50%+10px)] md:gap-6">
          {project.screenshots.map((s, i) => (
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              width={s.width}
              height={s.height}
              loading="lazy"
              decoding="async"
              style={{ transform: `translateY(${arc[i] ?? 0}px)` }}
              className="w-[168px] shrink-0 rounded-lg shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/10 sm:w-[200px] md:w-[252px]"
            />
          ))}
        </div>
        <p className="absolute bottom-4 left-5 text-xs text-white/50">Screens from the Google Play listing</p>
      </div>

      <div className="mt-10 grid gap-y-10 md:mt-14 md:grid-cols-12 md:gap-x-6">
        <div className="md:col-span-5" data-reveal>
          <p className="eyebrow">Overview</p>
          <p className="mt-4 text-[1.0625rem] leading-relaxed">{project.description}</p>
          <p className="mt-4 text-sm text-subtle">
            {project.technologies.join(", ")} · {project.platform} · <SourceNote project={project} />
          </p>
        </div>
        <div className="md:col-span-4 md:col-start-7" data-reveal style={{ ["--reveal-delay" as string]: "80ms" }}>
          <p className="eyebrow">What I built</p>
          <ul className="mt-4">
            {project.highlights.map((h) => (
              <li key={h} className="border-t py-3 text-[0.9375rem] text-muted-foreground last:border-b">
                {h}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2 md:col-start-11" data-reveal style={{ ["--reveal-delay" as string]: "160ms" }}>
          <p className="eyebrow">Results</p>
          <dl className="mt-4 grid grid-cols-2 gap-6 md:grid-cols-1">
            {project.results.map((r) => (
              <div key={r.label} className="flex flex-col-reverse gap-2">
                <dt className="text-sm leading-snug text-muted-foreground">{r.label}</dt>
                <dd className="font-serif text-[2.75rem] italic leading-none">{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </article>
  );
}

/* --- Layout B: split, copy left / devices right ------------------------ */

function Split({ project, index }: { project: Project; index: number }) {
  return (
    <article aria-labelledby={`${project.slug}-title`} className="grid gap-y-10 md:grid-cols-12 md:gap-x-6">
      <div className="flex flex-col md:col-span-5" data-reveal>
        <ProjectTitle project={project} index={index} />
        {project.publishedAs && (
          <p className="mt-5 text-sm text-subtle">
            Published on Google Play as <span className="text-muted-foreground">{project.publishedAs}</span>
          </p>
        )}
        <p className="mt-6 text-[1.0625rem] leading-relaxed">{project.description}</p>

        <ul className="mt-8">
          {project.highlights.map((h) => (
            <li key={h} className="border-t py-3 text-[0.9375rem] text-muted-foreground last:border-b">
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Results project={project} />
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 md:mt-auto md:pt-10">
          <PlayLink project={project} />
          <SourceNote project={project} />
        </div>
        <p className="mt-4 text-sm text-subtle">
          {project.technologies.join(", ")} · {project.platform}
        </p>
      </div>

      <div
        data-reveal
        style={{ ["--reveal-delay" as string]: "120ms" }}
        className="group relative flex min-h-[460px] items-center justify-center gap-5 overflow-hidden rounded-xl border bg-secondary md:col-span-7 md:min-h-[640px] md:gap-8"
      >
        {project.screenshots.map((s, i) => (
          <div
            key={s.src}
            className={`rounded-[26px] border border-border-strong bg-[#0b0b0c] p-[6px] shadow-[0_30px_60px_-28px_rgba(0,0,0,0.55)] transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              i % 2 ? "translate-y-10 group-hover:translate-y-6" : "-translate-y-4 group-hover:-translate-y-8"
            }`}
          >
            <img
              src={s.src}
              alt={s.alt}
              width={s.width}
              height={s.height}
              loading="lazy"
              decoding="async"
              className="block w-[136px] rounded-[20px] sm:w-[172px] lg:w-[196px]"
            />
          </div>
        ))}
        <p className="absolute bottom-4 left-5 text-xs text-subtle">Screens from the Google Play listing</p>
      </div>
    </article>
  );
}

const Projects = () => {
  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t py-28 md:py-40">
      <div className="container">
        <SectionHeading
          id="projects-title"
          index="04"
          label="Selected work"
          title={
            <>
              Products with <span className="em">real users</span>, live on Google Play.
            </>
          }
          intro="Two apps I built in React Native, each with more than ten thousand installs."
        />

        <div className="space-y-28 md:space-y-40">
          {projects.map((project, i) =>
            i % 2 === 0 ? (
              <Showcase key={project.slug} project={project} index={i} />
            ) : (
              <Split key={project.slug} project={project} index={i} />
            )
          )}
        </div>

        <div className="mt-28 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between md:mt-40" data-reveal>
          <p className="text-muted-foreground">
            Want the detail behind these builds? I&apos;m happy to walk through them on a call.
          </p>
          <a href="#contact" className="group inline-flex items-center gap-2 font-medium">
            <span className="link-draw">Get in touch</span>
            <span className="nudge nudge-x" aria-hidden>
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
