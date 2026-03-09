import { ProjectItem } from './projectItemFull';
import { projectData } from '../lib/data/ProjectData';

export default function Projects() {
  return (
    <div id="projects" className="flex flex-col gap-8 scroll-mt-20">
      <h1 className="text-center text-3xl font-semibold">Projects</h1>
      <div className="flex flex-col gap-4">
        {projectData.map((item, index) => (
          <ProjectItem key={index} data={item} index={index} />
        ))}
      </div>
    </div>
  );
}
