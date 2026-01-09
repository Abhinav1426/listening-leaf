export default function Services() {
  const accountingServices = [
    'Entries in the accounting system',
    'Receivable management',
    'Payable management',
    'Payroll processing',
    'Fixed assets and stock management',
    'Accounts finalisation',
    'System and processes setup',
    'MIS Reporting',
  ]

  const complianceServices = [
    'Incorporation Services',
    'Company secretarial compliances',
    'Direct tax compliances',
    'GST Compliances',
    'TDS compliance',
    'PF, ESIC, PT',
  ]

  const additionalServices = [
    'ITR filings, GST filings and Refunds',
    'Assessments (IT-AT and GST-AT)',
    'Loan Approvals',
    'FDI Approvals',
    'Reports and projections',
    'International Taxation and Transfer pricing',
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="section-title mt-2">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive accounting and compliance solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Accounting & Finance */}
          <div className="card group hover:-translate-y-2">
            <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
              <svg className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary-700 mb-4">Accounting & Finance</h3>
            <ul className="space-y-3">
              {accountingServices.map((service, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance Services */}
          <div className="card group hover:-translate-y-2">
            <div className="w-14 h-14 bg-accent-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-500 transition-colors duration-300">
              <svg className="w-7 h-7 text-accent-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary-700 mb-4">Compliance Services</h3>
            <ul className="space-y-3">
              {complianceServices.map((service, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Services */}
          <div className="card group hover:-translate-y-2 md:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
              <svg className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary-700 mb-4">Additional Services</h3>
            <ul className="space-y-3">
              {additionalServices.map((service, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
