'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import NavbarMobile from '@/components/NavbarMobile';
import Footer from '@/components/Footer';

type SiteChromeProps = {
  children: ReactNode;
};

export default function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname();
  const hideChrome = pathname === '/resume';

  if (hideChrome) {
    return <main className="flex-1">{children}</main>;
  }

  return (
    <>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <NavbarMobile />
      </div>
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
