"use client";

import { useState } from "react";
import Reveal from "@/components/fx/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { budgetRanges, contacts, projectTypes, site } from "@/lib/data";

type Status = "idle" | "sent";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Project Inquiry — ${data.get("projectType")} (${data.get("name")})`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Project Type: ${data.get("projectType")}`,
      `Budget Range: ${data.get("budget")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${contacts.professionalEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  };

  const channels = [
    {
      tag: "WHATSAPP",
      value: contacts.whatsappDisplay,
      href: contacts.whatsappLink,
      accent: "text-mint",
    },
    {
      tag: "PROFESSIONAL EMAIL",
      value: contacts.professionalEmail,
      href: `mailto:${contacts.professionalEmail}`,
      accent: "text-azure",
    },
    {
      tag: "PERSONAL EMAIL",
      value: contacts.personalEmail,
      href: `mailto:${contacts.personalEmail}`,
      accent: "text-violet",
    },
  ];

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden border-t border-secondary/[0.06] py-20 md:py-36">
      <div
        aria-hidden="true"
        className="animate-aurora absolute -top-40 left-[15%] h-[480px] w-[70%] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(closest-side, rgba(77,163,255,0.1), transparent)" }}
      />

      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionHeading index="08 / CONNECT" label="ESTABLISH CONNECTION" lines={["Ready to Build", "What's Next?"]} />
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-7 max-w-md text-base leading-relaxed text-secondary">
                Have an idea, project, automation challenge, or digital opportunity in mind? Let&rsquo;s connect and explore how
                technology can turn it into something meaningful.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <a href={`mailto:${contacts.professionalEmail}`} className="btn-primary group mt-10">
                START A CONVERSATION
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </Reveal>

            <Reveal delay={280}>
              <ul className="mt-12 space-y-3">
                {channels.map((channel) => (
                  <li key={channel.tag}>
                    <a
                      href={channel.href}
                      {...(channel.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-center justify-between rounded-xl border border-secondary/[0.09] bg-surface/40 px-5 py-4 transition-all duration-300 hover:border-mint/35 hover:bg-elevated/50 hover:shadow-[0_0_26px_-10px_rgba(127,224,210,0.4)]"
                    >
                      <span>
                        <span className={`tech-label block text-[9px] ${channel.accent}`}>{channel.tag}</span>
                        <span className="mt-1 block font-tech text-sm text-ink">{channel.value}</span>
                      </span>
                      <span aria-hidden="true" className="text-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-mint">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={340}>
              <p className="tech-label mt-8 flex items-center gap-2 text-[9px] text-dim">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint" />
                RESPONSE.TIME / WITHIN 24H · {site.location.toUpperCase()}
              </p>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <form onSubmit={handleSubmit} className="module-card cursor-default space-y-6 p-7 md:p-10" aria-label="Contact form">
              <p className="tech-label text-[10px] text-mint/80">{"// TRANSMISSION.FORM"}</p>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="tech-label mb-2.5 block text-[9px] text-dim transition-colors focus-within:text-mint">NAME</span>
                  <input required name="name" type="text" placeholder="Your full name" className="field" autoComplete="name" />
                </label>
                <label className="block">
                  <span className="tech-label mb-2.5 block text-[9px] text-dim transition-colors focus-within:text-mint">EMAIL</span>
                  <input required name="email" type="email" placeholder="you@company.com" className="field" autoComplete="email" />
                </label>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="tech-label mb-2.5 block text-[9px] text-dim transition-colors focus-within:text-mint">PROJECT TYPE</span>
                  <select name="projectType" className="field appearance-none" defaultValue={projectTypes[0]}>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="tech-label mb-2.5 block text-[9px] text-dim transition-colors focus-within:text-mint">BUDGET RANGE</span>
                  <select name="budget" className="field appearance-none" defaultValue={budgetRanges[4]}>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="tech-label mb-2.5 block text-[9px] text-dim transition-colors focus-within:text-mint">MESSAGE</span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Describe your idea, goals, or the workflow you want to automate…"
                  className="field resize-none"
                />
              </label>

              <div className="flex flex-wrap items-center gap-5 pt-2">
                <button type="submit" className="btn-primary group cursor-pointer">
                  {status === "sent" ? "OPENING MAIL CLIENT…" : "TRANSMIT MESSAGE"}
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
                <p className="font-tech max-w-[240px] text-[9px] leading-relaxed text-dim">
                  SUBMITS VIA YOUR MAIL CLIENT — NO DATA IS STORED ON THIS SITE.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
