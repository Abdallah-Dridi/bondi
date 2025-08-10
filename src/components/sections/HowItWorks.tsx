"use client";
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Create Your Group",
    description: "Set up your shared space in seconds. Invite members via wallet addresses or email.",
    icon: "👥"
  },
  {
    number: "02",
    title: "Add Expenses & Tasks",
    description: "Log bills, chores, and subscriptions. Smart contracts automatically track obligations.",
    icon: "📊"
  },
  {
    number: "03",
    title: "Automated Settlements",
    description: "Bondi calculates who owes what and automates payment reminders and settlements.",
    icon: "💸"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-gradient-to-br from-card to-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            How <span className="text-gradient">Bondi</span> Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Simple steps to transparent group living
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>
          
          <div className="space-y-20 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex flex-col md:flex-row items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="md:w-1/2 p-6 md:text-right text-center md:pr-16">
                  {index % 2 === 0 ? (
                    <>
                      <div className="text-7xl mb-4">{step.icon}</div>
                      <div className="text-5xl font-bold text-primary/20 mb-2">{step.number}</div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </>
                  ) : (
                    <div className="md:hidden">
                      <div className="text-7xl mb-4">{step.icon}</div>
                      <div className="text-5xl font-bold text-primary/20 mb-2">{step.number}</div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  )}
                </div>
                
                <div className="md:w-1/2 flex justify-center relative">
                  <div className="w-24 h-24 rounded-full gradient-bg flex items-center justify-center text-white text-4xl z-10">
                    {step.icon}
                  </div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-32 h-32 rounded-full bg-primary/10 animate-ping-slow hidden md:block"></div>
                </div>
                
                <div className="md:w-1/2 p-6 md:text-left text-center md:pl-16">
                  {index % 2 !== 0 ? (
                    <>
                      <div className="text-7xl mb-4 hidden md:block">{step.icon}</div>
                      <div className="text-5xl font-bold text-primary/20 mb-2">{step.number}</div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </>
                  ) : (
                    <div className="md:hidden">
                      <div className="text-5xl font-bold text-primary/20 mb-2">{step.number}</div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block glass px-8 py-4 rounded-full"
          >
            <p className="text-lg">
              Ready to simplify your shared life?{' '}
              <a href="#cta" className="text-gradient font-bold hover:underline">
                Get started now →
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}