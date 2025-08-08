import { ProjectType } from '@/lib/types/ProjectType';

export const projectData: ProjectType[] = [
  {
    title: 'AI Monitoring System',
    images: ['/images/AIPMS.png'],
    date: '2025',
    duration: '8 months',
    description:
      'A software solution designed to provide real-time monitoring and alert capabilities using repurposed mobile devices. The system streams live video to a web application where users can monitor their environment, record footage, and receive notifications for specific events, detected by AI.',
    tools: [
      'React',
      'NodeJS',
      'YOLO',
      'WebRTC',
      'Firebase',
      'OpenCV',
      'Python',
    ],
  },

  {
    title: 'The Last Ride',
    images: ['/images/TLR2.png'],
    date: '2025',
    duration: '4 months',
    description:
      'A 3D animation project that tells the story of a forgotten vintage car on a journey to reconnect with the modern world.',
    tools: ['Blender', 'Maya', 'Adobe Premiere', 'ElevenLabs'],
  },

  {
    title: 'Flag Frenzy',
    images: ['/images/FlagFrenzyGame.webp'],
    date: '2024',
    duration: '8 months',
    description:
      "A shooter game on Roblox where players are divided into two teams and must capture the opposing team's flag while defending their own. The game features a variety of weapons and maps hand-crafted to maximize player engagement.",
    tools: ['Roblox Studio', 'Blender', 'Lua'],
  },

  {
    title: 'Tourify',
    images: ['/images/TourifyHome.webp'],
    date: '2024',
    duration: '4 months',
    description:
      'An Android mobile application that allows users to share and discover tourist locations around the world. Users can create and share their own tours, view tours created by others, and rate tours they have visited.',
    tools: ['Android Studio', 'Firebase', 'Google Places', 'Kotlin'],
  },

  {
    title: 'Volt Vista',
    images: ['/images/VoltVistaHome.webp'],
    date: '2023',
    duration: '4 months',
    description:
      'An energy monitoring and management solution. The system allows users to monitor their energy usage, set goals, and receive notifications when they are close to exceeding their budget. The system also provides recommendations on how to reduce energy consumption.',
    tools: ['React', 'NextJS', 'Vercel'],
  },

  {
    title: 'Escape Java',
    images: ['/images/EscapeJavaGame2.png'],
    date: '2023',
    duration: '2 months',
    description:
      'A Java3D project designed to simulate an escape room game set in the Java Lounge (computer science commons). The game is designed to challenge players with various puzzles and obstacles, created purely in Java (no visual tools!).',
    tools: ['Java3D', 'Blender'],
  },

  {
    title: 'Ocean Anarchy',
    images: ['/images/OceanAnarchyAlpha.png'],
    date: '2022',
    duration: '1 week',
    description:
      "A pirate-themed open-world game where players can explore the high seas, engage in naval battles, and search for hidden treasures. The game features a variety of ships, weapons, and upgrades to customize the player's experience.",
    tools: ['Unity', 'Blender', 'C#'],
  },

  {
    title: 'Take Cover',
    images: ['/images/TakeCoverGame3.png'],
    date: '2021',
    duration: '2 months',
    description:
      'A top-down shooter game where players must survive waves of zombies that get progressively stronger. The game features a variety of weapons, power-ups, and enemy types to keep players engaged.',
    tools: ['Swing', 'Pix2D', 'Soundly', 'Java'],
  },

  {
    title: 'Frogger',
    images: ['/images/FroggerGame.png'],
    date: '2021',
    duration: '2 weeks',
    description:
      'A remake of the popular arcade game Frogger. Players must guide a frog across a busy road and river to reach their home. The game features multiple levels and a high score system to challenge players.',
    tools: ['Swing', 'Pix2D', 'Java'],
  },

  {
    title: 'Idle Island',
    images: ['/images/IdleIslandHome.png'],
    date: '2021',
    duration: '1 month',
    description:
      'A 2D idle game where players must manage and grow a factory on an island. Players build structures to gain resources, which are then used to build more advanced structures.',
    tools: ['PyGame', 'Pix2D', 'Python'],
  },
];
