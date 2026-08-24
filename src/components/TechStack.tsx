import Reveal from "@/components/fx/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/lib/data";

const accents: Record<string, { text: string; ring: string; glow: string }> = {
  mint: {
    text: "text-mint",
    ring: "border-mint/20",
    glow: "group-hover:shadow-[0_0_26px_-8px_rgba(127,224,210,0.3)]",
  },
  azure: {
    text: "text-azure",
    ring: "border-azure/25",
    glow: "group-hover:shadow-[0_0_26px_-8px_rgba(77,163,255,0.35)]",
  },
  violet: {
    text: "text-violet",
    ring: "border-violet/30",
    glow: "group-hover:shadow-[0_0_26px_-8px_rgba(139,92,246,0.4)]",
  },
  coral: {
    text: "text-coral",
    ring: "border-coral/25",
    glow: "group-hover:shadow-[0_0_26px_-8px_rgba(255,143,122,0.3)]",
  },
};

function GroupIcon({ id }: { id: string }) {
  const cls = "h-5 w-5";
  switch (id) {
    case "web":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={cls} aria-hidden="true">
          <path d="M8 6L2.5 12 8 18M16 6l5.5 6L16 18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "backend":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={cls} aria-hidden="true">
          <ellipse cx="12" cy="5.5" rx="8" ry="3" />
          <path d="M4 5.5v13c0 1.66 3.58 3 8 3s8-1.34 8-3v-13M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={cls} aria-hidden="true">
          <circle cx="12" cy="5" r="2.2" /><circle cx="5" cy="17" r="2.2" /><circle cx="19" cy="17" r="2.2" />
          <path d="M10.8 6.9L6.4 15M13.2 6.9l4.4 8.1M7.2 17h9.6" strokeLinecap="round" />
        </svg>
      );
    case "cms":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={cls} aria-hidden="true">
          <path d="M3 4h2l2.4 12.2a1.5 1.5 0 001.47 1.2h8.86a1.5 1.5 0 001.46-1.14L21 8H6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="10" cy="20.4" r="1.15" fill="currentColor" stroke="none" />
          <circle cx="17.5" cy="20.4" r="1.15" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={cls} aria-hidden="true">
          <path d="M14.5 6.5a4.5 4.5 0 00-6.2 5.6L3 17.4V21h3.6l5.3-5.3a4.5 4.5 0 005.6-6.2L14 12.5l-2.5-2.5 3-3.5z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export default function TechStack() {
  return (
    <section id="expertise" className="relative scroll-mt-20 py-20 md:py-36">
      <div className="shell">
        <Reveal>
          <SectionHeading index="02 / TECH & AUTOMATION" label="CAPABILITY MATRIX" lines={["Technologies & Systems", "Behind the Build."]} />
        </Reveal>

        <div className="mt-16 space-y-14 md:mt-20">
          {skillGroups.map((group, gi) => {
            const accent = accents[group.accent];
            return (
              <div key={group.id}>
                <Reveal delay={60}>
                  <div className="mb-6 flex flex-wrap items-baseline gap-x-5 gap-y-2 border-b border-secondary/[0.08] pb-4">
                    <span className={`tech-label text-[10px] ${accent.text}`}>{group.tag}</span>
                    <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">{group.title}</h3>
                    <span className="font-tech ml-auto text-[10px] text-dim">
                      [{String(group.items.length).padStart(2, "0")} MODULES]
                    </span>
                  </div>
                </Reveal>
                <ul className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
                  {group.items.map((item, i) => (
                    <li key={item}>
                      <Reveal delay={(gi * 3 + i) * 40}>
                        <div
                          className={`module-card group flex h-full items-center gap-2.5 p-3 sm:gap-3.5 sm:p-4 ${accent.glow}`}
                        >
                          <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-deep/70 sm:h-10 sm:w-10 ${accent.ring} ${accent.text} transition-transform duration-300 group-hover:scale-110`}
                          >
                            <GroupIcon id={group.id} />
                          </span>
                          <div className="min-w-0">
                            <p className="truncate text-[13px] font-medium text-ink sm:text-sm">{item}</p>
                            <p className="tech-label mt-0.5 hidden text-[8.5px] text-dim sm:block">
                              {group.id}.skill / v2026
                            </p>
                          </div>
                        </div>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
