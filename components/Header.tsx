"use client";

import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { navItems, profile } from "@/lib/content";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section in the middle band of the viewport (none on the hero).
  useEffect(() => {
    const sections = ["hero", ...navItems.map((n) => n.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id === "hero" ? "" : e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Mobile menu: lock scroll, close on Escape.
  useEffect(() => {
    if (!isMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isMenuOpen]);

  const solid = isScrolled || isMenuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${
        solid ? "border-border bg-background" : "border-transparent bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="group flex items-center gap-3" aria-label={`${profile.name}, back to top`}>
          <span
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground font-serif text-[1.0625rem] italic text-background transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
          >
            ra
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[0.9375rem] font-medium tracking-[-0.01em]">{profile.name}</span>
            <span className="hidden text-xs text-subtle sm:block">{profile.role}</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-md px-3 py-2 text-sm transition-colors ${
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={`absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ModeToggle />
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-9 items-center gap-1.5 rounded-md border border-border-strong px-3.5 text-sm font-medium transition-colors hover:bg-secondary"
          >
            Resume
            <span className="nudge text-subtle" aria-hidden>
              ↗
            </span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <ModeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen((o) => !o)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-9 items-center rounded-md border border-border-strong px-3.5 text-sm font-medium"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!isMenuOpen}
        className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-background md:hidden"
      >
        <nav aria-label="Mobile" className="container flex min-h-full flex-col justify-between pb-10 pt-6">
          <ul>
            {navItems.map((item, i) => (
              <li key={item.id} className="border-b">
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-baseline justify-between py-5 text-[2rem] font-medium tracking-[-0.03em]"
                >
                  {item.label}
                  <span className="font-serif text-lg italic text-subtle">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 space-y-6">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary w-full"
            >
              View resume ↗
            </a>
            <div className="flex justify-between text-sm text-muted-foreground">
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
              <a href={`mailto:${profile.email}`}>Email</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
