import Link from 'next/link';
import { Copyright } from 'lucide-react';
import Contact from '@/components/Contact';

export default function Footer() {
  const quickLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#models', label: 'Models' },
    { href: '/resume', label: 'Resume' },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-accent/30">
      <div className="w-full sm:w-3/4 mx-auto px-4 py-12 space-y-10">
        <Contact />
      </div>

      <div className="border-t border-border/60">
        <div className="w-full sm:w-3/4 mx-auto px-4 py-3 text-sm text-muted-foreground flex flex-col gap-1 sm:h-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Copyright className="size-4" />
            {new Date().getFullYear()} Yousef Kart
          </div>
        </div>
      </div>
    </footer>
  );
}
