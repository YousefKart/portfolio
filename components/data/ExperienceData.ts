import { ExperienceType } from '@/lib/types/ExperienceType';

export const experienceData: ExperienceType[] = [
  {
    title: 'Software Engineer (Full Stack)',
    company: 'Scelta',
    location: 'Windsor, ON',
    date: 'Feb 2025 - Present',
    description: [
      'Designed and implemented shared-authentication for SSO across the Scelta Suite.',
      'Developed and deployed a standardized UI-package for Scelta web applications.',
      'Created a NextJS app template to streamline web prototyping and testing.',
      'Implemented a powerful and flexible feature for embedding 3D models on a web-based map.',
      'Optimized database queries and API endpoints, reducing loading times and improving user experience.',
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
    title: '3D Design Lead',
    company: 'Scelta',
    location: 'Windsor, ON',
    date: 'Feb 2025 - Present',
    description: [
      'Created 3D models of proposed real estate developments using architectural blueprints, site plans and inspiration images.',
      'Produced cost-effective, presentation-ready visualizations in 3–5 days, compared to the industry average of 2–4 weeks.',
      'Enabled successful client pitches, directly contributing to increased sales of other products within the Scelta Suite.',
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
