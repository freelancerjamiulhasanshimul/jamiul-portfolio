import Image from "next/image";
import Reveal from "@/components/fx/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/data";

const pillars = [
  {
    tag: "PILLAR.01",
    title: "Development",
    text: "Full stack web development with clean, scalable, maintainable code.",
  },
  {
    tag: "PILLAR.02",
    title: "AI Automation",
    text: "Intelligent systems that connect tools and remove repetitive work.",
  },
  {
    tag: "PILLAR.03",
    title: "Leadership",
    text: "Managing projects, communication, and delivery at Webrayz IT Solutions.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-20 md:py-36">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionHeading index="01 / IDENTITY" label="HUMAN INTELLIGENCE" lines={["Beyond the Code.", "Behind the System."]} />
            </Reveal>

            <Reveal delay={150}>
              <div className="relative mt-12 hidden max-w-sm lg:block">
                <div
                  aria-hidden="true"
                  className="absolute -inset-5 rounded-[1.6rem] blur-2xl"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(139,92,246,0.14), rgba(77,163,255,0.08), transparent)",
                  }}
                />
                <div className="gradient-frame relative overflow-hidden rounded-[1.4rem] shadow-[0_30px_70px_-30px_rgba(5,8,22,0.9)]">
                  <Image
                    src="/portrait.jpg"
                    alt={`${site.name} — professional portrait`}
                    width={820}
                    height={1457}
                    sizes="380px"
                    className="aspect-[4/5] w-full object-cover object-[center_22%]"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-navy/20" />
                  <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
                    <div className="animate-scan absolute inset-x-0 h-20 bg-gradient-to-b from-transparent via-mint/[0.06] to-transparent" />
                  </div>

                  <span aria-hidden="true" className="absolute left-3 top-3 h-4 w-4 border-l border-t border-mint/60" />
                  <span aria-hidden="true" className="absolute right-3 top-3 h-4 w-4 border-r border-t border-mint/60" />
                  <span aria-hidden="true" className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-mint/60" />
                  <span aria-hidden="true" className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-mint/60" />

                  <div className="glass absolute right-3 top-3 rounded-lg px-2.5 py-1.5">
                    <p className="tech-label text-[8px] text-secondary">MD // WEBRAYZ</p>
                  </div>

                  <div className="glass-strong absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-xl px-3.5 py-3">
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate font-display text-sm font-semibold text-ink">{site.name}</p>
                      <p className="tech-label truncate text-[8px] text-secondary/80">FULL STACK DEV // AI AUTOMATION</p>
                    </div>
                    <span className="tech-label ml-auto shrink-0 text-[8px] text-mint">VERIFIED</span>
                  </div>
                </div>
                <p className="tech-label mt-3 text-center text-[9px] text-dim">IDENTITY.PROFILE / 2026</p>
              </div>
            </Reveal>
          </div>

          <div className="space-y-8 text-base leading-relaxed text-secondary md:text-lg">
            <Reveal delay={100}>
              <p className="border-l border-mint/30 pl-6 font-display text-xl leading-relaxed text-ink/95 md:text-2xl">
                Technology is built with logic, but meaningful digital experiences are built around people.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                My approach combines technical problem-solving with communication, structure, and an understanding of how
                people interact with information. Every system I build starts with the question of who it serves — not just
                what it does.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p>
                Studying English Literature has strengthened the way I think about structure, narrative, communication, and
                audience. These principles influence how I approach digital products — because every interface tells a story,
                and every user follows a journey.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <p>
                Alongside web development, I explore and build{" "}
                <span className="text-mint">AI-powered automation systems</span> that help streamline workflows, connect digital
                tools, reduce repetitive work, and create more efficient business processes.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <p>
                Alongside my technical work, I serve as the{" "}
                <span className="text-ink">Managing Director at{" "}
                  <a
                    href={site.webrayzUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mint underline decoration-mint/30 underline-offset-4 transition-colors duration-300 hover:decoration-mint"
                  >
                    Webrayz IT Solutions
                  </a>
                </span>, contributing to project
                coordination, client communication, team collaboration, and the delivery of reliable digital solutions.
              </p>
            </Reveal>

            <div className="hidden gap-4 pt-6 sm:grid sm:grid-cols-3">
              {pillars.map((pillar, i) => (
                <Reveal key={pillar.tag} delay={380 + i * 110}>
                  <div className="module-card h-full p-5">
                    <p className="tech-label text-[9px] text-dim">{pillar.tag}</p>
                    <h3 className="mt-2.5 font-display text-base font-semibold text-mint">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-secondary/90">{pillar.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
