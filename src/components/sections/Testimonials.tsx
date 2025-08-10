'use client';
import { motion } from 'framer-motion';
import { testimonials } from '@/data/bondiData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-gradient-to-tr from-card to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-gradient">Users Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users who simplified their shared living
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-5xl text-primary/20 mb-4">&quot;</div>
              <p className="text-lg italic mb-6">&quot;{testimonial.quote}&quot;</p>
              <div className="flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-muted-foreground">Verified User</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}