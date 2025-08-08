import { ProjectType } from '@/lib/types/ProjectType';
import { ProjectModal } from './ProjectModal';
import { MediaDisplay } from './MediaDiaplay';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { hover } from '@/lib/utils';

interface ProjectItemProps {
  data: ProjectType;
}

export function ProjectItem({ data }: ProjectItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className={cn(
          'flex flex-col justify-start gap-4 border sm:rounded-4xl p-4 backdrop-blur bg-foreground/5',
          hover
        )}
      >
        <div className="flex items-center justify-between w-full text-lg font-semibold mb-4">
          <h2>{data.title}</h2>
          <p>{data.date}</p>
        </div>
        <MediaDisplay
          src={data.images[0]}
          title={data.title}
          className="max-h-128 w-full object-cover flex-1 rounded-lg"
        />
        {data.description}

        <div className="flex items-center justify-between">
          <div className="flex gap-2 flex-wrap text-muted-foreground">
            {data.tools.map((tool, index) => (
              <div key={index} className="flex gap-2 items-center flex-wrap">
                <span
                  key={index}
                  className="bg-muted px-2 py-1 rounded text-sm"
                >
                  {tool}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        data={data}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
