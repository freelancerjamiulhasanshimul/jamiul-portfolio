import Logo from "@/components/Logo";
import WebrayzLogo from "@/components/WebrayzLogo";
import { contacts, site } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-paper">
      <div className="shell py-14 md:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <a
              href="#home"
              aria-label="Jamiul H. Shimul — back to home"
              className="inline-block transition-transform duration-300 hover:scale-105"
            >
              <Logo className="h-12 w-12" />
            </a>
            <p className="mt-4 font-display text-lg font-semibold text-ink">{site.name}</p>
            <p className="mt-1 max-w-xs text-sm leading-relaxed text-soft">{site.role}</p>
            <a
              href={`mailto:${contacts.professionalEmail}`}
              className="mt-2 inline-block text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              {contacts.professionalEmail}
            </a>
            <a
              href={site.webrayzUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-2 text-sm text-soft transition-colors duration-300 hover:text-accent"
            >
              <WebrayzLogo className="h-5 w-5" />
              Managing Director, Webrayz IT Solutions
            </a>
          </div>

          <nav aria-label="Social links">
            <p className="mb-4 text-sm font-semibold text-faint">Find me online</p>
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {contacts.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-soft underline decoration-line underline-offset-4 transition-colors duration-300 hover:text-accent hover:decoration-accent"
                  >
                    {social.label} ↗
                  </a>
                </li>
              ))}
            </ul>

            <a href="#home" className="btn-secondary mt-9 !px-5 !py-2.5 !text-sm">
              Back to top ↑
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 sm:flex-row">
          <p className="text-sm text-faint">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-sm text-faint">Designed & built with care.</p>
        </div>
      </div>
    </footer>
  );
}
