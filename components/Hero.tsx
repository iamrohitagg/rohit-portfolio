import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
    >
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="animate-in text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Hi, I'm <span className="text-primary">Rohit Aggarwal</span> <br />
            Software Engineer
          </h1>
          <p className="animate-in animation-delay-200 text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            I build exceptional and accessible digital experiences for the
            mobile and web applicatons focused on creating intuitive and
            efficient software solutions.
          </p>

          <div className="animate-in animation-delay-300 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="#contact">
                Get in touch <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">View my work</a>
            </Button>
          </div>

          <div className="animate-in animation-delay-500 flex items-center gap-4 mt-8">
            <a
              href="https://github.com/iamrohitagg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-aggarwalm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
