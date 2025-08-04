import { Dot } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
}

export function ExperienceItem({
  title,
  company,
  location,
  date,
  description,
}: ExperienceItemProps) {
  return (
    <div className="flex items-end justify-between w-full gap-16 border rounded-4xl p-4 backdrop-blur bg-foreground/5">
      <div className="flex flex-col items-start justify-start flex-1">
        <h2 className="text-lg font-semibold">{title}</h2>
        <ul>
          {description.map((item) => (
            <li className="flex">
              <Dot />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-end justify-start">
        <h2 className="text-lg font-semibold">{company}</h2>
        <p>{date}</p>
        <p>{location}</p>
      </div>
    </div>
  );
}
