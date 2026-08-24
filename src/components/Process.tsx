import Reveal from "@/components/fx/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="relative scroll-mt-20 border-y border-line bg-paper py-20 md:py-36">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="How I work"
            lines={["From First Call", "To Launch."]}
          />
        </Reveal>

        <div className="mt-14 md:mt-20">
          <ol className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, i) => {
              const isLast = i === processSteps.length - 1;
              return (
                <li key={step.title} className="group relative pl-14 lg:pl-0 lg:pt-16">
                  {!isLast && (
                    <>
                      <span
                        aria-hidden="true"
                        className="absolute left-[15px] top-12 -bottom-5 w-px bg-line lg:hidden"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute left-12 -right-8 top-[15px] hidden h-px bg-line lg:block"
                      />
                    </>
                  )}

                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 flex h-[31px] w-[31px] items-center justify-center rounded-full border border-accent/30 bg-tint font-display text-sm font-semibold text-accent transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-white"
                  >
                    {i + 1}
                  </span>

                  <h3 className="font-display text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-soft">
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
