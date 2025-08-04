'use client';

import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { useTheme } from 'next-themes';
import StarBackground from '@/components/StarBackground';
import BubbleBackground from '@/components/BubbleBackground';

export default function Home() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex flex-col w-full h-full bg-background">
      {resolvedTheme === 'dark' ? <StarBackground /> : <BubbleBackground />}

      <main className="flex-1 bg-gradient-to-b from-background to-accent mt-16">
        <div className="flex flex-col gap-32 w-1/2 mx-auto mt-32">
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}
