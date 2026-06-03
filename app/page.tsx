'use client';

import HeroExperience from '@/components/HeroExperience';
import Projects from '@/components/Projects';
import Models from '@/components/Models';
import CubeBackground from '@/components/backgrounds/Custom3DBackground';

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-background/0 to-background">
      <CubeBackground />

      <main className="flex-1">
        <div className="flex flex-col gap-32 w-full sm:w-3/4 mx-auto mb-16">
          <HeroExperience />
          <Projects />
          <Models />
        </div>
      </main>
    </div>
  );
}
