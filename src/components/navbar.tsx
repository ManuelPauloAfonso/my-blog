import { Github, Linkedin, Twitter } from "lucide-react";

const links = [
  { name: "Blog", href: "/posts" },
  { name: "About", href: "/about" },
  {
    name: "Portfolio",
    href: "https://github.com/manuelPauloAfonso",
    external: true,
  },
];

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/manuelpauloafonso/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/manuelPauloAfonso",
    icon: Github,
  },
  {
    name: "X",
    href: "https://x.com/mManuelPauloAf1",
    icon: Twitter,
  },
];

const navLinkClass =
  "font-sans text-[10px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink sm:text-[11px]";

const NavLinks = () => (
  <ul className="flex items-center gap-5 sm:gap-7">
    {links.map((link) => (
      <li key={link.name}>
        <a
          href={link.href}
          className={navLinkClass}
          {...(link.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {link.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1180px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-4 sm:px-8 md:py-5 lg:px-10">
        <div className="flex items-center gap-8">
          <a
            href="/"
            className="text-lg font-semibold tracking-tight sm:text-xl"
          >
            manuel<span className="text-muted">.</span>
          </a>

          <nav aria-label="Main" className="hidden md:block">
            <NavLinks />
          </nav>
        </div>

        <ul className="flex items-center gap-4 sm:gap-5">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="block text-ink/70 transition-colors hover:text-ink"
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </a>
              </li>
            );
          })}
        </ul>

        <nav
          aria-label="Mobile"
          className="w-full border-t border-line pt-3 md:hidden"
        >
          <NavLinks />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
