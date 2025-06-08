import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-row md:flex-col gap-12">
          <h2 className="text-3xl font-bold mb-2 flex gap-3">
            <span className="text-primary">/</span> About Me
          </h2>
          <div className="text-muted-foreground">
            <p>
              I'm a passionate Software Engineer with expertise in building
              high-quality cross platform mobile and web applications. My
              journey in tech started with a curiosity about how digital
              products work, which evolved into a full-fledged career in
              software development.
            </p>
            <p>
              With a strong foundation in JavaScript and modern web
              technologies, I focus on creating efficient, scalable, and
              user-friendly applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
