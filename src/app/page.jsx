import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import OffHours from "../sections/OffHours";
import Contact from "../sections/Contact";
import FocusSection from "tailwind/sections/FocusSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FocusSection />
      <Skills />
      <Projects />
      <OffHours />
      <Contact />
    </>
  );
}
