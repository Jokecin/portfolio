// src/components/HeroCanvas.tsx
'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Torus } from '@react-three/drei';

export default function HeroCanvas() {
  return (
    <Canvas style={{ height: 400, width: 400 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} />
      <Torus args={[1, 0.4, 16, 100]} rotation={[Math.PI/2, 0, 0]}>
        <meshStandardMaterial color="#7e22ce" />
      </Torus>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
