import type { Dictionary } from "@/lib/dictionaries";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { GraduationCap, Languages as LanguagesIcon, BookOpen } from "lucide-react";

export default function Education({ dict }: { dict: Dictionary }) {
  const { courses, education, languages } = dict;
  const t = dict.ui.education;

  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading kicker={t.kicker} title={t.title} />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          <Reveal delay={0}>
            <div className="glass glow-border h-full rounded-2xl p-8">
              <GraduationCap className="mb-4 text-fuchsia-400" size={28} />
              <h3 className="mb-1 text-sm font-semibold uppercase tracking-widest text-white/40">
                {t.academicHeading}
              </h3>
              {education.map((edu) => (
                <div key={edu.title} className="mt-4">
                  <p className="font-display text-lg font-bold text-white">{edu.title}</p>
                  <p className="mt-1 text-white/60">{edu.school}</p>
                  <p className="text-white/40">{edu.location}</p>
                  <p className="mt-2 text-sm text-cyan-300">{edu.period}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass glow-border h-full rounded-2xl p-8">
              <BookOpen className="mb-4 text-fuchsia-400" size={28} />
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/40">
                {t.coursesHeading}
              </h3>
              <ul className="space-y-4">
                {courses.map((course) => (
                  <li key={course.title} className="border-l-2 border-white/10 pl-4">
                    <p className="text-sm text-white/75">{course.title}</p>
                    <p className="text-xs text-white/40">{course.period}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="glass glow-border h-full rounded-2xl p-8">
              <LanguagesIcon className="mb-4 text-fuchsia-400" size={28} />
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/40">
                {t.languagesHeading}
              </h3>
              <ul className="space-y-3">
                {languages.map((lang) => (
                  <li key={lang.name} className="flex items-center justify-between">
                    <span className="text-white/80">{lang.name}</span>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-cyan-300">
                      {lang.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
