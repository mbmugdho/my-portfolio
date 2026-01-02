const BoltIcon = ({ className = 'h-3.5 w-3.5 text-white' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M13 2L3 14h7l-1 8 12-14h-7l-1-6z" />
  </svg>
)

function SkillPill({ colorClass, label }) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-2 py-1.5 text-[10px] shadow-[0_14px_26px_rgba(0,0,0,0.10)] ring-1 ring-black/5 sm:gap-2 sm:px-3 sm:py-2 sm:text-[11px] md:px-4 md:text-[13px]">
      <span
        className={`grid h-4 w-4 place-items-center rounded-full sm:h-5 sm:w-5 md:h-6 md:w-6 ${colorClass}`}
      >
        <BoltIcon className="h-2.5 w-2.5 text-white sm:h-3 sm:w-3 md:h-3.5 md:w-3.5" />
      </span>
      <span className="whitespace-nowrap font-medium text-black/80">
        {label}
      </span>
    </div>
  )
}

export default function FocusSection() {
  const left = [
    { label: 'Product Design', colorClass: 'bg-orange-500', indent: true },
    { label: 'UX Design', colorClass: 'bg-sky-500', indent: false },
    { label: 'User Research', colorClass: 'bg-neutral-700', indent: true },
  ]

  const right = [
    { label: 'Design Systems', colorClass: 'bg-yellow-400', indent: true },
    { label: 'Usability Testing', colorClass: 'bg-pink-500', indent: false },
    { label: 'Brand Identity', colorClass: 'bg-green-500', indent: true },
  ]

  const leftAnimations = ['float-top', 'float-middle', 'float-bottom']
  const rightAnimations = [
    'float-top-alt',
    'float-middle-alt',
    'float-bottom-alt',
  ]

  return (
    <section className="">
      <div className="relative mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:py-16 md:py-24">
        {/* Left pills - curved like "(" */}
        <div className="pointer-events-none absolute left-1 top-1/2 flex -translate-y-1/2 flex-col gap-6 sm:left-2 sm:gap-8 md:left-4 md:gap-12 lg:left-8 xl:left-16">
          {left.map((item, index) => (
            <div
              key={item.label}
              className={leftAnimations[index]}
              style={{
                marginLeft: item.indent ? '15px' : '0px',
              }}
            >
              <SkillPill colorClass={item.colorClass} label={item.label} />
            </div>
          ))}
        </div>

        {/* Right pills - curved like ")" */}
        <div className="pointer-events-none absolute right-1 top-1/2 flex -translate-y-1/2 flex-col items-end gap-6 sm:right-2 sm:gap-8 md:right-4 md:gap-12 lg:right-8 xl:right-16">
          {right.map((item, index) => (
            <div
              key={item.label}
              className={rightAnimations[index]}
              style={{
                marginRight: item.indent ? '15px' : '0px',
              }}
            >
              <SkillPill colorClass={item.colorClass} label={item.label} />
            </div>
          ))}
        </div>

        {/* Center text */}
        <div className="mx-auto max-w-[280px] text-center sm:max-w-[400px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[750px]">
          <p className="mb-2 text-base italic text-black/80 sm:mb-6 sm:text-lg md:text-xl [font-family:var(--font-serif),Georgia,serif]">
            Hello!
          </p>
          <h2 className="text-balance text-[18px] font-medium leading-[1.3] tracking-[-0.02em] text-black/90 sm:text-[22px] md:text-[28px] lg:text-[36px] xl:text-[44px] md:leading-[1.2]">
            Focus is on blending clear strategy, thoughtful design & development, and user
            empathy to{' '}
            <span className="font-normal text-black/30">
              craft experiences that solve real problems
            </span>
          </h2>
        </div>
      </div>
    </section>
  )
}