"use client";

import { useState } from "react";
import Reveal from "@/components/fx/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { budgetRanges, contacts, projectTypes, site } from "@/lib/data";

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
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionHeading
                eyebrow="Get in touch"
                lines={["Let's Build Something", "Together."]}
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-soft">
                Have an idea, a project, or a process you wish ran itself? I&rsquo;d love to hear about it — send a
                message and I&rsquo;ll get back to you within a day.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <a href={`mailto:${contacts.professionalEmail}`} className="btn-primary group mt-9">
                Start a Conversation
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Reveal>

            <Reveal delay={280}>
              <ul className="mt-10 space-y-3">
                {channels.map((channel) => (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      {...(channel.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="card card-hover flex items-center justify-between px-5 py-4"
                    >
                      <span className="flex items-center gap-3.5">
                        <span
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-base ${channel.tint}`}
                          aria-hidden="true"
                        >
                          {channel.icon}
                        </span>
                        <span>
                          <span className="block text-xs font-medium text-faint">{channel.label}</span>
                          <span className="block text-sm font-semibold text-ink">{channel.value}</span>
                        </span>
                      </span>
                      <span aria-hidden="true" className="text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={340}>
              <p className="mt-7 flex items-center gap-2 text-sm text-faint">
                <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden="true" />
                Usually replies within 24 hours · {site.location}
              </p>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <form onSubmit={handleSubmit} className="card space-y-6 p-7 md:p-10" aria-label="Contact form">
              <p className="text-sm font-medium text-soft">
                Tell me a little about your project — I&rsquo;ll reply personally.
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-ink">Name</span>
                  <input required name="name" type="text" placeholder="Your name" className="field" autoComplete="name" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-ink">Email</span>
                  <input required name="email" type="email" placeholder="you@company.com" className="field" autoComplete="email" />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-ink">Project type</span>
                  <select name="projectType" className="field appearance-none" defaultValue={projectTypes[0]}>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-ink">Budget range</span>
                  <select name="budget" className="field appearance-none" defaultValue={budgetRanges[4]}>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink">Message</span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell me about your idea, goals, or the task you'd love to automate…"
                  className="field resize-none"
                />
              </label>

              <div className="flex flex-wrap items-center gap-5 pt-1">
                <button type="submit" className="btn-primary group cursor-pointer">
                  {status === "sent" ? "Opening your email app…" : "Send Message"}
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
                <p className="max-w-[240px] text-xs leading-relaxed text-faint">
                  This opens your email app with everything pre-filled — nothing is stored on this site.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
