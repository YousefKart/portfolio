import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavbarLinkProps {
  href: string;
  target?: string;
  label?: string;
  scale?: boolean;
  children?: React.ReactNode;
}

export function NavbarLink({
  href = '',
  target = '',
  label,
  scale = false,
  children,
}: NavbarLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      title={label}
      className={cn(
        'transition duration-100 hover:text-foreground/50',
        scale ? 'hover:scale-105' : 'hover:scale-100'
      )}
    >
      {children}
    </Link>
  );
}
