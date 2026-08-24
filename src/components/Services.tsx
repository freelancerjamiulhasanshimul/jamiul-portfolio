import Reveal from "@/components/fx/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/data";

function WorkflowVisual() {
  const nodes = [
    { cx: 60, cy: 70, label: "INPUT" },
    { cx: 170, cy: 34, label: "AI" },
    { cx: 170, cy: 106, label: "API" },
    { cx: 286, cy: 70, label: "OUTPUT" },
  ];
  return (
    <svg
      viewBox="0 0 346 140"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.55]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="flowLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7fe0d2" stopOpacity="0.7" />
          <stop offset="55%" stopColor="#8b5cf6" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#4da3ff" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <g stroke="url(#flowLine)" strokeWidth="1.2" fill="none">
        <path d="M78 66 C 110 58, 130 44, 152 38" strokeDasharray="4 6" className="animate-dash-flow" />
        <path d="M78 76 C 112 84, 132 98, 152 102" strokeDasharray="4 6" className="animate-dash-flow [animation-delay:-1.6s]" />
        <path d="M188 36 C 226 42, 248 52, 268 62" strokeDasharray="4 6" className="animate-dash-flow [animation-delay:-0.8s]" />
        <path d="M188 104 C 226 98, 248 88, 268 80" strokeDasharray="4 6" className="animate-dash-flow [animation-delay:-2.3s]" />
      </g>
      {nodes.map((n) => (
        <g key={n.label}>
          <circle cx={n.cx} cy={n.cy} r="10" fill="#0b1020" stroke="url(#flowLine)" strokeWidth="1.2" />
          <circle cx={n.cx} cy={n.cy} r="3.2" fill="#7fe0d2" className="animate-pulse-node" />
          <text
            x={n.cx}
            y={n.cy - 18}
            textAnchor="middle"
            fill="#718096"
            fontSize="8"
            letterSpacing="2"
            fontFamily="ui-monospace, monospace"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 border-t border-secondary/[0.06] bg-navy/30 py-20 md:py-36">
      <div className="shell">
        <Reveal>
          <SectionHeading index="03 / SERVICES" label="BUILD & AUTOMATE" lines={["What I Build", "& Automate."]} />
        </Reveal>

        <div className="mt-16 grid gap-5 md:mt-20 md:grid-cols-2">
          {services.slice(0, 4).map((service, i) => (
            <Reveal key={service.id} delay={i * 110}>
              <article className="module-card group relative h-full overflow-hidden p-7 md:p-9">
                <span
                  aria-hidden="true"
                  className="font-tech pointer-events-none absolute -right-2 -top-5 select-none text-7xl font-medium text-secondary/[0.05] transition-colors duration-500 group-hover:text-mint/[0.07] md:text-8xl"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="tech-label text-[10px] text-mint/80">{service.id}</p>
                <h3 className="mt-4 max-w-xs font-display text-2xl font-semibold leading-snug text-ink md:text-[1.7rem]">
                  {service.title}
                </h3>
                <p className="mt-3.5 text-sm leading-relaxed text-secondary md:text-[0.95rem]">{service.description}</p>

                <p className="tech-label mt-7 text-[9px] text-dim">SYSTEM CAPABILITIES</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {service.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="rounded-md border border-secondary/[0.12] bg-deep/50 px-2.5 py-1.5 font-tech text-[10px] text-secondary transition-colors duration-300 group-hover:border-mint/25 group-hover:text-ink"
                    >
                      {cap}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}

          <Reveal delay={120} className="md:col-span-2">
            <article className="module-card group relative h-full overflow-hidden border-violet/25 bg-gradient-to-br from-violet/[0.09] via-surface/60 to-deep/60 p-7 shadow-[0_0_50px_-18px_rgba(139,92,246,0.35)] hover:border-violet/50 md:p-10">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 hidden md:block">
                <WorkflowVisual />
              </div>
              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="tech-label text-[10px] text-violet">{services[4].id} / INTELLIGENCE.CORE</p>
                  <h3 className="mt-4 font-display text-2xl font-semibold leading-snug text-ink md:text-3xl">
                    {services[4].title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-secondary md:text-base">
                    {services[4].description}
                  </p>
                  <p className="tech-label mt-7 text-[9px] text-dim">SYSTEM CAPABILITIES</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {services[4].capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="rounded-md border border-violet/25 bg-deep/50 px-2.5 py-1.5 font-tech text-[10px] text-secondary transition-colors duration-300 group-hover:border-mint/40 group-hover:text-ink"
                      >
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#contact" className="link-arrow shrink-0 self-start lg:self-end">
                  AUTOMATE A WORKFLOW →
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
