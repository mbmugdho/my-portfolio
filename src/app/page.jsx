import Hero from '../sections/Hero'
import About from '../sections/About'
import AboutMe from '../sections/AboutMe'
import FocusSection from '../sections/FocusSection'
import ProcessSection from '../sections/ProcessSection'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'
import ClientReviews from '../sections/ClientReviews'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FocusSection />
      <ProcessSection />
      <ClientReviews />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}
