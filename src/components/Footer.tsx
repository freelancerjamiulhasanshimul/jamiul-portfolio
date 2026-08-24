import Logo from "@/components/Logo";
import WebrayzLogo from "@/components/WebrayzLogo";
import { contacts, site } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-secondary/[0.08] bg-navy/50">
      <div className="shell py-16 md:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <a
              href="#home"
              aria-label="Jamiul H. Shimul — back to home"
              className="inline-block transition-transform duration-300 hover:scale-105"
            >
              <Logo className="h-12 w-12" />
            </a>
            <p className="mt-4 font-display text-lg font-semibold text-secondary">{site.name}</p>
            <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-dim">{site.role}</p>
            <a
              href={site.webrayzUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-label mt-3 inline-flex items-center gap-2 text-[9px] text-dim transition-colors duration-300 hover:text-mint"
            >
              <WebrayzLogo className="h-4 w-4 text-[6px]" />
              MANAGING DIRECTOR, <span className="text-secondary/80">WEBRAYZ IT SOLUTIONS</span>
            </a>
          </div>

          <nav aria-label="Social links">
            <p className="tech-label mb-5 text-[9px] text-dim">NETWORK.LINKS</p>
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {contacts.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow text-[11px] text-secondary hover:text-mint"
                  >
                    {social.label.toUpperCase()} ↗
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#home"
              className="btn-ghost mt-10 px-5 py-2.5 text-[10px]"
            >
              BACK TO TOP ↑
            </a>
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-secondary/[0.07] pt-7 sm:flex-row">
          <p className="font-tech text-[10px] tracking-wide text-dim">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="tech-label flex items-center gap-2 text-[9px] text-dim">
            SYSTEM / PORTFOLIO / {year}
            <span className="inline-block h-1 w-1 animate-pulse rounded-full bg-mint" aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  );
}
