'use client';

import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage } from '@react-three/drei';
import { Suspense } from 'react';
import { ModelType } from '@/lib/types/ModelType';

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

interface ModelItemProps {
  data: ModelType;
  index: number;
}

export function ModelItem({ data, index }: ModelItemProps) {
  return (
    <div
      className="group relative aspect-square overflow-hidden"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* 3D Canvas */}
      <Canvas
        className="absolute inset-0"
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6} adjustCamera={1.2}>
            <Model url={data.url} />
          </Stage>
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            autoRotate
            autoRotateSpeed={0.5}
            minDistance={0.1}
            maxDistance={100}
          />
        </Suspense>
      </Canvas>

      {/* Label */}
      <div className="absolute bottom-0 inset-x-0  px-3 pb-2.5 pt-8">
        <p className="text-white/90 text-xs font-semibold tracking-wide truncate">
          {data.name}
        </p>
        {data.description && (
          <p className="text-white/40 text-[0.65rem] truncate mt-0.5">
            {data.description}
          </p>
        )}
      </div>
    </div>
  );
}
