import { ProjectType } from '@/lib/types/ProjectType';

export const projectData: ProjectType[] = [
  {
    title: 'Eyez and Earz',
    images: [],
    date: '2026',
    duration: 'In Progress',
    description: `Eyez & Earz is a market intelligence platform designed to identify, evaluate, and validate news-driven trading opportunities.\n
      Earz acts as the real-time intelligence layer, ingesting financial news from multiple sources and using LLMs to extract structured, actionable data. Incoming articles are classified by event type (earnings, guidance changes, mergers, partnerships, analyst ratings, regulatory actions, and more), enriched with market data, and scored using factors such as sentiment, liquidity, relative volume, market capitalization, and historical price behavior.\n
      Eyez serves as the validation and research engine. Using historical news, market data, and generated signals, it backtests Earz's decision-making process to determine which event types, scoring factors, and market conditions consistently produce profitable outcomes. This feedback loop allows strategies to be refined using empirical results rather than assumptions.\n
      Together, the two systems form a complete pipeline that transforms unstructured financial news into measurable trading signals while continuously validating their effectiveness against historical market performance.`,
    tools: [
      'Python',
      'SQLite',
      'LLMs',
      'Finnhub',
      'Massive',
      'SEC EDGAR',
      'yfinance',
    ],
  },
  {
    title: 'Monte Carlo Engine',
    images: ['/images/MonteCarloEngine.png'],
    date: '2026',
    duration: '2 months',
    description: `Monte Carlo Engine is a quantitative finance simulation platform built to model and visualize the uncertainty of future stock price movements. Using Monte Carlo methods and Geometric Brownian Motion (GBM), the application generates thousands of possible price trajectories, providing insight into how volatility, drift, and time horizons influence the distribution of potential outcomes.\n
      The simulation engine is written in modern C++ and is designed around a modular architecture that separates path generation, statistical modeling, and rendering systems. This structure allows the platform to serve as a foundation for future financial modeling research while remaining easy to extend with additional stochastic processes and analytical tools.\n
      To make the simulations intuitive and interactive, the project incorporates an OpenGL-based visualization layer with an ImGui interface. Users can modify model parameters in real time and instantly observe how those changes affect generated stock paths through dynamic 2D visualizations.\n
      The project was developed as a practical exploration of computational finance, numerical simulation, and real-time graphics programming, combining mathematical modeling with high-performance rendering to transform abstract financial concepts into interactive visual experiences.`,
    tools: ['C++', 'OpenGL', 'GLFW', 'ImGui', 'CMake'],
    url: 'https://github.com/YousefKart/Monte-Carlo',
  },

  {
    title: 'Black-Scholes Visualizer',
    images: ['/images/BlackScholesVisualizer.png'],
    date: '2026',
    duration: '2 months',
    description: `Black-Scholes Visualizer is an interactive quantitative finance platform designed to explore option pricing theory through real-time analysis and visualization. Built in C++ with Qt, the application implements the Black-Scholes model for both call and put options, allowing users to examine how market variables influence theoretical option values and risk exposure.\n
      The platform provides multiple visualization modes that isolate relationships between key inputs such as stock price, strike price, volatility, interest rates, dividend yield, and time to expiration. As parameters are adjusted, the system dynamically recalculates option prices and Greeks, enabling users to observe how sensitivities such as Delta, Gamma, Theta, Vega, and Rho evolve under changing market conditions.\n
      To support interactive exploration, the application leverages QCustomPlot for high-performance graphing and responsive data visualization. Numerical calculations, data generation, and rendering systems are organized into independent components, creating a modular architecture that simplifies maintenance and allows new analytical tools and visualization modes to be added with minimal changes to the core codebase.\n
      Developed as both a learning platform and a foundation for quantitative finance research, the project combines financial mathematics, numerical computation, and interactive visualization to transform complex option pricing concepts into an intuitive and accessible experience.`,
    tools: ['C++', 'Qt', 'CMake'],
    url: 'https://github.com/YousefKart/Black-Scholes',
  },

  {
    title: 'Sentinel AI',
    images: ['/videos/AIMonitoringSystemClip.mp4', '/images/AIPMS.png'],
    date: '2025',
    duration: '8 months',
    description: `AI Monitoring System is an intelligent surveillance platform designed to transform unused mobile devices into AI-powered security cameras. The system streams live video from smartphones to a centralized server, allowing users to monitor their environment remotely through a web application while receiving real-time notifications about important events.\n
      At the core of the platform is a server-side computer vision pipeline built with Python, OpenCV, and YOLO. Incoming video streams are processed in real time to identify and track objects from a library of over 100 detectable classes, enabling the system to recognize people, animals, vehicles, packages, and other objects of interest. When specified events are detected, users receive push notifications and in-app alerts, allowing them to respond immediately without continuously monitoring live footage.\n
      The platform utilizes WebRTC to provide low-latency video streaming between mobile devices and the server infrastructure, while a React-based web application serves as the primary monitoring interface. Users can view live camera feeds, review recorded footage, manage detection settings, and monitor multiple devices through a unified dashboard.\n
      Developed as an 8-month capstone project by a team of five students, the system demonstrates the integration of real-time communications, computer vision, and scalable backend services. My primary contributions focused on the server architecture, including the video processing pipeline, AI detection systems, and WebRTC-based streaming infrastructure that enabled reliable real-time analysis of incoming video feeds.`,
    tools: [
      'React',
      'NodeJS',
      'YOLO',
      'WebRTC',
      'Firebase',
      'OpenCV',
      'Python',
    ],
    url: 'https://4990.tanzimfh.com/',
  },

  {
    title: 'The Last Ride',
    images: ['/videos/TheLastRide.mp4', '/images/TLR2.png', '/images/TLR1.png'],
    date: '2025',
    duration: '4 months',
    description:
      'A 3D animation project that tells the story of a forgotten vintage car on a journey to reconnect with the modern world.',
    tools: ['Blender', 'Maya', 'Adobe Premiere', 'ElevenLabs'],
  },

  {
    title: 'Flag Frenzy',
    images: [
      '/videos/FlagFrenzyClip.mp4',
      '/images/FlagFrenzyGame.webp',
      '/images/FlagFrenzyVehicles.webp',
    ],
    date: '2024',
    duration: '8 months',
    description: `Flag Frenzy is a commercially successful multiplayer capture-the-flag shooter developed on Roblox that combines fast-paced combat with objective-based team gameplay. Players are divided into opposing teams and must coordinate attacks, defend their base, and capture the enemy flag while preventing their own from being stolen. The game emphasizes teamwork, map control, and strategic decision-making alongside traditional shooter mechanics.\n
      The project features a variety of weapons, vehicles, and custom-designed maps created to support different playstyles and match dynamics. Each environment was carefully designed to balance offensive and defensive opportunities, encouraging players to adapt their tactics based on terrain, sightlines, and team composition. Gameplay systems were developed to provide a competitive yet accessible experience that rewards both individual skill and coordinated team play.\n
      In addition to gameplay programming, the project involved the creation and optimization of numerous 3D assets using Blender. Vehicles, props, environmental assets, and visual effects were designed with performance in mind to ensure smooth gameplay across a wide range of devices while maintaining visual quality. The project required balancing technical constraints, player engagement, and scalability to support a large and active player base.\n
      Developed over eight months, Flag Frenzy grew to attract approximately 2.5 million monthly visits on Roblox before the project and its associated assets were acquired for $50,000 USD. The project provided extensive experience in game development, multiplayer systems, 3D asset creation, live-service design, and building software that successfully operated at large scale for a real-world audience.`,
    tools: ['Roblox Studio', 'Blender', 'Lua'],
    url: 'https://www.roblox.com/games/15222475262/NEW-GUNS-FLAG-FRENZY-RED-VS-BLUE',
  },

  {
    title: 'Tourify',
    images: [
      '/images/TourifyLogo.webp',
      '/images/TourifyHome.webp',
      '/images/TourifyDemo.webp',
    ],
    date: '2024',
    duration: '4 months',
    description:
      'An Android mobile application that allows users to share and discover tourist locations around the world. Users can create and share their own tours, view tours created by others, and rate tours they have visited.',
    tools: ['Android Studio', 'Firebase', 'Google Places', 'Kotlin'],
  },

  {
    title: 'Volt Vista',
    images: [
      '/images/VoltVistaLogo.webp',
      '/videos/VoltVistaClip.mp4',
      '/images/VoltVistaHome.webp',
    ],
    date: '2023',
    duration: '4 months',
    description:
      'An energy monitoring and management solution. The system allows users to monitor their energy usage, set goals, and receive notifications when they are close to exceeding their budget. The system also provides recommendations on how to reduce energy consumption.',
    tools: ['React', 'NextJS', 'Vercel'],
    url: 'https://volt.borhansaflo.com/',
  },

  {
    title: 'Escape Java',
    images: [
      '/images/EscapeJavaGame2.png',
      '/images/EscapeJavaGame1.webp',
      '/images/EscapeJavaGame3.webp',
    ],
    date: '2023',
    duration: '2 months',
    description: `Escape Java is a fully interactive 3D escape room game developed in Java and set within a virtual recreation of the University of Windsor's Java Lounge. Players must explore the environment, uncover clues, and solve a series of interconnected puzzles in order to escape, combining logical problem-solving with environmental exploration in a first-person 3D experience.\n
      Unlike traditional game development workflows that rely on commercial game engines, the project was built entirely using Java3D and custom code. Core systems including scene management, object interactions, collision handling, camera controls, puzzle mechanics, and game logic were implemented from scratch, providing complete control over the application's architecture and behavior.\n
      The virtual environment was modeled using Blender and integrated into a Java-based rendering pipeline, requiring the coordination of 3D assets, scene hierarchies, transformations, and user interactions. Particular attention was given to creating an immersive representation of a real-world location while ensuring smooth navigation and responsive gameplay.\n
      Developed over two months as part of a computer graphics course, the project provided hands-on experience with 3D graphics programming, object-oriented software design, mathematical transformations, and interactive application development. The result is a complete 3D game experience built without the assistance of modern game engines, demonstrating a strong understanding of the underlying technologies that power interactive graphics applications.`,
    tools: ['Java3D', 'Blender'],
    url: 'https://youtu.be/1XG5x_ulwCk?si=Oc4ZvaU4J1N6x4HN',
  },

  {
    title: 'Ocean Anarchy',
    images: ['/images/OceanAnarchyAlpha.png', '/images/OceanAnarchyBoats.png'],
    date: '2022',
    duration: '1 week',
    description:
      "A pirate-themed open-world game where players can explore the high seas, engage in naval battles, and search for hidden treasures. The game features a variety of ships, weapons, and upgrades to customize the player's experience.",
    tools: ['Unity', 'Blender', 'C#'],
  },

  {
    title: 'Take Cover',
    images: [
      '/images/TakeCoverGame3.png',
      '/images/TakeCoverGame1.png',
      '/images/TakeCoverGame2.png',
    ],
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
