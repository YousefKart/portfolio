import { ExperienceItem } from './ExperienceItem';
import { experienceData } from '../lib/data/ExperienceData';

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full 2xl:w-2/3 mx-auto scroll-mt-20 px-4 sm:px-6"
    >
      <h1 className="text-center text-3xl font-semibold mb-10">Experience</h1>
      {experienceData.map((item, index) => (
        <ExperienceItem
          key={index}
          data={item}
          index={index}
          isLast={index === experienceData.length - 1}
        />
      ))}
    </section>
  );
}
