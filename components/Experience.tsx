import { ExperienceItem } from './ExperienceItem';
import { experienceData } from './data/ExperienceData';

export default function Experience() {
  return (
    <div
      id="experience"
      className="flex flex-col gap-8 w-2/3 mx-auto scroll-mt-20"
    >
      <h1 className="text-center text-2xl font-semibold">
        Professional Experience
      </h1>
      {experienceData.map((item, index) => (
        <ExperienceItem key={index} data={item} />
      ))}
    </div>
  );
}
