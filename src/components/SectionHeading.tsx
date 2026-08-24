type SectionHeadingProps = {
  eyebrow: string;
  lines: [string] | [string, string];
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, lines, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "flex flex-col items-center text-center" : ""}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl">
        {lines.map((line, i) => (
          <span key={line} className="block">
            {i === lines.length - 1 && lines.length > 1 ? (
              <span className="italic text-accent">{line}</span>
            ) : (
              line
            )}
          </span>
        ))}
      </h2>
    </div>
  );
}
