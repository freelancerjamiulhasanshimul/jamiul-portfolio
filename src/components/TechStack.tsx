"use client";

import { useState } from "react";
import Reveal from "@/components/fx/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/lib/data";

const accents: Record<string, { bg: string; text: string }> = {
  accent: { bg: "bg-tint", text: "text-accent" },
  sage: { bg: "bg-sage-tint", text: "text-sage" },
  terracotta: { bg: "bg-terracotta-tint", text: "text-terracotta" },
  honey: { bg: "bg-honey-tint", text: "text-honey" },
};

function GroupIcon({ id }: { id: string }) {
  const cls = "h-[18px] w-[18px]";
  switch (id) {
    case "web":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls} aria-hidden="true">
          <path d="M8 6L2.5 12 8 18M16 6l5.5 6L16 18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "backend":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls} aria-hidden="true">
          <ellipse cx="12" cy="5.5" rx="8" ry="3" />
          <path d="M4 5.5v13c0 1.66 3.58 3 8 3s8-1.34 8-3v-13M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={cls} aria-hidden="true">
          <circle cx="12" cy="5" r="2.2" /><circle cx="5" cy="17" r="2.2" /><circle cx="19" cy="17" r="2.2" />
          <path d="M10.8 6.9L6.4 15M13.2 6.9l4.4 8.1M7.2 17h9.6" strokeLinecap="round" />
        </svg>
      );
    case "cms":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls} aria-hidden="true">
          <path d="M3 4h2l2.4 12.2a1.5 1.5 0 001.47 1.2h8.86a1.5 1.5 0 001.46-1.14L21 8H6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="10" cy="20.4" r="1.15" fill="currentColor" stroke="none" />
          <circle cx="17.5" cy="20.4" r="1.15" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls} aria-hidden="true">
          <path d="M14.5 6.5a4.5 4.5 0 00-6.2 5.6L3 17.4V21h3.6l5.3-5.3a4.5 4.5 0 005.6-6.2L14 12.5l-2.5-2.5 3-3.5z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export default function TechStack() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="expertise" className="relative scroll-mt-20 py-20 md:py-36">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="My toolkit"
            lines={["Tools & Technologies", "I Work With."]}
          />
        </Reveal>

        <div className="mt-14 space-y-12 md:mt-20">
          {skillGroups.map((group, gi) => {
            const accent = accents[group.accent];
            const mobileHidden = gi >= 2 && !expanded;
            return (
              <div key={group.id} className={mobileHidden ? "hidden lg:block" : ""}>
                <Reveal delay={60}>
                  <div className="mb-5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="font-display text-2xl font-semibold text-ink">{group.title}</h3>
                    <p className="text-sm text-faint">{group.tag}</p>
                  </div>
                </Reveal>
                <ul className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
                  {group.items.map((item, i) => (
                    <li key={item}>
                      <Reveal delay={(gi * 3 + i) * 40} className="h-full">
                        <div className="card card-hover group flex h-full items-center gap-3 p-3.5 sm:p-4">
                          <span
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl sm:h-10 sm:w-10 ${accent.bg} ${accent.text} transition-transform duration-300 group-hover:scale-110`}
                          >
                            <GroupIcon id={group.id} />
                          </span>
                          <p className="min-w-0 truncate text-[13px] font-medium text-ink sm:text-sm">{item}</p>
                        </div>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center lg:hidden">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="btn-secondary !px-6"
            aria-expanded={expanded}
          >
            {expanded ? "Show fewer tools" : "See all tools"}
            <span aria-hidden="true" className="transition-transform duration-300 inline-block">
              {expanded ? "↑" : "↓"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
