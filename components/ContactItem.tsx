import { ContactType } from '@/lib/types/ContactType';
import { cn } from '@/lib/utils';

interface ContactItemProps {
  data: ContactType;
}

export function ContactItem({ data }: ContactItemProps) {
  return (
    <a
      href={data.href}
      target="_blank"
      className={cn(
        'flex items-center justify-center gap-4 border rounded-sm p-2 backdrop-blur bg-foreground/5',
        'hover:bg-foreground/15 hover:-translate-y-1',
        'transition duration-100'
      )}
    >
      <data.icon />
      <h2 className="text-lg">{data.title}</h2>
    </a>
  );
}
