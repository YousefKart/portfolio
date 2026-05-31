import { ProjectItem } from './ProjectItem';
import { projectData } from '../lib/data/ProjectData';

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20">
      <h1 className="text-center text-3xl font-semibold mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projectData.map((item, index) => (
          <ProjectItem key={index} data={item} index={index} />
        ))}
      </div>
    </section>
  );
}
