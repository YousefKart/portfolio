import { ExperienceItem } from './ExperienceItemFull';
import { experienceData } from '../lib/data/ExperienceData';

export default function Experience() {
  return (
    <div
      id="experience"
      className="flex flex-col gap-8 w-full 2xl:w-2/3 mx-auto scroll-mt-20"
    >
      <h1 className="text-center text-3xl font-semibold">Experience</h1>
      {experienceData.map((item, index) => (
        <ExperienceItem key={index} data={item} />
      ))}
    </div>
  );
}
