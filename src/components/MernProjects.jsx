'use client'
import  { useEffect, useRef } from "react";
import { gsap } from "gsap";

// import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";


const MernProjects = () => {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".mernProjectsSection", {
      opacity: 0,
      y: 100,
      x: -50,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".mernProjectsSection",
        start: "top 80%",
        end: "bottom 20%",
        // toggleActions: "play none none reverse",
        // scrub: true
      }
    })
  }, [])

  const carouselRef = useRef(null);


    const projects = [
        {
          name: 'Code Academy',
          Platform: 'Mern Stack',
          img:'./images/Mern1.png',
          link:'/code-academy'
        },
        {
          name: 'Fitness Tracker',
          Platform: 'Mern Stack',
          img:'./images/Mern2.png',
          link:'/fitness-tracker'
        },
        {
          name: 'E-Libary',
          Platform: 'Mern Stack',
          img:'./images/Mern3.png',
          link:'e-libary'
        },
        {
          name: 'Travel Log',
          Platform: 'Mern Stack',
          img:'./images/Mern4.png',
          link:'travel-log'
        },
       ]




  useEffect(() => {
    const carousel = carouselRef.current;

    // Duplicate the cards for infinite scrolling
    carousel.innerHTML += carousel.innerHTML;

    // Calculate the total width of the carousel
    const totalWidth = carousel.scrollWidth / 2;

    // GSAP animation for infinite scrolling
    const tl = gsap.timeline({ repeat: -1 }); // Infinite repeat

    tl.to(carousel, {
      x: -totalWidth, // Move the carousel to the left
      duration: 90, // Adjust duration for speed
      ease: "none", // Linear animation
    });

    // Reset the carousel position when the animation repeats
    tl.eventCallback("onRepeat", () => {
      gsap.set(carousel, { x: 0 }); // Reset to the start
    });
  }, []);

  return (
    <div className="relative overflow-hidden py-12">
      <div
        ref={carouselRef}
        className="flex gap-10 w-max mernProjectsSection"
      >
        
        {projects.map((card, index) => (
        <Link href={card.link}> 
          <div
            key={index}
            className=" card   rounded-2xl shadow-sm flex flex-col items-center justify-center text-2xl font-bold object-cover overflow-hidden">
            <img src={card.img} alt="Hero 1" className="w-full h-full object-cover  " />
            <h2 className="text-white ">{card.name}</h2>
            <h5 className="text-white/90 font-light">{card.Platform}</h5>
          </div>


        </Link>
        ))}
      </div>

    </div>
  );
};

export default MernProjects;