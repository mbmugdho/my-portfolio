// src/sections/ClientReviews.jsx
'use client'

import Image from 'next/image'

const reviewsData = [
  {
    id: 1,
    quote:
      'Working with you was seamless from start to finish. You understood our goals quickly, asked the right questions, and delivered a solution that scaled perfectly with our growing platform.',
    name: 'Daniel Reed',
    role: 'Founder of NovaLabs',
    avatar:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=160&h=160&q=80',
  },
  {
    id: 2,
    quote:
      'You brought our product vision to life with incredible attention to detail. Your ability to balance business needs with user empathy made our platform not just beautiful — but genuinely useful.',
    name: 'Sarah Nguyen',
    role: 'Product Manager at FlowSync',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=80',
  },
]

export default function ClientReviews() {
  return (
    <section
      id="reviews"
      className="bg-[rgba(243,246,251,1)] py-16 md:py-20 lg:py-24"
    >
      <div className="w-[min(1120px,calc(100%-40px))] mx-auto">
        {/* Grid - 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-8 md:gap-0 md:gap-x-14 items-stretch">
          {/* Left Review */}
          <div className="md:pr-2">
            <p className="max-w-[420px] text-sm leading-[1.8] text-gray-800/85">
              {reviewsData[0].quote}
            </p>

            <div className="mt-5 flex items-center gap-3">
              {/* Avatar */}
              <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-800/10 flex-shrink-0">
                <Image
                  src={reviewsData[0].avatar}
                  alt={reviewsData[0].name}
                  width={68}
                  height={68}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Author Info */}
              <div className="leading-tight">
                <div className="text-[13px] font-semibold text-gray-800/90">
                  {reviewsData[0].name}
                </div>
                <div className="mt-1 text-[11.5px] text-gray-800/55">
                  {reviewsData[0].role}
                </div>
              </div>

              {/* Quote Mark */}
              <span
                className="ml-auto text-[26px] font-bold text-gray-800/90 leading-none -translate-y-1.5"
                aria-hidden="true"
              >
                &ldquo;
              </span>
            </div>
          </div>

          {/* Divider - Hidden on mobile */}
          <div className="hidden md:block w-px bg-gray-800/20 justify-self-center" />

          {/* Right Review */}
          <div className="md:pl-2">
            <p className="max-w-[420px] md:ml-auto text-sm leading-[1.8] text-gray-800/85">
              {reviewsData[1].quote}
            </p>

            <div className="mt-5 flex items-center gap-3 md:justify-end">
              {/* Quote Mark - Different position on mobile vs desktop */}
              <span
                className="hidden md:block text-[26px] font-bold text-gray-800/90 leading-none -translate-y-1.5"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Avatar */}
              <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-800/10 flex-shrink-0">
                <Image
                  src={reviewsData[1].avatar}
                  alt={reviewsData[1].name}
                  width={68}
                  height={68}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Author Info */}
              <div className="leading-tight">
                <div className="text-[13px] font-semibold text-gray-800/90">
                  {reviewsData[1].name}
                </div>
                <div className="mt-1 text-[11.5px] text-gray-800/55">
                  {reviewsData[1].role}
                </div>
              </div>

              {/* Quote Mark - Mobile only */}
              <span
                className="md:hidden ml-auto text-[26px] font-bold text-gray-800/90 leading-none -translate-y-1.5"
                aria-hidden="true"
              >
                &ldquo;
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
