import Image from 'next/image'
import { Award, Users, Code, Trophy, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        {/* Award Badge */}
        <div className="hero-award-line hero-animate-up hero-delay-1">
          <Award className="h-4 w-4 text-yellow-500" />
          <span>Personal Website Of The Day 2025</span>
        </div>

        {/* Main Stage */}
        <div className="hero-stage">
          {/* Title Section */}
          <div className="hero-title-wrapper">
            <h1 className="hero-title hero-animate-left hero-delay-2">
              Hi I'm Montasir
            </h1>
            <p className="hero-subtitle hero-animate-right hero-delay-3">
              Frontend-Developer.
            </p>
          </div>

          {/* Hero Image with Floating Badges */}
          <div className="hero-image-container hero-animate-rise hero-delay-3">
            {/* Floating Badges */}
            <div className="hero-floating-badges">
              {/* Top Badge - Users Served */}
              <div className="hero-badge hero-badge--top hero-badge--users hero-badge-animate hero-badge-delay-1">
                <span className="hero-badge-icon">
                  <Users size={12} />
                </span>
                <span>10+ Users Served</span>
              </div>

              {/* Left Badge - JavaScript */}
              <div className="hero-badge hero-badge--left hero-badge--javascript hero-badge-animate hero-badge-delay-2">
                <span className="hero-badge-icon">
                  <Code size={12} />
                </span>
                <span>JavaScript</span>
              </div>

              {/* Right Badge - Cricketer */}
              <div className="hero-badge hero-badge--right hero-badge--cricket hero-badge-animate hero-badge-delay-3">
                <span className="hero-badge-icon">
                  <Trophy size={12} />
                </span>
                <span>Cricketer</span>
              </div>

              {/* Bottom Badge - Experience */}
              <div className="hero-badge hero-badge--bottom hero-badge--experience hero-badge-animate hero-badge-delay-4">
                <span className="hero-badge-icon">
                  <Clock size={12} />
                </span>
                <span>1+ Years Experience</span>
              </div>
            </div>

            {/* Hero Image */}
            <figure className="hero-figure">
              <Image
                src="/mugdho.png"
                alt="Montasir - Frontend Developer"
                width={720}
                height={900}
                priority
                className="hero-image"
              />
            </figure>
          </div>

          {/* Availability Badge - Left Side */}
          <div className="hero-availability hero-animate-left hero-delay-4">
            <span className="hero-availability-dot" aria-hidden="true" />
            <span>Available for new opportunities</span>
          </div>

          {/* Description - Right Side */}
          <p className="hero-right-text hero-animate-right hero-delay-4">
            Passionate about creating intuitive digital experiences that connect
            users with real value.
          </p>

          {/* Social Proof - Bottom Left */}
          <div className="hero-social hero-animate-left hero-delay-5">
            <div className="hero-social-avatars">
              <span className="hero-social-avatar">
                <img src="/upwork.png" alt="Upwork" />
              </span>
              <span className="hero-social-avatar">
                <img src="/pph.png" alt="PeoplePerHour" />
              </span>
              <span className="hero-social-avatar">
                <img src="/toptal.png" alt="Toptal" />
              </span>
            </div>
            <p className="hero-social-text">
              Trusted by <strong>12+</strong> happy clients across residential
              and commercial projects.
            </p>
          </div>

          {/* CTA Button - Bottom Right */}
          <a
            href="#contact"
            className="hero-cta hero-animate-right hero-delay-5"
          >
            <span className="hero-cta-icon">→</span>
            <span>Connect</span>
          </a>
        </div>
      </div>
    </section>
  )
}
