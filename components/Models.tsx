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
    <section>
      <div className="flex items-center justify-center gap-2 mb-8">
        <h1 className="text-3xl font-semibold">3D Models</h1>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              aria-label="More information about 3D models"
              className="text-muted-foreground/50 hover:text-foreground transition-colors"
            >
              <InfoIcon className="h-4 w-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={8}>
            Does not include assets created under NDA.
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {modelData.map((item, index) => (
          <ModelItem key={index} data={item} index={index} />
        ))}
      </div>
    </section>
  );
}
