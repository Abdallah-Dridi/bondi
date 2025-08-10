"use client";
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Layers, ShieldCheck, Vote, CheckCircle } from 'lucide-react';

const ecosystemPillars = [
  {
    icon: <Layers />,
    title: "Utility",
    description: "The BONDI token is the native asset that powers the entire ecosystem, used for unlocking features and facilitating value transfer.",
    details: [
      "Access premium group features and tools.",
      "Use as a medium for instant, low-cost settlements.",
      "Required for creating and participating in large-scale Bonds."
    ],
    visual: () => (
      <div className="w-full h-full flex items-center justify-center p-4">
        <motion.div
          className="w-48 h-64 bg-card rounded-xl border border-border p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full h-24 bg-muted rounded-md mb-3" />
          <div className="h-4 bg-muted rounded w-3/4 mb-2" />
          <div className="h-3 bg-muted rounded w-1/2" />
        </motion.div>
      </div>
    )
  },
  {
    icon: <ShieldCheck />,
    title: "Staking",
    description: "Secure the network and earn rewards by staking your BONDI tokens. Stakers receive a share of the protocol's revenue.",
    details: [
      "Earn real yield from protocol-generated fees.",
      "Help secure the network and validate transactions.",
      "Gain eligibility for future airdrops and rewards."
    ],
    visual: () => (
      <div className="w-full h-full flex items-center justify-center p-4 relative">
        <motion.div
          className="w-48 h-48 border-2 border-primary/50 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        <motion.div
          className="absolute w-2 h-2 bg-primary rounded-full"
          animate={{
            offset: [0, 1],
            pathLength: [0, 1],
            path: `M 120, 20 A 100 100, 0, 1, 1, 120, 220 A 100 100, 0, 1, 1, 120, 20`
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <ShieldCheck className="w-16 h-16 text-primary absolute" />
      </div>
    )
  },
  {
    icon: <Vote />,
    title: "Governance",
    description: "Shape the future of Bondi. Staked tokens grant voting rights, allowing you to participate in key protocol decisions.",
    details: [
      "Vote on protocol upgrades and new feature integrations.",
      "Participate in treasury management and fund allocation.",
      "Submit your own proposals for community consideration."
    ],
    visual: () => (
      <div className="w-full h-full p-6 flex flex-col justify-center gap-4">
        {[ "Adjust Fee Structure", "Integrate New Chain", "Community Grant"].map((proposal, i) => (
          <motion.div
            key={i}
            className="flex items-center justify-between gap-4 p-3 bg-card rounded-lg"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            <span className="text-foreground text-sm">{proposal}</span>
            <div className="w-16 h-6 bg-muted rounded-full"/>
          </motion.div>
        ))}
      </div>
    )
  }
];

export default function Ecosystem() {
  const [activePillar, setActivePillar] = useState(1); // Default to Staking

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
            The Bondi Ecosystem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-secondary max-w-3xl mx-auto"
          >
            A self-sustaining economic flywheel where utility, staking, and
            governance work in concert to create long-term value.
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
              <svg className="absolute inset-0 w-full h-full" fill="none">
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
                  d="M 100 250 A 150 150 0 1 1 250 400"
                  stroke="var(--border)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              </svg>

              {/* Pillar Nodes */}
              {ecosystemPillars.map((pillar, index) => {
                // Pre-calculate positions with fixed precision
                const angle = (index * 2 * Math.PI) / 3;
                const top = 50 + 40 * Math.sin(angle);
                const left = 50 + 40 * Math.cos(angle);

                return (
                  <motion.div
                    key={index}
                    className="absolute w-40 h-40"
                    onHoverStart={() => setActivePillar(index)}
                    style={{
                      top: `${top.toFixed(2)}%`, // Fixed precision
                      left: `${left.toFixed(2)}%`, // Fixed precision
                      translateX: "-50%",
                      translateY: "-50%",
                    }}
                  >
                    <div
                      className={`w-full h-full rounded-full flex flex-col items-center justify-center text-center p-4 transition-all duration-300 ${
                        activePillar === index
                          ? "bg-card border-2 border-primary shadow-2xl"
                          : "bg-card/50 border border-border"
                      }`}
                    >
                      <div
                        className={`p-3 rounded-lg mb-2 ${
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
                          <div
                            key={i}
                            className="flex items-start gap-3 text-base"
                          >
                            <CheckCircle className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                            <span className="text-secondary">{detail}</span>
                          </div>
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