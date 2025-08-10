'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "What is a 'Bond'?",
    answer: "A 'Bond' is a smart contract vault where a group pools funds to purchase a specific asset. It defines the rules, funding goal, and ownership structure for that asset, ensuring transparency and security for all participants."
  },
  {
    question: "What kinds of assets can we co-own?",
    answer: "Virtually any asset that can be represented on-chain! This includes digital assets like NFTs and software licenses, infrastructure like validator nodes, and even tokenized real-world assets like collectibles or property."
  },
  {
    question: "How is my ownership secured?",
    answer: "Your ownership is represented by fractional tokens minted on the blockchain. These tokens are held in your personal wallet, giving you full control. The underlying asset is secured by the Bond's audited smart contract."
  },
  {
    question: "What happens if a funding goal isn't met?",
    answer: "If a Bond doesn't reach its funding target within the specified timeframe, all contributed funds are automatically and trustlessly returned to the participants' wallets. Your funds are never at risk."
  },
  {
    question: "How do I sell my share of an asset?",
    answer: "Your fractional ownership tokens are liquid assets. You can sell them to anyone on a supported secondary marketplace or directly peer-to-peer. The new owner instantly inherits all rights associated with that share."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your questions about collective ownership, answered.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glass border border-border rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <motion.span 
                  className="text-xl transform transition-transform"
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                >
                  +
                </motion.span>
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
