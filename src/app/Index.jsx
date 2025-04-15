import React from 'react'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
// import Navbar from '@/components/Navbar'
import PandaScroll from '@/components/PangaScroll'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
// import Section4 from '@/components/Section4'
// import Section6Test from '@/components/Section6Test'
import Section7 from '@/components/Section7'
import Section8 from '@/components/Section8'
import Section9_Form from '@/components/Section9_Form'
import Section4 from '@/components/Section4'
import Section3D from '@/components/Section3D'
import Section6Test from '@/components/Section6Test'





const Index = () => {

  return (
    <>

      <Hero />
      <Section2 />
      <Section3 />
      <div>
        {/* <Section3D /> */}
      </div>

      <Section6Test />
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