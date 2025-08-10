"use client";
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Share2, Receipt, Cpu, ImageIcon, Landmark } from 'lucide-react';
import { useRef } from 'react';

// A more detailed component for the rotating protocol core
const ProtocolCore = () => (
  <motion.div
    className="absolute inset-0"
    animate={{ rotate: 360 }}
    transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
  >
    {/* Orbiting Rings */}
    <div className="absolute inset-8 border border-primary/20 rounded-full" />
    <div className="absolute inset-12 border border-primary/30 rounded-full" style={{ transform: 'rotateX(70deg)'}}/>
    <div className="absolute inset-12 border border-primary/30 rounded-full" style={{ transform: 'rotateY(70deg)'}}/>

    {/* Inner Globe */}
    <div className="absolute inset-20">
      <div className="absolute inset-0 border border-primary/20 rounded-full animate-pulse" />
      {[0, 45, 90, 135].map(deg => (
         <div key={deg} className="absolute inset-0 border-l border-primary/20 rounded-full" style={{ transform: `rotate(${deg}deg)`}}/>
      ))}
    </div>

    {/* Central Heartbeat */}
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary blur-lg"
      animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    />
  </motion.div>
);


export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  // Mouse move parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-600, 600], [10, -10]);
  const rotateY = useTransform(mouseX, [-600, 600], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (heroRef.current) {
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      mouseX.set(event.clientX - left - width / 2);
      mouseY.set(event.clientY - top - height / 2);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--accent_alpha),transparent_70%)] opacity-30"
          style={{
            x: useTransform(mouseX, (r) => -r / 10),
            y: useTransform(mouseY, (r) => -r / 10),
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Left Column: Text content (spanning 2 columns) */}
          <div className="lg:col-span-2 text-center lg:text-left z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-5xl md:text-6xl font-semibold leading-tight"
            >
              Group Ownership,
              <br />
              <span className="text-gradient">Evolved.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-secondary max-w-lg mx-auto lg:mx-0 mt-6 mb-10"
            >
              From blue-chip NFTs to high-end GPU clusters, Bondi makes group
              ownership simple, liquid, and secure. Pool funds, acquire assets,
              and share the benefits—all on-chain.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <button className="px-8 py-4 rounded-lg bg-primary text-background font-semibold text-lg glow-hover group">
                <span className="flex items-center">
                  <span>Explore Bonds</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Masterpiece Visual Element (spanning 3 columns) */}
          <div className="lg:col-span-3 relative h-[600px] flex items-center justify-center">
            <motion.div
              className="w-full h-full"
              style={{ perspective: "2000px" }}
            >
              <motion.div
                className="w-full h-full relative"
                style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
                transition={{ type: "spring", stiffness: 50, damping: 15 }}
              >
                {/* Main Glass Container */}
                <motion.div
                  className="absolute inset-10 bg-card/5 border border-border/30 rounded-3xl shadow-2xl"
                  style={{ transform: "translateZ(-50px)" }}
                />

                {/* Central Protocol Core */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(50px)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 60,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <ProtocolCore />
                  </motion.div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary/50 blur-lg" />
                  <Share2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-primary" />
                </motion.div>

                {/* Satellite "Group" Nodes */}
                {[
                  {
                    pos: { top: "15%", left: "5%" },
                    z: 220,
                    name: "Bored Ape #1234",
                    type: "NFT Acquisition",
                    icon: <ImageIcon className="w-3 h-3" />
                  },
                  {
                    pos: { top: "30%", left: "75%" },
                    z: 150,
                    name: "AI Dev Collective",
                    type: "GPU Cloud Access",
                    icon: <Cpu className="w-3 h-3" />
                  },
                  {
                    pos: { top: "70%", left: "10%" },
                    z: 200,
                    name: "ETH Staking Pool",
                    type: "Validator Rewards",
                    icon: <Landmark className="w-3 h-3" />
                  },
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    className="absolute p-3 glass rounded-xl shadow-xl w-52"
                    style={{
                      ...node.pos,
                      transform: `translateZ(${node.z}px)`,
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 1 + i * 0.2,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                  >
                    <p className="font-bold text-sm text-foreground mb-1">
                      {node.name}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        <div className="w-5 h-5 rounded-full bg-muted border-2 border-card" />
                        <div className="w-5 h-5 rounded-full bg-muted border-2 border-card" />
                        <div className="w-5 h-5 rounded-full bg-muted border-2 border-card" />
                      </div>
                      <div className="text-xs text-secondary flex items-center gap-1">
                        {node.icon}
                        <span>{node.type}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Live Transaction Feed */}
                <motion.div
                  className="absolute top-[65%] right-[0%] w-64 p-3 glass rounded-lg shadow-xl"
                  style={{ transform: `translateZ(250px)` }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 }}
                >
                  <p className="text-xs text-secondary mb-2">
                    Live Bond Activity
                  </p>
                  <div className="space-y-2 text-xs">
                    <p className="flex items-center">
                      <Receipt className="w-3 h-3 mr-2 text-primary" />
                      Contribution to Ape #1234
                    </p>
                    <p className="flex items-center">
                      <Receipt className="w-3 h-3 mr-2 text-primary" />
                      Staking Rewards Distributed
                    </p>
                  </div>
                </motion.div>

                {/* Connection Lines & Pings */}
                {[
                  { path: "M 130 115 L 250 250", z: 125, delay: 2 },
                  { path: "M 480 190 L 310 280", z: 100, delay: 2.5 },
                  { path: "M 140 440 L 260 320", z: 115, delay: 3 },
                ].map((line, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 600 600"
                    className="absolute inset-0 w-full h-full overflow-visible"
                    style={{ transform: `translateZ(${line.z}px)` }}
                  >
                    <motion.path
                      d={line.path}
                      fill="none"
                      stroke="url(#line-gradient)"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 1.8 + i * 0.2, duration: 1 }}
                    />
                    <defs>
                      <linearGradient
                        id="line-gradient"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0%"
                          stopColor="var(--primary)"
                          stopOpacity="0"
                        />
                        <stop
                          offset="100%"
                          stopColor="var(--primary)"
                          stopOpacity="1"
                        />
                      </linearGradient>
                    </defs>

                    {/* Transaction "Data Packet" Animation */}
                    <motion.g>
                      <motion.circle
                        r="4"
                        fill="var(--primary)"
                        style={{
                          offsetPath: `path('${line.path}')`,
                          offsetDistance: "0%",
                        }}
                        animate={{
                          offsetDistance: "100%",
                        }}
                        transition={{
                          delay: line.delay,
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "linear",
                        }}
                      />
                    </motion.g>
                  </svg>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
