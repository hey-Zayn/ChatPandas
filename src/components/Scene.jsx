"use client";
import React, { useRef, useEffect, useMemo, useCallback } from "react";
import { useFrame } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Model } from "./Model";

// Pre-calculate camera position segments
const CAMERA_SEGMENTS = [
  { start: 0, end: 0.33, from: 0, to: 1 },
  { start: 0.33, end: 0.66, from: 1, to: 2 },
  { start: 0.66, end: 1, from: 2, to: 3 }
];

const Scene = ({ progress = 0, modelRef }) => {
  const cameraRef = useRef(null);
  const lastProgress = useRef(progress);

  // Memoize camera positions to avoid recreating array on each render
  const cameraPositions = useMemo(() => [
    [-4.6, 0.6, 8.8],
    [7.6, -4.6, 4.3],
    [-5.6, 2.6, 7.6],
    [3.1, -2.7, 8.8],
  ], []);

  // Optimized camera position calculation
  const calculateCameraPosition = useCallback((progress) => {
    const segment = CAMERA_SEGMENTS.find(s => progress >= s.start && progress <= s.end);
    if (!segment) return cameraPositions[0];

    const percentage = (progress - segment.start) / (segment.end - segment.start);
    const [startX, startY, startZ] = cameraPositions[segment.from];
    const [endX, endY, endZ] = cameraPositions[segment.to];

    return [
      startX + (endX - startX) * percentage,
      startY + (endY - startY) * percentage,
      startZ + (endZ - startZ) * percentage
    ];
  }, [cameraPositions]);

  // Initialize camera position immediately on mount
  useEffect(() => {
    if (cameraRef.current) {
      const [x, y, z] = calculateCameraPosition(progress);
      cameraRef.current.position.set(x, y, z);
      cameraRef.current.lookAt(0, 0, 0);
    }
  }, [calculateCameraPosition, progress]);

  // Use useFrame to continuously update camera lookAt
  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(0, 0, 0);
    }
  });

  // Update camera position based on progress
  useEffect(() => {
    if (!cameraRef.current || progress === lastProgress.current) return;
    
    const [x, y, z] = calculateCameraPosition(progress);
    cameraRef.current.position.set(x, y, z);
    lastProgress.current = progress;
  }, [progress, calculateCameraPosition]);

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        fov={45}
        near={0.1}
        far={1000}
        makeDefault
        position={cameraPositions[0]}
      />
      <Environment preset="city" />
      <Model 
        ref={modelRef} 
        rotation={[0, 0, 0]}
        // scale={[60, 60, 60]} // Increased scale from [10,10,10] to [15,15,15] for larger model size
      />
    </>
  );
};

export default React.memo(Scene);
