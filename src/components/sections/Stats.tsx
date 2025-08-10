"use client";
import { motion } from 'framer-motion';

const stats = [
  { value: "$2.4M+", label: "Total Value Locked" },
  { value: "15,000+", label: "Active Users" },
  { value: "99.99%", label: "Uptime" },
  { value: "< 0.5s", label: "Transaction Finality" }
];

export default function Stats() {
  return (
    <section id="stats" className="py-24 px-6 bg-card/20">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="font-display text-4xl md:text-5xl font-semibold text-gradient mb-2">{stat.value}</h3>
              <p className="text-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}