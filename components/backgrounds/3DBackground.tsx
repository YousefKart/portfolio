'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Cube({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.rotation.x += delta * 0.03;
    ref.current.rotation.y += delta * 0.07;
  });

  return (
    <Float speed={0.4} rotationIntensity={0.5} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#ffffff"
          roughness={0.35}
          metalness={0.25}
          transparent
          opacity={0.35}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function CubeBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 55 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 4, 4]} intensity={1} />

        <Cube position={[-6, 1.8, 0]} scale={1.4} />
        <Cube position={[5.5, 1.2, -1]} scale={1.1} />
        <Cube position={[-6.2, -2.1, -0.5]} scale={0.9} />
        <Cube position={[6.2, -2.4, 0.5]} scale={1.5} />
        <Cube position={[7.5, 3.5, -2]} scale={0.7} />
      </Canvas>
    </div>
  );
}
