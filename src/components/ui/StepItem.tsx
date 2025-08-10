"use client";

import { motion } from 'framer-motion';
import { Step } from '@/data/landingData';

interface StepItemProps {
  step: Step;
  index: number;
}

export default function StepItem({ step, index }: StepItemProps) {
  return (
    <motion.div 
      className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
    >
      <div className="lg:w-1/2 p-6">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-5xl font-bold text-primary-blue/20 mb-4">{step.number}</div>
          <h3 className="text-2xl font-bold text-dark-charcoal mb-3">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
        </div>
      </div>
      
      <div className="lg:w-1/2 flex justify-center">
        <div className="size-16 rounded-full bg-primary-blue flex items-center justify-center text-white font-bold text-xl">
          {index + 1}
        </div>
      </div>
      
      <div className="lg:w-1/2 p-6 hidden lg:block">
        {/* Empty space for alignment */}
      </div>
    </motion.div>
  );
}