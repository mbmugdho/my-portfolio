'use client'

import Image from 'next/image'
import SectionWrapper from '../components/layout/SectionWrapper'
import SectionHeading from '../components/ui/SectionHeading'
import RevealOnScroll from '../components/animations/RevealOnScroll'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Project One',
    description: 'A modern web application built with Next.js and Tailwind CSS',
    image: '/image01.png',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Project Two',
    description: 'E-commerce platform with seamless user experience',
    image: '/image02.png',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Project Three',
    description: 'Dashboard application with real-time data visualization',
    image: '/image03.png',
    tags: ['TypeScript', 'D3.js', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Project Four',
    description: 'Mobile-first responsive portfolio website',
    image: '/image04.png',
    tags: ['Next.js', 'GSAP', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
  },
]

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        kicker="Portfolio"
        title="Selected Works"
        description="A collection of projects that showcase my skills and passion"
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <RevealOnScroll
            key={project.title}
            delay={index * 0.15}
            direction={index % 2 === 0 ? 'left' : 'right'}
          >
            <motion.article
              className="group relative overflow-hidden rounded-3xl bg-white shadow-xl"
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.liveUrl}
                    className="p-3 bg-white rounded-full shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5 text-neutral" />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="p-3 bg-white rounded-full shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5 text-neutral" />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-neutral/70">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  )
}
