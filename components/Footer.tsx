import { Copyright } from 'lucide-react';

export default function Footer() {
  return (
    <div className="flex items-center justify-center h-12 px-2 w-full gap-2 bg-accent">
      <Copyright className="size-4" />
      {new Date().getFullYear()} Yousef Kart
    </div>
  );
}
