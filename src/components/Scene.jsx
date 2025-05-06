"use client";
import React, { useRef, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { Model } from "./Model";

const Scene = ({ progress = 0, modelRef }) => {
  const cameraRef = useRef(null);

  // Memoize camera positions to avoid recreating array on each render
  const cameraPositions = useMemo(() => [
    [-4.6, 0.6, 8.8],
    [7.6, -4.6, 4.3],
    [-5.6, 2.6, 7.6],
    [3.1, -2.7, 8.8],
  ], []);

  // Use useFrame with a dependency to prevent unnecessary calculations
  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(0, 0, 0);
    }
  });
  
  // Update camera position based on progress
  useEffect(() => {
    if (!cameraRef.current) return;
    
    let x, y, z;
    
    if (progress <= 0.33) {
      const percentage = progress / 0.33;
      const [startX, startY, startZ] = cameraPositions[0];
      const [endX, endY, endZ] = cameraPositions[1];
      x = startX + (endX - startX) * percentage;
      y = startY + (endY - startY) * percentage;
      z = startZ + (endZ - startZ) * percentage;
    } else if (progress <= 0.66) {
      const percentage = (progress - 0.33) / 0.33;
      const [startX, startY, startZ] = cameraPositions[1];
      const [endX, endY, endZ] = cameraPositions[2];
      x = startX + (endX - startX) * percentage;
      y = startY + (endY - startY) * percentage;
      z = startZ + (endZ - startZ) * percentage;
    } else {
      const percentage = (progress - 0.66) / 0.34;
      const [startX, startY, startZ] = cameraPositions[2];
      const [endX, endY, endZ] = cameraPositions[3];
      x = startX + (endX - startX) * percentage;
      y = startY + (endY - startY) * percentage;
      z = startZ + (endZ - startZ) * percentage;
    }
    
    cameraRef.current.position.set(x, y, z);
  }, [progress, cameraPositions]);

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        fov={45}
        near={0.1}
        far={1000} // Reduced from 10000 for better performance
        makeDefault
        position={cameraPositions[0]}
      />
      <Environment preset="city" />
      <Model ref={modelRef} />
    </>
  );
};

export default React.memo(Scene);
