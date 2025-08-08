import { ModelType } from '@/lib/types/ModelType';
import { ModelModal } from './ModelModal';
import { MediaDisplay } from './MediaDiaplay';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { hover } from '@/lib/utils';

interface ModelItemProps {
  data: ModelType;
}

export function ModelItem({ data }: ModelItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className={cn(
          'flex flex-col items-center justify-center gap-4 border sm:rounded-4xl pb-4 backdrop-blur bg-foreground/5',
          hover
        )}
      >
        <MediaDisplay
          src={data.image}
          title={data.title}
          className="sm:rounded-t-4xl min-h-48 max-h-48 w-full object-cover"
        />
        <h2 className="text-lg font-semibold">{data.title}</h2>
      </div>

      <ModelModal
        data={data}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
