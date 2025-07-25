import { NavbarLink } from './NavbarLink';

export default function NavbarNavigation() {
  return (
    <div className="flex items-center justify-center gap-12">
      <NavbarLink href="#experience" label="experience">
        <p className="text-lg">Experience</p>
      </NavbarLink>

      <NavbarLink href="#skills" label="skills">
        <p className="text-lg">Skills</p>
      </NavbarLink>

      <NavbarLink href="#projects" label="projects">
        <p className="text-lg">Projects</p>
      </NavbarLink>

      <NavbarLink href="#contact" label="contact">
        <p className="text-lg">Contact</p>
      </NavbarLink>
    </div>
  );
}
