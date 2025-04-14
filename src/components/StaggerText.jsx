"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function StaggerText({ text, className = "", delay = 0 }) {
  const textRef = useRef(null)

  useEffect(() => {
    if (!textRef.current) return

    // Split text into spans for each character
    const element = textRef.current
    const characters = text.split("")

    // Clear the element
    element.innerHTML = ""

    // Create spans for each character
    characters.forEach((char) => {
      const span = document.createElement("span")
      span.className = "inline-block opacity-0"
      span.textContent = char === " " ? "\u00A0" : char
      element.appendChild(span)
    })

    // Animate each character with GSAP
    const chars = element.querySelectorAll("span")

    gsap.fromTo(
      chars,
      {
        y: 40,
        opacity: 0,
        rotationX: 90,
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: "back.out(1.7)",
        delay: delay,
      },
    )

    // Cleanup function
    return () => {
      gsap.killTweensOf(chars)
    }
  }, [text, delay])

  return (
    <div ref={textRef} className={className} aria-label={text}>
      {text}
    </div>
  )
}
