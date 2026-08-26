"use client";

import { useId } from "react";

export default function Logo({ className = "h-9 w-9" }: { className?: string }) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      role="img"
      aria-label="Jamiul H. Shimul, home"
      className={className}
    >
      <defs>
        <linearGradient id={`${id}-g`} x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3A5674" />
          <stop offset="100%" stopColor="#7C9885" />
        </linearGradient>
      </defs>

      <g stroke={`url(#${id}-g)`} strokeLinecap="round">
        <path
          d="M13 2v3M27 2v3M13 35v3M27 35v3M2 13h3M2 27h3M35 13h3M35 27h3"
          strokeWidth="1.4"
          opacity="0.4"
        />
        <rect x="6" y="6" width="28" height="28" rx="9" strokeWidth="1.7" />
        <path d="M16 16.5 12.5 20l3.5 3.5M24 16.5 27.5 20 24 23.5" strokeWidth="2" />
        <path d="M21.5 15.5 18.5 24.5" strokeWidth="1.8" opacity="0.75" />
      </g>

      <circle cx="27.5" cy="11.5" r="1.5" fill="#7C9885" />
    </svg>
  );
}
