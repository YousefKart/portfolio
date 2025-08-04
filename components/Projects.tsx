import { ProjectItem } from './ProjectItem';

const projectsData: any[] = [
  // Add projects data here
];

export default function Projects() {
  return (
    <div id="projects" className="flex flex-col gap-8 scroll-mt-20">
      <h1 className="text-center text-2xl font-semibold">Projects</h1>
      {/* Map through projectsData and render ProjectItem components */}
      {projectsData.map((item, index) => (
        <ProjectItem
          key={index}
          // pass props here
        />
      ))}
    </div>
  );
}
