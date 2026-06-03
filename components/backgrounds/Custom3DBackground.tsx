'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, useGLTF } from '@react-three/drei';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import * as THREE from 'three';

const objects: Array<{
  name: string;
  position: [number, number, number];
  scale: number;
}> = [
  { name: 'Object_1', position: [5.5, 1.2, -1], scale: 0.5 },
  { name: 'Object_2', position: [-6.2, -2.1, -0.5], scale: 0.5 },
];

function CustomObject({
  name,
  position,
  scale = 1,
  index,
}: {
  name: string;
  position: [number, number, number];
  scale?: number;
  index: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const elapsed = useRef(0);
  const { resolvedTheme } = useTheme();
  const edgeColor = resolvedTheme === 'dark' ? '#f8fafc' : '#111827';
  const gltf = useGLTF(`/meshes/${name}.glb`) as any;
  const { scene, edgeObjects } = useMemo(() => {
    const cloned = gltf.scene.clone(true);
    const edgeObjects: THREE.LineSegments[] = [];
    const lineWidth = 1;

    cloned.traverse((child: any) => {
      if (child.isMesh) {
        child.visible = false;

        const edgeGeometry = new THREE.EdgesGeometry(child.geometry, 1);
        edgeGeometry.setDrawRange(0, 0);

        const edgeMaterial = new THREE.LineBasicMaterial({
          color: new THREE.Color(edgeColor),
          linewidth: lineWidth,
          depthTest: false,
        });

        const lines = new THREE.LineSegments(edgeGeometry, edgeMaterial);
        lines.userData.totalVertices =
          edgeGeometry.getAttribute('position').count;
        lines.position.copy(child.position);
        lines.rotation.copy(child.rotation);
        lines.scale.copy(child.scale);
        lines.renderOrder = 1;
        lines.updateMatrix();
        lines.matrixAutoUpdate = false;

        edgeObjects.push(lines);
      }
    });

    return { scene: cloned, edgeObjects };
  }, [gltf.scene, edgeColor]);

  useFrame((_, delta) => {
    if (!ref.current) return;

    elapsed.current += delta;
    const delay = index * 0.05;
    const duration = 1.5;
    const raw = Math.max(0, Math.min(1, (elapsed.current - delay) / duration));
    const ease = raw < 0.5 ? 2 * raw * raw : 1 - Math.pow(-2 * raw + 2, 2) / 2;

    edgeObjects.forEach((edge) => {
      const total = (edge.userData.totalVertices as number) || 0;
      edge.geometry.setDrawRange(0, Math.ceil(total * ease));
    });

    ref.current.rotation.x += delta * 0.03;
    ref.current.rotation.y += delta * 0.05;
  });

  return (
    <Float speed={0.5} rotationIntensity={0.5} floatIntensity={1.2}>
      <group
        ref={ref}
        position={[position[0], position[1], position[2]]}
        scale={scale}
      >
        <primitive object={scene} />
        {edgeObjects.map((edge, idx) => (
          <primitive key={idx} object={edge} />
        ))}
      </group>
    </Float>
  );
}

export default function CubeBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 55 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 4, 4]} intensity={1} />
        <Suspense fallback={null}>
          {objects.map((object, index) => (
            <CustomObject
              key={object.name}
              name={object.name}
              position={object.position}
              scale={object.scale}
              index={index}
            />
          ))}
        </Suspense>
      </Canvas>
    </div>
  );
}
