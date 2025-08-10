// src/components/sections/Features.tsx
"use client";
import { motion } from 'framer-motion';
import { features } from '@/data/bondiData';

export default function Features() {
  return (
    <section id="features" className="py-24 bg-dark-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Everything You Need for a Fair Share
        </h2>
        <p className="text-center text-off-white/70 mb-16">Bondi provides all the tools to manage group finances and tasks with clarity.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative p-8 rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary-blue/10 p-2 rounded-lg">
                  <feature.icon className="w-6 h-6 text-soft-teal" />
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              </div>
              <p className="text-off-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}