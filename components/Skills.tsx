import { SkillItem } from './SkillItem';

const skillsData: any[] = [
  // Add skills data here
];

export default function Skills() {
  return (
    <div id="skills" className="flex flex-col gap-8 scroll-mt-20">
      <h1 className="text-center text-2xl font-semibold">Skills</h1>
      {/* Map through skillsData and render SkillItem components */}
      {skillsData.map((item, index) => (
        <SkillItem
          key={index}
          // pass props here
        />
      ))}
    </div>
  );
}
