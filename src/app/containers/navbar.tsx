import { useState, useEffect } from 'react';
import { HomeIcon } from '@heroicons/react/20/solid';
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex w-full fixed top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-secondary border-b-2 border-tertiary'
          : 'bg-transparent border-b-2 border-transparent'
      }`}
    >
      <ul className="flex justify-start space-between w-1/2 gap-8 pl-8">
        <li>
          <a href="#">
            <HomeIcon className="h-8 w-8 mt-3" />
          </a>
        </li>
        <li className="p-3 text-2xl font-bold">
          <a href="#skills">Skills</a>
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
      <ul className="flex justify-end space-between w-1/2 gap-8 pr-8">
        <li>
          <a href="https://www.github.com/YousefKart" target="_blank">
            <FaGithub className="h-8 w-8 mt-3" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/yousef-kart/" target="_blank">
            <FaLinkedin className="h-8 w-8 mt-3" />
          </a>
        </li>
        <li>
          <a href="/resume/Yousef%20Kart%20Resume.pdf" target="_blank">
            <FaFileAlt className="h-8 w-8 mt-3" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
