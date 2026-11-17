"use client"

import { useState } from "react"

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function Star({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2Z" />
    </svg>
  )
}

// ── ADD NEW TESTIMONIALS HERE ─────────────────────────
const testimonials = [
  {
    name: "Arlington Booker",
    role: "Founder, Rapid Sama",
    content:
      "I'm honestly impressed with the result. It's really good, and beyond the quality of the work, you are very trustworthy and reliable. I'm glad I chose to work with you.",
    rating: 5,
  },
]
// ─────────────────────────────────────────────────────

export function Testimonials() {
  const [active, setActive] = useState(0)
  const total = testimonials.length

  const prev = () => setActive((c) => (c - 1 + total) % total)
  const next = () => setActive((c) => (c + 1) % total)

  const getIndex = (offset: number) => (active + offset + total) % total

  return (
    <section id="testimonials" className="bg-primary py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white">
            Client Success Stories
          </span>
          <h2 className="text-3xl font-bold text-white md:text-4xl text-balance">
            Customer Reviews From My Shopify Stores
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Real reviews from clients whose stores I designed
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center gap-4">

          {/* Left arrow */}
          <button
            onClick={prev}
            className="z-10 flex-shrink-0 w-10 h-10 rounded-full border border-white/30 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors disabled:opacity-30"
            disabled={total <= 1}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Cards row */}
          <div className="flex items-center gap-6 w-full max-w-5xl overflow-hidden">

            {/* Left blurred card — only shows when 3+ reviews */}
            {total >= 3 && (
              <div className="hidden md:block flex-1 opacity-40 blur-[2px] scale-95 transition-all duration-300 pointer-events-none select-none">
                <TestimonialCard testimonial={testimonials[getIndex(-1)]} />
              </div>
            )}

            {/* Center card — always visible */}
            <div
              className={`flex-shrink-0 transition-all duration-300 ${
                total >= 3 ? "w-full md:w-[420px]" : "w-full max-w-xl mx-auto"
              }`}
            >
              <TestimonialCard testimonial={testimonials[active]} center />
            </div>

            {/* Right blurred card — only shows when 3+ reviews */}
            {total >= 3 && (
              <div className="hidden md:block flex-1 opacity-40 blur-[2px] scale-95 transition-all duration-300 pointer-events-none select-none">
                <TestimonialCard testimonial={testimonials[getIndex(1)]} />
              </div>
            )}

          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            className="z-10 flex-shrink-0 w-10 h-10 rounded-full border border-white/30 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors disabled:opacity-30"
            disabled={total <= 1}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

        </div>

        {/* Dots — only shows when 2+ reviews */}
        {total >= 2 && (
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 bg-white" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

function TestimonialCard({
  testimonial,
  center,
}: {
  testimonial: (typeof testimonials)[0]
  center?: boolean
}) {
  return (
    <div
      className={`rounded-2xl border p-7 md:p-10 transition-all duration-500 ${
        center
          ? "bg-white/15 border-white/25 animate-pulse-slow"
          : "bg-white/8 border-white/15"
      }`}
      style={
        center
          ? { animation: "floatCard 4s ease-in-out infinite" }
          : {}
      }
    >
      {/* Big quote mark */}
      <div className="text-6xl font-serif text-white/20 leading-none mb-2 select-none">
        &ldquo;
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Review text */}
      <p className="text-white/90 leading-relaxed mb-8 text-base md:text-lg italic">
        {testimonial.content}
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-white/25 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 ring-2 ring-white/30">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-white">{testimonial.name}</p>
          <p className="text-white/60 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}