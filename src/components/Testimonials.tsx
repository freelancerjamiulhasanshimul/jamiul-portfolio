import Reveal from "@/components/fx/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" aria-label="Testimonials" className="relative py-20 md:py-32">
      <div className="shell">
        <Reveal>
          <SectionHeading index="07 / TRUST" label="CLIENT SIGNALS" lines={["Built Through", "Meaningful Collaboration."]} align="center" />
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3 md:mt-20">
          {testimonials.map((testimonial, i) => (
            <Reveal key={i} delay={i * 140} className={i > 0 ? "hidden h-full md:block" : "h-full"}>
              <figure className="module-card group relative flex h-full flex-col p-7">
                <span
                  aria-hidden="true"
                  className="font-display absolute right-5 top-2 select-none text-7xl leading-none text-mint/[0.08] transition-colors duration-500 group-hover:text-mint/[0.16]"
                >
                  &ldquo;
                </span>
                <blockquote className="relative flex-1 text-sm leading-relaxed text-secondary md:text-[0.95rem]">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4 border-t border-secondary/[0.08] pt-5">
                  <span className="gradient-frame flex h-11 w-11 items-center justify-center rounded-full font-tech text-xs tracking-wider text-mint">
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
                    <p className="font-tech mt-0.5 text-[10px] tracking-wide text-dim">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
