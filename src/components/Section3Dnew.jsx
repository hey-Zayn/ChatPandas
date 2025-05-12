"use client";
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "./Scene";

// Constants for better maintainability
const CONTENT = {
  title: "Bridging Cultural Gaps",
  description: "As the top BPO agency, we bridge cultural gaps, making every interaction feel native."
};

// Optimized reusable component with memoization
const ContentSection = React.memo(({ align = "center", topPosition = "50%" }) => {
  const alignmentClasses = useMemo(() => ({
    left: "text-left",
    right: "text-right",
    center: "text-center"
  }), []);

  // Pre-split content for better performance
  const [titleFirst, titleRest] = useMemo(() => [
    CONTENT.title.split(' ')[0],
    CONTENT.title.split(' ').slice(1).join(' ')
  ], []);

  const [descFirst, descRest] = useMemo(() => [
    CONTENT.description.split(' ').slice(0, 7).join(' '),
    CONTENT.description.split(' ').slice(7).join(' ')
  ], []);

  return (
    <div className={`absolute top-[${topPosition}] w-full z-10 px-10 pt-30 ${alignmentClasses[align]}`}>
      <h1 className="text-8xl text-white font-bold max-sm:text-3xl">
        {titleFirst} <br className="max-sm:hidden" />
        {titleRest}
      </h1>
      <h3 className="text-white text-2xl max-sm:text-xl">
        {descFirst} <br className="max-sm:hidden" /> 
        {descRest}
      </h3>
    </div>
  );
});

const Section3Dnew = () => {
  const mainRef = useRef(null);
  const sceneRef = useRef(null);
  const modelRef = useRef(null);
  const progressRef = useRef(0);
  const [isMounted, setIsMounted] = useState(false);
  const animationId = useRef(null);
  
  // Register plugins just once when component mounts
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    setIsMounted(true);
    return () => {
      if (animationId.current) cancelAnimationFrame(animationId.current);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  // Optimized model rotation animation using delta time
  const startModelAnimation = useCallback(() => {
    let lastTime = performance.now();
    
    const animate = (time) => {
      const delta = time - lastTime;
      lastTime = time;
      
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.0005 * delta;
      }
      animationId.current = requestAnimationFrame(animate);
    };
    
    animationId.current = requestAnimationFrame(animate);
  }, []);

  // Optimized scroll animations with debounced updates
  useEffect(() => {
    if (!mainRef.current || !sceneRef.current || !isMounted) return;

    let lastUpdate = 0;
    const updateInterval = 16; // ~60fps

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          const now = performance.now();
          if (now - lastUpdate > updateInterval) {
            progressRef.current = Math.min(self.progress, 1);
            lastUpdate = now;
          }
        },
      },
    });

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
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [startModelAnimation, isMounted]);

  // Memoized sections to prevent unnecessary re-renders
  const sections = useMemo(() => [
    {
      id: 1,
      content: <ContentSection />,
      className: "relative w-full h-screen",
      canvas: true
    },
    {
      id: 2,
      content: <ContentSection align="left" topPosition="40%" />,
      className: "relative flex justify-center items-center h-screen"
    },
    {
      id: 3,
      content: <ContentSection align="right" topPosition="40%" />,
      className: "relative flex justify-center items-center h-screen"
    },
    {
      id: 4,
      content: <ContentSection topPosition="30%" />,
      className: "w-full relative flex justify-center items-center h-[110vh]"
    }
  ], []);

  if (!isMounted) return null;

  return (
    <div ref={mainRef} className="w-full h-full overflow-hidden bg-[#30087D]">
      {sections.map(section => (
        <section key={section.id} className={section.className}>
          {section.content}
          {section.canvas && (
            <div ref={sceneRef} className="w-full h-full relative">
              <Canvas
                style={{ width: '100%', height: '100%' }}
                frameloop="demand"
                performance={{ min: 0.5 }}
                dpr={Math.min(window.devicePixelRatio, 2)}
              >
                <Scene progress={progressRef.current} modelRef={modelRef} />
              </Canvas>
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default React.memo(Section3Dnew);