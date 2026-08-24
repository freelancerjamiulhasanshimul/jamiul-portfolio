import Reveal from "@/components/fx/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { projects, type ProjectVisual } from "@/lib/data";

function BrowserFrame({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div className="module-card group/win relative overflow-hidden rounded-xl transition-transform duration-500 group-hover/project:-translate-x-2">
      <div className="flex items-center gap-3 border-b border-secondary/[0.09] bg-deep/80 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="h-2 w-2 rounded-full bg-coral/70" />
          <i className="h-2 w-2 rounded-full bg-[#f5c26b]/70" />
          <i className="h-2 w-2 rounded-full bg-mint/70" />
        </span>
        <span className="ml-1 truncate rounded-md border border-secondary/[0.1] bg-navy/80 px-3 py-1 font-tech text-[9px] tracking-wider text-dim">
          {id.toLowerCase()}.app
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-surface/90 to-deep p-5">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(77,163,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(77,163,255,0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {children}
      </div>
    </div>
  );
}

function DashboardVisual() {
  const bars = [42, 68, 50, 84, 62, 95, 74];
  return (
    <div className="relative flex h-full gap-4" aria-hidden="true">
      <div className="hidden w-1/4 flex-col gap-2 rounded-lg border border-secondary/[0.08] bg-deep/60 p-3 sm:flex">
        {[80, 60, 70, 45].map((w, i) => (
          <span key={i} className="h-2 rounded-full bg-secondary/20" style={{ width: `${w}%` }} />
        ))}
        <span className="mt-auto h-6 rounded-md bg-mint/15" />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div className="grid grid-cols-3 gap-3">
          {["+24%", "1.8k", "98%"].map((v, i) => (
            <div key={i} className="rounded-lg border border-secondary/[0.08] bg-deep/60 p-3">
              <p className="font-tech text-sm font-medium text-mint">{v}</p>
              <span className="mt-2 block h-1.5 w-8 rounded-full bg-secondary/15" />
            </div>
          ))}
        </div>
        <div className="flex flex-1 items-end justify-between gap-2 rounded-lg border border-secondary/[0.08] bg-deep/60 p-4">
          {bars.map((h, i) => (
            <span
              key={i}
              className="w-full max-w-7 rounded-t-md bg-gradient-to-t from-azure/25 to-mint/60 transition-all duration-500 group-hover/project:opacity-100 sm:max-w-9"
              style={{ height: `${h}%`, opacity: 0.85 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function StorefrontVisual() {
  return (
    <div className="relative h-full" aria-hidden="true">
      <div className="mb-3 flex items-center justify-between rounded-lg border border-secondary/[0.08] bg-deep/60 px-3 py-2">
        <span className="h-2 w-10 rounded-full bg-coral/50" />
        <span className="h-2 w-24 rounded-full bg-secondary/15" />
        <span className="h-4 w-4 rounded border border-secondary/20" />
      </div>
      <div className="grid h-[calc(100%-3rem)] grid-cols-3 gap-3">
        {[
          "from-violet/30 to-deep",
          "from-mint/25 to-deep",
          "from-azure/30 to-deep",
        ].map((grad, i) => (
          <div key={i} className="flex flex-col overflow-hidden rounded-lg border border-secondary/[0.08]">
            <span className={`flex-1 bg-gradient-to-b ${grad}`} />
            <div className="space-y-1.5 bg-deep/70 p-2.5">
              <span className="block h-1.5 w-4/5 rounded-full bg-secondary/25" />
              <span className="block h-1.5 w-2/5 rounded-full bg-mint/40" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AgencyVisual() {
  return (
    <div className="relative flex h-full items-center gap-5" aria-hidden="true">
      <div className="flex-1 space-y-3">
        <p className="font-display text-xl font-bold leading-tight text-ink/85 md:text-2xl">
          We build<br />
          brands<span className="text-coral">.</span>
        </p>
        <span className="block h-1.5 w-4/5 rounded-full bg-secondary/15" />
        <span className="block h-1.5 w-3/5 rounded-full bg-secondary/15" />
        <span className="mt-4 inline-block rounded-md bg-coral/80 px-3.5 py-1.5 font-tech text-[9px] text-deep">
          START →
        </span>
      </div>
      <div className="grid h-full w-2/5 grid-rows-2 gap-3">
        <span className="rounded-lg border border-secondary/[0.08] bg-gradient-to-tr from-violet/25 to-transparent" />
        <span className="rounded-lg border border-secondary/[0.08] bg-gradient-to-br from-mint/20 to-transparent" />
      </div>
    </div>
  );
}

function WorkflowNodeVisual() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="wfLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4da3ff" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#7fe0d2" stopOpacity="0.75" />
        </linearGradient>
      </defs>
      <g stroke="url(#wfLine)" strokeWidth="1.1" fill="none" strokeDasharray="3 5">
        <path d="M55 110 C 120 110, 130 45, 200 45" className="animate-dash-flow" />
        <path d="M55 110 C 120 110, 130 175, 200 175" className="animate-dash-flow [animation-delay:-1.2s]" />
        <path d="M200 45 C 270 45, 280 110, 345 110" className="animate-dash-flow [animation-delay:-0.6s]" />
        <path d="M200 175 C 270 175, 280 110, 345 110" className="animate-dash-flow [animation-delay:-1.8s]" />
      </g>
      {[
        { x: 55, y: 110, t: "CRM" },
        { x: 200, y: 45, t: "AI.CORE" },
        { x: 200, y: 175, t: "DATA" },
        { x: 345, y: 110, t: "OUTPUT" },
      ].map((n) => (
        <g key={n.t}>
          <circle cx={n.x} cy={n.y} r="13" fill="#0b1020" stroke="url(#wfLine)" />
          <circle cx={n.x} cy={n.y} r="4" fill="#7fe0d2" className="animate-pulse-node" />
          <text x={n.x} y={n.y - 22} textAnchor="middle" fill="#718096" fontSize="9" letterSpacing="1.5" fontFamily="ui-monospace, monospace">
            {n.t}
          </text>
        </g>
      ))}
      <rect x="150" y="96" rx="8" width="100" height="28" fill="rgba(139,92,246,0.12)" stroke="rgba(139,92,246,0.4)" />
      <text x="200" y="114" textAnchor="middle" fill="#b6c2d1" fontSize="9" letterSpacing="2" fontFamily="ui-monospace, monospace">
        AUTOMATE ✓
      </text>
    </svg>
  );
}

const visuals: Record<ProjectVisual, React.ReactNode> = {
  dashboard: <DashboardVisual />,
  storefront: <StorefrontVisual />,
  agency: <AgencyVisual />,
  workflow: <WorkflowNodeVisual />,
};

export default function Projects() {
  return (
    <section id="work" className="relative scroll-mt-20 py-20 md:py-36">
      <div className="shell">
        <Reveal>
          <SectionHeading index="04 / PROJECT ARCHIVE" label="SELECTED WORK" lines={["Selected Digital", "Experiences."]} />
        </Reveal>

        <div className="mt-14 space-y-12 md:mt-20 md:space-y-10">
          {projects.map((project, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal key={project.id} delay={60}>
                <article className="group/project grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  <div className={flipped ? "hidden md:block lg:order-2" : "hidden md:block"}>
                    <BrowserFrame id={project.id}>
                      <div className="absolute inset-5">{visuals[project.visual]}</div>
                    </BrowserFrame>
                  </div>

                  <div className={flipped ? "lg:order-1" : ""}>
                    <p className="tech-label text-[10px] text-mint/80">{project.category}</p>
                    <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover/project:text-mint md:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-sm leading-relaxed text-secondary md:text-base">
                      {project.description}
                    </p>
                    <p className="tech-label mt-6 text-[9px] text-dim">
                      {project.id === "PROJECT_004" ? "CAPABILITIES" : "STACK"}
                    </p>
                    <p className="mt-2 font-tech text-xs leading-relaxed text-secondary/85">{project.stack}</p>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <a href={project.href} className="btn-primary py-3 text-[11px] group/btn">
                        {project.primary}
                      </a>
                      <a href={project.sourceHref} className="btn-ghost py-3 text-[11px]">
                        {project.secondary}
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
