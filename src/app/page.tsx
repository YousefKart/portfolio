import { HomeIcon } from "@heroicons/react/20/solid";

// Common Styles
const commonStyles = "w-full flex flex-col items-center";
const titleStyles =
  "bg-bottom-teal-300 border-b-2 border-teal-300 text-4xl font-bold mt-16 mb-4";
const listTextStyle = "text-right w-48 text-lg mr-4 mt-1";
const listDiv1Style = "w-48 h-4 border-2 relative";
const listDiv2Style = "h-4 bg-white absolute top-0 left-0";

// Skill Item Component
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

export default function SkillsList() {
  const tools = [
    { name: "VS Code", width: "90%" },
    { name: "IntelliJ", width: "90%" },
    { name: "PyCharm", width: "80%" },
    { name: "Eclipse", width: "70%" },
    { name: "Android Studio", width: "80%" },
    { name: "Git", width: "80%" },
    { name: "Postman", width: "70%" },
    { name: "Docker", width: "60%" },
    { name: "Jira", width: "60%" },
    { name: "Slack", width: "60%" },
  ];

  const languages = [
    { name: "Java", width: "100%" },
    { name: "C/C++", width: "85%" },
    { name: "Python", width: "80%" },
    { name: "JavaScript", width: "60%" },
    { name: "HTML/CSS", width: "70%" },
    { name: "Kotlin", width: "90%" },
    { name: "C#", width: "80%" },
    { name: "SQL", width: "60%" },
    { name: "MatLab", width: "60%" },
    { name: "Lua", width: "50%" },
  ];

  const libraries = [
    { name: "React", width: "80%" },
    { name: "Node.js", width: "70%" },
    { name: "Express", width: "70%" },
    { name: "JQuery", width: "60%" },
    { name: "Bootstrap", width: "70%" },
    { name: "Tailwind", width: "80%" },
    { name: "Material-UI", width: "70%" },
    { name: "Socket.io", width: "60%" },
    { name: "Django", width: "70%" },
    { name: "Flask", width: "60%" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="w-full bg-bottom-teal-300 border-b-2 border-teal-300 fixed top-0">
        <ul className="flex justify-start space-between bg-neutral-800 w-full gap-8 pl-8">
          <li>
            <HomeIcon className="h-8 w-8 mt-3" />
          </li>
          <li className="p-3 text-2xl font-bold">Skills</li>
          <li className="p-3 text-2xl font-bold">Projects</li>
          <li className="p-3 text-2xl font-bold">Contact</li>
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
          <div className={`${commonStyles}`}>
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
          <div className={`${commonStyles}`}>
            <h1 className={`${titleStyles} w-3/4 text-center`}>Projects</h1>
          </div>
          <div className={`${commonStyles}`}>
            <h1 className={`${titleStyles} w-3/4 text-center`}>Contact</h1>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full bg-neutral-800 flex justify-center items-center py-4 border-t-2 border-teal-300">
        <p>(c) 2024 Yousef Kart</p>
      </footer>
    </div>
  );
}
