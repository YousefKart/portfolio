import Link from 'next/link';
import { ProjectItem } from './ProjectItem';
import { cn, hover } from '../lib/utils';
import { projectData } from '../lib/data/ProjectData';

const featuredProjectIndexes = [0, 1, 2, 3, 5, 8];

export default function Projects() {
  const featuredProjects = featuredProjectIndexes
    .map((index) => projectData[index])
    .filter(Boolean);
  const showAll = projectData.length > featuredProjects.length;

  return (
    <section id="projects" className="scroll-mt-20">
      <h1 className="text-center text-3xl font-semibold mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredProjects.map((item, index) => (
          <ProjectItem key={index} data={item} index={index} />
        ))}
        {showAll ? (
          <div className="col-span-full">
            <Link
              href="/projects"
              className={cn(
                'inline-flex w-full items-center justify-center rounded-xl border px-5 py-3 text-sm font-medium transition-colors border-border/60 bg-background/60 text-muted-foreground',
                hover
              )}
            >
              Show All
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
