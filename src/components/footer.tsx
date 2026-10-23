import { Github, Linkedin, Twitter } from "lucide-react";

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

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-line sm:mt-28">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-8 lg:px-10">
        <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-muted">
          © {new Date().getFullYear()} Manuel Afonso
        </p>

        <p className="order-3 font-sans text-[10px] uppercase tracking-[0.18em] text-muted sm:order-none">
          Built with Astro, React &amp; Tailwind
        </p>

        <ul className="flex items-center gap-4">
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
      </div>
    </footer>
  );
};

export default Footer;
