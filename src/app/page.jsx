'use client'

import Hero from '@/components/Hero'
import PandaScroll from '@/components/PangaScroll'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import Section7 from '@/components/Section7'
import Section8 from '@/components/Section8'
import Section9_Form from '@/components/Section9_Form'
import Section6 from '@/components/Section6'
import ClientsSlider from '@/components/ClientsSlider'
import Section3Dnew from '@/components/Section3Dnew'
import { useEffect, useCallback } from 'react';

// Define breakpoints as constants for maintainability
const BREAKPOINTS = [640, 1024];

function useScreenSizeReload() {
  const debounce = useCallback((func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }, []);

  useEffect(() => {
    let previousWidth = window.innerWidth;

    const handleResize = () => {
      const currentWidth = window.innerWidth;
      
      // Check if crossed any breakpoint
      const crossedBreakpoint = BREAKPOINTS.some(bp => 
        (previousWidth < bp && currentWidth >= bp) ||
        (previousWidth >= bp && currentWidth < bp)
      );

      if (crossedBreakpoint) {
        window.location.reload();
      }
      previousWidth = currentWidth;
    };

    const debouncedResize = debounce(handleResize, 100);
    window.addEventListener('resize', debouncedResize);
    
    return () => window.removeEventListener('resize', debouncedResize);
  }, [debounce]);
}

export default function Home() {
  useScreenSizeReload();
  
  return (
    <>
      <Hero />
      <Section2 />
      <Section3 />
      <Section3Dnew />
      <Section6 />
      <ClientsSlider />
      <Section7 />
      <Section8 />
      <Section9_Form />
      <PandaScroll />
    </>
  );
}
