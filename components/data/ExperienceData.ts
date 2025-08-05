import { ExperienceData } from '@/lib/types/ExperienceData';

export const experienceData: ExperienceData[] = [
  {
    id: 1,
    title: 'Software Engineer (Full Stack)',
    company: 'Scelta',
    location: 'Windsor, ON',
    date: 'Feb 2025 - Present',
    description: [
      'Designed and implemented shared-authentication for SSO across the Scelta Suite.',
      'Developed and deployed a standardized UI-package for Scelta web applications.',
      'Created a NextJS app template to streamline web prototyping and testing.',
      'Collaborated with cross-functional teams to develop and maintain core features on 6 different applications (Scelta Home, REDMap, Sitekick, SpeedCRM, Portal, and Encore).',
      'Optimized database queries and API endpoints, reducing loading times and improving user experience.',
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
];
