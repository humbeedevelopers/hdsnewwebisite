"use client"
import {Hero, About, Clients, Works, Highlights, Footer, ContactForm, ServiceCards } from '@/components'

import portalImage from '../../public/portal-image.png'
import PortalSection from '@/components/Utils/PortalSection'
import Reviews from '@/components/Reviews'

const Page = () => {
  return (
    <main>
      <Hero />
      <About />
      <Clients head1={'Believed by'} head2={'from Global Brands to Start-ups'} />
      <Works />
      <ServiceCards />
      <PortalSection 
        foregroundImage={portalImage}
      />
      <Highlights />
      <Reviews />
      <ContactForm />
      <Footer />
    </main>
  )
}

export default Page