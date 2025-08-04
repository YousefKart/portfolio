'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const ThemeSwitcher: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="cursor-pointer hover:text-foreground"
      title="Toggle theme"
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="w-6 h-6 transition duration-100 hover:text-foreground/50 hover:scale-105" />
      ) : (
        <Moon className="w-6 h-6 transition duration-100 hover:text-foreground/50 hover:scale-105" />
      )}
    </div>
  );
};

export default ThemeSwitcher;
