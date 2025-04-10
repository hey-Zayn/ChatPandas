import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
// import Navbar from '@/components/Navbar'
import PandaScroll from '@/components/PangaScroll'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
// import Section4 from '@/components/Section4'
import Section6Test from '@/components/Section6Test'
import Section7 from '@/components/Section7'
import Section8 from '@/components/Section8'
import Section9_Form from '@/components/Section9_Form'
import React from 'react'

const Index = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero/>
      <Section2 />
      <Section3 />
      {/* <Section6/> */}
      <Section6Test />
      {/* <Section4 /> */}
      <Section7 />
      <Section8 />
      <Section9_Form />
      <PandaScroll />
      {/* <Card /> */}
      {/* <Last_Section/> */}
      {/* <Footer /> */}
    </>
  )
}

export default Index