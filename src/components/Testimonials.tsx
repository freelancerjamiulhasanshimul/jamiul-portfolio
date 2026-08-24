import Reveal from "@/components/fx/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" aria-label="Testimonials" className="relative py-20 md:py-32">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Kind words"
            lines={["What Clients Say."]}
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:mt-20">
          {testimonials.map((testimonial, i) => (
            <Reveal key={i} delay={i * 140} className={i > 0 ? "hidden h-full md:block" : "h-full"}>
              <figure className="card card-hover relative flex h-full flex-col p-7">
                <span
                  aria-hidden="true"
                  className="font-display absolute right-6 top-1 select-none text-7xl italic leading-none text-accent/15"
                >
                  &ldquo;
                </span>
                <blockquote className="relative flex-1 text-[0.95rem] leading-relaxed text-soft">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4 border-t border-line pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tint font-display text-sm font-semibold text-accent">
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
                    <p className="text-xs text-faint">
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
