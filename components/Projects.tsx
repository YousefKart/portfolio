import { ProjectItem } from './ProjectItem';
import { projectData } from './data/ProjectData';

export default function Projects() {
  return (
    <div id="projects" className="flex flex-col gap-8 scroll-mt-20">
      <h1 className="text-center text-2xl font-semibold">Personal Projects</h1>
      <div className="grid grid-cols-4 gap-4">
        {projectData.map((item, index) => (
          <ProjectItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
