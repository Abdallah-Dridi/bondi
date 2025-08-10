// src/components/sections/Testimonials.tsx
"use client";
import { motion } from 'framer-motion';
import { testimonials } from '@/data/bondiData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-dark-charcoal mb-12">
          Loved by Groups Everywhere
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-light-gray p-8 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-dark-charcoal/80 mb-4">&quot;{testimonial.quote}&quot;</p>
              <div className="flex items-center">
                {/* Placeholder for avatar */}
                <div className="w-12 h-12 rounded-full bg-soft-teal mr-4"></div> 
                <p className="font-bold text-dark-charcoal">{testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}