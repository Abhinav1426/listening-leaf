import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Startup() {
  const services = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Idea to Entity Setup',
      description: 'Convert your idea into a legally sound business through company registration, structuring, and statutory setup.',
      items: [
        'Company registration & incorporation',
        'Business structure advisory',
        'Statutory registrations & licenses',
        'Founder agreements & documentation',
      ],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Business & Financial Planning',
      description: 'Realistic, growth-oriented frameworks that attract confidence from investors, partners, and lenders.',
      items: [
        'Business model development',
        'Cash flow & revenue projections',
        'Investor-ready financial models',
        'Budgeting & resource planning',
      ],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Compliance & Governance',
      description: 'Keep your startup clean, credible, and stress-free with end-to-end regulatory compliance management.',
      items: [
        'Accounting & bookkeeping',
        'Tax filing & GST compliance',
        'Payroll processing & statutory dues',
        'Regulatory filings & governance',
      ],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Operational Advisory',
      description: 'Set up internal processes, MIS, and reporting systems that support informed decision-making from day one.',
      items: [
        'Process design & SOP setup',
        'MIS & dashboard reporting',
        'Internal controls framework',
        'Vendor & contract management',
      ],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Growth & Scale Advisory',
      description: 'Optimize costs, strengthen controls, and prepare for expansion, funding, or strategic partnerships.',
      items: [
        'Cost optimization strategies',
        'Funding & investor readiness',
        'Partnership structuring',
        'Expansion planning & due diligence',
      ],
    },
  ]

  const audience = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: 'First-Time Founders',
      description: 'Navigating the startup journey for the first time with clarity and confidence.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Early-Stage Startups',
      description: 'Building the right foundation during the critical early phase of growth.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Bootstrapped Businesses',
      description: 'Making the most of every resource with smart financial planning.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'MSMEs Scaling Up',
      description: 'Transitioning from informal operations into structured, compliant companies.',
    },
  ]

  const whyChooseUs = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Founder-Focused Guidance',
      description: 'We align our advice with your vision, not a one-size-fits-all template.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'Practical, Not Theoretical',
      description: 'Actionable strategies grounded in real-world business scenarios.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Financial & Compliance Expertise',
      description: 'Deep knowledge in accounting, taxation, and regulatory frameworks.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Transparent & Long-Term Support',
      description: 'An honest partnership that grows with your business over time.',
    },
  ]

  return (
    <>
      <Head>
        <title>Startup Support Services in Hyderabad | Company Registration & Accounting Setup - Listening Leaf</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Startup support services in Hyderabad, Telangana. Company registration, GST registration, accounting setup, tax filing, compliance management & financial planning for startups. Call Listening Leaf at 91332 13033." />
        <meta name="keywords" content="startup support Hyderabad, startup registration Hyderabad, company registration for startups Telangana, startup accounting Hyderabad, startup GST registration, startup tax filing, startup compliance Hyderabad, business registration Hyderabad, company incorporation Hyderabad, MSME registration Hyderabad, startup financial planning, bookkeeping for startups, startup payroll setup, founder agreements, business structure advisory Hyderabad, Listening Leaf startup" />
        <link rel="canonical" href="https://listeningleaf.com/Startup" />
        <meta property="og:title" content="Startup Support Services in Hyderabad | Listening Leaf" />
        <meta property="og:description" content="Complete startup support - company registration, GST registration, accounting setup, tax filing & compliance in Hyderabad, Telangana." />
        <meta property="og:url" content="https://listeningleaf.com/Startup" />
        <meta property="og:type" content="website" />
      </Head>
      <main className="min-h-screen">
        <Header />

        {/* Hero Section */}
        <section className="gradient-bg pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-accent-500/5 rounded-full"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fadeInUp">
                <span className="inline-block bg-accent-500/20 text-accent-300 text-sm font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
                  Startup Support
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Turning Ideas into{' '}
                  <span className="text-accent-400">Sustainable Enterprises</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  Starting a business demands clarity, compliance, and confident decisions.
                  We partner with startups from concept to scale, offering practical guidance,
                  financial structure, and strategic direction so founders can focus on building
                  what truly matters.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/919133213033?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20startup%20support%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center justify-center space-x-2"
                  >
                    <span>Start Your Journey</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a href="/#contact" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20 text-center">
                    Contact Us
                  </a>
                </div>
              </div>

              <div className="hidden lg:flex justify-center animate-fadeInUp delay-200">
                <div className="relative">
                  {/* Decorative floating cards */}
                  <div className="w-80 h-80 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 p-8 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-accent-500/30 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-accent-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-semibold">Entity Setup</p>
                          <p className="text-gray-400 text-sm">Registration & compliance</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary-400/30 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-primary-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-semibold">Financial Planning</p>
                          <p className="text-gray-400 text-sm">Models & projections</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-accent-500/30 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-accent-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-semibold">Growth Advisory</p>
                          <p className="text-gray-400 text-sm">Scale with confidence</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Floating accent element */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-500/20 rounded-2xl animate-float"></div>
                  <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary-400/20 rounded-full animate-float delay-200"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Support Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">What We Support</span>
              <h2 className="section-title mt-2">End-to-End Startup Solutions</h2>
              <p className="section-subtitle">
                From your first registration to your next funding round, we provide the foundation for sustainable growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className={`card group hover:-translate-y-2 ${index >= 3 ? 'lg:col-span-1' : ''}`}>
                  <div className={`w-14 h-14 ${index % 2 === 0 ? 'bg-primary-100' : 'bg-accent-100'} rounded-2xl flex items-center justify-center mb-6 ${index % 2 === 0 ? 'group-hover:bg-primary-600' : 'group-hover:bg-accent-500'} transition-colors duration-300`}>
                    <span className={`${index % 2 === 0 ? 'text-primary-600 group-hover:text-white' : 'text-accent-600 group-hover:text-white'} transition-colors duration-300`}>
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-700 mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who This Is For Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">Who This Is For</span>
              <h2 className="section-title mt-2">Built for Builders</h2>
              <p className="section-subtitle">
                Whether you are launching your first venture or structuring an existing business, our services are designed for you
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {audience.map((item, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-accent-200 hover:shadow-xl transition-all duration-300 text-center h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white mb-5 mx-auto group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold text-primary-700 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">Our Approach</span>
                <h2 className="section-title mt-2">Partnership, Not Just Advisory</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  We listen deeply to your vision, understand your challenges, and offer solutions that are
                  practical, ethical, and future-ready. Our role goes beyond advisory &mdash; we walk alongside
                  you as your business evolves, ensuring every decision is grounded in clarity and purpose.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Listen & Understand', desc: 'We start by understanding your vision and goals' },
                    { label: 'Plan & Structure', desc: 'Design frameworks tailored to your startup' },
                    { label: 'Execute & Support', desc: 'Hands-on implementation and ongoing guidance' },
                    { label: 'Grow & Evolve', desc: 'Adapt strategies as your business scales' },
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-accent-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-700">{step.label}</h4>
                        <p className="text-gray-500 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="gradient-bg rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-white mb-3">Our Promise</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Every startup is unique. We do not believe in cookie-cutter solutions. Our team invests
                    the time to understand your specific challenges and crafts strategies that are realistic,
                    achievable, and aligned with your long-term goals.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { value: 'Ethical', label: 'Practices' },
                    { value: 'Practical', label: 'Solutions' },
                    { value: 'Future', label: 'Ready' },
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-4">
                      <p className="text-primary-700 font-bold">{item.value}</p>
                      <p className="text-gray-500 text-sm">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="section-title mt-2">The Listening Leaf Advantage</h2>
              <p className="section-subtitle">
                We bring the expertise, commitment, and transparency that startups need to thrive
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-accent-200 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold text-primary-700 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="gradient-bg rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Let's Build Your Startup the Right Way
                </h2>
                <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
                  Whether you are just starting or finding your footing, we are here to support your journey
                  with clarity, structure, and confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/919133213033?text=Hello!%20I%20am%20interested%20in%20your%20startup%20support%20services.%20Can%20we%20discuss%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>Begin Your Startup Journey</span>
                  </a>
                  <a href="tel:+919133213033" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20 flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Call Us Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </main>
    </>
  )
}
