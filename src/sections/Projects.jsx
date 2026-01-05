// src/sections/Projects.jsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import "../styles/projects.css";

const projectsData = [
  {
    id: 1,
    title: "HomeHero",
    description:
      "A full-stack home services platform connecting homeowners with trusted service providers. Features include booking management, real-time chat, and secure payment integration.",
    image: "/project-1.png",
    liveUrl: "https://homehero-org.netlify.app/",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    type: "Full-Stack MERN",
  },
  {
    id: 2,
    title: "SafeHands",
    description:
      "A Next.js powered platform for connecting caregivers with families. Built with server-side rendering for optimal performance and SEO, featuring advanced search and filtering capabilities.",
    image: "/project-2.png",
    liveUrl: "https://safehands-ltd.vercel.app/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    type: "Next.js Full-Stack",
  },
  {
    id: 3,
    title: "AssetVerse",
    description:
      "A comprehensive digital asset management system built with the MERN stack. Includes user authentication, asset tracking, analytics dashboard, and team collaboration features.",
    image: "/project-3.png",
    liveUrl: "https://assetverse.vercel.app/",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    type: "Full-Stack MERN",
  },
  {
    id: 4,
    title: "GameHub",
    description:
      "An interactive gaming community platform where users can discover games, read reviews, and connect with fellow gamers. Features dynamic content loading and responsive design.",
    image: "/project-4.png",
    liveUrl: "https://gamehub-net.netlify.app/",
    techStack: ["React", "JavaScript", "REST API", "CSS3"],
    type: "Frontend React",
  },
];

const Projects = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const handleCardClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Section Header */}
        <div className="projects-header">
          <span className="projects-label">Portfolio</span>
          <h2 className="projects-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="projects-subtitle">
            A collection of my recent work showcasing full-stack development
            expertise with the MERN stack and Next.js
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <a
              key={project.id}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="project-card"
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={(e) => {
                e.preventDefault();
                handleCardClick(project.liveUrl);
              }}
            >
              {/* Project Image */}
              <div className="project-image-wrapper">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="project-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="project-overlay">
                  <span className="view-project">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                    View Live Site
                  </span>
                </div>
                <div className="project-type-badge">{project.type}</div>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Tech Stack */}
                <div className="project-tech-stack">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Link */}
                <div className="project-link">
                  <span>View Project</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="link-arrow"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="card-glow"></div>
            </a>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Projects;