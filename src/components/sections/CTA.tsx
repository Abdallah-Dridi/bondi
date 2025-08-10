"use client";
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="cta" className="py-32 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-background/30 to-secondary/10"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ready to Transform Your Shared Living?
        </motion.h2>
        
        <motion.p
          className="text-white/80 max-w-2xl mx-auto mb-10 text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Join thousands of groups using Bondi to bring transparency and ease to their shared finances.
        </motion.p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <motion.button
            className="px-10 py-5 rounded-full bg-white text-primary font-bold text-lg shadow-xl hover:scale-105 transition-transform group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="flex items-center justify-center space-x-2">
              <span>Get Started Free</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </motion.button>
          
          <motion.button
            className="px-10 py-5 rounded-full glass border-2 border-white/30 text-white font-bold text-lg shadow-xl hover:bg-white/10 transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="flex items-center justify-center space-x-2">
              <span>View Demo</span>
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </span>
          </motion.button>
        </div>
        
        <motion.div
          className="mt-12 inline-block glass px-6 py-3 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-white/80">
            No credit card required • 30-day free trial
          </p>
        </motion.div>
      </div>
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 360, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-10 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-red-500 shadow-lg"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: 0.5,
          ease: "easeInOut"
        }}
      />
    </section>
  );
}