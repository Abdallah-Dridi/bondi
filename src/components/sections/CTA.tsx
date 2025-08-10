"use client";

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-blue to-soft-teal">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ready to Simplify Your Shared Life?
        </motion.h2>
        <motion.p 
          className="text-white/80 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Join thousands of groups using Bondi to bring transparency and ease to their shared expenses and responsibilities.
        </motion.p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button 
            className="bg-white text-primary-blue font-bold px-8 py-4 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Get Started Free
          </motion.button>
          <motion.button 
            className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Schedule a Demo
          </motion.button>
        </div>
      </div>
    </section>
  );
}