import Image from "next/image";
import Reveal from "@/components/fx/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/data";

const pillars = [
  {
    title: "Development",
    text: "Clean, scalable websites and web apps built to last.",
  },
  {
    title: "Automation",
    text: "Smart workflows that quietly take care of repetitive work.",
  },
  {
    title: "Leadership",
    text: "Guiding projects and people at Webrayz IT Solutions.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-20 md:py-36">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionHeading
                eyebrow="A little about me"
                lines={["Crafting Digital Experiences", "for Real People."]}
              />
            </Reveal>

            <Reveal delay={150}>
              <div className="relative mt-12 hidden max-w-sm lg:block">
                <div
                  aria-hidden="true"
                  className="absolute -right-4 -top-4 h-full w-full rotate-2 rounded-[1.6rem] bg-terracotta-tint"
                />
                <div className="card relative overflow-hidden rounded-[1.6rem] !p-2.5">
                  <div className="relative overflow-hidden rounded-[1.2rem]">
                    <Image
                      src="/portrait.jpg"
                      alt={`${site.name} — professional portrait`}
                      width={820}
                      height={1457}
                      sizes="380px"
                      className="aspect-[4/5] w-full object-cover object-[center_22%]"
                    />
                  </div>
                  <div className="flex items-center justify-between px-3 py-3">
                    <div>
                      <p className="font-display text-base font-semibold text-ink">{site.name}</p>
                      <p className="text-xs text-faint">
                        Managing Director,{" "}
                        <a
                          href={site.webrayzUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-link"
                        >
                          Webrayz IT Solutions
                        </a>
                      </p>
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sage-tint text-sm" aria-hidden="true">
                      👋
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="space-y-7 text-base leading-relaxed text-soft md:text-lg">
            <Reveal delay={100}>
              <p className="border-l-2 border-accent/40 pl-6 font-display text-xl italic leading-relaxed text-ink md:text-2xl">
                Great technology should feel effortless — for the people building it, and the people using it.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                I&rsquo;m a full-stack web developer and AI automation specialist based in Bangladesh, working with
                clients around the world. My focus is simple: build digital solutions that solve real problems and
                feel genuinely pleasant to use.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p>
                My background in English Literature shaped how I think about structure, story, and communication.
                It&rsquo;s why I care so much about clarity — in code, in design, and in how we work together.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <p>
                Alongside client work, I build{" "}
                <span className="font-medium text-ink">AI-powered automations</span> that take care of repetitive
                tasks, connect everyday tools, and give teams their time back.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <p>
                I also lead{" "}
                <a
                  href={site.webrayzUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Webrayz IT Solutions
                </a>{" "}
                as Managing Director — coordinating projects, working closely with clients, and helping our team
                deliver work we&rsquo;re proud of.
              </p>
            </Reveal>

            <div className="hidden gap-4 pt-4 sm:grid sm:grid-cols-3">
              {pillars.map((pillar, i) => (
                <Reveal key={pillar.title} delay={380 + i * 110} className="h-full">
                  <div className="card card-hover h-full p-5">
                    <h3 className="font-display text-lg font-semibold text-ink">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-soft">{pillar.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
