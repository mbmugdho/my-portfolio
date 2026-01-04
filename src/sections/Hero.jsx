import Image from 'next/image'
import { Award, Users, Code, Trophy, Clock } from 'lucide-react'
import RotatingText from '../components/ui/RotatingText'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        {/* Award Badge */}
        <div className="hero-award-line font-semibold hero-in-left hero-delay-1">
          <Award className="h-4 w-4 text-yellow-400 flex-shrink-0" />
          <span>Personal Website Of The Day 2025</span>
        </div>

        {/* Hero Stage */}
        <div className="hero-stage">
          {/* Title Wrapper */}
          <div className="hero-title-wrapper">
            <h1 className="hero-title hero-in-left hero-delay-2">
              <RotatingText interval={3000} />, I'm Montasir
            </h1>

            <div className="hero-subtitle">
              <span className="hero-in-right hero-delay-3 inline-block">
                Frontend-Developer.
              </span>
            </div>
          </div>

          {/* Image + Badges Wrapper - NEW WRAPPER */}
          <div className="hero-image-wrapper">
            {/* Floating Badges - MOVED OUTSIDE image container */}
            <div className="hero-floating-badges">
              {/* Top */}
              <div className="hero-badge hero-badge--top hero-badge--users hero-badge-animate hero-badge-delay-1">
                <span className="hero-badge-icon">
                  <Users size={11} />
                </span>
                <span>10+ Users Served</span>
              </div>

              {/* Left */}
              <div className="hero-badge hero-badge--left hero-badge--javascript hero-badge-animate hero-badge-delay-2">
                <span className="hero-badge-icon">
                  <Code size={11} />
                </span>
                <span>JavaScript</span>
              </div>

              {/* Right */}
              <div className="hero-badge hero-badge--right hero-badge--cricket hero-badge-animate hero-badge-delay-3">
                <span className="hero-badge-icon">
                  <Trophy size={11} />
                </span>
                <span>Cricketer</span>
              </div>

              {/* Bottom */}
              <div className="hero-badge hero-badge--bottom hero-badge--experience hero-badge-animate hero-badge-delay-4">
                <span className="hero-badge-icon">
                  <Clock size={11} />
                </span>
                <span>1+ Years Experience</span>
              </div>
            </div>

            {/* Image Container */}
            <div className="hero-image-container hero-rise hero-delay-2">
              <figure className="hero-figure">
                <Image
                  src="/mugdho.png"
                  alt="Portrait"
                  width={720}
                  height={900}
                  priority
                  className="hero-image"
                />
              </figure>
            </div>
          </div>

          {/* Availability Badge */}
          <div className="hero-availability">
            <span className="hero-in-left hero-delay-4 inline-flex items-center gap-2">
              <span className="hero-availability-dot" aria-hidden="true" />
              <span>Available for new opportunities</span>
            </span>
          </div>

          {/* Right Text */}
          <p className="hero-right-text">
            <span className="hero-in-right hero-delay-4 inline-block">
              Passionate about creating intuitive digital experiences that
              connect users with real value.
            </span>
          </p>

          {/* Social Proof */}
          <div className="hero-social hero-in-left hero-delay-5">
            <div className="hero-social-avatars" aria-hidden="true">
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
              Trusted by over <strong>12+</strong> happy clients across
              residential and commercial projects.
            </p>
          </div>

          {/* CTA Button */}
          <a href="#contact" className="hero-cta hero-in-right hero-delay-5">
            <span className="hero-cta-icon">→</span>
            <span>Connect</span>
          </a>
        </div>
      </div>
    </section>
  )
}
