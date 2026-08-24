import Reveal from "@/components/fx/Reveal";
import SectionHeading from "@/components/SectionHeading";
import WebrayzLogo from "@/components/WebrayzLogo";
import { leadershipPoints, site } from "@/lib/data";

export default function Leadership() {
  return (
    <section id="leadership" className="relative scroll-mt-20 overflow-hidden py-20 md:py-36">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(139,92,246,0.14), rgba(77,163,255,0.07) 55%, transparent)",
        }}
      />

      <div className="shell relative">
        <Reveal>
          <SectionHeading index="06 / LEADERSHIP" label="WEBRAYZ IT SOLUTIONS" lines={["Beyond Development.", "Managing Digital Solutions."]} />
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <Reveal delay={120}>
            <div className="module-card relative h-full overflow-hidden p-8 md:p-11">
              <span
                aria-hidden="true"
                className="font-tech pointer-events-none absolute -right-3 -top-7 select-none text-8xl font-medium text-secondary/[0.05]"
              >
                MD
              </span>
              <div className="flex items-center gap-3.5">
                <WebrayzLogo className="h-11 w-11 text-sm shadow-[0_8px_24px_-8px_rgba(37,99,235,0.6)]" />
                <p className="tech-label text-[10px] text-violet">ORGANIZATION / WEBRAYZ IT SOLUTIONS</p>
              </div>
              <p className="mt-6 font-display text-xl leading-relaxed text-ink md:text-2xl">
                As the Managing Director at{" "}
                <a
                  href={site.webrayzUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mint underline decoration-mint/30 underline-offset-4 transition-colors duration-300 hover:decoration-mint"
                >
                  Webrayz IT Solutions
                </a>, I combine technical understanding with project
                coordination and strategic thinking to help guide digital projects from concept to execution.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-secondary md:text-base">
                My role involves understanding client needs, collaborating with teams, helping manage project delivery,
                and contributing to digital solutions that prioritize clarity, quality, efficiency, and real business value.
              </p>
              <a
                href={site.webrayzUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow group/w mt-9 inline-flex"
              >
                EXPLORE WEBRAYZ
                <span aria-hidden="true" className="transition-transform duration-300 group-hover/w:translate-x-0.5 group-hover/w:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </div>
          </Reveal>

          <div className="flex flex-col justify-center">
            <p className="tech-label mb-6 text-[9px] text-dim">ROLE.MODULES / ACTIVE</p>
            <ul className="grid grid-cols-2 gap-3">
              {leadershipPoints.map((point, i) => (
                <li key={point}>
                  <Reveal delay={i * 90}>
                    <div className="group flex items-center gap-3 rounded-xl border border-secondary/[0.09] bg-surface/40 px-4 py-4 transition-all duration-300 hover:border-violet/35 hover:bg-elevated/50 hover:shadow-[0_0_24px_-10px_rgba(139,92,246,0.4)]">
                      <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-violet transition-transform duration-300 group-hover:rotate-[135deg]" aria-hidden="true" />
                      <span className="text-sm font-medium text-secondary transition-colors duration-300 group-hover:text-ink">
                        {point}
                      </span>
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
