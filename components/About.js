export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="section-title mt-2 text-left">About Listening Leaf</h2>
            <p className="text-lg text-primary-600 font-medium">Your Success, Our Expertise</p>

            <div className="space-y-6 mt-8">
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-primary-700">Listening Leaf</strong> is headed by young and energetic
                Chartered Accountants from our office in Hyderabad. We have a team of committed professionals
                with specialized skills.
              </p>

              <p className="text-gray-600 leading-relaxed">
                We take pride in our ability to provide quality services - whether for an owner-managed
                business or a large enterprise. Entrepreneurs make a difference. They not only have great
                ideas, but also the zeal to make them a reality.
              </p>

              <p className="text-gray-600 leading-relaxed">
                We have been working with entrepreneurs, adapting our experience, industry capabilities
                and resources to support entrepreneurial, fast-growth companies.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-700">Expert Team</h4>
                  <p className="text-sm text-gray-500">Chartered Accountants</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-700">Client-Centric</h4>
                  <p className="text-sm text-gray-500">Your needs first</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-700">Fast & Efficient</h4>
                  <p className="text-sm text-gray-500">Timely delivery</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-700">Knowledge Driven</h4>
                  <p className="text-sm text-gray-500">Continuous learning</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Founder Card */}
          <div className="relative">
            <div className="absolute inset-0 gradient-bg rounded-3xl transform rotate-3 opacity-10"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="gradient-bg p-8 text-white">
                <h3 className="text-2xl font-bold">Meet the Founder</h3>
                <p className="text-gray-200 mt-2">Vision. Purpose. Leadership.</p>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Founder Profile */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    YCR
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-700">Yerasi Chaitanya Reddy</h4>
                    <p className="text-accent-600 font-medium">Founder</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Driven by a clear belief that strong businesses are built on deep understanding
                    and wise decision-making, Chaitanya Reddy founded Listening Leaf with a focused
                    approach to business consulting and financial services.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    Known for his thoughtful listening and structured thinking, he works closely
                    with clients to understand their challenges before guiding them toward practical,
                    ethical, and future-ready solutions.
                  </p>
                </div>

                {/* Vision Quote */}
                <div className="mt-6 p-4 bg-accent-50 rounded-xl border-l-4 border-accent-500">
                  <p className="text-sm text-gray-700 italic">
                    "Our vision is to help organizations navigate complexity with confidence
                    and grow with purpose."
                  </p>
                  <p className="text-xs text-accent-600 font-medium mt-2">- Yerasi Chaitanya Reddy</p>
                </div>

                {/* Core Values */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-xs font-medium text-primary-700">Clarity</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="text-xs font-medium text-primary-700">Compliance</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <p className="text-xs font-medium text-primary-700">Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
