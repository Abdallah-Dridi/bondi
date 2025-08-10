"use client";
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { ShieldCheck, CircleDollarSign, ClipboardList, Repeat, ArrowRight, CheckCircle, Users } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="size-6" />,
    title: "Immutable Ledger",
    description:
      "Every transaction, chore, and agreement is recorded on an immutable, transparent ledger.",
    details: [
      "Cryptographically secured records prevent tampering.",
      "Verifiable on-chain history for all group members.",
      "Eliminates disputes with a single, permanent source of truth.",
    ],
    visual: () => (
      <motion.div className="w-full h-full flex items-center justify-center p-4">
        <div className="flex items-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-24 h-32 bg-card border border-border rounded-lg flex flex-col items-center justify-center p-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <span className="text-xs text-secondary">Block {816 + i}</span>
              <ShieldCheck className="size-8 my-2 text-primary/50" />
              {/* FIXED: Replaced Math.random() with a deterministic value */}
              <span className="font-mono text-xs text-secondary">
                0x...{((i + 1) * 12345).toString(16).slice(-4)}
              </span>
            </motion.div>
          ))}
          <motion.div
            className="w-8 h-1 bg-primary"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{ transformOrigin: "left" }}
          />
          <motion.div
            className="w-24 h-32 bg-card border border-dashed border-primary rounded-lg flex flex-col items-center justify-center p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: 0.8, repeat: Infinity, duration: 2 }}
          >
            <span className="text-xs text-primary">Forging...</span>
          </motion.div>
        </div>
      </motion.div>
    ),
  },
  {
    icon: <CircleDollarSign className="size-6" />,
    title: "Smart Expense Splitting",
    description:
      "Log a bill once, and let our smart contracts handle the rest automatically.",
    details: [
      "Gas-optimized contracts for low-cost transactions.",
      "Supports complex splits by percentage, amount, or shares.",
      "Real-time balance updates for all group members.",
    ],
    visual: () => (
      <motion.div className="w-full h-full flex items-center justify-center relative p-4">
        <motion.div
          className="w-28 h-28 bg-primary rounded-full flex flex-col items-center justify-center font-mono text-background"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <span className="text-md">TOTAL</span>
          <span className="text-lg font-bold">$120.00</span>
        </motion.div>
        {[0, 120, 240].map((deg, i) => {
          // FIX: Calculate positions using trig functions
          const angleInRad = deg * (Math.PI / 180);
          const x = 120 * Math.cos(angleInRad);
          const y = 120 * Math.sin(angleInRad);

          return (
            <motion.div
              key={deg}
              className="absolute w-20 h-20 bg-card border border-border rounded-full flex items-center justify-center font-mono"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                x,
                y,
              }}
              transition={{
                delay: 0.5 + i * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
            >
              $40.00
            </motion.div>
          );
        })}
      </motion.div>
    ),
  },

  {
    icon: <ClipboardList className="size-6" />,
    title: "Verifiable Chore Tracking",
    description:
      "Create a fair and transparent system for shared responsibilities.",
    details: [
      "On-chain records of task assignment and completion.",
      "Optional rewards system using smart contracts.",
      "History of contributions is transparent and verifiable.",
    ],
    visual: () => (
      <motion.div className="w-full h-full p-8 flex flex-col justify-center gap-4">
        {["Clean Kitchen", "Take out trash", "Pay electricity bill"].map(
          (task, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4 p-4 bg-card rounded-lg"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              <motion.div
                className="w-6 h-6 border-2 border-primary rounded-md flex items-center justify-center"
                initial={{ background: "transparent" }}
                animate={{ background: "#4ade80" }}
                transition={{ delay: 1 + i * 0.5 }}
              >
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1 + i * 0.5, duration: 0.3 }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0A0A0A"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <motion.path d="M20 6L9 17l-5-5"></motion.path>
                  </svg>
                </motion.div>
              </motion.div>
              <span className="text-foreground text-lg">{task}</span>
            </motion.div>
          )
        )}
      </motion.div>
    ),
  },
  {
    icon: <Repeat className="size-6" />,
    title: "Automated Subscriptions",
    description: "Never chase anyone for their share of recurring bills again.",
    details: [
      "Set up recurring payments that are automatically split.",
      "Funds are securely managed and disbursed via smart contract.",
      "Full history of all subscription payments on-chain.",
    ],
    visual: () => (
      <motion.div className="w-full h-full flex items-center justify-center p-4">
        <motion.div
          className="w-56 h-56 border-dashed border-4 border-primary/50 rounded-full flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-card border border-border">
            <Users className="w-5 h-5 text-secondary" />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-card border border-border">
            <Users className="w-5 h-5 text-secondary" />
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-card border border-border">
            <Users className="w-5 h-5 text-secondary" />
          </div>
          <Repeat className="w-16 h-16 text-primary" />
        </motion.div>
      </motion.div>
    ),
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);
  
  return (
    <section id="features" className="py-32 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-6xl font-semibold mb-6"
          >
            The Bondi Protocol
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-secondary max-w-3xl mx-auto"
          >
            An ecosystem of interconnected modules designed for absolute transparency and efficiency in shared finance.
          </motion.p>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-10 items-start min-h-[600px]">
          {/* Left Column: Feature Selector */}
          <motion.div 
            className="lg:col-span-4 space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <button
                key={index}
                className={`w-full text-left p-5 rounded-xl transition-all duration-300 flex items-start gap-4 border ${
                  activeFeature === index 
                    ? 'bg-card border-border' 
                    : 'border-transparent hover:bg-card/50'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`p-3 rounded-lg ${activeFeature === index ? 'bg-primary/20 text-primary' : 'bg-card text-secondary'}`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl text-foreground mb-1">{feature.title}</h3>
                  <p className={`text-base  ${activeFeature === index ? 'text-secondary' : 'text-secondary/70'}`}>Click to learn more</p>
                </div>
                {activeFeature === index && <motion.div layoutId="arrow" className="ml-auto mt-1"><ArrowRight className="text-primary"/></motion.div>}
              </button>
            ))}
          </motion.div>

          {/* Right Column: Visual and Description */}
          <motion.div 
            className="lg:col-span-8 relative min-h-[600px] glass rounded-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-8 h-full p-8"
              >
                {/* Text Description */}
                <div className="flex flex-col justify-center">
                  <h3 className="font-display text-4xl font-semibold mb-4 text-foreground">{features[activeFeature].title}</h3>
                  <p className="text-lg text-secondary mb-6">{features[activeFeature].description}</p>
                   <div className="space-y-4">
                    {features[activeFeature].details.map((detail, i) => (
                      <motion.div 
                        key={i} 
                        className="flex items-start gap-3 text-base"
                        initial={{ opacity:0, x:-10 }}
                        animate={{ opacity:1, x:0 }}
                        transition={{ delay: 0.2 + i * 0.1}}
                      >
                        <CheckCircle className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                        <span className="text-secondary">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Animated Visual */}
                <div className="relative w-full h-full min-h-[400px] bg-card/50 rounded-lg overflow-hidden">
                  {features[activeFeature].visual()}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}