import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const commonStyles = 'w-full flex flex-col items-center';
const titleStyles = 'border-b-2 border-tertiary text-4xl font-bold mt-16 mb-4';

export default function Contact() {
  return (
    <div id="contact" className={`${commonStyles}`}>
      <h1 className={`${titleStyles} w-3/4 text-center`} data-aos="fade-up">
        Contact
      </h1>
      <ul className="flex flex-col gap-4 mt-4 mb-8">
        <li
          className="flex justify-center items-center gap-4"
          data-aos="fade-up"
        >
          <MdEmail className="h-8 w-8" />
          <a href="mailto:yousefkart21@gmail.com" target="_blank">
            Email
          </a>
        </li>
        <li
          className="flex justify-center items-center gap-4"
          data-aos="fade-up"
        >
          <FaGithub className="h-8 w-8" />
          <a href="https://github.com/YousefKart" target="_blank">
            GitHub
          </a>
        </li>
        <li
          className="flex justify-center items-center gap-4"
          data-aos="fade-up"
        >
          <FaLinkedin className="h-8 w-8" />
          <a href="https://www.linkedin.com/in/yousef-kart/" target="_blank">
            LinkedIn
          </a>
        </li>
        <li
          className="flex justify-center items-center gap-4"
          data-aos="fade-up"
        >
          <FaFileAlt className="h-8 w-8" />
          <a href="/resume/Yousef%20Kart%20Resume.pdf" target="_blank">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
