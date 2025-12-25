import { ExperienceType } from '@/lib/types/ExperienceType';

export const experienceData: ExperienceType[] = [
  {
    title: 'Software Engineer',
    company: 'Scelta',
    location: 'Windsor, ON',
    date: 'Feb 2025 - Present',
    description: [
      'Implemented a shared-authentication system for SSO across the Scelta Suite',
      'Co-developed a Retrieval Augmented Generation (RAG) data pipeline for the Sitekick AI assistant',
      'Designed and deployed a standardized UI package for Scelta web applications',
      'Created a NextJS app template according to Scelta requirements, reducing initial build time by more than 50%',
      'Built a system to seamlessly embed 3D models into web maps, improving visualization workflows',
      'Optimized database queries and API endpoints, decreasing loading times by up to 25% and improving UX',
      'Developed an internal tool for automated testing across multiple applications, reducing build cycle times by 14%',
      'Collaborated with cross-functional teams to ship and maintain features across 6 applications',
    ],
    tools: [
      {
        title: 'Frontend Frameworks',
        tools: ['React', 'NextJS', 'TailwindCSS'],
      },
      {
        title: 'Backend & Database',
        tools: ['NodeJS', 'Supabase', 'PostgreSQL'],
      },
      {
        title: 'DevOps',
        tools: [
          'GitHub CI/CD',
          'DigitalOcean',
          'Docker',
          'Trello',
          'Google Analytics',
        ],
      },
      {
        title: 'Languages',
        tools: [
          'TypeScript',
          'JavaScript',
          'Python',
          'HTML',
          'CSS',
          'SQL',
          'C#',
        ],
      },
    ],
  },

  {
    title: '3D Modeller and Designer',
    company: 'Freelance',
    location: 'Global',
    date: 'Jun 2021 - Feb 2025',
    description: [
      'Created hundreds of optimized assets for video games and 3D animations across 40+ clients globally',
      'Modelled and rendered dozens of proposed real estate developments using architectural blueprints and site plans, ranging from single-family homes to $100 million+ developments',
      'Produced cost-effective, presentation-ready visualizations in 3-5 days, 3x faster than the competition average',
      'Enabled successful client pitches, directly contributing to increased sales and contracts',
    ],
    tools: [
      {
        title: '3D Modelling',
        tools: ['Blender', 'AutoCAD'],
      },
      {
        title: 'Collaboration',
        tools: ['Trello', 'Google Drive'],
      },
      {
        title: 'Tools',
        tools: ['Python', 'Animotica', 'Soundly', 'Canva', 'FSpy', 'Poliigon'],
      },
    ],
  },

  {
    title: 'Programming & Mathematics Tutor',
    company: 'Freelance',
    location: 'Windsor, ON & Detroit, MI',
    date: 'Sep 2022 - May 2024',
    description: [
      'Tutored more than 10 engineering students in programming (Python, C++, MATLAB), data structures, and algorithms, by simplifying complex concepts into practical examples',
      "Strengthened students' problem solving skills by guiding them through proper programming practices, debugging, and exam preparation",
    ],
    tools: [
      {
        title: 'Programming Languages',
        tools: ['Python', 'C++', 'MATLAB'],
      },
      {
        title: 'Topics',
        tools: [
          'Data Structures',
          'Algorithms',
          'Debugging',
          'Problem Solving',
        ],
      },
    ],
  },
];
