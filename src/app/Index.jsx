import React from 'react'

import Hero from '@/components/Hero'
import PandaScroll from '@/components/PangaScroll'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import Section7 from '@/components/Section7'
import Section8 from '@/components/Section8'
import Section9_Form from '@/components/Section9_Form'
import Section6 from '@/components/Section6'
import ClientsSlider from '@/components/ClientsSlider'
import Section3Dnew from '@/components/Section3Dnew'

const Index = () => {

  return (
    <>

      <Hero />
      <Section2 />
      <Section3 />
      <Section3Dnew />
      <Section6 />
      <ClientsSlider />
      <Section7 />
      <Section8 />
      <Section9_Form />
      <PandaScroll />
    </>
  )
}

export default Index