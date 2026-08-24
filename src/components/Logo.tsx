"use client";

import { useId } from "react";

export default function Logo({ className = "h-9 w-9" }: { className?: string }) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      role="img"
      aria-label="JHS — tech and development mark"
      className={className}
    >
      <defs>
        <linearGradient id={`${id}-g`} x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7FE0D2" />
          <stop offset="100%" stopColor="#4DA3FF" />
        </linearGradient>
        <filter id={`${id}-glow`} x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="0" stdDeviation="1.6" floodColor="#7FE0D2" floodOpacity="0.35" />
        </filter>
      </defs>

      <g stroke={`url(#${id}-g)`} strokeLinecap="round" filter={`url(#${id}-glow)`}>
        <path
          d="M13 2v3M27 2v3M13 35v3M27 35v3M2 13h3M2 27h3M35 13h3M35 27h3"
          strokeWidth="1.4"
          opacity="0.5"
        />
        <rect x="6" y="6" width="28" height="28" rx="8" strokeWidth="1.7" />
        <path d="M16 16.5 12.5 20l3.5 3.5M24 16.5 27.5 20 24 23.5" strokeWidth="2" />
        <path d="M21.5 15.5 18.5 24.5" strokeWidth="1.8" opacity="0.85" />
      </g>

      <circle cx="27.5" cy="11.5" r="1.5" fill="#7FE0D2" className="animate-pulse-node" style={{ transformOrigin: "27.5px 11.5px" }} />
    </svg>
  );
}
