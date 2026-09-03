"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Sparkles, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

// Three translucent rings = the three layers of the stack: UI, API, Data.
// They counter-rotate to read as one living system rather than a static logo.
function Ring({
  radius,
  tube,
  color,
  speed,
  tilt,
}: {
  radius: number;
  tube: number;
  color: string;
  speed: number;
  tilt: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta * speed;
    ref.current.rotation.x = tilt;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, tube, 32, 128]} />
      <MeshTransmissionMaterial
        color={color}
        thickness={0.4}
        roughness={0.05}
        transmission={1}
        ior={1.2}
        chromaticAberration={0.04}
        distortion={0.1}
        distortionScale={0.2}
        temporalDistortion={0.1}
        emissive={color}
        emissiveIntensity={0.15}
      />
    </mesh>
  );
}

function Core() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[0.9, 2]} />
        <MeshTransmissionMaterial
          thickness={0.6}
          roughness={0.02}
          transmission={1}
          ior={1.4}
          chromaticAberration={0.06}
          distortion={0.15}
          color="#EAF0FF"
          emissive="#5FF0E0"
          emissiveIntensity={0.1}
        />
      </mesh>
      <Ring radius={1.6} tube={0.02} color="#5FF0E0" speed={0.25} tilt={0.5} />
      <Ring radius={2.05} tube={0.015} color="#7C5CFF" speed={-0.18} tilt={1.1} />
      <Ring radius={2.5} tube={0.012} color="#FF6FA8" speed={0.12} tilt={0.15} />
    </group>
  );
}

export default function StackCore() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 45 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 5, 5]} intensity={40} color="#5FF0E0" />
          <pointLight position={[-5, -3, -5]} intensity={30} color="#7C5CFF" />
          <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.9}>
            <Core />
          </Float>
          <Sparkles count={60} scale={6} size={2} speed={0.3} color="#5FF0E0" opacity={0.5} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
