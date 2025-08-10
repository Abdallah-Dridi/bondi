"use client";
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Layers, ShieldCheck, Vote, CheckCircle, Cpu, ImageIcon, Landmark } from 'lucide-react';

const ecosystemPillars = [
  {
    icon: <ShieldCheck />,
    title: "Core Protocol",
    description: "The secure, audited smart contract foundation that powers every Bond. It handles fund pooling, asset acquisition, and transaction execution with complete transparency.",
    details: [
      "Non-custodial vaults ensure user funds are always secure.",
      "Immutable ledger for a transparent history of all actions.",
      "Gas-optimized for efficient and low-cost operations."
    ],
    visual: () => (
      <div className="w-full h-full grid place-items-center p-4 relative">
        <motion.div
          className="w-48 h-48 border-2 border-primary/50 rounded-full"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute w-32 h-32 border-2 border-primary/30 rounded-full"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{delay: 0.2}}
        >
            <ShieldCheck className="w-16 h-16 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </motion.div>
      </div>
    )
  },
  {
    icon: <Layers />,
    title: "Asset Abstraction",
    description: "Bondi is asset-agnostic. Our flexible protocol can wrap and fractionalize any asset, from digital NFTs and software licenses to tokenized real-world items.",
    details: [
      "Onboard a diverse range of digital and physical assets.",
      "Standardized interface for managing different asset types.",
      "Future-proof design to support new asset classes."
    ],
    visual: () => (
      <div className="w-full h-full grid place-items-center p-4 relative">
        <div className="relative w-48 h-48">
          {[
            { icon: <ImageIcon className="size-6" />, angle: 0 },
            { icon: <Cpu className="size-6" />, angle: 120 },
            { icon: <Landmark className="size-6" />, angle: 240 },
          ].map((item, i) => {
            const angleRad = item.angle * (Math.PI / 180);
            return (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-16 h-16 bg-card border border-border rounded-full flex items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: `calc(-50% + ${60 * Math.cos(angleRad)}px)`,
                  y: `calc(-50% + ${60 * Math.sin(angleRad)}px)`,
                }}
                transition={{ delay: 0.4 + i * 0.2, type: 'spring' }}
              >
                {item.icon}
              </motion.div>
            )
          })}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Layers className="size-10 text-primary" />
          </motion.div>
        </div>
      </div>
    )
  },
  {
    icon: <Vote />,
    title: "Group Governance",
    description: "Each Bond is a decentralized autonomous organization (DAO). Fractional owners vote on key decisions, ensuring the group's interests are always represented.",
    details: [
      "Vote on proposals like selling an asset or distributing profits.",
      "Voting power is proportional to ownership stake.",
      "Automated execution of passed proposals via smart contract."
    ],
    visual: () => (
      <div className="w-full h-full p-6 grid place-items-center">
        <div className="w-full max-w-sm space-y-3">
            {[ "Sell NFT for 25 ETH?", "Upgrade GPU Instance", "Lease Real Estate"].map((proposal, i) => (
              <motion.div
                key={i}
                className="flex items-center justify-between gap-4 p-3 bg-card rounded-lg"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
              >
                <span className="text-foreground text-sm">{proposal}</span>
                <div className="flex gap-2">
                    <div className="w-8 h-6 bg-green-500/20 rounded-md"/>
                    <div className="w-8 h-6 bg-red-500/20 rounded-md"/>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    )
  }
];

export default function Ecosystem() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section id="ecosystem" className="py-32 px-6 relative bg-card/20">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-6xl font-semibold mb-6"
          >
            A Composable Platform
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-secondary max-w-3xl mx-auto"
          >
            Three core pillars work in concert to provide a flexible, secure, and decentralized framework for group ownership of any asset.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Column: Interactive Flywheel Diagram */}
          <div className="relative min-h-[500px] flex items-center justify-center">
            <motion.div
              className="absolute w-full max-w-lg h-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 500 500">
                <motion.path
                  d="M 250 100 A 150 150 0 1 1 100 250"
                  stroke="var(--border)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <motion.path
                  d="M 400 250 A 150 150 0 1 1 250 400"
                  stroke="var(--border)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                 <motion.path
                  d="M 100 250 L 400 250"
                  stroke="var(--border)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              </svg>

              {/* Pillar Nodes */}
              {ecosystemPillars.map((pillar, index) => {
                const positions = [
                    { top: '15%', left: '50%' },
                    { top: '75%', left: '20%' },
                    { top: '75%', left: '80%' }
                ];
                const pos = positions[index];

                return (
                  <motion.div
                    key={index}
                    className="absolute w-40 h-40"
                    onHoverStart={() => setActivePillar(index)}
                    style={{
                      top: pos.top,
                      left: pos.left,
                      translateX: "-50%",
                      translateY: "-50%",
                    }}
                  >
                    <div
                      className={`w-full h-full rounded-full flex flex-col items-center justify-center text-center p-4 transition-all duration-300 cursor-pointer ${
                        activePillar === index
                          ? "bg-card border-2 border-primary shadow-2xl scale-110"
                          : "bg-card/50 border border-border"
                      }`}
                    >
                      <div
                        className={`p-3 rounded-lg mb-2 transition-colors ${
                          activePillar === index
                            ? "text-primary"
                            : "text-secondary"
                        }`}
                      >
                        {pillar.icon}
                      </div>
                      <h4 className="font-bold text-sm text-foreground">
                        {pillar.title}
                      </h4>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Detailed Information Pane */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar}
                className="absolute inset-0 glass rounded-2xl p-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2 gap-8 h-full">
                  <div className="flex flex-col justify-center">
                    <h3 className="font-display text-4xl font-semibold mb-4 text-foreground">
                      {ecosystemPillars[activePillar].title}
                    </h3>
                    <p className="text-lg text-secondary mb-6">
                      {ecosystemPillars[activePillar].description}
                    </p>
                    <div className="space-y-3">
                      {ecosystemPillars[activePillar].details.map(
                        (detail, i) => (
                          <motion.div
                            key={i}
                            className="flex items-start gap-3 text-base"
                            initial={{opacity: 0, x: -10}}
                            animate={{opacity: 1, x: 0}}
                            transition={{delay: 0.2 + i * 0.1}}
                          >
                            <CheckCircle className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                            <span className="text-secondary">{detail}</span>
                          </motion.div>
                        )
                      )}
                    </div>
                  </div>
                  <div className="relative w-full h-full min-h-[250px] bg-card/50 rounded-lg overflow-hidden">
                    {ecosystemPillars[activePillar].visual()}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
