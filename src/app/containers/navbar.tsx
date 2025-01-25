import { HomeIcon } from '@heroicons/react/20/solid';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="flex w-full border-b-2 border-tertiary fixed top-0 z-50">
      <ul className="flex justify-start space-between bg-secondary w-1/2 gap-8 pl-8">
        <li>
          <a href="#">
            <HomeIcon className="h-8 w-8 mt-3" />
          </a>
        </li>
        <li className="p-3 text-2xl font-bold">
          <a href="#skills">Skills</a>s
        </li>
        <li className="p-3 text-2xl font-bold">
          <a href="#projects">Projects</a>
        </li>
        <li className="p-3 text-2xl font-bold">
          <a href="#models">Models</a>
        </li>
        <li className="p-3 text-2xl font-bold">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <ul className="flex justify-end space-between bg-secondary w-1/2 gap-8 pr-8">
        <li>
          <a href="https://www.github.com/YousefKart" target="#">
            <FaGithub className="h-8 w-8 mt-3" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/yousef-kart/" target="#">
            <FaLinkedin className="h-8 w-8 mt-3" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
