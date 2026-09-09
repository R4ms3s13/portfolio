"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export default function Navbar({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const [scrolled, setScrolled] = useState(false);
  const otherLang: Locale = lang === "es" ? "en" : "es";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-purple-500/5" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          data-hover
          className="font-display text-lg font-bold tracking-tight text-white"
        >
          RM<span className="text-fuchsia-400">.</span>dev
        </a>
        <ul className="hidden gap-8 text-sm font-medium text-white/70 md:flex">
          {dict.ui.navbar.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-hover
                className="relative transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-fuchsia-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <Link
            href={`/${otherLang}`}
            data-hover
            className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/70 transition hover:border-fuchsia-400/60 hover:text-fuchsia-300"
          >
            {otherLang}
          </Link>
          <a
            href="#contact"
            data-hover
            className="glow-border rounded-full bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {dict.ui.navbar.contactCta}
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
