type SectionHeadingProps = {
  index: string;
  label: string;
  lines: [string] | [string, string];
  align?: "left" | "center";
};

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="tech-label flex items-center gap-3 text-xs text-mint">
      <span className="text-dim">{index}</span>
      <span aria-hidden="true" className="h-px w-10 bg-gradient-to-r from-mint/60 to-transparent" />
      <span>{label}</span>
    </div>
  );
}

export default function SectionHeading({ index, label, lines, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "flex flex-col items-center text-center" : ""}>
      <SectionLabel index={index} label={label} />
      <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-ink sm:text-5xl lg:text-6xl">
        {lines.map((line, i) => (
          <span key={line} className="block">
            {i === lines.length - 1 && lines.length > 1 ? (
              <span className="text-gradient">{line}</span>
            ) : (
              line
            )}
          </span>
        ))}
      </h2>
    </div>
  );
}
