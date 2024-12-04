import { HomeIcon } from '@heroicons/react/20/solid';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const commonStyles = 'w-full flex flex-col items-center';
const titleStyles =
  'bg-bottom-teal-300 border-b-2 border-teal-300 text-4xl font-bold mt-16 mb-4';
const listTextStyle = 'text-right w-48 text-lg mr-4 mt-1';
const listDiv1Style = 'w-48 h-4 border-2 relative';
const listDiv2Style = 'h-4 bg-white absolute top-0 left-0';

const SkillItem = ({ skill, width }: { skill: string; width: string }) => {
  return (
    <li className="flex">
      <p className={listTextStyle}>{skill}</p>
      <div className="relative mt-3 ml-4">
        <div className={listDiv1Style} />
        <div className={listDiv2Style} style={{ width }} />
      </div>
    </li>
  );
};

export default function Home() {
  const tools = [
    { name: 'GitHub', width: '80%' },
    { name: 'Trello', width: '80%' },
    { name: 'VSCode', width: '90%' },
    { name: 'JetBrain IDEs', width: '70%' },
    { name: 'Firebase', width: '80%' },
    { name: 'SQLPlus', width: '70%' },
    { name: 'Unity', width: '90%' },
    { name: 'Android Studio', width: '65%' },
    { name: 'Maya', width: '90%' },
    { name: 'Blender', width: '120%' },
  ];

  const languages = [
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
  ];

  const libraries = [
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
  ];

  return (
    <div className="flex flex-col min-h-screen"> 
      {/* Navbar */}
      <nav className="flex w-full bg-bottom-teal-300 border-b-2 border-teal-300 fixed top-0 z-50">
        <ul className="flex justify-start space-between bg-neutral-800 w-1/2 gap-8 pl-8">
          <li>
            <HomeIcon className="h-8 w-8 mt-3" />
          </li>
            <li className="p-3 text-2xl font-bold">
            <a href="#skills">Skills</a>
            </li>
            <li className="p-3 text-2xl font-bold">
            <a href="#projects">Projects</a>
            </li>
            <li className="p-3 text-2xl font-bold">
            <a href="#models">Models</a>
            </li>
            <li className="p-3 text-2xl font-bold">
            <a href="#contact">Contact</a>
            </li>
        </ul>
        <ul className="flex justify-end space-between bg-neutral-800 w-1/2 gap-8 pr-8">
          <li>
            <a href="https://www.github.com/YousefKart" target="#">
              <FaGithub className="h-8 w-8 mt-3" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yousef-kart/" target="#">
              <FaLinkedin className="h-8 w-8 mt-3" />
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center mt-12">
        <header className={`${commonStyles} bg-neutral-900`}>
          <h1 className={titleStyles}>YOUSEF KART</h1>
          <h2 className="text-2xl font-bold mt-4 mb-8">
            4th Year Computer Science Student
          </h2>
          <p className="w-2/5 text-center">
            I have 60 years programming experience.
          </p>
        </header>
        <main className={`${commonStyles} bg-neutral-900`}>

          <div id="skills" className={`${commonStyles}`}>
            <h1 className={`${titleStyles} w-3/4 text-center`}>Skills</h1>
            <div className="flex gap-16 space-between justify-center">
              <div>
                <h2 className="text-2xl font-bold text-center">Tools</h2>
                <ul className="relative right-8">
                  {tools.map((tool) => (
                    <SkillItem
                      key={tool.name}
                      skill={tool.name}
                      width={tool.width}
                    />
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-center">Languages</h2>
                <ul className="relative right-8">
                  {languages.map((language) => (
                    <SkillItem
                      key={language.name}
                      skill={language.name}
                      width={language.width}
                    />
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-center">Libraries</h2>
                <ul className="relative right-8">
                  {libraries.map((librarie) => (
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

          <div id="projects" className={`${commonStyles}`}>
            <h1 className={`${titleStyles} w-3/4 text-center`}>Projects</h1>
          </div>

          <div id="models" className={`${commonStyles}`}>
            <h1 className={`${titleStyles} w-3/4 text-center`}>Models</h1>
          </div>

          <div id="contact" className={`${commonStyles}`}>
            <h1 className={`${titleStyles} w-3/4 text-center`}>Contact</h1>
            <ul className="flex flex-col gap-4 mt-4 mb-8">
              <li className="flex justify-center items-center gap-4">
                <MdEmail className="h-8 w-8" />
                <a href="mailto:yousefkart21@gmail.com" target="#">
                  Email
                </a>
              </li>
              <li className="flex justify-center items-center gap-4">
                <FaGithub className="h-8 w-8" />
                <a href="https://github.com/YousefKart" target="#">
                  GitHub
                </a>
              </li>
              <li className="flex justify-center items-center gap-4">
                <FaLinkedin className="h-8 w-8" />
                <a href="https://www.linkedin.com/in/yousef-kart/" target="#">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </main>
      </div>

      {/* Footer */}
      <footer className="w-full bg-neutral-800 flex justify-center items-center py-4 border-t-2 border-teal-300">
        <p>
          (c) 2024 Yousef Kart | [
          <a href="https://github.com/YousefKart/portfolio" target="#">
            WIP
          </a>
          ]
        </p>
      </footer>
    </div>
  );
}
