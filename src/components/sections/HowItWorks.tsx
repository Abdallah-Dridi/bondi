"use client";
import { motion } from 'framer-motion';
import { Users, PlusCircle, ShieldCheck, ArrowRightLeft, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <Users />,
    title: "Create Your Secure Group",
    description: "Initiate a new shared space, or 'Bond,' with just a few clicks. Invite members using their wallet addresses or an email for a seamless onboarding experience into your private, encrypted group.",
    benefits: ["End-to-end encryption for all group data.", "Invite via blockchain address or traditional email.", "Set custom group rules and permissions from the start."],
    visual: () => (
      <div className="w-full h-full flex items-center justify-center relative">
        <motion.div
          className="absolute w-48 h-48 border-2 border-dashed border-primary/50 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 bg-card border border-border rounded-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transform: `rotate(${i * 120}deg) translateX(120px) rotate(-${i * 120}deg)`
            }}
            transition={{ delay: 0.5 + i * 0.2, type: 'spring' }}
          >
            <Users className="w-8 h-8 text-secondary"/>
          </motion.div>
        ))}
         <motion.div
            className="z-10 w-24 h-24 bg-primary/20 border-2 border-primary rounded-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            <PlusCircle className="w-10 h-10 text-primary"/>
          </motion.div>
      </div>
    )
  },
  {
    icon: <ArrowRightLeft />,
    title: "Log Expenses & Tasks On-Chain",
    description: "Add bills, chores, and recurring subscriptions as they happen. Each entry is a transaction that gets logged on the blockchain, creating a transparent, timestamped, and immutable record for everyone to see.",
    benefits: ["Real-time logging of all financial and non-financial contributions.", "Attach receipts or notes to any transaction.", "All entries are cryptographically signed and verified."],
     visual: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-64 h-80 bg-card rounded-xl border border-border p-4 flex flex-col gap-3">
          {[ 'Rent', 'Netflix', 'Groceries'].map((item, i) => (
            <motion.div
              key={i}
              className="w-full bg-muted p-3 rounded-md flex justify-between items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.2 }}
            >
              <span className="text-foreground">{item}</span>
              <span className="font-mono text-sm text-secondary">$...</span>
            </motion.div>
          ))}
          <motion.div
            className="w-full bg-primary/20 text-primary p-3 rounded-md flex justify-between items-center mt-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span>Add New +</span>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    icon: <ShieldCheck />,
    title: "Automate Settlement via Smart Contract",
    description: "When it's time to settle up, initiate the process with a single click. Our audited smart contract automatically calculates the net balances and facilitates peer-to-peer payments, ensuring fairness and accuracy.",
    benefits: ["Eliminates manual calculations and human error.", "Funds are settled directly between member wallets.", "A final, verifiable transaction record is logged on-chain."],
     visual: () => (
      <div className="w-full h-full flex items-center justify-center relative">
        <motion.div
          className="absolute w-20 h-20 bg-card border border-border rounded-full flex items-center justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: -100 }}
          transition={{ delay: 0.5 }}
        >
          <span className="font-mono text-xs text-red-400">-$25</span>
        </motion.div>
        <motion.div
          className="absolute w-20 h-20 bg-card border border-border rounded-full flex items-center justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 100 }}
          transition={{ delay: 0.5 }}
        >
          <span className="font-mono text-xs text-primary">+$25</span>
        </motion.div>

        <motion.div
          className="z-10"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}
        >
          <ShieldCheck className="w-24 h-24 text-primary"/>
        </motion.div>

        <motion.div
          className="absolute w-1 h-1 bg-primary rounded-full"
          initial={{ x: -100, opacity: 0, scale: 1 }}
          animate={{ x: 100, opacity: [0, 1, 1, 0], scale: [1, 2, 1] }}
          transition={{ delay: 1, duration: 1.5, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
        />
      </div>
    )
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6 bg-card/20">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-6xl font-semibold mb-6"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-secondary max-w-3xl mx-auto"
          >
            A simple, three-step process to achieve financial harmony, powered by the security and transparency of the blockchain.
          </motion.p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`grid lg:grid-cols-2 gap-16 items-center ${index === 1 ? 'lg:grid-flow-row-dense lg:[&>*:last-child]:col-start-1' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              {/* Text Content */}
              <div className={index === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 border-2 border-primary/20 text-primary rounded-xl flex items-center justify-center">
                    {step.icon}
                  </div>
                  <h3 className="font-display text-4xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-lg text-secondary mb-6">{step.description}</p>
                <ul className="space-y-3">
                  {step.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                      <span className="text-secondary">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Content */}
              <div className="relative min-h-[400px] lg:min-h-[500px] glass rounded-2xl">
                 {step.visual()}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}