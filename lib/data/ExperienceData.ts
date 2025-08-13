import { ExperienceType } from '@/lib/types/ExperienceType';

export const experienceData: ExperienceType[] = [
  {
    title: 'Software Engineer (Full Stack)',
    company: 'Scelta',
    location: 'Windsor, ON',
    date: 'Feb 2025 - Present',
    description: [
      'Implemented a shared-authentication system for SSO across the Scelta Suite.',
      'Designed and deployed a standardized UI package for Scelta web applications.',
      'Created a NextJS application template to streamline web prototyping and testing.',
      'Developed a flexible feature for embedding 3D models onto a web-based map.',
      'Optimized database queries and API endpoints, reducing loading times and improving user experience.',
      'Introduced an internal tool for automating UI testing across multiple applications.',
      'Collaborated with cross-functional teams to develop and maintain core features on 6 different applications (Scelta Home, REDMap, Sitekick, SpeedCRM, Portal, and Encore).',
    ],
    tools: [
      {
        title: 'Frontend Frameworks',
        tools: ['React', 'NextJS', 'TailwindCSS'],
      },
      {
        title: 'Backend & Database',
        tools: ['NodeJS', 'ExpressJS', 'Supabase', 'PostgreSQL'],
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
      'Created hundreds of optimized assets for video games and 3D animations.',
      'Modelled and rendered dozens of proposed real estate developments using architectural blueprints and site plans. Projects range from single-family homes to $100 million+ developments.',
      'Produced cost-effective, presentation-ready visualizations in 3–5 days, 300% faster than the competition average.',
      'Enabled successful client pitches, directly contributing to increased sales of other products within company suites.',
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
];
