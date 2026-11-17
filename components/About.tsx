import SectionHeading from "@/components/SectionHeading";
import { coreStack, experiences, principles, profile, yearsSince } from "@/lib/content";

const About = () => {
  const years = yearsSince(profile.careerStart);

  const facts = [
    { k: "Based in", v: profile.location },
    { k: "Currently", v: `${experiences[0].position}` },
    { k: "At", v: experiences[0].company.replace(" Pvt. Ltd.", "") },
    { k: "Core stack", v: coreStack.join(", ") },
    { k: "Building since", v: String(profile.careerStart.getFullYear()) },
  ];

  return (
    <section id="about" aria-labelledby="about-title" className="py-28 md:py-40">
      <div className="container">
        <SectionHeading
          id="about-title"
          index="01"
          label="About"
          title={
            <>
              A curiosity about how apps work, <span className="em">{years} years</span> into
              building them.
            </>
          }
        />

        <div className="grid gap-y-14 md:grid-cols-12 md:gap-x-6">
          {/* Fact rail */}
          <dl className="order-2 text-sm md:order-1 md:col-span-3" data-reveal>
            {facts.map((f) => (
              <div key={f.k} className="border-t py-3.5 last:border-b">
                <dt className="text-subtle">{f.k}</dt>
                <dd className="mt-1 text-foreground">{f.v}</dd>
              </div>
            ))}
          </dl>

          {/* Narrative */}
          <div className="order-1 md:order-2 md:col-span-9">
            <p
              className="max-w-[30em] text-[clamp(1.375rem,2.3vw,1.875rem)] leading-[1.38] tracking-[-0.02em]"
              data-reveal
            >
              I&apos;m a software engineer focused on high-quality, cross-platform mobile and web
              applications. <span className="text-muted-foreground">The kind that feel fast on a
              mid-range phone and keep holding up as the product grows.</span>
            </p>

            <div
              className="mt-10 grid max-w-[56rem] gap-6 text-muted-foreground md:grid-cols-2 md:gap-10"
              data-reveal
              style={{ ["--reveal-delay" as string]: "100ms" }}
            >
              <p>
                My path into tech started with curiosity about how digital products actually work.
                That curiosity became a career: first building React Native apps alongside design
                teams, then leading mobile development and mentoring the engineers around me.
              </p>
              <p>
                With a strong foundation in JavaScript and TypeScript, I focus on creating
                efficient, scalable and user-friendly applications, and I care about the
                unglamorous parts as much as the visible ones.
              </p>
            </div>

            <ol className="mt-16 grid gap-y-8 md:mt-24 md:grid-cols-3 md:gap-x-6">
              {principles.map((p, i) => (
                <li
                  key={p.title}
                  className="border-t pt-6"
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
                >
                  <span className="font-serif text-2xl italic text-primary">0{i + 1}</span>
                  <h3 className="mt-4 text-[1.0625rem] font-medium tracking-[-0.01em]">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
