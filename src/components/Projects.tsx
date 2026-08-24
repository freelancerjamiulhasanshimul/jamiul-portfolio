import Reveal from "@/components/fx/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { projects, type ProjectVisual } from "@/lib/data";

function BrowserFrame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card relative overflow-hidden !rounded-xl transition-transform duration-500 group-hover/project:-translate-x-2">
      <div className="flex items-center gap-3 border-b border-line bg-paper px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="h-2 w-2 rounded-full bg-line" />
          <i className="h-2 w-2 rounded-full bg-line" />
          <i className="h-2 w-2 rounded-full bg-line" />
        </span>
        <span className="ml-1 truncate rounded-md border border-line bg-cream px-3 py-1 text-[11px] font-medium text-faint">
          {title}
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-cream p-5">{children}</div>
    </div>
  );
}

function DashboardVisual() {
  const bars = [42, 68, 50, 84, 62, 95, 74];
  return (
    <div className="relative flex h-full gap-4" aria-hidden="true">
      <div className="hidden w-1/4 flex-col gap-2 rounded-lg border border-line bg-paper p-3 sm:flex">
        {[80, 60, 70, 45].map((w, i) => (
          <span key={i} className="h-2 rounded-full bg-line" style={{ width: `${w}%` }} />
        ))}
        <span className="mt-auto h-6 rounded-md bg-tint" />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div className="grid grid-cols-3 gap-3">
          {["+24%", "1.8k", "98%"].map((v, i) => (
            <div key={i} className="rounded-lg border border-line bg-paper p-3">
              <p className="font-display text-base font-semibold text-accent">{v}</p>
              <span className="mt-2 block h-1.5 w-8 rounded-full bg-line" />
            </div>
          ))}
        </div>
        <div className="flex flex-1 items-end justify-between gap-2 rounded-lg border border-line bg-paper p-4">
          {bars.map((h, i) => (
            <span
              key={i}
              className="w-full max-w-7 rounded-t-md bg-gradient-to-t from-accent/30 to-accent/70 sm:max-w-9"
              style={{ height: `${h}%` }}
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
      <div className="mb-3 flex items-center justify-between rounded-lg border border-line bg-paper px-3 py-2">
        <span className="h-2 w-10 rounded-full bg-terracotta/50" />
        <span className="h-2 w-24 rounded-full bg-line" />
        <span className="h-4 w-4 rounded border border-line" />
      </div>
      <div className="grid h-[calc(100%-3rem)] grid-cols-3 gap-3">
        {["bg-tint", "bg-sage-tint", "bg-terracotta-tint"].map((tint, i) => (
          <div key={i} className="flex flex-col overflow-hidden rounded-lg border border-line bg-paper">
            <span className={`flex-1 ${tint}`} />
            <div className="space-y-1.5 p-2.5">
              <span className="block h-1.5 w-4/5 rounded-full bg-line" />
              <span className="block h-1.5 w-2/5 rounded-full bg-accent/40" />
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
        <p className="font-display text-xl font-semibold italic leading-tight text-ink md:text-2xl">
          We build
          <br />
          brands<span className="text-accent">.</span>
        </p>
        <span className="block h-1.5 w-4/5 rounded-full bg-line" />
        <span className="block h-1.5 w-3/5 rounded-full bg-line" />
        <span className="mt-4 inline-block rounded-md bg-accent px-3.5 py-1.5 text-[10px] font-semibold text-white">
          Start →
        </span>
      </div>
      <div className="grid h-full w-2/5 grid-rows-2 gap-3">
        <span className="rounded-lg border border-line bg-tint" />
        <span className="rounded-lg border border-line bg-terracotta-tint" />
      </div>
    </div>
  );
}

function WorkflowNodeVisual() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
      <g stroke="#4a6c8f" strokeWidth="1.1" fill="none" strokeDasharray="3 5" opacity="0.5">
        <path d="M55 110 C 120 110, 130 45, 200 45" />
        <path d="M55 110 C 120 110, 130 175, 200 175" />
        <path d="M200 45 C 270 45, 280 110, 345 110" />
        <path d="M200 175 C 270 175, 280 110, 345 110" />
      </g>
      {[
        { x: 55, y: 110, t: "CRM" },
        { x: 200, y: 45, t: "AI" },
        { x: 200, y: 175, t: "Data" },
        { x: 345, y: 110, t: "Output" },
      ].map((n) => (
        <g key={n.t}>
          <circle cx={n.x} cy={n.y} r="13" fill="#ffffff" stroke="#4a6c8f" strokeOpacity="0.45" />
          <circle cx={n.x} cy={n.y} r="4" fill="#4a6c8f" opacity="0.7" />
          <text x={n.x} y={n.y - 22} textAnchor="middle" fill="#8a8f98" fontSize="10" fontWeight="500">
            {n.t}
          </text>
        </g>
      ))}
      <rect x="150" y="96" rx="14" width="100" height="28" fill="#ecf1f6" stroke="#4a6c8f" strokeOpacity="0.35" />
      <text x="200" y="114" textAnchor="middle" fill="#4a6c8f" fontSize="10" fontWeight="600">
        Automated ✓
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
          <SectionHeading
            eyebrow="Selected work"
            lines={["Projects I'm", "Proud Of."]}
          />
        </Reveal>

        <div className="mt-14 space-y-12 md:mt-20 md:space-y-16">
          {projects.map((project, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal key={project.title} delay={60}>
                <article className="group/project grid items-center gap-7 lg:grid-cols-2 lg:gap-14">
                  <div className={flipped ? "hidden md:block lg:order-2" : "hidden md:block"}>
                    <BrowserFrame title={project.title.toLowerCase().replace(/\s+/g, "") + ".app"}>
                      <div className="absolute inset-5">{visuals[project.visual]}</div>
                    </BrowserFrame>
                  </div>

                  <div className={flipped ? "lg:order-1" : ""}>
                    <p className="text-sm font-semibold text-accent">{project.category}</p>
                    <h3 className="mt-2.5 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-soft md:text-base">
                      {project.description}
                    </p>
                    <p className="mt-5 text-sm font-medium text-faint">{project.stack}</p>

                    <div className="mt-7 flex flex-wrap gap-3.5">
                      <a href={project.href} className="btn-primary !py-3 !text-sm">
                        {project.primary}
                      </a>
                      <a href={project.sourceHref} className="btn-secondary !py-3 !text-sm">
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
