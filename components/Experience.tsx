import { ExperienceItem } from './ExperienceItem';

const experienceData = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Scelta',
    location: 'Windsor, ON',
    date: 'Feb 2025 - Present',
    description: [
      'Designed and implemented scalable web applications using Next.js and Supabase, improving user experience and performance.',
      'Collaborated with cross-functional teams to develop and maintain core features for REDMap, Sitekick, and Speed CRM.',
      'Optimized database queries and API endpoints, reducing response times by 30%.',
      'Led code reviews and mentored junior developers, fostering a culture of continuous learning and improvement.',
    ],
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'TechNova',
    location: 'Toronto, ON',
    date: 'Jan 2023 - Jan 2025',
    description: [
      'Developed responsive and accessible user interfaces using React and TypeScript.',
      'Integrated RESTful APIs and third-party services to enhance application functionality.',
      'Implemented unit and integration tests, achieving 90% test coverage across projects.',
      'Collaborated with designers to ensure pixel-perfect implementation of UI/UX designs.',
    ],
  },
  {
    id: 3,
    title: 'Web Developer Intern',
    company: 'Innovate Labs',
    location: 'Vancouver, BC',
    date: 'May 2022 - Dec 2022',
    description: [
      'Assisted in the development of e-commerce platforms using React and Node.js.',
      'Created reusable components and optimized code for maintainability.',
      'Participated in daily stand-ups and sprint planning sessions as part of an Agile team.',
      'Documented technical processes and workflows to streamline onboarding for new team members.',
    ],
  },
];

export default function Experience() {
  return (
    <div id="experience" className="flex flex-col gap-8 scroll-mt-20">
      <h1 className="text-center text-2xl font-semibold">Experience</h1>
      {experienceData.map((item) => (
        <ExperienceItem
          key={item.id}
          title={item.title}
          company={item.company}
          location={item.location}
          date={item.date}
          description={item.description}
        />
      ))}
    </div>
  );
}
