"use client"

import { Clients, Hero } from "@/components"
import { FAQs } from "@/components/FooterTabs"
import ServiceBenifits from "@/components/ServiceBenifits"
import ServicesCards from "@/components/ServicesCards"
import ServicesHero from "@/components/ServicesHero"
import TabbedComponent from "@/components/TabbedComponent"
import AboutJay from "@/components/Utils/AboutJay"


const Page = () => {
  return (
    <main className="w-full">
      <ServicesHero />
      <div className="px-4 md:px-20 w-full">
        <Clients head1={'Featured Clients'} showPara />
        <TabbedComponent />
        <ServiceBenifits />
        <AboutJay />
        <ServicesCards />
      </div>
        <FAQs />
    </main>
  )
}

export default Page