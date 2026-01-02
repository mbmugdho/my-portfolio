import { Search, Palette, Code2, Rocket } from 'lucide-react'

const icons = [Search, Palette, Code2, Rocket]

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      text: 'Understanding your goals, users, and challenges through research and strategy.',
    },
    {
      num: '02',
      title: 'Design',
      text: 'Transforming insights into intuitive, beautiful, and functional product experiences.',
    },
    {
      num: '03',
      title: 'Develop',
      text: 'Building responsive, accessible, and performant interfaces with clean code.',
    },
    {
      num: '04',
      title: 'Deliver',
      text: 'Testing, refining, and launching the final product with clarity and precision.',
    },
  ]

  return (
    <section className="process section-padding">
      <div className="site-container relative">
        {/* Header */}
        <div className="text-center">
          <p className="process-kicker mb-3">Our Process Explained</p>
          <h2 className="process-title text-[clamp(34px,4.2vw,64px)] font-medium">
            Here's how it works
          </h2>
        </div>

        {/* Cards Stage */}
        <div className="process-stage">
          <svg
            className="process-connector"
            viewBox="0 0 1000 300"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient
                id="connectorGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.5" />
              </linearGradient>
            </defs>

            <path d="M 100 120 Q 200 20, 320 50" stroke="url(#connectorGrad)" />
            <circle cx="100" cy="120" r="8" />
            <circle cx="320" cy="50" r="8" />

            <path d="M 380 40 Q 500 -30, 620 40" stroke="url(#connectorGrad)" />
            <circle cx="380" cy="40" r="8" />
            <circle cx="620" cy="40" r="8" />

            <path d="M 680 50 Q 800 20, 900 120" stroke="url(#connectorGrad)" />
            <circle cx="680" cy="50" r="8" />
            <circle cx="900" cy="120" r="8" />
          </svg>

          {steps.map((s, idx) => {
            const Icon = icons[idx]
            return (
              <article
                key={s.num}
                className={`process-card process-card--${idx + 1}`}
              >
                {/* Shimmer effect */}
                <div className="shimmer" />

                {/* Animate INNER wrapper */}
                <div className={`process-anim process-delay-${idx + 1}`}>
                  <div
                    className="process-float"
                    style={{
                      animationDuration: `${6.4 + idx * 0.6}s`,
                      animationDelay: `${idx * 0.15}s`,
                    }}
                  >
                    {/* Icon */}
                    <Icon className="process-card-icon" strokeWidth={1.5} />

                    {/* Number */}
                    <div className="process-num">{s.num}</div>

                    {/* Content */}
                    <h3 className="process-card-title">{s.title}</h3>
                    <p className="process-card-text">{s.text}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* nicer decoration */}
        <div className="process-decoration">
          <div className="process-decoration-dot" />
          <div className="process-decoration-dot process-decoration-dot--active" />
          <div className="process-decoration-dot process-decoration-dot--active" />
          <div className="process-decoration-dot" />
        </div>
      </div>
    </section>
  )
}
