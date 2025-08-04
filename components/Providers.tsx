'use client';

import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from './ThemeProvider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster position="top-center" closeButton />
      {children}
    </ThemeProvider>
  );
}
