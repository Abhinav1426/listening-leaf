import { useState, useEffect } from 'react'

function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    let animationFrame

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}{suffix}</span>
}

export default function Hero() {
  return (
    <section className="gradient-bg min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fadeInUp">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <span className="text-accent-300 font-medium">Business Consultancy & Financial Services</span>
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                LISTENING LEAF
              </h1>
              <p className="text-2xl md:text-3xl font-medium">
                <span className="text-gray-200">Listening Deeply.</span>
                <span className="text-accent-400 ml-2">Leading Wisely.</span>
              </p>
            </div>

            <p className="text-lg md:text-xl text-gray-200 max-w-xl">
              Your trusted partner for Accounting, Auditing, Business Analytics, and Compliance services.
              We help businesses focus on what matters most while we handle the numbers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-secondary text-center">
                Get Free Consultation
              </a>
              <a href="#services" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-center backdrop-blur-sm border border-white/20">
                Our Services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-accent-400">
                  <AnimatedCounter end={24} suffix="/7" />
                </div>
                <div className="text-gray-300 text-sm">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-400">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className="text-gray-300 text-sm">Client Focused</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-400">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className="text-gray-300 text-sm">Commitment</div>
              </div>
            </div>
          </div>

          {/* Right Content - Decorative */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Decorative circles */}
              <div className="w-72 h-72 bg-accent-500/20 rounded-full absolute -top-10 -right-10 animate-float"></div>
              <div className="w-48 h-48 bg-white/10 rounded-full absolute -bottom-5 -left-5 animate-float delay-200"></div>

              {/* Main card */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Financial Analysis</div>
                      <div className="text-gray-300 text-sm">Real-time insights</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-400 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Tax Compliance</div>
                      <div className="text-gray-300 text-sm">100% accurate filings</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent-400 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Business Growth</div>
                      <div className="text-gray-300 text-sm">Strategic planning</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <a href="#services" className="flex flex-col items-center text-white/60 hover:text-white transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
