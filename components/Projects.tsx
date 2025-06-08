import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Student Portal",
    description:
      "A comprehensive platform for students to access course materials, submit assignments, and track their progress. Includes real-time notifications",
    image:
      "https://images.pexels.com/photos/5428012/pexels-photo-5428012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React Native"],
    liveLink:
      "https://play.google.com/store/apps/details?id=com.mkt.studentportal&hl=en",
    githubLink: "#",
  },
  {
    title: "Gaatha - Audio Storytelling App",
    description:
      "An audio-based storytelling platform featuring content in multiple languages, with personalized recommendations and offline listening capabilities.",
    image:
      "https://images.pexels.com/photos/7034479/pexels-photo-7034479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React Native"],
    liveLink:
      "https://play.google.com/store/apps/details?id=com.gaathaonair.gaatha&hl=en_IN",
    githubLink: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
          <span className="text-primary">/</span> Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group transition-all hover:shadow-md"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-background/20 backdrop-blur-md hover:bg-background/40"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span className="sr-only">Live Demo</span>
                      </Button>
                    </a>
                  )}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
