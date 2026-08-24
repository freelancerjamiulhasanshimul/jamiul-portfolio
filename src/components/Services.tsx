import Reveal from "@/components/fx/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 border-y border-line bg-paper py-20 md:py-36">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            lines={["How I Can Help", "Your Business."]}
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2">
          {services.slice(0, 4).map((service, i) => (
            <Reveal key={service.title} delay={i * 110} className="h-full">
              <article className="card card-hover group relative h-full p-7 md:p-9">
                <span
                  aria-hidden="true"
                  className="font-display text-4xl font-semibold italic text-accent/25 transition-colors duration-500 group-hover:text-accent/45"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-1.5 text-sm font-medium text-accent">{service.audience}</p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-soft">{service.description}</p>

                <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-faint">
                  What&rsquo;s included
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {service.capabilities.map((cap) => (
                    <li key={cap} className="chip">
                      {cap}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}

          <Reveal delay={120} className="md:col-span-2">
            <article className="card group relative h-full border-accent/25 bg-tint p-7 md:p-10">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <span
                    aria-hidden="true"
                    className="font-display text-4xl font-semibold italic text-accent/40"
                  >
                    05
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">
                    {services[4].title}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium text-accent">{services[4].audience}</p>
                  <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-soft md:text-base">
                    {services[4].description}
                  </p>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-faint">
                    What&rsquo;s included
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {services[4].capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="chip border-accent/20 bg-paper text-accent"
                      >
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#contact" className="text-link shrink-0 self-start lg:self-end">
                  Automate your workflow →
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
