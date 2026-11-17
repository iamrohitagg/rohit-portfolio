import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="label sr-only z-[60] bg-foreground px-4 py-3 text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
