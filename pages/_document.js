import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#1a365d" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://listeningleaf.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://listeningleaf.com" />
        <meta property="og:title" content="Listening Leaf - Chartered Accountants & Business Consultancy in Hyderabad" />
        <meta property="og:description" content="Expert Chartered Accountants in Hyderabad, Telangana. Tax filing, GST registration, company registration, startup accounting & compliance services. Listening Deeply. Leading Wisely." />
        <meta property="og:site_name" content="Listening Leaf Private Limited" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Listening Leaf - Chartered Accountants & Business Consultancy in Hyderabad" />
        <meta name="twitter:description" content="Expert Chartered Accountants in Hyderabad, Telangana. Tax filing, GST registration, company registration, startup accounting & compliance services." />

        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        <meta name="ICBM" content="17.3850, 78.4867" />

        {/* Additional SEO Meta */}
        <meta name="author" content="Listening Leaf Private Limited" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              "name": "Listening Leaf Private Limited",
              "alternateName": "Listening Leaf",
              "description": "Chartered Accountants and Business Consultancy firm in Hyderabad offering tax filing, GST registration, company registration, startup accounting, payroll processing, and compliance services.",
              "url": "https://listeningleaf.com",
              "telephone": ["+919133213033", "+917386111332"],
              "email": "listeningleafpl@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 17.3850,
                "longitude": 78.4867
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Hyderabad"
                },
                {
                  "@type": "State",
                  "name": "Telangana"
                }
              ],
              "serviceType": [
                "Tax Filing",
                "GST Registration",
                "GST Filing",
                "Company Registration",
                "Startup Accounting",
                "Payroll Processing",
                "Business Compliance",
                "Income Tax Return Filing",
                "TDS Compliance",
                "Auditing Services",
                "Business Analytics",
                "Company Incorporation",
                "International Taxation"
              ],
              "slogan": "Listening Deeply. Leading Wisely.",
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": []
            })
          }}
        />

        {/* Structured Data - Professional Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Listening Leaf Private Limited",
              "image": "https://listeningleaf.com/new_logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500038",
                "addressCountry": "IN"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "CA & Business Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tax Filing & ITR Services",
                      "description": "Income tax return filing, tax planning, and assessment support for individuals and businesses in Hyderabad"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "GST Registration & Compliance",
                      "description": "GST registration, filing, refunds, and compliance services in Telangana"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Company Registration & Incorporation",
                      "description": "Private limited company registration, LLP registration, and startup incorporation services in Hyderabad"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Startup Accounting & Setup",
                      "description": "Complete accounting setup, bookkeeping, and financial management for startups in Hyderabad and Telangana"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Payroll Processing",
                      "description": "End-to-end payroll management, PF, ESIC, and professional tax compliance"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Structured Data - BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://listeningleaf.com" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://listeningleaf.com/#services" },
                { "@type": "ListItem", "position": 3, "name": "About", "item": "https://listeningleaf.com/#about" },
                { "@type": "ListItem", "position": 4, "name": "Contact", "item": "https://listeningleaf.com/#contact" },
                { "@type": "ListItem", "position": 5, "name": "Startup Support", "item": "https://listeningleaf.com/Startup" }
              ]
            })
          }}
        />

        {/* Structured Data - FAQPage for common queries */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What services does Listening Leaf offer in Hyderabad?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Listening Leaf offers comprehensive CA services including tax filing, GST registration & compliance, company registration & incorporation, startup accounting setup, payroll processing, TDS compliance, auditing, business analytics, and financial consulting in Hyderabad, Telangana."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can Listening Leaf help startups in Hyderabad?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Listening Leaf helps startups with company incorporation, accounting system setup, GST registration, tax compliance, payroll setup, financial planning, MIS reporting, and ongoing bookkeeping services tailored for fast-growth companies in Hyderabad and Telangana."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where is Listening Leaf located?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Listening Leaf is located in Hyderabad, Telangana, India. Contact us at 91332 13033 or 73861 11332, or email listeningleafpl@gmail.com."
                  }
                }
              ]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
