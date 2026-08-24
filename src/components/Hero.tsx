"use client";

import Image from "next/image";
import { quickFacts, site } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-[72px]">
      <div className="shell relative z-10 grid items-center gap-14 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-8 lg:pb-28">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-soft shadow-[0_2px_10px_-4px_rgba(43,43,43,0.08)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sage" />
            </span>
            Available for new projects
          </p>

          <h1 className="mt-7 font-display text-[clamp(2.9rem,7.5vw,5.4rem)] font-semibold leading-[1.05] tracking-tight text-ink">
            <span className="block italic text-[0.42em] font-medium leading-snug text-soft">
              {site.headline}
            </span>
            <span className="mt-2 block italic text-accent">{site.headlineAccent}</span>
            <span className="mt-4 block not-italic">Jamiul H. Shimul</span>
          </h1>

          <p className="mt-6 text-lg font-medium text-soft">
            Full Stack Web Developer <span className="text-faint">&</span> AI Automation Specialist
          </p>

          <div className="mt-5 flex items-center gap-3" aria-hidden="true">
            <span className="h-px w-12 bg-accent/40" />
            <p className="text-sm text-faint">
              Managing Director at{" "}
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

          <p className="mt-7 max-w-xl text-base leading-relaxed text-soft sm:text-lg">
            {site.statement}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary group">
              Work With Me
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a href="#work" className="btn-secondary group">
              View My Work
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-2.5">
            {quickFacts.map((fact) => (
              <li key={fact} className="flex items-center gap-2 text-sm font-medium text-soft">
                <span className="h-1 w-1 rounded-full bg-sage" aria-hidden="true" />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[400px] lg:max-w-[420px]">
          <div
            aria-hidden="true"
            className="absolute -right-4 top-8 hidden h-full w-full rotate-3 rounded-[2rem] bg-tint sm:block"
          />
          <div
            aria-hidden="true"
            className="absolute -left-5 bottom-10 hidden h-2/3 w-full -rotate-2 rounded-[2rem] bg-terracotta-tint sm:block"
          />

          <div className="card relative overflow-hidden rounded-[2rem] !p-3 shadow-[0_24px_60px_-24px_rgba(43,43,43,0.22)]">
            <div className="relative overflow-hidden rounded-[1.55rem]">
              <Image
                src="/portrait.jpg"
                alt={`${site.name} — professional portrait`}
                width={820}
                height={1457}
                preload
                sizes="(max-width: 1024px) 80vw, 420px"
                className="aspect-[4/5] h-auto w-full object-cover object-[center_18%]"
              />
            </div>
          </div>

          <div className="card animate-float absolute -left-4 top-8 hidden items-center gap-3 !rounded-2xl px-4 py-3 sm:flex lg:-left-10">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-tint text-base" aria-hidden="true">
              🤝
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Friendly collaboration</p>
              <p className="text-xs text-faint">Clear updates, no jargon</p>
            </div>
          </div>

          <div className="card animate-float-slow absolute -right-3 bottom-16 hidden !rounded-2xl px-4 py-3 sm:block lg:-right-8">
            <p className="text-xs font-medium text-faint">I help businesses with</p>
            <p className="mt-1 text-sm font-semibold text-ink">
              Websites · Stores · AI Automation
            </p>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="group absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2.5 md:flex"
      >
        <span className="text-xs font-medium text-faint transition-colors group-hover:text-accent">
          Scroll to explore
        </span>
        <span aria-hidden="true" className="text-faint transition-transform duration-300 group-hover:translate-y-1">
          ↓
        </span>
      </a>
    </section>
  );
}
