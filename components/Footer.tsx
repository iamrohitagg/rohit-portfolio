import { navItems, profile } from "@/lib/content";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="overflow-hidden border-t">
      <div className="container">
        <div className="flex flex-col gap-8 py-10 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-subtle">&copy; {currentYear} Rohit Aggarwal. All rights reserved.</p>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground">
              {navItems.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="transition-colors hover:text-foreground">
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
                  GitHub ↗
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </nav>

          <a href="#hero" className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
            Back to top
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden>
              ↑
            </span>
          </a>
        </div>

        {/* Wordmark — typographic sign-off, cropped by the page edge */}
        <p
          aria-hidden
          className="select-none whitespace-nowrap text-center text-[min(13.4vw,11.5rem)] font-medium leading-[0.74] tracking-[-0.065em] text-foreground/[0.06]"
        >
          Rohit Aggarwal
        </p>
      </div>
    </footer>
  );
};

export default Footer;
