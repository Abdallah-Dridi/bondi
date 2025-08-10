"use client";
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const constraintsRef = useRef(null);
  
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20"
      ref={constraintsRef}
    >
      {/* Floating elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-primary to-secondary blur-3xl opacity-20"
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-accent to-secondary blur-2xl opacity-15"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      ></motion.div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div 
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-muted-foreground">LIVE ON MAINNET</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            >
              Revolutionizing
              <br />
              <span className="text-gradient">Group Finance</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10"
            >
              The blockchain-powered solution for transparent expense sharing, chore management, and fair settlements.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <button className="px-8 py-4 rounded-full gradient-bg text-white font-semibold text-lg glow-hover group">
                <span className="flex items-center">
                  <span>Launch dApp</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">↗</span>
                </span>
              </button>
              <button className="px-8 py-4 rounded-full glass border border-border hover:border-primary transition-colors group">
                <span className="flex items-center">
                  <span>Watch Demo</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Interactive dApp preview */}
              <div className="absolute w-full h-full max-w-md">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-2xl animate-pulse"></div>
                
                <motion.div 
                  className="absolute top-10 left-0 glass p-6 rounded-2xl border border-primary/20 w-64"
                  drag
                  dragConstraints={constraintsRef}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-white">$</span>
                    </div>
                    <h3 className="ml-3 font-bold">Expense Split</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Rent: $1200</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm">4 people</span>
                    <span className="font-bold">$300 each</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-20 right-0 glass p-6 rounded-2xl border border-accent/20 w-64"
                  drag
                  dragConstraints={constraintsRef}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </div>
                    <h3 className="ml-3 font-bold">Chore Completed</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Kitchen cleaned by Sarah</p>
                  <div className="mt-4 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-dashed mr-2"></div>
                    <span className="text-sm">+10 points</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 glass p-6 rounded-2xl border border-secondary/20 w-72"
                  drag
                  dragConstraints={constraintsRef}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                      <span className="text-white">🔄</span>
                    </div>
                    <h3 className="ml-3 font-bold">Subscription</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Netflix: $15.99/month</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm">Auto-split</span>
                    <span className="font-bold">$3.99 each</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}