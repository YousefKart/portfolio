import { cn } from '@/lib/utils';
import { ExperienceItem } from './ExperienceItem';
import { experienceData } from '../lib/data/ExperienceData';

export default function Experience({ className }: { className?: string }) {
  return (
    <section
      id="experience"
      className={cn(
        'w-full 2xl:w-2/3 mx-auto scroll-mt-20 px-4 sm:px-6',
        className
      )}
    >
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
