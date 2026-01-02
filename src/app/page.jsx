import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import OffHours from "../sections/OffHours";
import Contact from "../sections/Contact";
import FocusSection from "tailwind/sections/FocusSection";
import ProcessSection from "tailwind/sections/ProcessSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FocusSection />
      <ProcessSection />
      <Skills />
      <Projects />
      <OffHours />
      <Contact />
    </>
  );
}
