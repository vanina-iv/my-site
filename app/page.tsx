import { About } from '@/components/site/about'
import { CaseStudies } from '@/components/site/case-studies'
import { Companies } from '@/components/site/companies'
import { Contact, Footer } from '@/components/site/contact'
import { Header } from '@/components/site/header'
import { Hero } from '@/components/site/hero'
import { Newsletter } from '@/components/site/newsletter'
import { Process } from '@/components/site/process'
import { Services } from '@/components/site/services'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Companies />
        <Services />
        <CaseStudies />
        <Process />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
