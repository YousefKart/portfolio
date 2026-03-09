import { ContactType } from '@/lib/types/ContactType';
import { cn } from '@/lib/utils';
import { hover } from '@/lib/utils';

interface ContactItemProps {
  data: ContactType;
}

export function ContactItem({ data }: ContactItemProps) {
  const isExternal = data.target === '_blank';

  return (
    <a
      href={data.href}
      target={data.target}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={cn(
        'group flex min-h-16 items-center gap-3 border rounded-xl px-4 py-3 backdrop-blur bg-background/60',
        hover
      )}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground border border-border/60">
        <data.icon className="size-4" />
      </div>
      <h2 className="text-sm sm:text-base leading-tight break-all sm:break-normal">
        {data.title}
      </h2>
    </a>
  );
}
