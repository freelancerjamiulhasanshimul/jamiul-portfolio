const glyphs = [
  { text: "</>", top: "16%", left: "6%", size: "3.4rem", color: "#4a6c8f", dur: "14s", delay: "0s", mobile: false },
  { text: "{ }", top: "24%", right: "8%", size: "2.8rem", color: "#c08a2e", dur: "17s", delay: "-4s", mobile: true },
  { text: "=>", top: "52%", left: "3%", size: "2.4rem", color: "#7c9885", dur: "13s", delay: "-7s", mobile: false },
  { text: "</", top: "62%", right: "5%", size: "3rem", color: "#4a6c8f", dur: "18s", delay: "-2s", mobile: true },
  { text: "( )", top: "78%", left: "10%", size: "2.2rem", color: "#c08a2e", dur: "15s", delay: "-9s", mobile: false },
  { text: ";", top: "84%", right: "14%", size: "3.6rem", color: "#7c9885", dur: "12s", delay: "-5s", mobile: false },
  { text: "#", top: "40%", right: "22%", size: "1.9rem", color: "#4a6c8f", dur: "16s", delay: "-11s", mobile: false },
];

const dots = [
  { top: "18%", left: "30%", delay: "0s" },
  { top: "36%", right: "18%", delay: "-1.2s" },
  { top: "58%", left: "20%", delay: "-2.4s" },
  { top: "70%", right: "30%", delay: "-0.6s" },
  { top: "30%", left: "55%", delay: "-3s" },
  { top: "86%", left: "45%", delay: "-1.8s" },
];

export default function BackgroundDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(74,108,143,0.09) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage: "radial-gradient(ellipse 75% 60% at 50% 38%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 60% at 50% 38%, black 30%, transparent 75%)",
        }}
      />

      {dots.map((dot, i) => (
        <span
          key={i}
          className="animate-dot-pulse absolute hidden h-1.5 w-1.5 rounded-full bg-accent md:block"
          style={{ top: dot.top, left: dot.left, right: dot.right, animationDelay: dot.delay }}
        />
      ))}

      {glyphs.map((g) => (
        <span
          key={g.text + g.top}
          className={`animate-[drift] absolute select-none font-display font-semibold italic ${
            g.mobile ? "block" : "hidden sm:block"
          }`}
          style={{
            top: g.top,
            left: g.left,
            right: g.right,
            fontSize: g.size,
            color: g.color,
            opacity: 0.09,
            animationDuration: g.dur,
            animationDelay: g.delay,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          }}
        >
          {g.text}
        </span>
      ))}
    </div>
  );
}
