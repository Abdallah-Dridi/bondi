"use client";
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const testimonials = [
  {
    name: "DAOplomat",
    role: "NFT Investor",
    quote: "Bondi made it possible for our collector's DAO to acquire a blue-chip NFT that was out of reach for any single member. The process was seamless, and the fractional ownership is a game-changer for liquidity.",
    short: "A game-changer for our collector's DAO."
  },
  {
    name: "0x_dev",
    role: "Dev Team Lead",
    quote: "We're pooling funds monthly to rent a high-performance GPU cluster for our AI models. Bondi automates the contributions and provides transparent accounting. It's enterprise-level tooling for our decentralized team.",
    short: "Enterprise-level tooling for our dev team."
  },
  {
    name: "Staker Chad",
    role: "Staking Pool Operator",
    quote: "Running a validator node has high capital requirements. With Bondi, we were able to pool ETH from our community securely. The automated reward distribution is flawless.",
    short: "Flawless reward distribution for our staking pool."
  },
  {
    name: "Anna R.",
    role: "Real Estate Investor",
    quote: "I'm now a fractional owner of a tokenized property with a group of investors I met through Bondi. It's democratizing access to assets that were previously inaccessible to me.",
    short: "Democratizing access to real-world assets."
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-6xl font-semibold mb-6"
          >
            Trusted by Forward-Thinking Investors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-secondary max-w-3xl mx-auto"
          >
            From DAOs and dev teams to investment clubs, see how groups are using Bondi to unlock new opportunities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Featured Testimonial */}
          <motion.div 
            className="md:col-span-2 lg:col-span-2 p-8 glass rounded-2xl flex flex-col justify-between min-h-[300px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl mb-4 leading-tight">&quot;{testimonials[0].quote}&quot;</h3>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 bg-muted rounded-full border-2 border-border" />
              <div>
                <p className="font-bold text-lg text-foreground">{testimonials[0].name}</p>
                <div className="flex items-center gap-1 text-sm text-primary">
                  <CheckCircle className="w-4 h-4" />
                  <span>Verified User</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Testimonials */}
          {testimonials.slice(1).map((testimonial, index) => (
             <motion.div 
                key={index}
                className="p-8 glass rounded-2xl flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <p className="text-lg text-secondary mb-4 flex-grow">&quot;{testimonial.short}&quot;</p>
               <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 bg-muted rounded-full border-2 border-border" />
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-secondary">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
