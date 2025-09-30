import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';
import NavbarMobile from '@/components/NavbarMobile';
import Footer from '@/components/Footer';

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Yousef Kart',
  description: "Yousef Kart's Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} antialiased font-sans flex flex-col`}>
        <SpeedInsights />
        <Analytics />
        <Providers>
          <div className="hidden lg:block">
            <Navbar />
          </div>
          <div className="block lg:hidden">
            <NavbarMobile />
          </div>
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
