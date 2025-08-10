// src/components/layout/Header.tsx
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { navLinks } from '@/data/bondiData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-black/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Image src="/logo.png" alt="Bondi Logo" width={120} height={40} />
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-text-dark hover:text-primary-green transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <button className="hidden md:block bg-primary-green text-white font-medium px-5 py-2 rounded-lg hover:bg-opacity-90 transition-all hover:shadow-glow">
          Get Started
        </button>
      </div>
    </header>
  );
}