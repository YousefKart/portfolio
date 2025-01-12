import SkillItem from '../components/skillItem';

const commonStyles = 'w-full flex flex-col items-center';
const titleStyles = 'border-b-2 border-tertiary text-4xl font-bold mt-16 mb-4';

export default function Skills() {
  return (
    <div id="skills" className={`${commonStyles}`}>
      <h1 className={`${titleStyles} w-3/4 text-center`} data-aos="fade-up">
        Skills
      </h1>
      <div className="flex flex-col gap-16 lg:flex-row lg:gap-0 xl:gap-8 2xl:gap-16 justify-between items-center">
        <div data-aos="fade-up">
          <h2 className="text-2xl font-bold text-center">Tools</h2>
          <ul className="relative right-8">
            {[
              { name: 'GitHub', width: '80%' },
              { name: 'Trello', width: '80%' },
              { name: 'VSCode', width: '90%' },
              { name: 'Roblox Studio', width: '70%' },
              { name: 'Firebase', width: '80%' },
              { name: 'SQLPlus', width: '70%' },
              { name: 'Unity', width: '90%' },
              { name: 'Android Studio', width: '65%' },
              { name: 'Maya', width: '90%' },
              { name: 'Blender', width: '120%' },
            ].map((tool) => (
              <SkillItem key={tool.name} skill={tool.name} width={tool.width} />
            ))}
          </ul>
        </div>
        <div data-aos="fade-up">
          <h2 className="text-2xl font-bold text-center">Languages</h2>
          <ul className="relative right-8">
            {[
              { name: 'Java', width: '100%' },
              { name: 'C/C++', width: '85%' },
              { name: 'Python', width: '80%' },
              { name: 'JavaScript', width: '60%' },
              { name: 'HTML/CSS', width: '70%' },
              { name: 'Kotlin', width: '90%' },
              { name: 'C#', width: '80%' },
              { name: 'SQL', width: '60%' },
              { name: 'MatLab', width: '60%' },
              { name: 'Lua', width: '50%' },
            ].map((language) => (
              <SkillItem
                key={language.name}
                skill={language.name}
                width={language.width}
              />
            ))}
          </ul>
        </div>
        <div data-aos="fade-up">
          <h2 className="text-2xl font-bold text-center">Libraries</h2>
          <ul className="relative right-8">
            {[
              { name: 'CUDA Toolkit', width: '90%' },
              { name: 'YOLO', width: '70%' },
              { name: 'OpenCV', width: '80%' },
              { name: 'React', width: '90%' },
              { name: 'TailWind', width: '90%' },
              { name: 'Node.js', width: '70%' },
              { name: 'Next.js', width: '90%' },
              { name: 'Java3D', width: '100%' },
              { name: 'Swing', width: '75%' },
              { name: 'PyGame', width: '60%' },
            ].map((librarie) => (
              <SkillItem
                key={librarie.name}
                skill={librarie.name}
                width={librarie.width}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
