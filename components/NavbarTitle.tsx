import { NavbarLink } from './NavbarLink';

export default function NavbarTitle() {
  return (
    <NavbarLink href="#hero" label="Yousef Kart" scale={false}>
      <p className="text-lg font-semibold">Yousef Kart</p>
    </NavbarLink>
  );
}
