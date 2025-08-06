import { NavbarLink } from './NavbarLink';

export default function NavbarNavigation() {
  return (
    <div className="flex items-center justify-center gap-12 text-lg">
      <NavbarLink href="#experience" label="experience">
        <p>Experience</p>
      </NavbarLink>

      {/* <NavbarLink href="#skills" label="skills">
        <p>Skills</p>
      </NavbarLink> */}

      <NavbarLink href="#projects" label="projects">
        <p>Projects</p>
      </NavbarLink>

      <NavbarLink href="#models" label="models">
        <p>Models</p>
      </NavbarLink>

      <NavbarLink href="#contact" label="contact">
        <p>Contact</p>
      </NavbarLink>
    </div>
  );
}
