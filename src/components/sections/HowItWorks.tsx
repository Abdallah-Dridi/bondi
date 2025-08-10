// src/components/sections/HowItWorks.tsx
"use client";
import { motion } from 'framer-motion';
import { howItWorks } from '@/data/bondiData';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-dark-charcoal mb-12">
          Get Started in 3 Simple Steps
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {howItWorks.map((step, index) => (
            <motion.div
              key={step.step}
              className="flex-1 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-dark-charcoal mb-2">{step.title}</h3>
              <p className="text-dark-charcoal/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}