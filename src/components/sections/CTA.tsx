"use client";
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="py-32 px-6 relative overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--primary)_0%,transparent_50%)] opacity-10"
          initial={{ scale: 1, opacity: 0 }}
          whileInView={{ scale: 3, opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover opacity-5" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.h2
          className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Join the New Economy
        </motion.h2>

        <motion.p
          className="text-secondary max-w-3xl mx-auto mb-12 text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Step into a more transparent, efficient, and collaborative financial future. Whether you&apos;re a developer, a user, or a visionary, your journey with Bondi starts now.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <motion.button
            className="w-full sm:w-auto px-10 py-5 rounded-lg bg-primary text-background font-bold text-lg shadow-2xl shadow-primary/20 glow-hover group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <span className="flex items-center justify-center space-x-2">
              <span>Launch dApp</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>

          <motion.button
            className="w-full sm:w-auto px-10 py-5 rounded-lg glass border-2 border-border text-foreground font-bold text-lg hover:border-primary/50 transition-colors group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <span className="flex items-center justify-center space-x-2">
              <BookOpen className="w-5 h-5" />
              <span>Read the Docs</span>
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}