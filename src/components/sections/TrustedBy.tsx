"use client";
import { motion } from 'framer-motion';

// Professionally designed fictional logos
const logos = [
  { name: 'QuantumLedger', svg: <svg width="150" height="30" viewBox="0 0 150 30" fill="currentColor"><path d="M10 0 L0 15 L10 30 L20 15 Z M25 5 L15 20 L25 35 L35 20 Z" opacity="0.7"/><text x="45" y="22" fontFamily="var(--font-sans)" fontSize="20" fontWeight="bold">QuantumLedger</text></svg> },
  { name: 'ApexDAO', svg: <svg width="120" height="30" viewBox="0 0 120 30" fill="currentColor"><path d="M0 30 L15 0 L30 30 Z M20 20 L10 20 L15 10 Z"/><text x="40" y="22" fontFamily="var(--font-sans)" fontSize="20" fontWeight="bold">ApexDAO</text></svg> },
  { name: 'Nexus Mutual', svg: <svg width="140" height="30" viewBox="0 0 140 30" fill="currentColor"><circle cx="15" cy="15" r="15"/><circle cx="15" cy="15" r="8" fill="var(--background)"/><text x="40" y="22" fontFamily="var(--font-sans)" fontSize="20" fontWeight="bold">Nexus Mutual</text></svg> },
  { name: 'Vertex Labs', svg: <svg width="130" height="30" viewBox="0 0 130 30" fill="currentColor"><path d="M0 0 L30 0 L15 30 Z"/><text x="40" y="22" fontFamily="var(--font-sans)" fontSize="20" fontWeight="bold">Vertex Labs</text></svg> },
  { name: 'ChainLink', svg: <svg width="120" height="30" viewBox="0 0 120 30" fill="currentColor"><rect width="30" height="30" rx="8"/><rect x="8" y="8" width="14" height="14" rx="4" fill="var(--background)"/><text x="40" y="22" fontFamily="var(--font-sans)" fontSize="20" fontWeight="bold">ChainLink</text></svg> },
  { name: 'Oracle', svg: <svg width="110" height="30" viewBox="0 0 110 30" fill="currentColor"><path d="M0 15 a 15 15 0 1 1 30 0 a 15 15 0 1 1 -30 0"/><path d="M15 0 L15 30"/><text x="40" y="22" fontFamily="var(--font-sans)" fontSize="20" fontWeight="bold">Oracle</text></svg> },
];

const duplicatedLogos = [...logos, ...logos];

export default function TrustedBy() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <motion.p
          className="text-center text-secondary mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Powering the finances of forward-thinking groups
        </motion.p>
        <div className="relative overflow-hidden group">
          <motion.div
            className="flex"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              ease: 'linear',
              duration: 25,
              repeat: Infinity,
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 h-24 flex items-center justify-center text-secondary/50 hover:text-foreground transition-colors duration-300"
              >
                {logo.svg}
              </div>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}