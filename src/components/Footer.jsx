"use client";
import React, { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Footer = () => {
  const footerRef = useRef(null)
  const LeftHandRef = useRef(null)
  const RightHandRef = useRef(null)
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const footertl = gsap.timeline({
            duration: 3,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
            scrub:5,
          }
        });
    
        // Animate hands in simultaneously
        footertl.fromTo(["#LeftHand", "#RightHand"], {
          x: (i) => i === 0 ? "-100%" : "100%",
          opacity: 1
        }, {
          x: "0%", 
          opacity: 1,
          // duration: 1,
          ease: "power2.inOut"
        })
        .to([LeftHandRef.current, RightHandRef.current], {
          x: "0%",
          opacity: 1,
          // duration: 1
        })
        .to([LeftHandRef.current, RightHandRef.current], {
          x: (i) => i === 0 ? "-100%" : "100%",
          opacity: 1,
          // duration: 1,
          ease: "power2.inOut"
        });
    })
    
    //     Footer Hand Animation   ----------------
    //     [Left Hand] starts off-screen left → slides in → pauses → slides back out left
    //     [Right Hand] starts off-screen right → slides in → pauses → slides back out right   
  return (
    <div id="footer" ref={footerRef}  className="footer relative w-full h-screen max-sm:h-full bg-[#181818] pt-20 max-sm:pt-10 overflow-hidden ">
    <div className="w-full flex items-center pl-30">
      <div className="w-full py-5">
        <h2 className="text-white text-5xl font-semibold">Let's</h2>
      </div>
    </div>
    <div className="w-full">
      <img src="/images/footer2.svg" alt="Chat Panda Logo" className="w-full object-cover" />
    </div>
    <div className="w-full flex max-sm:flex-col justify-center items-center gap-15 text-white py-12">
      <div><p>Industries</p></div>
      <div><p>Locations</p></div>
      <div><p>Facebook</p></div>
      <div><p>Instagram</p></div>
      <div><p>Linkedin</p></div>
    </div>
    <div className="w-full">
      <video
        src="/videos/footer.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
     
    </div>
    <footer className=" w-full flex  max-sm:flex-col max-sm:hidden  justify-between items-center px-10 py-4">
      <div className="text-white">
        <p>© 2025 Chat Pandas</p>
      </div>
      <div className="flex gap-1">
        <p className="text-white/50">Powered by:</p>
        <p className="text-white">bizzinteractive designade</p>
      </div>
      <div className="flex gap-1 max-sm:flex-col  max-sm:text-center text-white">
        <p>We also develop software:</p>
        <p className="font-semibold">www.devpandas.co</p>
      </div>
     
       
    
    </footer>

    <img id="LeftHand" ref={LeftHandRef} src="/images/Handleft.avif"alt="" className="absolute top-[30%] -left-[05%] w-[60%]"/>
    <img id="RightHand" ref={RightHandRef} src="/images/Handright.avif" alt="" className="absolute top-[30%] left-[55%] w-[60%]"/>
  </div>
  )
}

export default Footer;