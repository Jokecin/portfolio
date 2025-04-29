'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';
import { Suspense } from 'react';

export default function HeroCanvas() {
  return (
    <Canvas className="h-[60vh]">
      <ambientLight intensity={0.7} />
      <Suspense fallback={null}>
        <Float speed={2} floatIntensity={1.5}>
          <mesh>
            <torusKnotGeometry args={[1.1, 0.4, 128, 32]} />
            <meshStandardMaterial color="#4f46e5" roughness={0.25} metalness={0.85} />
          </mesh>
        </Float>
        <Environment preset="sunset" />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
