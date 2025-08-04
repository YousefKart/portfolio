import ThemeSwitcher from './ThemeSwitcher';
import NavbarContact from './NavbarContact';
import NavbarNavigation from './NavbarNavigation';
import NavbarTitle from './NavbarTitle';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-between px-8 h-16 bg-background/90 backdrop-blur z-50">
      {/* LEFT */}
      <div className="flex items-center justify-start gap-10 flex-1">
        <NavbarTitle />
      </div>

      {/* MIDDLE */}
      <div className="flex items-center justify-center gap-10 flex-1">
        <NavbarNavigation />
      </div>

      {/* RIGHT */}
      <div className="flex items-center justify-end gap-10 flex-1">
        <NavbarContact />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
