"use client";
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "./Scene";

// Extracted reusable component for sections
const ContentSection = ({ align = "center", topPosition = "50%" }) => (
  <div className={`absolute top-[${topPosition}] w-full z-10 px-10 pt-30 ${
    align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center"
  }`}>
    <h1 className="text-8xl text-white font-bold max-sm:text-3xl">
      Bridging <br className="max-sm:hidden" />
      Cultural Gaps
    </h1>
    <h3 className="text-white text-2xl max-sm:text-xl">
      As the top BPO agency, we bridge cultural <br className="max-sm:hidden" /> 
      gaps, making every interaction feel native.
    </h3>
  </div>
);

const Section3Dnew = () => {
  const mainRef = useRef(null);
  const sceneRef = useRef(null);
  const modelRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [animationId, setAnimationId] = useState(null);
  
  // Register plugins just once when component mounts
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    return () => {
      // Clean up animation frame on unmount
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [animationId]);
  
  // Setup scroll animations
  useEffect(() => {
    if (!mainRef.current || !sceneRef.current) return;
    
    // Create animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          // Only update when progress changes significantly to reduce state updates
          const newProgress = Math.min(self.progress, 1);
          if (Math.abs(newProgress - progress) > 0.01) {
            setProgress(newProgress);
          }
        },
      },
    });
    
    // Setup model rotation animation that runs at a consistent frame rate
    const startModelAnimation = () => {
      let lastTime = 0;
      
      const animate = (time = 0) => {
        const id = requestAnimationFrame(animate);
        setAnimationId(id);
        
        // Only update rotation if model exists and enough time has passed (throttling)
        if (modelRef.current) {
          // Calculate time delta for smoother animation regardless of frame rate
          const delta = time - lastTime;
          if (delta > 16) { // Aim for ~60fps (16.6ms per frame)
            const rotationSpeed = 0.0005;
            modelRef.current.rotation.y += rotationSpeed * delta;
            lastTime = time;
          }
        }
      };
      
      const id = requestAnimationFrame(animate);
      setAnimationId(id);
      return id;
    };
    
    // Add position animations
    tl.to(sceneRef.current, {
      ease: "none",
      x: '25vw',
      y: "100vh",
      onStart: startModelAnimation,
    })
    .to(sceneRef.current, {
      ease: "none",
      x: '-25vw',
      y: "200vh",
    })
    .to(sceneRef.current, {
      ease: "none",
      x: '0vw',
      y: "300vh",
    });
    
    return () => {
      tl.kill(); // Clean up GSAP animations
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);
  
  // Memoize sections for desktop to prevent unnecessary re-renders
  const desktopSections = useMemo(() => (
    <>
      <section className="relative w-full h-screen">
        <ContentSection />
        <div ref={sceneRef} className="w-full h-full">
          <Canvas
            style={{ width: '100%', height: '100%' }}
            frameloop="demand" // Only render when needed
            performance={{ min: 0.5 }} // Enable performance optimizations
          >
            <Scene progress={progress} modelRef={modelRef} />
          </Canvas>
        </div>
      </section>
      
      <section className="relative flex justify-center items-center h-screen">
        <ContentSection align="left" topPosition="40%" />
      </section>

      <section className="relative flex justify-center items-center h-screen">
        <ContentSection align="right" topPosition="40%" />
      </section>
      
      <section className="w-full relative flex justify-center items-center h-[110vh]">
        <ContentSection topPosition="30%" />
      </section>
    </>
  ), [progress]);
  
  // Mobile sections - only render when needed
  const mobileSections = useMemo(() => (
    <>
      <section className="relative w-full h-[60vh]">
        <ContentSection />
      </section>
      
      <section className="relative flex justify-center items-center h-[60vh]">
        <ContentSection align="left" topPosition="40%" />
      </section>

      <section className="relative flex justify-center items-center h-[60vh]">
        <ContentSection align="right" topPosition="40%" />
      </section>
      
      <section className="w-full relative flex justify-center items-center h-[60vh]">
        <ContentSection topPosition="30%" />
      </section>
    </>
  ), []);

  return (
    <>
      <div ref={mainRef} className="w-full h-full overflow-hidden bg-[#30087D] max-sm:hidden lg:block">
        {desktopSections}
      </div>
      
      <div className="w-full h-full overflow-hidden bg-[#30087D] sm:block md:hidden max-lg:hidden">
        {mobileSections}
      </div>
    </>
  );
};

export default React.memo(Section3Dnew);