import type { Metadata } from "next";
import { Space_Grotesk, Sora } from "next/font/google";
import "../globals.css";
import NoiseOverlay from "@/components/NoiseOverlay";
import CustomCursor from "@/components/CustomCursor";
import { notFound } from "next/navigation";
import { locales, hasLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  return {
    title: dict.ui.meta.title,
    description: dict.ui.meta.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${spaceGrotesk.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#05050a] text-[#f4f3ff]">
        <NoiseOverlay />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
