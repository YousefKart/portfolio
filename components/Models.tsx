import { ModelItem } from './ModelItem';
import { modelData } from '../lib/data/ModelData';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { InfoIcon } from 'lucide-react';

export default function Models() {
  return (
    <div id="models" className="flex flex-col gap-8 scroll-mt-20">
      <div className="flex items-center justify-center gap-2">
        <h1 className="text-center text-3xl font-semibold">3D Models</h1>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              aria-label="More information about 3D models"
              className="inline-flex items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
            >
              <InfoIcon className="h-4 w-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={8}>
            Does not include assets created under NDA.
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {modelData.map((item, index) => (
          <ModelItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
