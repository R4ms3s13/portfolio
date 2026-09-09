import type { Dictionary } from "@/lib/dictionaries";

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 text-sm text-white/40">
        <p>© {new Date().getFullYear()} {dict.profile.name}</p>
      </div>
    </footer>
  );
}
