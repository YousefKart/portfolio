import ThemeSwitcher from './ThemeSwitcher';
import NavbarContact from './NavbarContact';
import NavbarNavigation from './NavbarNavigation';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-16 border-b h-16 bg-background">
      {/* LEFT */}
      <div>Yousef Kart</div>

      {/* MIDDLE */}
      <div className="flex items-center justify-startgap-10">
        <NavbarNavigation />
      </div>

      {/* RIGHT */}
      <div className="flex flex-row-reverse items-center justify-end gap-10">
        <ThemeSwitcher />
        <NavbarContact />
      </div>
    </nav>
  );
}
