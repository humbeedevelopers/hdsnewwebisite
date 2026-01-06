import About from '@/components/About'
import Hero from '@/components/Hero'
import Clients from '@/components/Clients'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Clients/>
    </div>
  )
}

export default page