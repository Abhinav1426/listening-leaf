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
        <title>Listening Leaf - Business Consultancy & Financial Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Listening Leaf Private Limited - Your trusted partner for Accounting, Auditing, Business Analytics, Payroll & Compliance services in Hyderabad. Listening Deeply. Leading Wisely." />
        <meta name="keywords" content="accounting services, business consultancy, financial services, GST compliance, tax filing, payroll processing, Hyderabad" />
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
