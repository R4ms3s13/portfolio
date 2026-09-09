import type { Dictionary } from "@/lib/dictionaries";
import Reveal from "./Reveal";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Contact({ dict }: { dict: Dictionary }) {
  const { profile } = dict;
  const t = dict.ui.contact;

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="mb-4 inline-block rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-fuchsia-300">
            {t.badge}
          </span>
          <h2 className="section-heading font-display">
            {t.titleLine1}{" "}
            <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-white/60">{t.description}</p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            data-hover
            className="glow-border flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5"
          >
            <FaWhatsapp size={18} /> {t.whatsappCta}
          </a>
          <a
            href={`mailto:${profile.email}`}
            data-hover
            className="flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white/90 transition hover:border-fuchsia-400/60 hover:text-fuchsia-300"
          >
            <Mail size={16} /> {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            data-hover
            className="flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white/90 transition hover:border-fuchsia-400/60 hover:text-fuchsia-300"
          >
            <FaLinkedin size={16} /> LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            data-hover
            className="flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white/90 transition hover:border-fuchsia-400/60 hover:text-fuchsia-300"
          >
            <FaGithub size={16} /> GitHub
          </a>
        </Reveal>

        <Reveal delay={0.25} className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
          <span className="flex items-center gap-2">
            <Phone size={14} /> {profile.phone}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={14} /> {profile.location}
          </span>
        </Reveal>
      </div>
    </section>
  );
}
