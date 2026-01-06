import React from 'react'

import About from '@/components/About'
import Hero from '@/components/Hero'
import Clients from '@/components/Clients'
import Works from '@/components/Works'

const page = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Clients/>
      <Works/>
    </div>
  )
}

export default page