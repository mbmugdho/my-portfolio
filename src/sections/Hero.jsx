import Image from 'next/image'
import { Award } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-award-line font-semibold hero-in-left hero-delay-1">
          <Award className="h-4 w-4 text-yellow-400 flex-shrink-0" />
          <span>Personal Website Of The Day 2025</span>
        </div>

        <div className="hero-stage">
          <div className="hero-title-wrapper">
            <h1 className="hero-title hero-in-left hero-delay-2">
              Hi I'm Montasir
            </h1>

            <div className="hero-subtitle">
              <span className="hero-in-right hero-delay-3 inline-block">
                Frontend-Developer.
              </span>
            </div>
          </div>

          <figure className="hero-figure hero-rise hero-delay-2">
            <Image
              src="/mugdho.png"
              alt="Portrait"
              width={720}
              height={900}
              priority
              className="hero-image"
            />
          </figure>

          <div className="hero-availability">
            <span className="hero-in-left hero-delay-4 inline-flex items-center gap-2">
              <span className="hero-availability-dot" aria-hidden="true" />
              <span>Available for new opportunities</span>
            </span>
          </div>

          <p className="hero-right-text">
            <span className="hero-in-right hero-delay-4 inline-block">
              Passionate about creating intuitive digital experiences that
              connect users with real value.
            </span>
          </p>

          <div className="hero-social hero-in-left hero-delay-5">
            <div className="flex items-center" aria-hidden="true">
              <span className="hero-social-avatar overflow-hidden">
                <img
                  src="/upwork.png"
                  alt="Upwork"
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="hero-social-avatar overflow-hidden">
                <img
                  src="/pph.png"
                  alt="PeoplePerHour"
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="hero-social-avatar overflow-hidden">
                <img
                  src="/toptal.png"
                  alt="Toptal"
                  className="h-full w-full object-cover"
                />
              </span>
            </div>

            <p className="hero-social-text">
              Trusted by over <strong>12+</strong> happy clients across
              residential and commercial projects.
            </p>
          </div>

          <a
            href="#contact"
            className="hero-cta text-sm px-3 py-2 md:text-base md:px-5 md:py-3 hero-in-right hero-delay-5"
          >
            <span className="hero-cta-icon text-sm md:text-base">→</span>
            <span>Connect</span>
          </a>
        </div>
      </div>
    </section>
  )
}
