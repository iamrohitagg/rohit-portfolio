import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    position: "Senior Software Engineer",
    company: "Classic Informatics Pvt. Ltd.",
    period: "Oct, 24 - Present",
    description:
      "Leading development of mobile applications using React Native. Mentoring junior developers and implementing best practices for code quality and performance optimization.",
  },
  {
    position: "Software Engineer",
    company: "Classic Informatics Pvt. Ltd.",
    period: "Oct, 20 - Oct, 24",
    description:
      "Built responsive cross platform mobile applications using React Native. Collaborated with design team to create intuitive user interfaces.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
          <span className="text-primary">/</span> Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-px"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row md:items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary rounded-full transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-3 h-3 bg-background rounded-full"></div>
                </div>

                {/* Content */}
                <div className="md:w-1/2 pl-16 md:pl-0 md:pr-8">
                  <Card className="h-full transform transition-transform hover:translate-y-[-4px] hover:shadow-md">
                    <CardContent className="p-6">
                      <p className="text-sm text-primary font-medium mb-1">
                        {exp.period}
                      </p>
                      <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                      <p className="text-muted-foreground mb-3">
                        {exp.company}
                      </p>
                      <p className="mb-4">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty space for alignment */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
