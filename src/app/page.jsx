'use client'
import Index from "./Index";
import React from "react";
import { useEffect } from 'react';

function useScreenSizeReload() {
  useEffect(() => {
    let previousSize = getScreenSize();

    const handleResize = () => {
      const currentSize = getScreenSize();
      if (currentSize !== previousSize) {
        window.location.reload();
      }
      previousSize = currentSize;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function getScreenSize() {
    const width = window.innerWidth;
    if (width < 640) return 'sm';
    if (width < 1024) return 'md';
    return 'lg';
  }
}

export default function Home() {
  useScreenSizeReload();
  
  return (
    <>
     <Index/>
    </>
  );
}


