"use client"
import {Hero, About, Clients, Works, Highlights, Footer, PortalSection } from '@/components'

import portalImage from '../../public/createfuture.webp'
import ContactForm from '@/components/ContactForm';

const PortalOpen = () => (
  <div 
    className="w-full h-screen bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: 'url(/Portal-after.png)' }}
  >Hello</div>
);

const Page = () => {
  return (
    <main>
      <Hero />
      <About />
      <Clients />
      <PortalSection 
        foregroundImage={portalImage}
        nextSectionContent={<PortalOpen />} 
      />
      <Works />
      <Highlights />
      <ContactForm />
      <Footer />
    </main>
  )
}

export default Page