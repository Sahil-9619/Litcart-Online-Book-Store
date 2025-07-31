import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// Custom starfield component
const StarField = () => {
  const groupRef = useRef();

  // Memoize star positions for performance
  const stars = useMemo(() => {
    return Array.from({ length: 1500 }, () => ({
      position: [
        (Math.random() - 0.5) * 1000,
        (Math.random() - 0.5) * 1000,
        -Math.random() * 1000,
      ],
    }));
  }, []);

  // Slow rotation animation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      {stars.map((star, i) => (
        <mesh key={i} position={star.position}>
          <sphereGeometry args={[0.35, 6, 6]} />
          <meshBasicMaterial color="white" />
        </mesh>
      ))}
    </group>
  );
};

// Exported canvas with camera setup
export const StarCanvas = () => (
  <Canvas
    camera={{ position: [0, 0, 1] }}
    className="absolute inset-0 z-0 pointer-events-none"
  >
    <StarField />
  </Canvas>
);
