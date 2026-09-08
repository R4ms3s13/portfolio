"use client";

import { motion } from "framer-motion";
import { skills, aptitudes } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading kicker="Habilidades" title="Skills técnicas" />

        <div className="mt-14 grid gap-14 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {skills.map((skill, i) => (
                <Reveal key={skill.name} delay={i * 0.06}>
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium text-white/85">{skill.name}</span>
                      <span className="text-white/40">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: i * 0.05 }}
                        className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-400 to-cyan-400"
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2} className="lg:col-span-2">
            <div className="glass glow-border h-full rounded-2xl p-8">
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-white/40">
                Aptitudes
              </h3>
              <div className="flex flex-wrap gap-3">
                {aptitudes.map((apt) => (
                  <motion.span
                    key={apt}
                    whileHover={{ scale: 1.08, rotate: -2 }}
                    className="cursor-default rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent px-4 py-3 text-sm text-white/80"
                  >
                    {apt}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
