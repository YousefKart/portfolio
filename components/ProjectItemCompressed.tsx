import { ProjectType } from '@/lib/types/ProjectType';
import { ProjectModal } from './ProjectModal';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { hover } from '@/lib/utils';
import useGlowBorder from '@/hooks/use-glow-border';

interface ProjectItemProps {
  data: ProjectType;
}

export function ProjectItem({ data }: ProjectItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const glow = useGlowBorder({ size: 200 });

  return (
    <>
      <div
        {...glow.props}
        onClick={() => setIsOpen(true)}
        className={cn(
          'flex flex-col justify-start gap-4 border sm:rounded-xl p-4 backdrop-blur bg-foreground/5',
          hover,
          'glow-border'
        )}
      >
        <div className="flex items-center justify-between w-full text-lg font-semibold">
          <h2>{data.title}</h2>
          <p>{data.date}</p>
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
