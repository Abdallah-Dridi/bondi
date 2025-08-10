"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';

const features = [
  {
    icon: '📝',
    title: "Immutable Ledger",
    description: "All records stored on blockchain for complete transparency",
    color: "from-primary to-secondary"
  },
  {
    icon: '💰',
    title: "Expense Splitting",
    description: "Automatically calculate who owes what with smart contracts",
    color: "from-accent to-primary"
  },
  {
    icon: '🧹',
    title: "Chore Tracking",
    description: "Assign tasks, track completion, and reward contributors",
    color: "from-secondary to-accent"
  },
  {
    icon: '🔄',
    title: "Subscription Sharing",
    description: "Manage recurring payments with auto-settlement",
    color: "from-purple-500 to-primary"
  }
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);
  
  return (
    <section id="features" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Core <span className="text-gradient">Features</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Everything you need for transparent group living
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`group relative p-8 rounded-2xl glass border ${
                activeFeature === index 
                  ? 'border-primary shadow-lg' 
                  : 'border-border'
              } transition-all cursor-pointer`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setActiveFeature(index)}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 rounded-2xl glass border border-primary/20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-10">
              <h3 className="text-2xl font-bold mb-4">{features[activeFeature].title}</h3>
              <p className="text-muted-foreground mb-6">
                {features[activeFeature].description}. All records are stored immutably on the blockchain.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span className="ml-3">Immutable blockchain records</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span className="ml-3">Real-time updates for all members</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span className="ml-3">Automated payment reminders</span>
                </li>
              </ul>
            </div>
            <div className={`bg-gradient-to-br ${features[activeFeature].color} min-h-[300px] flex items-center justify-center`}>
              <div className="glass p-8 rounded-2xl text-center">
                <div className="text-7xl mb-4">{features[activeFeature].icon}</div>
                <div className="text-xl font-bold">{features[activeFeature].title}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}