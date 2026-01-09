export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="section-title mt-2">How We Work</h2>
          <p className="section-subtitle">
            Two flexible approaches to suit your business requirements
          </p>
        </div>

        {/* Work Methods */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* At Your Place */}
          <div className="relative group">
            <div className="absolute inset-0 gradient-bg rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-700">At Your Place</h3>
                  <span className="text-accent-500 font-medium">On-site Support</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                Our accounts executives work directly at your office, monitored by professional accountants
                on a weekly or monthly basis as per your requirements. All complex work like TDS and
                tax returns are handled at our office under strict supervision.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Dedicated on-site accountant</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Regular professional oversight</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Complex tasks handled centrally</span>
                </li>
              </ul>
            </div>
          </div>

          {/* At CCS PRO */}
          <div className="relative group">
            <div className="absolute inset-0 gradient-accent rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-700">At Our Office</h3>
                  <span className="text-accent-500 font-medium">Remote Processing</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                Send your documents through courier or email to our office. All accounting will be
                done at our office. This is very helpful and cost-effective when the number of
                transactions are low.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Cost-effective solution</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Easy document submission</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Ideal for low transaction volumes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
