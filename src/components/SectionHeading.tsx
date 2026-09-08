import Reveal from "./Reveal";

export default function SectionHeading({
  kicker,
  title,
  align = "left",
}: {
  kicker: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : "text-left"}>
      <span className="mb-3 inline-block rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-fuchsia-300">
        {kicker}
      </span>
      <h2 className="section-heading font-display text-white">{title}</h2>
    </Reveal>
  );
}
