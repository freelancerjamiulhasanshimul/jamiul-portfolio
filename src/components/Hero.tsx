"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";
import ParticleField from "@/components/fx/ParticleField";
import { site } from "@/lib/data";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const layersRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    const factors = [16, -22, 12, -14];
    layersRef.current.forEach((layer, i) => {
      if (!layer) return;
      layer.style.transform = `translate3d(${(nx * factors[i]).toFixed(1)}px, ${(ny * factors[i] * 0.7).toFixed(1)}px, 0)`;
    });
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden pt-[72px]"
    >
      <ParticleField />

      <div className="shell relative z-10 grid items-center gap-12 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-8 lg:pb-32">
        <div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <p className="tech-label text-xs text-mint">{"// HELLO, WORLD"}</p>
            <p className="tech-label flex items-center gap-2 text-[10px] text-dim">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
              </span>
              SYSTEM.STATUS: AVAILABLE
            </p>
          </div>

          <h1 className="mt-7 font-display text-[clamp(3.2rem,9vw,6.6rem)] font-bold leading-[0.98] tracking-tight">
            <span className="block text-ink">Jamiul H.</span>
            <span className="text-gradient block drop-shadow-[0_0_36px_rgba(127,224,210,0.18)]">
              Shimul
            </span>
          </h1>

          <p className="tech-label mt-7 text-[11px] leading-relaxed text-secondary sm:text-xs">
            FULL STACK WEB DEVELOPER <span className="text-mint">&</span> AI AUTOMATION SPECIALIST
          </p>

          <div className="mt-6 flex items-center gap-4" aria-hidden="true">
            <span className="h-px w-16 bg-gradient-to-r from-mint/70 to-transparent" />
            <span className="h-1.5 w-1.5 rotate-45 border border-mint/50" />
            <span className="tech-label text-[10px] text-dim">
              MANAGING DIRECTOR —{" "}
              <a
                href={site.webrayzUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mint/90 underline decoration-mint/30 underline-offset-4 transition-colors duration-300 hover:text-mint hover:decoration-mint"
              >
                WEBRAYZ IT SOLUTIONS
              </a>
            </span>
          </div>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-secondary sm:text-lg">
            {site.statement}
          </p>

          <div className="mt-11 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary group">
              INITIALIZE PROJECT
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a href="#work" className="btn-ghost group">
              EXPLORE MY WORK
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[400px] lg:max-w-[430px]" style={{ perspective: "1000px" }}>
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
            style={{
              background:
                "radial-gradient(closest-side, rgba(77,163,255,0.2), rgba(139,92,246,0.12) 55%, transparent)",
            }}
          />

          <div ref={(el) => { layersRef.current[0] = el; }} className="transition-transform duration-300 ease-out will-change-transform">
            <div className="animate-spin-slower absolute -inset-7 rounded-full" aria-hidden="true"
              style={{
                background:
                  "conic-gradient(from 40deg, transparent 12%, rgba(127,224,210,0.35) 26%, transparent 42%, rgba(139,92,246,0.3) 68%, transparent 84%)",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 1.5px), black calc(100% - 1px))",
                WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 1.5px), black calc(100% - 1px))",
              }}
            />
          </div>

          <div ref={(el) => { layersRef.current[1] = el; }} className="transition-transform duration-500 ease-out will-change-transform">
            <div className="gradient-frame relative overflow-hidden rounded-[1.75rem] shadow-[0_40px_90px_-30px_rgba(5,8,22,0.95)]">
              <Image
                src="/portrait.jpg"
                alt={`${site.name} — professional portrait`}
                width={820}
                height={1457}
                preload
                sizes="(max-width: 1024px) 80vw, 430px"
                className="aspect-[4/5] h-auto w-full object-cover object-[center_18%]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(5,8,22,0.55), transparent 34%), linear-gradient(115deg, rgba(77,163,255,0.08), transparent 45%)",
                }}
              />
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="animate-scan absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-mint/[0.05] to-transparent" />
              </div>

              <span aria-hidden="true" className="absolute left-3 top-3 h-5 w-5 border-l border-t border-mint/60" />
              <span aria-hidden="true" className="absolute right-3 top-3 h-5 w-5 border-r border-t border-mint/60" />
              <span aria-hidden="true" className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-mint/60" />
              <span aria-hidden="true" className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-mint/60" />
            </div>
          </div>

          <div
            ref={(el) => { layersRef.current[2] = el; }}
            className="glass animate-float absolute -left-6 top-10 hidden rounded-xl px-4 py-3 transition-transform duration-500 ease-out will-change-transform sm:block lg:-left-14"
          >
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet" />
              </span>
              <p className="tech-label text-[9px] text-secondary">
                AI.WORKFLOW <span className="text-mint">{"// ACTIVE"}</span>
              </p>
            </div>
            <div className="mt-2.5 flex items-end gap-1" aria-hidden="true">
              {[10, 16, 8, 20, 13, 22, 9].map((h, i) => (
                <span
                  key={i}
                  className="w-1.5 rounded-sm bg-gradient-to-t from-violet/40 to-mint/70"
                  style={{ height: `${h}px`, animation: `float ${3 + i * 0.4}s ease-in-out infinite` }}
                />
              ))}
            </div>
          </div>

          <div
            ref={(el) => { layersRef.current[3] = el; }}
            className="glass animate-float-slow absolute -right-4 bottom-24 hidden rounded-xl px-4 py-3 transition-transform duration-500 ease-out will-change-transform sm:block lg:-right-12"
          >
            <p className="font-tech text-[10px] leading-relaxed text-dim">
              <span className="text-mint">$</span> deploy --production
              <br />
              <span className="text-mint">✓</span> build passed · 1.2s
            </p>
          </div>

          <div className="glass animate-float-fast absolute -bottom-6 left-6 hidden items-center gap-3 rounded-xl px-4 py-3 md:flex">
            <p className="tech-label text-[9px] text-dim">
              STACK.CORE<span className="text-mint"> / </span>
              <span className="text-secondary">REACT · NEXT.JS · NODE</span>
            </p>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="group absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="tech-label text-[9px] text-dim transition-colors group-hover:text-mint">SCROLL</span>
        <span className="relative h-10 w-px overflow-hidden bg-secondary/15">
          <span className="absolute inset-x-0 top-0 h-4 animate-[scan_2.4s_ease-in-out_infinite] bg-mint/80" />
        </span>
      </a>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-deep to-transparent"
      />
    </section>
  );
}
