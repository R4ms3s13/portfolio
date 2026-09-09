import type { Dictionary } from "@/lib/dictionaries";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About({ dict }: { dict: Dictionary }) {
  const { profile, techGroups } = dict;

  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading kicker={dict.ui.about.kicker} title={dict.ui.about.title} />

        <Reveal delay={0.1} className="mt-8 max-w-3xl">
          <p className="text-lg leading-relaxed text-white/70">{profile.summary}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {techGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <div className="glass glow-border h-full rounded-2xl p-6">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-fuchsia-300/80">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75 transition hover:border-fuchsia-400/50 hover:text-fuchsia-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
