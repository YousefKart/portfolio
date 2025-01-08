import ProjectItem from '../components/projectItem';
import { FaGithub, FaLink, FaYoutube } from 'react-icons/fa';

const commonStyles = 'w-full flex flex-col items-center';
const titleStyles = 'border-b-2 border-tertiary text-4xl font-bold mt-16 mb-4';

export default function Projects() {
  return (
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
  );
}
