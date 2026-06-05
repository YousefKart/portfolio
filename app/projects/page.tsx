import { ProjectItem } from '@/components/ProjectItem';
import { projectData } from '@/lib/data/ProjectData';

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 sm:w-3/4 mx-auto mt-32">
      <h1 className="text-center text-3xl font-semibold mb-8">All Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectData.map((item, index) => (
          <ProjectItem key={index} data={item} index={index} />
        ))}
      </div>
    </section>
  );
}
