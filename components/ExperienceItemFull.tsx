import { ExperienceType } from '@/lib/types/ExperienceType';

interface ExperienceItemProps {
  data: ExperienceType;
}

export function ExperienceItem({ data }: ExperienceItemProps) {
  return (
    <div className="flex h-full flex-col justify-start gap-4 p-4 backdrop-blur sm:rounded-2xl">
      <div className="flex flex-col gap-3 w-full min-w-0">
        <div className="flex items-start justify-between w-full gap-3 text-lg font-semibold">
          <h2 className="font-bold text-2xl leading-tight">{data.title}</h2>
          <p className="text-muted-foreground text-sm sm:text-base shrink-0">
            {data.date}
          </p>
        </div>

        <div className="flex flex-col gap-1 border-b border-border/60 pb-2 text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <p className="text-base sm:text-lg">{data.company}</p>
          <p className="text-sm sm:text-base">{data.location}</p>
        </div>
      </div>
    </div>
  );
}
