import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
          <div>
            <div className="text-xl font-bold">
              Rohit<span className="text-primary">.</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              &copy; {currentYear} Rohit Aggarwal. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-3">
              <a 
                href="https://github.com/iamrohitagg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/rohit-aggarwalm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:rohitaggarwal376@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            
            <p className="text-xs text-muted-foreground">
              Designed & Built with passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;