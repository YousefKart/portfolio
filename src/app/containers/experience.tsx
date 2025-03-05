import JobItem from '../components/jobItem';
import { FaLink, FaInstagram, FaLinkedin } from 'react-icons/fa';

const commonStyles = 'w-full flex flex-col items-center';
const titleStyles = 'border-b-2 border-tertiary text-4xl font-bold mt-16 mb-4';

const jobs = [
  {
    start: 'February 2025',
    end: 'Present',
    title: '3D Pre-Construction Lead',
    company: 'Powered by Scelta',
    links: [
      { icon: <FaLinkedin />, url: 'https://www.linkedin.com/company/sceltatech/posts/?feedView=all' },
      { icon: <FaInstagram />, url: 'https://www.instagram.com/scelta.tech/' },
      { icon: <FaLink />, url: 'https://www.scelta.tech/' },
    ],
    description:
      'Leading rapid prototyping and 3D modeling for pre-construction projects. Creating interactive 3D models to enhance client presentations.',
    images: '',
  },
];

export default function Projects() {
  return (
    <div id="jobs" className={`${commonStyles}`}>
      <h1 className={`${titleStyles} w-3/4 text-center`} data-aos="fade-up">
        Experience
      </h1>
      <ul className={`${commonStyles} gap-4 mt-4 mb-8`}>
        {jobs.map((job, index) => (
          <JobItem
            key={index}
            start={job.start}
            end={job.end}
            company={job.company}
            title={job.title}
            links={job.links}
            description={job.description}
            images={job.images}
          />
        ))}
      </ul>
    </div>
  );
}
