import { ModelItem } from '@/components/ModelItem';
import { modelData } from '@/lib/data/ModelData';

export default function Models() {
  return (
    <div className="min-h-dvh sm:w-3/4 mx-auto my-32">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 sm:gap-0">
        {modelData.map((item, index) => (
          <ModelItem key={index} data={item} index={index} />
        ))}
      </div>
    </div>
  );
}
