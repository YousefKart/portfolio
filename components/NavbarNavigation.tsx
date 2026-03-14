import { NavbarLink } from './NavbarLink';

export default function NavbarNavigation() {
  return (
    <div className="flex items-center justify-center gap-12 text-lg">
      <NavbarLink href="#experience" label="experience" scale={false}>
        <p>Experience</p>
      </NavbarLink>

      <NavbarLink href="#projects" label="projects" scale={false}>
        <p>Projects</p>
      </NavbarLink>

      <NavbarLink href="#models" label="models" scale={false}>
        <p>Models</p>
      </NavbarLink>

      <NavbarLink href="#contact" label="contact" scale={false}>
        <p>Contact</p>
      </NavbarLink>
    </div>
  );
}
