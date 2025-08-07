import { ModelType } from '@/lib/types/ModelType';
import { MediaDisplay } from './MediaDiaplay';

interface ModelItemProps {
  data: ModelType;
}

export function ModelItem({ data }: ModelItemProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 border sm:rounded-4xl pb-4 backdrop-blur bg-foreground/5">
      <MediaDisplay
        src={data.image}
        title={data.title}
        className="sm:rounded-t-4xl min-h-48 max-h-48 w-full object-cover"
      />
      <h2 className="text-lg font-semibold">{data.title}</h2>
    </div>
  );
}
