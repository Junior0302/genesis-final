"use client";

import { useFBX } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { createPremiumMaterial } from "./config/materials";
import { MODEL_CONFIG } from "./config/modelSettings";
import { useModelAnimation } from "./hooks/useModelAnimation";
import { useModelScroll } from "./hooks/useModelScroll";

import { ThreeElements } from "@react-three/fiber";

export default function Model(props: ThreeElements["group"]) {
  const fbx = useFBX("/model/Standing.fbx");
  const ref = useRef<THREE.Group>(null);
  
  const [scale, setScale] = useState<number>(MODEL_CONFIG.scale);
  const [position, setPosition] = useState<[number, number, number]>(() => [
    ...MODEL_CONFIG.position
  ] as [number, number, number]);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      
      setScale(isMobile ? MODEL_CONFIG.scaleMobile : MODEL_CONFIG.scale);
      const nextPosition = isMobile ? MODEL_CONFIG.positionMobile : MODEL_CONFIG.position;
      setPosition([...nextPosition] as [number, number, number]);
      
      const material = createPremiumMaterial(isMobile);
      fbx.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          mesh.material = material;
          mesh.frustumCulled = false;
        }
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [fbx]);

  useModelAnimation(fbx.animations, ref);

  useModelScroll(ref);

  return (
    <group ref={ref} {...props} dispose={null}>
      <primitive 
        object={fbx} 
        scale={scale} 
        position={position} 
      />
    </group>
  );
}
