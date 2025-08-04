import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { StarBackground } from '@/components/StarBackground';

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen bg-muted">
      <Navbar />
      <StarBackground />

      <main className="flex-1 bg-gradient-to-b from-background to-accent">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
