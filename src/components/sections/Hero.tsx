// src/components/sections/Hero.tsx
"use client";
import { motion } from 'framer-motion';
import { hero } from '@/data/bondiData';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-primary-green/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 text-center z-10">
        <motion.h1 
          className="text-5xl md:text-8xl font-black text-text-dark mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Simplify <span className="text-primary-green">Shared Living.</span>
        </motion.h1>
        <motion.p 
          className="max-w-3xl mx-auto text-lg text-text-light mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {hero.subheadline}
        </motion.p>
        <motion.div 
          className="flex justify-center items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="bg-primary-green text-white font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform hover:shadow-glow">
            {hero.cta1}
          </button>
        </motion.div>
      </div>
    </section>
  );
}