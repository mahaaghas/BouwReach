type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, body, align = "left", theme = "light" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p
          className={
            theme === "dark"
              ? "mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/72"
              : "mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(16,16,16,0.78)]"
          }
          style={theme === "dark" ? { color: "rgba(255,255,255,0.72)" } : { color: "rgba(16,16,16,0.78)" }}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={
          theme === "dark"
            ? "font-[var(--font-display)] text-3xl font-semibold leading-tight text-white md:text-5xl"
            : "font-[var(--font-display)] text-3xl font-semibold leading-tight md:text-5xl"
        }
        style={theme === "dark" ? { color: "#ffffff" } : undefined}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={theme === "dark" ? "mt-5 text-base leading-7 text-white/76 md:text-lg" : "mt-5 text-base leading-7 text-[var(--muted)] md:text-lg"}
          style={theme === "dark" ? { color: "rgba(255,255,255,0.82)" } : undefined}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
