"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins outside component but inside client code
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const Section6 = () => {
  // Use refs to store DOM elements
  const containerRef = useRef(null)
  const stickyTitleRef = useRef(null)

  // Services data
  const services = [
    {
      id: 1,
      title: "SEO & Lead Generation",
      description: "Get to the Top Page of Search Engines: With targeted Revenue growth.",
    },
    {
      id: 2,
      title: "Paid Marketing Media & CRO",
      description:
        "Simplify complaint resolution, boost customer support, generate leads, and enhance sales through our live chat assistance.",
    },
    {
      id: 3,
      title: "IT & Development Technology",
      description: "Help your clients understand their problems and provide effective solutions.",
    },
    {
      id: 4,
      title: "Business Servicing",
      description:
        "Our top tier technical expertise in BPO outsourcing helps you tackle tough problems, improve efficiency and expand customer base.",
    },
    {
      id: 5,
      title: "AI Development",
      description:
        "Drive business growth by expanding your customer base through targeted strategies that effectively connect you with potential clients, unlocking new opportunities for success.",
    },
  ]

  useEffect(() => {
    // Make sure we're in the browser environment
    if (typeof window === "undefined") return

    // Clear any existing ScrollTrigger instances to prevent conflicts
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

    // Get DOM elements after they're rendered
    const cards = document.querySelectorAll(".Scard")
    const cardSticky = document.querySelectorAll(".card_sticky")
    const imgs = document.querySelectorAll(".Scard img")
    const stickytitle = stickyTitleRef.current
    const lastCard = cardSticky[cardSticky.length - 1]

    if (!stickytitle || !lastCard || cardSticky.length === 0) return

    // Calculate end position correctly
    const calculateEndPosition = () => {
      const lastCardOffset = lastCard.offsetTop
      // Add a base value plus offset per card
      const stackOffset = cardSticky.length * 50
      return lastCardOffset + stackOffset
    }

    const endPos = calculateEndPosition()

    // Create GSAP animation for the sticky title
    const titleAnim = gsap.to(stickytitle, {
      scrollTrigger: {
        trigger: stickytitle,
        start: window.innerWidth < 640 ? "top top-=80" : "top top+=100",
        end: endPos,
        pin: true,
        pinSpacing: false,
        scrub: true,
      },
      y: (cardSticky.length - 1) * 30,
      zIndex: cardSticky.length + 1,
    })

    // Create animations for each card
    const cardAnims = []
    Array.from(cardSticky).forEach((card, index) => {
      const anim = gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top top+=100",
          end: endPos,
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
        y: index === cardSticky.length - 1 ? 0 : index * 30,
        rotation: index === cardSticky.length - 1 ? 0 : index % 2 === 0 ? -5 : 5,
        zIndex: index + 1,
      })
      cardAnims.push(anim)
    })

    // Store event listeners for cleanup
    const listeners = []

    // Add hover effects to cards
    Array.from(cards).forEach((card, index) => {
      const img = imgs[index]

      const handleMouseEnter = () => {
        gsap.to(img, {
          opacity: 1,
          scale: 1.2,
          rotate: index % 2 === 0 ? 10 : -10,
          y: -20,
          x: -10,
          duration: 0.3,
        })
        gsap.to(card, {
          backgroundColor: index % 2 === 0 ? "rgb(24, 4, 181)" : "rgb(222, 31, 98)",
          borderColor: "black",
          color: "white",
          rotate: index % 2 === 0 ? 5 : -5,
          duration: 0.3,
        })
      }

      const handleMouseLeave = () => {
        gsap.to(img, {
          scale: 1,
          opacity: 0,
          rotate: 0,
          x: 0,
          duration: 0.3,
        })
        gsap.to(card, {
          backgroundColor: "rgb(238,228,210)",
          borderColor: "black",
          color: "black",
          rotate: index % 2 === 0 ? 4 : -4,
          duration: 0.3,
        })
      }

      card.addEventListener("mouseenter", handleMouseEnter)
      card.addEventListener("mouseleave", handleMouseLeave)

      // Store listeners for proper cleanup
      listeners.push({
        element: card,
        enter: handleMouseEnter,
        leave: handleMouseLeave,
      })
    })

    // Handle window resize
    const handleResize = () => {
      // Refresh ScrollTrigger on resize
      ScrollTrigger.refresh(true)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup function
    return () => {
      // Kill all ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

      // Kill specific animations
      titleAnim.kill()
      cardAnims.forEach((anim) => anim.kill())

      // Remove window event listener
      window.removeEventListener("resize", handleResize)

      // Remove card event listeners using stored references
      listeners.forEach(({ element, enter, leave }) => {
        element.removeEventListener("mouseenter", enter)
        element.removeEventListener("mouseleave", leave)
      })
    }
  }, []) // Empty dependency array to run only once

  return (
    <div ref={containerRef} className="pb-[3%] w-full pt-[10%] overflow-hidden bg-[rgb(238,228,210)]">
      <div className="flex flex-col sm:flex-col md:flex-row xl:flex-row lg:flex-row gap-[2%] max-sm:gap-4">
        <div className="w-[30%] h-20 m-[4%] mr-0">
          <h1
            ref={stickyTitleRef}
            id="sticky"
            className="z-20 p-4 pt-0 pb-0 mt-6 outline-none border-none 
            text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 
            font-bold text-black"
          >
            Our Services
          </h1>
        </div>
        <div className="flex flex-col h-full w-[80%] m-[4%] text-black">
          {services.map((service) => (
            <div
              key={service.id}
              className="Scard flex-grow-1 card_sticky border-solid border-[1px] bg-[rgb(238,228,210)] border-black rounded-lg m-6 w-[100%] h-full sm:w-[95%] md:w-[95%] lg:w-[95%] xl:w-[95%] 2xl:w-[95%] z-[1]"
            >
              <div className="flex justify-between">
                <div className="w-full">
                  <h6 className="p-6 pb-1">{`0${service.id}`}</h6>
                  <h1 className="pt-0 w-full p-6 max-sm:pr-0 max-sm:pb-3 text-3xl sm:text-3xl 2xl:text-5xl md:text-3xl lg:text-3xl font-medium">
                    {service.title}
                  </h1>
                </div>
                <div className="w-[60%] relative">
                  <Image
                    src="/images/headphones.svg"
                    alt="headphones"
                    width={150}
                    height={150}
                    className="-mt-[20%] will-change-transform opacity-0 absolute top-0 right-0"
                    priority={service.id === 1}
                  />
                </div>
              </div>
              <p className="p-6 pt-5 max-sm:pt-0 pb-3 text-justify text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section6
