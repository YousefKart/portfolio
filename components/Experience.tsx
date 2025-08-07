import { ExperienceItem } from './ExperienceItem';
import { ExperienceItemMobile } from './ExperienceItemMobile';
import { experienceData } from './data/ExperienceData';

export default function Experience() {
  return (
    <div
      id="experience"
      className="flex flex-col gap-8 w-full 2xl:w-2/3 mx-auto scroll-mt-20"
    >
      <h1 className="text-center text-2xl font-semibold">
        Professional Experience
      </h1>
      {experienceData.map((item, index) => (
        <div key={index}>
          <div className="hidden lg:block">
            <ExperienceItem data={item} />
          </div>
          <div className="block lg:hidden">
            <ExperienceItemMobile data={item} />
          </div>
        </div>
      ))}
    </div>
  );
}
