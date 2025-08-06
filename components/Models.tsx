import { ModelItem } from './ModelItem';

const modelData: any[] = [
  // Add model data here
];

export default function Models() {
  return (
    <div id="models" className="flex flex-col gap-8 scroll-mt-20">
      <h1 className="text-center text-2xl font-semibold">Models</h1>
      {/* Map through contactData and render ModelItem components */}
      {modelData.map((item, index) => (
        <ModelItem
          key={index}
          // pass props here
        />
      ))}
    </div>
  );
}
