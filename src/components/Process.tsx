import Reveal from "@/components/fx/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="relative scroll-mt-20 border-t border-secondary/[0.06] bg-navy/30 py-20 md:py-36">
      <div className="shell">
        <Reveal>
          <SectionHeading index="05 / PROCESS" label="EXECUTION PIPELINE" lines={["From Concept", "To Deployment."]} />
        </Reveal>

        <div className="mt-16 md:mt-24">
          <ol className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, i) => {
              const isLast = i === processSteps.length - 1;
              return (
                <li key={step.id} className="group relative pl-14 lg:pl-0 lg:pt-16">
                  {!isLast && (
                    <>
                      <span
                        aria-hidden="true"
                        className="absolute left-[15px] top-12 -bottom-5 w-px bg-gradient-to-b from-mint/50 via-azure/30 to-transparent lg:hidden"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute left-12 -right-8 top-[15px] hidden h-px bg-gradient-to-r from-mint/50 via-azure/30 to-transparent lg:block"
                      />
                    </>
                  )}

                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 flex h-[31px] w-[31px] items-center justify-center rounded-full border border-mint/40 bg-deep transition-all duration-500 group-hover:border-mint group-hover:shadow-[0_0_18px_rgba(127,224,210,0.5)]"
                  >
                    <span className="animate-pulse-node block h-2 w-2 rounded-full bg-mint/80" />
                  </span>

                  <p className="font-tech text-xs tracking-[0.2em] text-mint">{step.id}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink md:text-xl">
                    {["Discover", "Strategize", "Build", "Refine"][i]}
                  </h3>
                  <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-secondary/90">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
