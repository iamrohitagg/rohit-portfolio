"use client";

import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <a
          href="#hero"
          className="text-2xl font-bold tracking-tight transition-colors hover:text-primary"
        >
          Rohit<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6">
            <li>
              <a
                href="#about"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
          <ModeToggle />
          <a
            // href="/Rohit-Aggarwal-Resume.pdf"
            href="https://drive.google.com/file/d/1vpjTlWNrHU_HxMFfGA45_XTAukXP_7kD/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">Resume</Button>
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-md transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "60px" }}
      >
        <nav className="container py-8">
          <ul className="flex flex-col space-y-6 text-lg">
            <li>
              <a
                href="#about"
                className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
            <li className="pt-4">
              <a
                href="/Rohit-Aggarwal-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full">Download Resume</Button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
