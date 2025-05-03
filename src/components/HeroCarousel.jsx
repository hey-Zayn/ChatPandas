'use client'
import  { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HeroCarousel = () => {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".heroimges", {
      opacity: 0,
      y: 100,
      x: -50,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".heroimges",
        start: "top 80%",
        end: "bottom 20%",
      }
    })
  }, [])

  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    carousel.innerHTML += carousel.innerHTML;
    const totalWidth = carousel.scrollWidth / 2;

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(carousel, {
      x: -totalWidth,
      duration: 90,
      ease: "none",
    });

    tl.eventCallback("onRepeat", () => {
      gsap.set(carousel, { x: 0 });
    });
  }, []);

  const card=[
    {
        img: '/images/HeroImg1.png',
        alt: 'Modern web development showcase',
        review: "The team's expertise in web development is unmatched. They transformed our vision into reality!",
        client: "John Doe - CEO, Tech Innovators"
    },
    {
        img: '/images/HeroImg2.png', 
        alt: 'AI technology trends in software',
        review: "Their AI solutions revolutionized our business operations. Highly recommend their services!",
        client: "Sarah Johnson - CTO, AI Solutions Inc."
    },
    {
        img: '/images/HeroImg3.png',
        alt: 'Cutting-edge AI applications',
        review: "The AI applications they developed have given us a competitive edge in the market.",
        client: "Michael Brown - Director, FutureTech"
    },
    {
        img: '/images/HeroImg4.png',
        alt: 'Latest AI innovations',
        review: "Their innovative approach to AI development has exceeded all our expectations.",
        client: "Emily Davis - Head of R&D, NextGen AI"
    },
  ]

  return (
    <div className="relative overflow-hidden py-12">
      <div
        ref={carouselRef}
        className="flex gap-8 w-max heroimges"
      >
        {card.map((card, index) => (
          <div
            key={index}
            className="group card flex-shrink-0 w-[287px] h-[338px] bg-black rounded-2xl shadow-xl flex items-center justify-center text-2xl font-bold object-cover overflow-hidden relative transform-style-3d"
          >
            <div className="absolute inset-0 transition-transform duration-500 group-hover:rotate-y-180 backface-hidden">
              <img src={card.img} alt={card.alt} className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-8 transform rotate-y-180 backface-hidden transition-all duration-500 group-hover:rotate-y-0 group-hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <img src={card.img} className="w-10 h-10 rounded-full object-cover border-2 border-[#5209DE]" />
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-lg">Client Review</span>
                  <span className="text-gray-400 text-sm">Verified Customer</span>
                </div>
              </div>
              <p className="text-white text-base leading-relaxed mb-3">
                "{card.review}"
              </p>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <p className="mt-4 text-yellow-600 text-sm font-medium italic">- {card.client}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;