import Reveal from "@/components/fx/Reveal";
import { contacts } from "@/lib/data";

export default function CtaBand() {
  return (
    <section aria-label="Not sure where to start" className="relative py-14 md:py-20">
      <div className="shell">
        <Reveal>
          <div className="card relative overflow-hidden px-8 py-12 text-center md:px-16 md:py-16">
            <span
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-tint"
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-terracotta-tint"
            />
            <div className="relative">
              <h2 className="font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
                Not sure where to start?
                <span className="block italic text-accent">Let&rsquo;s figure it out together.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-soft">
                Tell me what you&rsquo;re trying to achieve — even if it&rsquo;s just a rough idea. I&rsquo;ll help
                you find the simplest path forward, no pressure and no jargon.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={contacts.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group"
                >
                  Book a Free Intro Call
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <a href={`mailto:${contacts.professionalEmail}`} className="btn-secondary">
                  Send an Email
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
