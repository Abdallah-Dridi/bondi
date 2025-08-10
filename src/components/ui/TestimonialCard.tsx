"use client";

import { motion } from 'framer-motion';
import { Testimonial } from '@/data/landingData';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div 
      className="bg-light-gray rounded-2xl p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="text-5xl text-primary-blue/10 font-serif mb-4">"</div>
      <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
      <div className="flex items-center">
        <div className="size-12 rounded-full bg-primary-blue flex items-center justify-center text-white font-bold mr-4">
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-bold text-dark-charcoal">{testimonial.name}</div>
          <div className="text-sm text-gray-500">{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  );
}