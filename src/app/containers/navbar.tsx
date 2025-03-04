import { useState, useEffect } from 'react';
import { HomeIcon } from '@heroicons/react/20/solid';
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-secondary border-b-2 border-tertiary'
          : 'bg-transparent border-b-2 border-transparent'
      }`}
    >
      <div className="flex justify-between items-center w-full px-8 py-4">
        {/* Left Section: Home Icon & Section Shortcuts */}
        <div className="flex items-center gap-8">
          <a href="#">
            <HomeIcon className="h-8 w-8" />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8">
            {['Skills', 'Projects', 'Models', 'Contact'].map((item, index) => (
              <li key={index} className="p-3 text-2xl font-bold">
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Social Icons */}
        <ul className="hidden lg:flex justify-end gap-8">
          <li>
            <a href="https://www.github.com/YousefKart" target="_blank">
              <FaGithub className="h-8 w-8" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yousef-kart/" target="_blank">
              <FaLinkedin className="h-8 w-8" />
            </a>
          </li>
          <li>
            <a href="/resume/Yousef%20Kart%20Resume.pdf" target="_blank">
              <FaFileAlt className="h-8 w-8" />
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX className="h-8 w-8" /> : <FiMenu className="h-8 w-8" />}
        </button>
      </div>

      {/* Animated Mobile Dropdown Menu */}
      <div
        className={`lg:hidden bg-secondary w-full flex flex-col items-center overflow-hidden mt-[-64] border-b-2 border-tertiary transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-[500px] py-4' : 'max-h-0 py-0'
        }`}
      >
        {['Skills', 'Projects', 'Models', 'Contact'].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            className="text-2xl mt-1 mb-1 font-bold hover:text-tertiary transition-colors"
            onClick={() => setMenuOpen(false)} // Close menu on click
          >
            {item}
          </a>
        ))}
        <div className="flex gap-6 mt-4">
          <a href="https://www.github.com/YousefKart" target="_blank">
            <FaGithub className="h-8 w-8" />
          </a>
          <a href="https://www.linkedin.com/in/yousef-kart/" target="_blank">
            <FaLinkedin className="h-8 w-8" />
          </a>
          <a href="/resume/Yousef%20Kart%20Resume.pdf" target="_blank">
            <FaFileAlt className="h-8 w-8" />
          </a>
        </div>
      </div>
    </nav>
  );
}
