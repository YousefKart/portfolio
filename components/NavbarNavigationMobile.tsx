import { NavbarLink } from './NavbarLink';

export default function NavbarNavigationMobile() {
  return (
    <div className="flex flex-col gap-4 text-lg">
      <NavbarLink href="#experience" label="experience">
        <p className="text-center">Experience</p>
      </NavbarLink>

      <NavbarLink href="#projects" label="projects">
        <p className="text-center">Projects</p>
      </NavbarLink>

      <NavbarLink href="#models" label="models">
        <p className="text-center">Models</p>
      </NavbarLink>

      <NavbarLink href="#contact" label="contact">
        <p className="text-center">Contact</p>
      </NavbarLink>
    </div>
  );
}
