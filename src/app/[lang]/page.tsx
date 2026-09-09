import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale } from "@/lib/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Navbar lang={lang} dict={dict} />
      <main>
        <Hero dict={dict} />
        <TechMarquee />
        <About dict={dict} />
        <Experience dict={dict} />
        <Skills dict={dict} />
        <Education dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
