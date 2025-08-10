"use client";
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah K.",
    role: "Apartment Sharer",
    quote: "Bondi completely eliminated the awkward 'who owes what' conversations with my roommates. The transparent ledger means everything is clear, and settlements are instant. It's a friendship-saver!",
    short: "A friendship-saver! No more awkward money talks."
  },
  {
    name: "Mike T.",
    role: "Student Housing Manager",
    quote: "Managing finances for our student house was a nightmare of spreadsheets and Venmo requests. Bondi centralized everything. The automated subscription splitting for utilities is a game-changer.",
    short: "Simplified our student housing finances."
  },
  {
    name: "Jessica L.",
    role: "Project Team Lead",
    quote: "We use Bondi to manage shared costs for our remote team's software subscriptions. It's incredibly efficient and the on-chain records are perfect for transparent accounting.",
    short: "Perfect for transparent team accounting."
  },
  {
    name: "David R.",
    role: "Family Expense Manager",
    quote: "Our family uses Bondi to track shared household expenses. It's so much better than a shared note. Knowing everything is recorded immutably gives us peace of mind.",
    short: "Gives our family peace of mind."
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
            Trusted by Modern Groups
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-secondary max-w-3xl mx-auto"
          >
            From roommates and families to decentralized teams, see why users are choosing Bondi to manage their shared finances.
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
                className="p-8 glass rounded-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <p className="text-lg text-secondary mb-4">&quot;{testimonial.short}&quot;</p>
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