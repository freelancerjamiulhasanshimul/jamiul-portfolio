import About from "@/components/About";
import Contact from "@/components/Contact";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Leadership from "@/components/Leadership";
import Metrics from "@/components/Metrics";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import GridBackground from "@/components/fx/GridBackground";
import ScrollProgress from "@/components/fx/ScrollProgress";
import CursorEffects from "@/components/fx/CursorEffects";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-paper focus:px-4 focus:py-2 focus:text-accent"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <GridBackground />
      <CursorEffects />
      <Navbar />
      <main id="main" className="relative z-[3]">
        <Hero />
        <About />
        <Metrics />
        <TechStack />
        <Services />
        <Projects />
        <Process />
        <Leadership />
        <Testimonials />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
