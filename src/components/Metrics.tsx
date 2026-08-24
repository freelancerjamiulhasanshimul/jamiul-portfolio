import Counter from "@/components/fx/Counter";
import Reveal from "@/components/fx/Reveal";
import { metrics } from "@/lib/data";

export default function Metrics() {
  return (
    <section aria-label="Key metrics" className="relative border-y border-secondary/[0.07] bg-navy/40">
      <div className="shell relative py-16 md:py-20">
        <div
          aria-hidden="true"
          className="absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-mint/15 to-transparent lg:block"
        />
        <dl className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 120}>
              <div className="group relative text-center lg:text-left">
                <dt className="tech-label order-2 mt-4 block text-[10px] text-dim transition-colors duration-300 group-hover:text-mint">
                  {metric.label}
                </dt>
                <dd className="order-1 font-display text-5xl font-bold tracking-tight text-ink md:text-6xl">
                  <Counter value={metric.value} suffix={metric.suffix} />
                </dd>
                <span
                  aria-hidden="true"
                  className="mx-auto mt-5 block h-px w-10 bg-gradient-to-r from-mint/50 to-transparent transition-all duration-500 group-hover:w-20 lg:mx-0"
                />
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
