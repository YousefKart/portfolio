import { ExperienceItem } from './ExperienceItem';
import { experienceData } from './ExperienceData';

export default function Experience() {
  return (
    <div id="experience" className="flex flex-col gap-8 scroll-mt-20">
      <h1 className="text-center text-2xl font-semibold">Experience</h1>
      {experienceData.map((item) => (
        <ExperienceItem key={item.id} data={item} />
      ))}
    </div>
  );
}
