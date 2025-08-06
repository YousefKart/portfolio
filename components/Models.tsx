import { ModelItem } from './ModelItem';
import { modelData } from './data/ModelData';

export default function Models() {
  return (
    <div id="models" className="flex flex-col gap-8 scroll-mt-20">
      <h1 className="text-center text-2xl font-semibold">Models</h1>
      <div className="grid grid-cols-4 gap-4">
        {modelData.map((item, index) => (
          <ModelItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
