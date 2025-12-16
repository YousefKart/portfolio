import { FileCode, Linkedin, Github } from 'lucide-react';
import { NavbarLink } from './NavbarLink';

export default function NavbarContact() {
  return (
    <div className="flex items-center justify-center gap-4">
      <NavbarLink
        href="/Yousef_Kart_Software_Engineer_Resume.pdf"
        target="_blank"
        label="Resume"
        scale={true}
      >
        <FileCode className="h-6 w-6" />
      </NavbarLink>

      <NavbarLink
        href="https://www.linkedin.com/in/yousef-kart/"
        target="_blank"
        label="LinkedIn"
        scale={true}
      >
        <Linkedin className="h-6 w-6" />
      </NavbarLink>

      <NavbarLink
        href="https://github.com/YousefKart"
        target="_blank"
        label="Github"
        scale={true}
      >
        <Github className="h-6 w-6" />
      </NavbarLink>
    </div>
  );
}
