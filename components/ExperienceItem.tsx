import { Dot } from 'lucide-react';
import { ExperienceType } from '@/lib/types/ExperienceType';
import { cn } from '@/lib/utils';

interface ExperienceItemProps {
  data: ExperienceType;
}

export function ExperienceItem({ data }: ExperienceItemProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 border rounded-4xl p-4 backdrop-blur bg-foreground/5'
      )}
    >
      <div className="flex items-start justify-between w-full gap-16">
        <div className="flex flex-col items-start justify-start flex-1">
          <h2 className="text-lg font-semibold">{data.title}</h2>
          <ul className="space-y-1">
            {data.description.map((item, index) => (
              <li key={index} className="flex items-start gap-1">
                <Dot className="size-4 mt-1 shrink-0" />
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-end justify-start">
          <h2 className="text-lg font-semibold">{data.company}</h2>
          <p>{data.date}</p>
          <p>{data.location}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-muted-foreground">
        {data.tools.map((category, index) => (
          <div key={index} className="flex gap-2 items-center flex-wrap">
            <p className="font-semibold">{category.title}:</p>
            {category.tools.map((tool, toolIndex) => (
              <span
                key={toolIndex}
                className="bg-muted px-2 py-1 rounded text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
