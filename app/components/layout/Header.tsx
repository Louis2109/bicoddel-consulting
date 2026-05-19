'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/app/components/common';
import { siteContent } from '@/app/data/content';
import styles from '@/app/styles/layout.module.css';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    // Smooth scroll to section
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <span className="font-bold text-2xl text-yellow-400">
              {siteContent.header.logo}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.navMenuDesktop}>
          {siteContent.header.navigation.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-black hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            variant="primary"
            size="md"
            onClick={() => handleNavClick('#contact')}
          >
            Demander une consultation
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-8 h-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-full h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-full h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-full h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className="flex flex-col gap-4 p-6">
            {siteContent.header.navigation.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-black hover:text-yellow-400 transition-colors duration-300 font-medium text-left"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="primary"
              size="md"
              onClick={() => handleNavClick('#contact')}
              className="w-full"
            >
              Demander une consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
