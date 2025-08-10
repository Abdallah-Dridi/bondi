"use client";
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { CircleDollarSign, PieChart, Vote, ArrowRight, CheckCircle, Users, Lock } from 'lucide-react';

const features = [
  {
    icon: <Lock className="size-6" />,
    title: "Secure Asset Vaults",
    description:
      "Pool funds with your group into a non-custodial smart contract. Your capital is secure and transparently managed from day one.",
    details: [
      "Funds are locked until the acquisition target is met.",
      "On-chain transparency of all contributions and balances.",
      "No single party can access or control the pooled funds.",
    ],
    visual: () => (
      <motion.div className="w-full h-full flex items-center justify-center p-4 relative">
        {/* User Wallets */}
        {[
          { x: -120, y: -80, delay: 0.2 },
          { x: -120, y: 80, delay: 0.4 },
          { x: 120, y: 0, delay: 0.6 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 bg-card border border-border rounded-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, x: pos.x, y: pos.y }}
            transition={{ type: 'spring', delay: pos.delay }}
          >
            <Users className="size-6 text-secondary" />
          </motion.div>
        ))}
        {/* Central Vault */}
        <motion.div
          className="w-40 h-40 bg-card border-2 border-primary rounded-2xl flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Lock className="size-10 text-primary" />
          <span className="font-mono text-sm mt-2 text-primary">SECURE VAULT</span>
        </motion.div>
      </motion.div>
    ),
  },
  {
    icon: <PieChart className="size-6" />,
    title: "Liquid Fractional Ownership",
    description:
      "Receive tokens representing your exact share of an asset. Trade your stake freely on secondary markets.",
    details: [
      "Your ownership is represented by a liquid, tradable token.",
      "Exit your position anytime without selling the underlying asset.",
      "Seamlessly transfer ownership and associated rights.",
    ],
    visual: () => (
      <motion.div className="w-full h-full flex items-center justify-center relative p-4">
        <motion.div
          className="w-48 h-32 bg-card border border-border rounded-lg flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
           <span className="text-lg font-bold">Asset</span>
        </motion.div>
        
        {[0, 1, 2, 3].map((i) => {
          const angle = (i * 90 - 45) * (Math.PI / 180);
          return (
            <motion.div
              key={i}
              className="absolute w-20 h-10 bg-primary/20 border border-primary rounded-lg flex items-center justify-center font-mono text-xs"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                x: 150 * Math.cos(angle),
                y: 100 * Math.sin(angle),
              }}
              transition={{
                delay: 0.5 + i * 0.1,
                type: "spring",
              }}
            >
              25% Share
            </motion.div>
          );
        })}
      </motion.div>
    ),
  },

  {
    icon: <CircleDollarSign className="size-6" />,
    title: "Automated Revenue Streams",
    description:
      "Profits from assets like staking or real estate are automatically distributed to token holders, proportional to their stake.",
    details: [
      "Receive payouts directly to your wallet on a set schedule.",
      "Distribution is calculated and executed by the smart contract.",
      "Eliminates manual accounting and ensures fair payouts.",
    ],
    visual: () => (
      <motion.div className="w-full h-full p-8 flex items-center justify-center relative">
        <motion.div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center"
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{delay: 0.2}}
        >
            <span className="text-background font-bold">REWARDS</span>
        </motion.div>
        
        {[-1, 1].map(xDir => [-1, 1].map(yDir => {
          const i = xDir * yDir + 2;
          return (
            <motion.div
              key={`${xDir}-${yDir}`}
              className="absolute w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: 100 * xDir, y: 100 * yDir }}
              transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
            >
                <CircleDollarSign className="size-5 text-secondary"/>
            </motion.div>
          )
        }))}
      </motion.div>
    ),
  },
  {
    icon: <Vote className="size-6" />,
    title: "On-Chain Governance",
    description: "Key decisions, like when to sell an asset, are made collectively through on-chain voting based on ownership stake.",
    details: [
      "One token, one vote. Ensure fair and democratic decision-making.",
      "Proposals and votes are recorded transparently on the blockchain.",
      "Automate the execution of successful proposals.",
    ],
    visual: () => (
        <motion.div className="w-full h-full flex flex-col items-center justify-center p-4 gap-4">
            <motion.div 
                className="w-full max-w-sm p-4 bg-card border border-border rounded-lg"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.2}}
            >
                <p className="font-bold text-center">Proposal: Sell Asset?</p>
            </motion.div>
            <div className="flex gap-4">
                 <motion.div 
                    className="p-4 bg-green-500/20 text-green-400 border border-green-500 rounded-lg"
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{delay: 0.5}}
                 >
                    <span className="font-bold">YES: 75%</span>
                </motion.div>
                <motion.div 
                    className="p-4 bg-red-500/20 text-red-400 border border-red-500 rounded-lg"
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{delay: 0.7}}
                >
                    <span className="font-bold">NO: 25%</span>
                </motion.div>
            </div>
             <motion.div 
                className="mt-4 p-3 bg-primary/20 rounded-lg flex items-center gap-2"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1}}
            >
                <CheckCircle className="size-5 text-primary"/>
                <span className="text-primary font-semibold">Proposal Passed</span>
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
            An ecosystem of interconnected smart contracts designed for secure, transparent, and liquid group asset ownership.
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
