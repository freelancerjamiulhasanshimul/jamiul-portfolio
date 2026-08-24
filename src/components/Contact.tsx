"use client";

import { useState } from "react";
import Reveal from "@/components/fx/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { budgetRanges, contacts, projectTypes } from "@/lib/data";

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

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      contacts.professionalEmail
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const gmailWindow = window.open(gmailUrl, "_blank", "noopener,noreferrer");

    if (!gmailWindow) {
      window.location.href = `mailto:${contacts.professionalEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    }
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
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Get in touch"
            lines={["Let's Build Something", "Together."]}
            align="center"
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-5 max-w-xl text-center text-base leading-relaxed text-soft">
            Have an idea, a project, or a process you wish ran itself? Send a message — I&rsquo;ll
            reply personally within 24 hours.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  {...(channel.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="card card-hover group flex items-center gap-3 px-4 py-3.5"
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base ${channel.tint}`}
                    aria-hidden="true"
                  >
                    {channel.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-medium text-faint">{channel.label}</span>
                    <span className="block truncate text-sm font-semibold text-ink">
                      {channel.value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={240}>
          <form
            onSubmit={handleSubmit}
            className="card mx-auto mt-8 max-w-3xl space-y-5 p-7 md:p-10"
            aria-label="Contact form"
          >
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

            <div className="space-y-3 pt-1 text-center">
                <button type="submit" className="btn-primary group mx-auto w-full sm:w-auto sm:!px-12">
                  {status === "sent" ? "Opening Gmail…" : "Send Message"}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </button>
                <p className="text-xs leading-relaxed text-faint">
                  Send opens Gmail in a new tab with everything pre-filled — just hit send there.
                  Nothing is stored on this site.
                </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
