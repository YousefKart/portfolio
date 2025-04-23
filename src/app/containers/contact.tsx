import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const commonStyles = 'w-full flex flex-col items-center';
const titleStyles = 'border-b-2 border-tertiary text-4xl font-bold mt-16 mb-4';
const itemStyles =
  'flex justify-center items-center gap-2 hover:text-tertiary transition-colors';

const contactItems = [
  {
    icon: <MdEmail className="h-8 w-8" />,
    label: 'Email',
    link: 'mailto:yousefkart21@gmail.com',
  },
  {
    icon: <FaGithub className="h-8 w-8" />,
    label: 'GitHub',
    link: 'https://github.com/YousefKart',
  },
  {
    icon: <FaLinkedin className="h-8 w-8" />,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/yousef-kart/',
  },
  {
    icon: <FaFileAlt className="h-8 w-8" />,
    label: 'Resume',
    link: '/resume/Yousef%20Kart%20Resume.pdf',
  },
];

const ContactItem = ({
  icon,
  label,
  link,
}: {
  icon: JSX.Element;
  label: string;
  link: string;
}) => (
  <li className={itemStyles} data-aos="fade-up">
    {icon}
    <a href={link} target="_blank">
      {label}
    </a>
  </li>
);

export default function Contact() {
  return (
    <div id="contact" className={`${commonStyles}`}>
      <h1 className={`${titleStyles} w-3/4 text-center`} data-aos="fade-up">
        Contact
      </h1>
      <ul className="flex justify-between w-1/2 gap-4 mt-4 mb-8">
        {contactItems.map((item, index) => (
          <ContactItem key={index} {...item} />
        ))}
      </ul>
    </div>
  );
}
