"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";

export default function SkillOrb({
  color = "#5FF0E0",
  size = 1,
  className = "",
}: {
  color?: string;
  size?: number;
  className?: string;
}) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 3.2], fov: 40 }} dpr={[1, 1.6]} gl={{ alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <pointLight position={[3, 3, 3]} intensity={25} color={color} />
          <Float speed={2} rotationIntensity={0.8} floatIntensity={1.6}>
            <mesh scale={size}>
              <sphereGeometry args={[1, 64, 64]} />
              <MeshDistortMaterial
                color={color}
                distort={0.35}
                speed={1.6}
                roughness={0.1}
                metalness={0.2}
                transparent
                opacity={0.85}
              />
            </mesh>
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}
