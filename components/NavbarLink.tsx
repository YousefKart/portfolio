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
  scale = true,
  children,
}: NavbarLinkProps) {
  const isHashLink = href.startsWith('#'); // Use regular anchor tag for in-page navigation and NextLink for page navigation

  if (isHashLink) {
    return (
      <a
        href={href}
        target={target}
        title={label}
        className={cn(
          'transition duration-100 hover:text-foreground/50',
          scale ? 'hover:scale-105' : 'hover:scale-100'
        )}
      >
        {children}
      </a>
    );
  }

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
