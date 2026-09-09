import type { Dictionary } from "@/lib/dictionaries";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Briefcase, ExternalLink, Layers } from "lucide-react";

export default function Experience({ dict }: { dict: Dictionary }) {
  const { experience } = dict;

  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading kicker={dict.ui.experience.kicker} title={dict.ui.experience.title} />

        <div className="mt-16 space-y-14">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1}>
              <div className="glass glow-border relative overflow-hidden rounded-2xl p-8">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl" />

                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 text-fuchsia-300">
                      <Briefcase size={22} />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">
                        {job.role}
                      </h3>
                      <p className="text-white/50">
                        {job.company} · {job.location}
                      </p>
                    </div>
                  </div>
                  <span className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm font-medium text-cyan-300">
                    {job.period}
                  </span>
                </div>

                {job.summary && (
                  <p className="mt-5 text-white/60">{job.summary}</p>
                )}

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {job.projects.map((project) => (
                    <div
                      key={project.name}
                      className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-fuchsia-400/30"
                    >
                      <div className="mb-2 flex items-center gap-2 text-white">
                        <Layers size={15} className="text-fuchsia-300" />
                        <h4 className="font-display font-semibold">{project.name}</h4>
                      </div>
                      <ul className="space-y-1.5">
                        {project.description.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="pl-3 text-sm leading-relaxed text-white/60 relative before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-fuchsia-400/60"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-white/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {"link" in project && project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          data-hover
                          className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-3 py-1.5 text-xs font-medium text-fuchsia-300 transition hover:border-fuchsia-400/60 hover:bg-fuchsia-500/20"
                        >
                          {dict.ui.experience.viewProject}
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
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
