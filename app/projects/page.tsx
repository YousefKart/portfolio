import { ProjectItem } from '@/components/ProjectItem';
import { projectData } from '@/lib/data/ProjectData';

export default function Projects() {
  return (
    <section id="projects" className="min-h-dvh xl:w-3/5 mx-auto my-32">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projectData.map((item, index) => (
          <ProjectItem key={index} data={item} index={index} />
        ))}
      </div>
    </section>
  );
}
