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
        'hover:-translate-y-0.75 hover:shadow-[4px_4px_0px_rgba(28,27,44,1)] dark:hover:shadow-[4px_4px_0px_rgba(251,251,251,1)]',
        'transition duration-100'
      )}
    >
      <data.icon />
      <h2 className="text-lg">{data.title}</h2>
    </a>
  );
}
