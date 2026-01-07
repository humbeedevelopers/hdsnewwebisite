import React from 'react'

import About from '@/components/About'
import Hero from '@/components/Hero'
import Clients from '@/components/Clients'
import Works from '@/components/Works'
import Highlights from '@/components/Highlights'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Clients/>
      <Works/>
      <Highlights/>
      <Footer />
    </div>
  )
}

export default page