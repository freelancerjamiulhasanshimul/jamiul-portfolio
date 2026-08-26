import Reveal from "@/components/fx/Reveal";
import SectionHeading from "@/components/SectionHeading";
import WebrayzLogo from "@/components/WebrayzLogo";
import { leadershipPoints, site } from "@/lib/data";

export default function Leadership() {
  return (
    <section id="leadership" className="relative scroll-mt-20 overflow-hidden py-20 md:py-36">
      <div className="shell relative">
        <Reveal>
          <SectionHeading
            eyebrow="Beyond client work"
            lines={["Leading Webrayz", "IT Solutions."]}
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <Reveal delay={120} className="h-full">
            <div className="card h-full p-8 md:p-11">
              <div className="flex items-center gap-4">
                <WebrayzLogo className="h-12 w-12" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-faint">
                    Managing Director
                  </p>
                  <a
                    href={site.webrayzUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-lg font-semibold text-ink transition-colors hover:text-accent"
                  >
                    Webrayz IT Solutions ↗
                  </a>
                </div>
              </div>

              <p className="mt-7 font-display text-xl leading-relaxed text-ink md:text-2xl">
                As Managing Director, I help guide every project from the first conversation to final delivery.
                I combine hands-on technical knowledge with clear communication and careful coordination.
              </p>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-soft md:text-base">
                My role is understanding what clients actually need, supporting the team that builds it, and making
                sure everything we ship is clear, reliable, and genuinely useful for the business it serves.
              </p>
              <a
                href={site.webrayzUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-8"
              >
                Visit webrayz.com ↗
              </a>
            </div>
          </Reveal>

          <div className="flex flex-col justify-center">
            <p className="mb-5 text-sm font-semibold text-faint">What I focus on day to day</p>
            <ul className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-1 xl:grid-cols-2">
              {leadershipPoints.map((point, i) => (
                <li key={point}>
                  <Reveal delay={i * 90} className="h-full">
                    <div className="card card-hover flex h-full items-center gap-2.5 px-3 py-3 sm:gap-3 sm:px-4 sm:py-3.5">
                      <span
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-tint text-sage"
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3">
                          <path d="M4 12.5 9.5 18 20 6.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-[13px] font-medium leading-snug text-ink sm:text-sm">{point}</span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
