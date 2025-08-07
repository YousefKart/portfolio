'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';
import NavbarContact from './NavbarContact';
import NavbarNavigationMobile from './NavbarNavigationMobile';
import NavbarTitle from './NavbarTitle';

export default function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 w-full flex items-center justify-between px-4 h-16 bg-background/90 backdrop-blur z-50">
        {/* LEFT - Title */}
        <div className="flex items-center">
          <NavbarTitle />
        </div>

        {/* RIGHT - Menu button and Theme switcher */}
        <div className="flex items-center gap-3">
          <ThemeSwitcher />
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-foreground/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={closeMenu} />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 bg-background/95 backdrop-blur-lg border-l transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 gap-6">
          {/* Navigation Links */}
          <div className="flex flex-col gap-4" onClick={closeMenu}>
            <NavbarNavigationMobile />
          </div>

          {/* Divider */}
          <hr className="border-border" />

          {/* Contact Icons */}
          <div className="flex justify-center">
            <NavbarContact />
          </div>
        </div>
      </div>
    </>
  );
}
