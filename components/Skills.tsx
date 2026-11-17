import SectionHeading from "@/components/SectionHeading";
import { coreStack, skillGroups } from "@/lib/content";

const Skills = () => {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-28 md:py-40">
      <div className="container">
        <SectionHeading
          id="skills-title"
          index="03"
          label="Skills"
          title={
            <>
              A focused stack, <span className="em">used deeply</span>.
            </>
          }
          intro="Four core technologies I use every day, and the capabilities built around them."
        />

        {/* Core */}
        <div className="grid gap-y-6 border-t py-10 md:grid-cols-12 md:gap-x-6 md:py-14" data-reveal>
          <div className="md:col-span-3">
            <h3 className="text-[1.0625rem] font-medium">Core</h3>
            <p className="mt-1 text-sm text-subtle">Daily drivers</p>
          </div>
          <ul className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 md:col-span-9">
            {coreStack.map((tech, i) => (
              <li key={tech} className="flex items-start gap-1.5">
                <span className="text-[clamp(2.25rem,4.4vw,3.5rem)] font-medium leading-none tracking-[-0.04em]">
                  {tech}
                </span>
                <span className="font-serif text-base italic text-primary" aria-hidden>
                  {i + 1}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Capability rows */}
        <div className="border-b">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
              className="group grid gap-y-4 border-t py-8 md:grid-cols-12 md:gap-x-6"
            >
              <div className="md:col-span-3">
                <h3 className="text-[1.0625rem] font-medium transition-colors duration-300 group-hover:text-primary">
                  {group.title}
                </h3>
                <p className="mt-1 text-sm text-subtle">{group.note}</p>
              </div>
              <ul className="flex flex-wrap items-baseline gap-y-1 text-[1.125rem] tracking-[-0.01em] text-muted-foreground md:col-span-9 md:text-xl">
                {group.items.map((item, j) => (
                  <li key={item} className="flex items-baseline">
                    <span className="transition-colors duration-300 group-hover:text-foreground">{item}</span>
                    {j < group.items.length - 1 && (
                      <span className="mx-3 text-border-strong" aria-hidden>
                        /
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
