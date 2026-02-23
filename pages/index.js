import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import HowWeWork from '../components/HowWeWork'
import About from '../components/About'
import Benefits from '../components/Benefits'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Head>
        <title>Listening Leaf | Chartered Accountants in Hyderabad | Tax Filing, GST & Company Registration</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Listening Leaf - Leading Chartered Accountants in Hyderabad, Telangana. Expert services in tax filing, GST registration, company registration, startup accounting, payroll processing & business compliance. Call 91332 13033." />
        <meta name="keywords" content="chartered accountants Hyderabad, CA firm Hyderabad, tax filing Hyderabad, income tax return filing Hyderabad, ITR filing Telangana, GST registration Hyderabad, GST filing Telangana, company registration Hyderabad, private limited company registration, startup registration Hyderabad, startup accounting services, accounting firm Hyderabad, bookkeeping services Hyderabad, payroll processing Hyderabad, TDS compliance, business compliance Telangana, auditing services Hyderabad, company incorporation Hyderabad, LLP registration Hyderabad, business consultancy Hyderabad, financial services Telangana, GST return filing, GST refund Hyderabad, tax planning Hyderabad, startup setup Hyderabad, accounts setup for startups, PF ESIC compliance Hyderabad, professional tax Telangana, MIS reporting, business analytics Hyderabad, Listening Leaf" />
      </Head>
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <HowWeWork />
        <About />
        <Benefits />
        <CTA />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  )
}
