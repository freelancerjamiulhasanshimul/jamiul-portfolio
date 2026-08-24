"use client";

import { useState } from "react";
import Reveal from "@/components/fx/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { budgetRanges, contacts, projectTypes } from "@/lib/data";

const nextSteps = [
  {
    title: "Send your message",
    text: "Fill in the form — or reach out on WhatsApp, whichever you prefer.",
  },
  {
    title: "Get a personal reply",
    text: "Within 24 hours, from me directly — not a bot or an assistant.",
  },
  {
    title: "Plan it together",
    text: "A free intro call to scope the work, timeline, and budget.",
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

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
      label: "WhatsApp",
      value: contacts.whatsappDisplay,
      href: contacts.whatsappLink,
      icon: "💬",
      tint: "bg-sage-tint",
    },
    {
      label: "Work email",
      value: contacts.professionalEmail,
      href: `mailto:${contacts.professionalEmail}`,
      icon: "💼",
      tint: "bg-tint",
    },
    {
      label: "Personal email",
      value: contacts.personalEmail,
      href: `mailto:${contacts.personalEmail}`,
      icon: "✉️",
      tint: "bg-terracotta-tint",
    },
  ];

  return (
    <section id="contact" className="relative scroll-mt-20 border-t border-line py-20 md:py-36">
      <div className="shell relative">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionHeading
                eyebrow="Get in touch"
                lines={["Let's Build Something", "Together."]}
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-soft">
                Have an idea, a project, or a process you wish ran itself? I&rsquo;d love to hear
                about it.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-9">
                <p className="text-sm font-semibold text-faint">What happens next</p>
                <ol className="mt-5 space-y-0">
                  {nextSteps.map((step, i) => (
                    <li key={step.title} className="relative flex gap-4 pb-7 last:pb-0">
                      {!(
                        i ===
                        nextSteps.length - 1
                      ) && (
                        <span
                          aria-hidden="true"
                          className="absolute left-[15px] top-9 -bottom-1 w-px bg-line"
                        />
                      )}
                      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-tint font-display text-sm font-semibold text-accent">
                        {i + 1}
                      </span>
                      <div className="pt-1">
                        <p className="text-[0.95rem] font-semibold text-ink">{step.title}</p>
                        <p className="mt-1 max-w-xs text-sm leading-relaxed text-soft">
                          {step.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <ul className="mt-9 space-y-2.5">
                {channels.map((channel) => (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      {...(channel.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="card card-hover group flex items-center gap-3.5 px-4 py-3.5"
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base ${channel.tint}`}
                        aria-hidden="true"
                      >
                        {channel.icon}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs font-medium text-faint">
                          {channel.label}
                        </span>
                        <span className="block truncate text-sm font-semibold text-ink">
                          {channel.value}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      >
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={150} className="h-full">
            <form
              onSubmit={handleSubmit}
              className="card flex h-full flex-col space-y-5 p-7 md:p-10"
              aria-label="Contact form"
            >
              <div>
                <h3 className="font-display text-2xl font-semibold text-ink">
                  Tell me about your project
                </h3>
                <p className="mt-1.5 text-sm text-soft">
                  A rough idea is enough — I&rsquo;ll help shape it.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-ink">Name</span>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="field"
                    autoComplete="name"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-ink">Email</span>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    className="field"
                    autoComplete="email"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-ink">Project type</span>
                  <select
                    name="projectType"
                    className="field appearance-none"
                    defaultValue={projectTypes[0]}
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-ink">Budget range</span>
                  <select
                    name="budget"
                    className="field appearance-none"
                    defaultValue={budgetRanges[4]}
                  >
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink">Message</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell me about your idea, goals, or the task you'd love to automate…"
                  className="field resize-none"
                />
              </label>

              <div className="mt-auto space-y-3 pt-1">
                <button type="submit" className="btn-primary group w-full cursor-pointer sm:w-auto">
                  {status === "sent" ? "Opening your email app…" : "Send Message"}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </button>
                <p className="text-xs leading-relaxed text-faint">
                  When you send, your email app opens with everything pre-filled — just hit send
                  there. Nothing is stored on this site.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
