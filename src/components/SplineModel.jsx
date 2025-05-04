"use client";
import Spline from '@splinetool/react-spline';
import { Suspense } from 'react';

export default function SplineModel() {
  return (
    <main className="w-full h-full">
      <Suspense fallback={<div>Loading 3D Model...</div>}>
        <Spline 
          scene="https://prod.spline.design/AAFqKJ70IgxxvJi5/scene.splinecode"
        />
      </Suspense>
    </main>
  );
}
