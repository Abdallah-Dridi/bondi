"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Package,
  Users,
  ShieldCheck,
  ArrowRightLeft,
  Lock,
  PieChart,
  CircleDollarSign,
} from "lucide-react";

/* ---------- Type Definitions ---------- */
interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  visual: (radius: number) => React.ReactNode;
}

interface StepCardProps {
  step: Step;
  index: number;
  radius: number;
}


/* ---------- responsive width hook ---------- */
function useWidth(ref: React.RefObject<HTMLElement | null>) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    function update() {
      setWidth(el.clientWidth || 0);
    }
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("orientationchange", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("orientationchange", update);
    };
  }, [ref]);
  return width;
}

/* ---------- StepCard component ---------- */
const StepCard = ({ step, index, radius }: StepCardProps) => {
  return (
    <motion.div
      key={index}
      className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:grid-flow-row-dense lg:[&>*:last-child]:col-start-1' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      {/* Text */}
      <div className={index % 2 !== 0 ? "lg:col-start-2" : ""}>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-primary/10 border-2 border-primary/20 text-primary rounded-xl flex items-center justify-center">
            {step.icon}
          </div>
          <h3 className="font-display text-4xl font-semibold">{step.title}</h3>
        </div>
        <p className="text-lg text-secondary mb-6">{step.description}</p>
        <ul className="space-y-3">
          {step.benefits.map((b: string, i: number) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
              <span className="text-secondary">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Visual */}
      <div className="relative min-h-[400px] lg:min-h-[500px] glass rounded-2xl overflow-hidden flex items-center justify-center">
        {step.visual(radius)}
      </div>
    </motion.div>
  );
};

/* ---------- main component with SVG visuals ---------- */
export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const width = useWidth(containerRef);

  const computedRadius = Math.max(50, Math.min(130, Math.floor((width || 360) * 0.22)));

  const steps: Step[] = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Define the Bond",
      description:
        "Propose any asset to co-own. Set the acquisition target, contribution rules, and timeline to create a new 'Bond'—a dedicated vault for your group's investment.",
      benefits: [
        "Propose any digital or real-world asset.",
        "Set transparent, on-chain rules for the group.",
        "Launch a new collective investment opportunity in minutes.",
      ],
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      visual: (_r = computedRadius) => {
        return (
          <div className="w-full h-full grid place-items-center p-4">
            <motion.div
              className="w-72 h-48 bg-card rounded-xl border border-border p-6 flex flex-col gap-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring", stiffness: 90 }}
            >
              <h4 className="text-lg font-bold text-foreground">Create New Bond</h4>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                   viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.9 }}
                />
              </div>

              <p className="text-sm text-secondary">Asset: BAYC #1234</p>
              <p className="text-sm text-secondary">Goal: 20 ETH</p>
            </motion.div>
          </div>
        );
      },
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Pool Capital Securely",
      description:
        "Invite members to contribute funds to the Bond's non-custodial vault. All capital is locked by a smart contract, ensuring it's safe and only used for the specified asset acquisition.",
      benefits: [
        "Funds are secured and auditable on-chain.",
        "Non-custodial contract ensures no single point of failure.",
        "Progress toward the funding goal is tracked in real-time.",
      ],
      visual: (r = computedRadius) => {
        const center = 150;
        const contributors = [
          { x: -r * 0.9, y: -r * 0.6, delay: 0.45 },
          { x: -r * 0.9, y: r * 0.6, delay: 0.65 },
          { x: r * 0.9, y: 0, delay: 0.85 },
        ];
        return (
          <svg width="300" height="300" viewBox="0 0 300 300" className="block overflow-visible">
             <defs>
              <radialGradient id="vault-gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <motion.circle cx={center} cy={center} r={r*1.5} fill="url(#vault-gradient)" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}}/>
            <motion.circle
              cx={center}
              cy={center}
              r="45"
              className="fill-card stroke-primary/50"
              strokeWidth={1}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 90 }}
            />
            <motion.g initial={{scale:0, opacity:0}} animate={{scale:1, opacity:1}} transition={{delay: 0.3}}>
                <Lock x={center-12} y={center-12} className="w-6 h-6 text-primary" />
            </motion.g>

            {contributors.map((c, i) => (
                <motion.g key={i} initial={{opacity:0}} animate={{opacity:1, x: c.x, y: c.y}} transition={{type:"spring", stiffness:80, damping:12, delay:c.delay}}>
                    <circle cx={center} cy={center} r="24" className="fill-card stroke-border"/>
                    <Users x={center-10} y={center-10} className="w-5 h-5 text-secondary"/>
                </motion.g>
            ))}
          </svg>
        );
      },
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Acquire & Fractionalize",
      description:
        "Once the goal is met, the protocol automatically executes the purchase. The asset is then fractionalized into liquid tokens, which are distributed to contributors proportional to their stake.",
      benefits: [
        "Trustless, automated acquisition process.",
        "Receive liquid tokens representing your fractional ownership.",
        "Ownership is instantly verifiable and transferable on-chain.",
      ],
      visual: (r = computedRadius) => {
        const center = 150;
        const radial = [0, 90, 180, 270].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          return { x: Math.round(r * Math.cos(rad)), y: Math.round(r * Math.sin(rad)) };
        });

        return (
          <svg width="300" height="300" viewBox="0 0 300 300" className="block overflow-visible">
            <motion.g initial={{scale:0.8, opacity:0}} animate={{scale:1, opacity:1}} transition={{delay:0.1, type:"spring"}}>
                <rect x={center - 50} y={center - 32} rx="12" ry="12" width="100" height="64" className="fill-card stroke-primary/50"/>
                <text x={center} y={center + 5} textAnchor="middle" className="text-lg font-bold fill-primary">Asset</text>
            </motion.g>

            {radial.map((p, i) => (
              <motion.g key={i} initial={{x:0, y:0, opacity:0}} animate={{x:p.x, y:p.y, opacity:1}} transition={{delay: 0.6 + i * 0.1, type:"spring", stiffness:90}}>
                <circle cx={center} cy={center} r="20" className="fill-card stroke-border"/>
                <PieChart x={center-9} y={center-9} className="w-[18px] h-[18px] text-secondary"/>
              </motion.g>
            ))}
          </svg>
        );
      },
    },
    {
      icon: <ArrowRightLeft className="w-8 h-8" />,
      title: "Earn, Govern, & Exit",
      description:
        "Utilize your asset, receive automated revenue streams, and vote on key decisions. When you're ready, you can sell your fractional tokens to other users, providing liquidity for your investment.",
      benefits: [
        "Receive passive income directly to your wallet.",
        "Participate in decentralized governance of the asset.",
        "Liquid ownership allows you to exit your position freely.",
      ],
      visual: (r = computedRadius) => {
        const center = 170;
        const yPos = 70;
        const leftX = center - r;
        const rightX = center + r;
        return (
          <svg width="340" height="140" viewBox="0 0 340 140" className="block overflow-visible">
            <g>
                <rect x={leftX-32} y={yPos-32} width="64" height="64" rx="16" className="fill-card stroke-border"/>
                <text x={leftX} y={yPos+5} textAnchor="middle" className="font-bold text-sm fill-foreground">Owner A</text>
            </g>
            <g>
                <rect x={rightX-32} y={yPos-32} width="64" height="64" rx="16" className="fill-card stroke-border"/>
                <text x={rightX} y={yPos+5} textAnchor="middle" className="font-bold text-sm fill-foreground">Owner B</text>
            </g>
            
            <motion.g initial={{x:leftX, opacity:0}} animate={{x:rightX, opacity:[0,1,0]}} transition={{delay:0.8, duration:2, repeat:Infinity, repeatDelay:1.5, ease:"easeInOut"}}>
                <PieChart x={-10} y={yPos-10} className="w-5 h-5 text-primary"/>
            </motion.g>

            <motion.g initial={{x:rightX, opacity:0}} animate={{x:leftX, opacity:[0,1,0]}} transition={{delay:1.4, duration:2, repeat:Infinity, repeatDelay:1.5, ease:"easeInOut"}}>
                <CircleDollarSign x={-10} y={yPos-10} className="w-5 h-5 text-green-500"/>
            </motion.g>
          </svg>
        );
      },
    },
  ];

  return (
    <section id="how-it-works" className="py-32 px-6 bg-card/20" ref={containerRef}>
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-6xl font-semibold mb-6"
          >
            A Clear Path to Ownership
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-secondary max-w-3xl mx-auto"
          >
            Our streamlined, on-chain process makes collective investment simple, secure, and accessible to everyone.
          </motion.p>
        </div>

        <div className="space-y-24">
          {steps.map((step, idx) => (
            <StepCard key={idx} step={step} index={idx} radius={computedRadius} />
          ))}
        </div>
      </div>
    </section>
  );
}
