"use client"
import {Hero, About, Clients, Works, Highlights, Footer, ContactForm, ServiceCards } from '@/components'

import portalImage from '../../public/portal-image.png'
import PortalSection from '@/components/Utils/PortalSection'
import PortfolioGrid from '@/components/Utils/PortfolioGrid'
import Reviews from '@/components/Reviews'

const Page = () => {
  return (
    <main>
      <Hero />
      <About />
      <Clients />
      <Works />
      <ServiceCards />
      <PortalSection 
        foregroundImage={portalImage}
        nextSectionContent={<PortfolioGrid />} 
      />
      <Highlights />
      <Reviews />
      <ContactForm />
      <Footer />
    </main>
  )
}

export default Page