"use client";
import React, { uesEffect } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Model } from "./Model";
import { useRef } from "react";
import { useEffect } from "react";
const Scene = ({ progress = 0, modelRef }) => {
  const cameraRef = useRef(null);


  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(0, 0, 0);
    }
  });
  
  useEffect(() => {
    const updateCamPos = () => {
      const positions = [
        [-4.6, 0.6, 8.8],
        [7.6, -4.6, 4.3],
        [-5.6, 2.6, 7.6],
        [3.1, -2.7, 8.8],
      ];

      if (progress <= 0.33) {
        const percentage = progress / 0.33;
        const [startX, startY, startZ] = positions[0];
        const [endX, endY, endZ] = positions[1];
        const x = startX + (endX - startX) * percentage;
        const y = startY + (endY - startY) * percentage;
        const z = startZ + (endZ - startZ) * percentage;
        cameraRef.current.position.set(x, y, z);
      } else if (progress <= 0.66) {
        const percentage = (progress - 0.33) / 0.33;
        const [startX, startY, startZ] = positions[1];
        const [endX, endY, endZ] = positions[2];
        const x = startX + (endX - startX) * percentage;
        const y = startY + (endY - startY) * percentage;
        const z = startZ + (endZ - startZ) * percentage;
        cameraRef.current.position.set(x, y, z);
      } else {
        const percentage = (progress - 0.66) / 0.34;
        const [startX, startY, startZ] = positions[2];
        const [endX, endY, endZ] = positions[3];
        const x = startX + (endX - startX) * percentage;
        const y = startY + (endY - startY) * percentage;
        const z = startZ + (endZ - startZ) * percentage;
        cameraRef.current.position.set(x, y, z);
      }
      const animate = (t = 0) => {
        requestAnimationFrame(animate);
        // modelRef.current.rotation.y = t * .001;
      };
      animate();
    };
    // requestAnimationFrame(updateCamPos);
    updateCamPos();
  }, [progress]);

  return (
    <>
      {/* <OrbitControls /> */}
      <PerspectiveCamera
        ref={cameraRef}
        fov={45}
        near={0.1}
        far={10000}
        makeDefault
        position={[-4.6, 0.6, 8.8]}
        // position={[7.6, -4.6, 4.3]}
        // position={[-5.6, 2.6, 7.6]}
        // position={[3.1, -2.7, 8.8]}
      />
      <Environment preset="city" />
      <Model ref={modelRef} />
      {/* <axesHelper args={[500]} /> */}
    </>
  );
};

export default Scene;
