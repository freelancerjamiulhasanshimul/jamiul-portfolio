"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`animate-nav-drop fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-line bg-paper/85 shadow-[0_8px_30px_-18px_rgba(43,43,43,0.15)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="shell flex h-[72px] items-center justify-between" aria-label="Primary">
        <a
          href="#home"
          aria-label="Jamiul H. Shimul — home"
          className="transition-all duration-300 hover:rotate-3 hover:scale-105"
        >
          <Logo className="h-10 w-10" />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`relative py-1.5 text-[0.9rem] font-medium transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:rounded-full after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100 ${
                  active === link.href
                    ? "text-accent after:scale-x-100 after:bg-accent/70"
                    : "text-soft after:scale-x-0 after:bg-honey"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a href="#contact" className="btn-primary group hidden !px-5 !py-2.5 !text-sm lg:inline-flex">
            Let&rsquo;s Talk
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-line bg-paper transition-colors duration-300 hover:border-accent/40 lg:hidden"
          >
            <span
              className={`h-px w-5 bg-ink transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-ink transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[440px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="shell flex flex-col gap-1 pb-6 pt-2">
          {navLinks.map((link, i) => (
            <li
              key={link.label}
              className={`transition-all duration-300 ${
                open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${i * 45}ms` : "0ms" }}
            >
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 text-[0.95rem] font-medium transition-colors ${
                  active === link.href
                    ? "bg-tint text-accent"
                    : "text-soft hover:bg-cream hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li
            className={`pt-3 transition-all duration-300 ${
              open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
            style={{ transitionDelay: open ? `${navLinks.length * 45}ms` : "0ms" }}
          >
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
              Let&rsquo;s Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
