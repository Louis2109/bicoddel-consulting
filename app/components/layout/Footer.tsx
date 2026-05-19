'use client';

import Link from 'next/link';
import { siteContent } from '@/app/data/content';
import styles from '@/app/styles/layout.module.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Main Footer Content */}
      <div className={styles.footerContent}>
        {/* Column 1: Branding */}
        <div className={styles.footerColumn}>
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">
            {siteContent.header.logo}
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed max-w-xs">
            Expert en ingénierie de projet et financement pour collectivités décentralisées et partenaires internationaux.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className={styles.footerColumn}>
          <h4 className="text-lg font-bold text-black mb-4">Navigation</h4>
          <ul className="space-y-2">
            {siteContent.header.navigation.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-yellow-400 transition-colors duration-300 text-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className={styles.footerColumn}>
          <h4 className="text-lg font-bold text-black mb-4">Contact</h4>
          <div className="space-y-3">
            {/* Email */}
            <div className="flex items-start gap-2">
              <span className="text-yellow-400 font-bold mt-0.5">📧</span>
              <a
                href={`mailto:${siteContent.contact.email}`}
                className="text-gray-700 hover:text-yellow-400 transition-colors duration-300 text-sm break-all"
              >
                {siteContent.contact.email}
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-2">
              <span className="text-yellow-400 font-bold mt-0.5">📱</span>
              <a
                href={`https://wa.me/${siteContent.contact.whatsapp.replace(/\s+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-yellow-400 transition-colors duration-300 text-sm"
              >
                {siteContent.contact.phone}
                <br />
                <span className="text-xs text-gray-600">(WhatsApp)</span>
              </a>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2">
              <span className="text-yellow-400 font-bold mt-0.5">📍</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                {siteContent.contact.address}
              </p>
            </div>
          </div>
        </div>

        {/* Column 4: Legal */}
        <div className={styles.footerColumn}>
          <h4 className="text-lg font-bold text-black mb-4">Légal</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="text-gray-700 hover:text-yellow-400 transition-colors duration-300 text-sm"
              >
                Mentions légales
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-700 hover:text-yellow-400 transition-colors duration-300 text-sm"
              >
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-700 hover:text-yellow-400 transition-colors duration-300 text-sm"
              >
                Conditions d'utilisation
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <p className="text-center text-sm text-gray-700">
          © {currentYear} BICODDEL Consulting. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
