"use client";

import { motion } from "framer-motion";
import { ArrowDown, Phone } from "lucide-react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import ParticleField from "./ParticleField";
import { profile } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a0b2e] via-[#05050a] to-[#05050a]" />
      <div className="blob animate-float-slow absolute -top-32 left-[10%] -z-10 h-96 w-96 rounded-full bg-fuchsia-600/40" />
      <div className="blob animate-float-slower absolute bottom-0 right-[5%] -z-10 h-[28rem] w-[28rem] rounded-full bg-cyan-500/30" />
      <ParticleField />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-6xl px-6"
      >
        <motion.p
          variants={item}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-fuchsia-300"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Disponible para nuevos proyectos
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Hola, soy{" "}
          <span className="gradient-text block sm:inline">{profile.shortName}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 max-w-2xl text-lg text-white/70 sm:text-xl"
        >
          {profile.role}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/50"
        >
          {profile.summary}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#experience"
            data-hover
            className="glow-border group relative overflow-hidden rounded-full bg-white px-7 py-3 text-sm font-bold text-black transition-transform hover:-translate-y-0.5"
          >
            Ver experiencia
          </a>
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            data-hover
            className="flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white/90 transition hover:border-emerald-400/60 hover:text-emerald-300"
          >
            <FaWhatsapp size={16} /> Escríbeme por WhatsApp
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex items-center gap-5 text-white/50">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" data-hover className="transition hover:text-fuchsia-300">
            <FaLinkedin size={20} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" data-hover className="transition hover:text-fuchsia-300">
            <FaGithub size={20} />
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noreferrer" data-hover className="transition hover:text-emerald-400">
            <FaWhatsapp size={20} />
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} data-hover className="transition hover:text-fuchsia-300">
            <Phone size={18} />
          </a>
          <span className="text-sm">{profile.location}</span>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        data-hover
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-white"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
