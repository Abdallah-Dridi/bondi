"use client";
import { motion } from 'framer-motion';
import { Cpu, Image, BarChart, Code } from 'lucide-react';

const useCases = [
  {
    icon: <Image className="w-12 h-12 text-primary" />,
    title: "Co-own Blue-Chip NFTs",
    description: "Pool funds with your community to acquire high-value digital art and collectibles. Profits from resale are split automatically and transparently among all contributors.",
  },
  {
    icon: <Cpu className="w-12 h-12 text-primary" />,
    title: "Fund High-End GPU Compute",
    description: "AI developer teams can create a Bond to pool monthly funds for renting powerful cloud GPU instances. Access is shared, and costs are split fairly on-chain.",
  },
  {
    icon: <BarChart className="w-12 h-12 text-primary" />,
    title: "Run Staking Validators",
    description: "Meet the high capital requirements for running a validator node by pooling ETH, SOL, or other PoS assets. Staking rewards are streamed directly to contributors.",
  },
  {
    icon: <Code className="w-12 h-12 text-primary" />,
    title: "Share Expensive Software Licenses",
    description: "Creative studios and dev teams can co-purchase expensive software. Bondi provides token-gated access, ensuring only contributors can use the license.",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-32 px-6 bg-card/20">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-6xl font-semibold mb-6"
          >
            A New Primitive for Group Coordination
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-secondary max-w-3xl mx-auto"
          >
            Bondi provides the trustless financial rails for any scenario requiring collective ownership and resource pooling.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="p-8 glass rounded-2xl border border-border/50"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="mb-6">{useCase.icon}</div>
              <h3 className="font-display text-3xl font-semibold mb-4">{useCase.title}</h3>
              <p className="text-lg text-secondary">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
