"use client";
import { useState, useEffect } from 'react';
import { navLinks } from '@/data/bondiData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-dark backdrop-blur-lg border-b border-border' : ''}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center animate-pulse-slow">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-2xl font-bold text-gradient">Bondi</span>
          </div>
          
          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-4 decoration-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Wallet buttons */}
          <div className="flex items-center space-x-4">
            <button className="px-6 py-2 rounded-full border border-border hover:border-primary transition-colors hover:bg-primary/10">
              Connect Wallet
            </button>
            <button className="px-6 py-2 rounded-full gradient-bg text-white font-medium glow-hover">
              Launch App
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}