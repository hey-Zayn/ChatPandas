import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function DesignerIntro() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const dividerRef = useRef(null);
  const whatWeDoRef = useRef(null);
  
  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Split text animation setup
    const heading = headingRef.current;
    const headingText = heading.innerHTML;
    
    // Create spans for each word to animate separately
    const words = headingText.split(' ');
    heading.innerHTML = '';
    
    words.forEach((word, i) => {
      const wordSpan = document.createElement('span');
      wordSpan.innerHTML = word + (i < words.length - 1 ? ' ' : '');
      wordSpan.className = i === 2 || i === 3 ? 'bg-gradient-to-r from-[#330380] to-[#6E0AD9] bg-clip-text text-transparent' : '';
      heading.appendChild(wordSpan);
    });
    
    const wordElements = heading.querySelectorAll('span');
    
    // Set initial states
    gsap.set(wordElements, { y: 50, opacity: 0 });
    gsap.set(subHeadingRef.current, { y: 30, opacity: 0 });
    gsap.set(dividerRef.current, { scaleX: 0, transformOrigin: 'left' });
    gsap.set(whatWeDoRef.current, { y: 30, opacity: 0 });
    
    // Animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'top 20%',
        toggleActions: 'play none none none'
      }
    });
    
    // Animate each word with a slight delay
    wordElements.forEach((word, i) => {
      tl.to(word, { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        ease: 'power3.out' 
      }, i * 0.1);
    });
    
    tl.to(subHeadingRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.4')
    .to(dividerRef.current, {
      scaleX: 1,
      duration: 0.6,
      ease: 'power1.out'
    }, '-=0.2')
    .to(whatWeDoRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.3');
    
    return () => {
      // Clean up ScrollTrigger
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black text-white min-h-screen w-full flex flex-col justify-center px-6 md:px-16 overflow-hidden">
      <div className="w-full flex flex-col justify-center items-center">
        {/* Main heading */}
        <h1 ref={headingRef} className="text-3xl md:text-5xl font-medium mb-4 text-center">
          We're Forward Sols. We create innovative digital solutions that drive business success and growth. Our team specializes in crafting cutting-edge technologies that transform industries and empower organizations to thrive in the digital age.
        </h1>
        
        {/* Empty paragraph as spacer/subheading */}
        <p ref={subHeadingRef} className="opacity-70 text-lg md:text-xl mb-16">
          &nbsp;
        </p>
        
        {/* Divider line */}
        {/* <div ref={dividerRef} className="w-24 h-1 bg-gray-600 mb-12"></div> */}
        
        {/* What we do heading */}
        {/* <h2 ref={whatWeDoRef} className="text-3xl md:text-4xl font-medium">
          What we do
        </h2> */}
      </div>
      
      {/* Background gradient/overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 opacity-80 -z-10"></div>
      
      {/* Optional subtle background grid pattern */}
      {/* <div className="absolute inset-0 bg-[url('/api/placeholder/1200/800')] bg-center bg-cover opacity-10 -z-20"></div> */}
    </section>
  );
}