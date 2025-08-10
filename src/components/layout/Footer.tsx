// src/components/layout/Footer.tsx
import { navLinks } from '@/data/bondiData';

export default function Footer() {
  return (
    <footer className="bg-dark-charcoal text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <nav className="flex justify-center space-x-6 mb-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-soft-teal transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <p>&copy; {new Date().getFullYear()} Bondi. All rights reserved.</p>
      </div>
    </footer>
  );
}