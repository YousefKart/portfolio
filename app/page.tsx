'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { useTheme } from 'next-themes';
import StarBackground from '@/components/StarBackground';
import BubbleBackground from '@/components/BubbleBackground';

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col w-full h-screen bg-muted">
      {theme === 'dark' ? <StarBackground /> : <BubbleBackground />}

      <Navbar />

      <main className="flex-1 bg-gradient-to-b from-background to-accent">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}
