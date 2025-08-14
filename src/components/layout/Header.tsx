"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#ecosystem", label: "Ecosystem" },
  { href: "/#testimonials", label: "Testimonials" },
];

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
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div 
        className={`w-full transition-all duration-300 ${isScrolled ? 'pt-4' : 'pt-8'}`}
      >
        <div className="container mx-auto px-6 py-4 glass rounded-xl border border-border/50">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-3">
              <div className="w-8 h-8 relative">
                  <div className="w-full h-full rounded-full border-2 border-foreground"/>
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary border-2 border-background"/>
              </div>
              <span className="font-display text-2xl font-semibold text-foreground">Bondi</span>
            </a>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href}
                  className="relative text-secondary hover:text-foreground transition-colors group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"/>
                </a>
              ))}
            </nav>
            
            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <button  className="px-6 py-2 rounded-lg bg-primary text-background font-semibold glow-hover" >
                <a href="/dApp">Launch App</a> 
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}