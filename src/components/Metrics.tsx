import Counter from "@/components/fx/Counter";
import Reveal from "@/components/fx/Reveal";
import { metrics } from "@/lib/data";

export default function Metrics() {
  return (
    <section aria-label="Key numbers" className="relative border-y border-line bg-paper">
      <div className="shell relative py-14 md:py-20">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 120}>
              <div className="group text-center lg:text-left">
                <dd className="font-display text-5xl font-semibold tracking-tight text-ink md:text-6xl">
                  <Counter value={metric.value} suffix={metric.suffix} />
                </dd>
                <dt className="mt-3 block text-sm font-medium text-faint transition-colors duration-300 group-hover:text-accent">
                  {metric.label}
                </dt>
                <span
                  aria-hidden="true"
                  className="mx-auto mt-5 block h-0.5 w-8 rounded-full bg-accent/30 transition-all duration-500 group-hover:w-14 group-hover:bg-accent/60 lg:mx-0"
                />
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
