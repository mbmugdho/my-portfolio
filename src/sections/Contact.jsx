'use client'

import SectionWrapper from '../components/layout/SectionWrapper'
import SectionHeading from '../components/ui/SectionHeading'
import RevealOnScroll from '../components/animations/RevealOnScroll'
import Button from '../components/ui/Button'
import MagneticButton from '../components/ui/MagneticButton'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
]

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-neutral text-base-100">
      <div className="max-w-4xl mx-auto text-center">
        <RevealOnScroll>
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
            Get In Touch
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Let's Create Something
            <span className="block text-primary">Amazing Together</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="mt-6 text-lg text-base-100/70 max-w-2xl mx-auto">
            I'm currently available for freelance work and exciting
            opportunities. If you have a project in mind or just want to chat,
            feel free to reach out!
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton>
              <Button
                variant="primary"
                size="lg"
                href="mailto:hello@montasir.dev"
              >
                <Mail className="w-5 h-5" />
                Say Hello
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </MagneticButton>
          </div>
        </RevealOnScroll>

        {/* Social Links */}
        <RevealOnScroll delay={0.4}>
          <div className="mt-12 flex items-center justify-center gap-4">
            {socialLinks.map((social, index) => (
              <MagneticButton key={social.name}>
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-base-100/10 hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              </MagneticButton>
            ))}
          </div>
        </RevealOnScroll>

        {/* Email */}
        <RevealOnScroll delay={0.5}>
          <motion.a
            href="mailto:hello@montasir.dev"
            className="mt-8 inline-block text-2xl sm:text-3xl font-medium text-base-100/80 hover:text-primary transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            hello@montasir.dev
          </motion.a>
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  )
}
