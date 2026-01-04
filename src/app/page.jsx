import Hero from '../sections/Hero'
import About from '../sections/About'
import FocusSection from '../sections/FocusSection'
import ProcessSection from '../sections/ProcessSection'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import OffHours from '../sections/OffHours'
import Contact from '../sections/Contact'

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
  )
}