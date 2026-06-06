'use client';

import HeroExperience from '@/components/Main';
import Projects from '@/components/Projects';
// import Models from '@/components/Models';
import CubeBackground from '@/components/backgrounds/Custom3DBackground';

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-50% from-background/0 to-background">
      <CubeBackground />

      <main className="flex-1">
        <div className="flex flex-col gap-16 w-full xl:w-3/5 mx-auto mb-16">
          <HeroExperience />
          <Projects />
          {/* <Models /> */}
        </div>
      </main>
    </div>
  );
}
