'use client';

import { HomeIcon } from '@heroicons/react/20/solid';
import { FaLinkedin, FaGithub, FaLink, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const commonStyles = 'w-full flex flex-col items-center';
const titleStyles = 'border-b-2 border-tertiary text-4xl font-bold mt-16 mb-4';
const listTextStyle = 'text-right w-48 text-lg mr-4 mt-1';
const listDiv1Style = 'w-48 h-4 border-2 relative';
const listDiv2Style = 'h-4 bg-white absolute top-0 left-0';

export default function Home() {
  useEffect(() => {
    AOS.init({
      // Global settings here
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="flex w-full border-b-2 border-tertiary fixed top-0 z-50">
        <ul className="flex justify-start space-between bg-secondary w-1/2 gap-8 pl-8">
          <li>
            <a href="#">
              <HomeIcon className="h-8 w-8 mt-3" />
            </a>
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
        <ul className="flex justify-end space-between bg-secondary w-1/2 gap-8 pr-8">
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
        <header className={`${commonStyles} bg-primary`}>
          <h1 className={titleStyles}>YOUSEF KART</h1>
          <h2 className="text-2xl font-bold mt-4 mb-8">
            4th Year Computer Science Student
          </h2>
          <p className="w-2/5 text-center">
            I have 60 years programming experience.
          </p>
        </header>
        <main className={`${commonStyles} bg-primary`}>
          <div id="skills" className={`${commonStyles}`}>
            <h1 className={`${titleStyles} w-3/4 text-center`}>Skills</h1>
            <div className="flex gap-16 space-between justify-center">
              <div>
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
              <div>
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

          <div id="projects" className={`${commonStyles}`}>
            <h1 className={`${titleStyles} w-3/4 text-center`}>Projects</h1>
            <ul className={`${commonStyles} gap-4 mt-4 mb-8`}>
              <ProjectItem
                year="2025"
                title="AI Monitiring System"
                links={[
                  {
                    icon: <FaGithub />,
                    url: 'https://github.com/ai-monitoring-system',
                  },
                  { icon: <FaLink />, url: 'https://4990.tanzimfh.com/' },
                ]}
                images={[]}
                description="A software solution designed to provide real-time monitoring and alert capabilities using repurposed devices. The system streams live video to a web application where users can monitor their environment, record footage, and receive notifications for specific events, detected by AI."
              />

              <ProjectItem
                year="2024"
                title="Flag Frenzy"
                links={[
                  {
                    icon: <FaLink />,
                    url: 'https://www.roblox.com/games/15222475262/NEW-GUNS-FLAG-FRENZY-RED-VS-BLUE',
                  },
                ]}
                images={[
                  'images/FlagFrenzyHome.webp',
                  'images/FlagFrenzyGame.webp',
                  'images/FlagFrenzyVehicles.webp',
                ]}
                description="A 1st/3rd person shooter game on Roblox where players are divided into two teams and must capture the opposing team's flag while defending their own. The game features a variety of weapons, maps, and game modes."
              />

              <ProjectItem
                year="2024"
                title="Tourify"
                links={[
                  {
                    icon: <FaGithub />,
                    url: 'https://github.com/BorhanSaflo/tourify-android-app',
                  },
                ]}
                images={[
                  'images/TourifyHome.webp',
                  'images/TourifyLogo.webp',
                  'images/TourifyDemo.webp',
                ]}
                description="An Android mobile application that allows users to share and discover tourist locations around the world. Users can create and share their own tours, view tours created by others, and rate tours they have visited."
              />

              <ProjectItem
                year="2023"
                title="Volt Vista"
                links={[
                  {
                    icon: <FaGithub />,
                    url: 'https://github.com/BorhanSaflo/volt-vista',
                  },
                  { icon: <FaLink />, url: 'https://volt.borhansaflo.com/' },
                ]}
                images={[
                  'images/VoltVistaRender.webp',
                  'images/VoltVistaLogo.webp',
                  'images/VoltVistaHome.webp',
                ]}
                description="An energy monitoring and management solution. The system allows users to monitor their energy usage, set goals, and receive notifications when they are close to exceeding their budget. The system also provides recommendations on how to reduce energy consumption."
              />

              <ProjectItem
                year="2023"
                title="Escape Java"
                links={[
                  {
                    icon: <FaGithub />,
                    url: 'https://github.com/BorhanSaflo/EscapeJava',
                  },
                  {
                    icon: <FaYoutube />,
                    url: 'https://www.youtube.com/watch?v=1XG5x_ulwCk',
                  },
                ]}
                images={[
                  'images/EscapeJavaGame1.webp',
                  'images/EscapeJavaGame2.webp',
                  'images/EscapeJavaGame3.webp',
                  'images/EscapeJavaGame4.webp',
                ]}
                description="A Java3D project designed to simulate an escape room game set in the Java Lounge (computer science commons). The game is designed to challenge players with various puzzles and obstacles, created purely in Java (no visual tools!)."
              />

              <ProjectItem
                year="2022"
                title="Ocean Anarchy"
                links={[]}
                images={[]}
                description="A pirate-themed open-world game where players can explore the high seas, engage in naval battles, and search for hidden treasures. The game features a variety of ships, weapons, and upgrades to customize the player's experience."
              />

              <ProjectItem
                year="2021"
                title="Take Cover"
                links={[]}
                images={[]}
                description="A top-down shooter game where players must survive waves of zombies that get progressively stronger. The game features a variety of weapons, power-ups, and enemy types to keep players engaged."
              />

              <ProjectItem
                year="2021"
                title="Idle Island"
                links={[]}
                images={[]}
                description="A 2D idle game where players must manage and grow their own island. Players can build structures, gather resources, and expand their island. The game features a variety of upgrades and unlockables to keep players engaged."
              />

              <ProjectItem
                year="2020"
                title="Frogger"
                links={[]}
                images={[]}
                description="A remake of the popular arcade game Frogger. Players must guide a frog across a busy road and river to reach their home. The game features multiple levels and a high score system to challenge players."
              />
            </ul>
          </div>

          <div id="models" className={`${commonStyles}`}>
            <h1 className={`${titleStyles} w-3/4 text-center`}>Models</h1>
            <ul className="grid grid-cols-4 gap-12 mt-4 mb-8">
              {[
                { title: 'Model 1', image: 'https://via.placeholder.com/250' },
                { title: 'Model 2', image: 'https://via.placeholder.com/250' },
                { title: 'Model 3', image: 'https://via.placeholder.com/250' },
                { title: 'Model 4', image: 'https://via.placeholder.com/250' },
                { title: 'Model 5', image: 'https://via.placeholder.com/250' },
                { title: 'Model 6', image: 'https://via.placeholder.com/250' },
                { title: 'Model 7', image: 'https://via.placeholder.com/250' },
                { title: 'Model 8', image: 'https://via.placeholder.com/250' },
                { title: 'Model 9', image: 'https://via.placeholder.com/250' },
                { title: 'Model 10', image: 'https://via.placeholder.com/250' },
              ].map((model) => (
                <ModelItem
                  key={model.title}
                  title={model.title}
                  image={model.image}
                />
              ))}
            </ul>
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
      <footer className="w-full bg-secondary flex justify-center items-center py-4 border-t-2 border-tertiary">
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

const ProjectItem = ({
  year,
  title,
  links,
  images,
  description,
}: {
  year: string;
  title: string;
  links: { icon: JSX.Element; url: string }[];
  images: string[];
  description: string;
}) => {
  return (
    <li className="w-full flex flex-col items-center">
      <div className="flex w-2/5 relative mb-28">
        <h2 className="text-xl font-bold mt-16 absolute left-0 top-2">
          {year}
        </h2>
        <h2 className="border-b-2 border-tertiary text-2xl font-bold mt-16 mb-4 absolute left-1/2 transform -translate-x-1/2">
          {title}
        </h2>
        <div className="flex gap-4 h-8 mt-16 absolute right-0">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="#"
              aria-label={`Link for ${title}`}
              className="h-8 w-8 flex items-center justify-center"
            >
              <span className="text-2xl">{link.icon}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="flex gap-8 mt-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${title} screenshot ${index + 1}`}
            className="rounded-md w-64 h-64 object-cover"
          />
        ))}
      </div>
      <p className="w-2/5 text-center mt-8">{description}</p>
    </li>
  );
};

const ModelItem = ({ title, image }: { title: string; image: string }) => {
  return (
    <li className="flex flex-col items-center">
      <img src={image} alt={title} className="rounded-md" />
      <h2 className="text-2xl font-bold mt-4">{title}</h2>
    </li>
  );
};
