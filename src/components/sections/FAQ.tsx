'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "Is Bondi really free to use?",
    answer: "Yes! Bondi is completely free for basic functionality. We offer premium features for larger groups at competitive prices."
  },
  {
    question: "How does Bondi ensure security?",
    answer: "We use blockchain technology for immutable record-keeping and bank-grade encryption for all your data."
  },
  {
    question: "Can I use Bondi without cryptocurrency?",
    answer: "Absolutely! Bondi supports traditional payment methods. Crypto is optional for advanced features."
  },
  {
    question: "How many people can be in a group?",
    answer: "The free plan supports up to 5 members. Premium plans support up to 20 members per group."
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
            Everything you need to know about Bondi
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
                <span className="text-xl transform transition-transform">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}