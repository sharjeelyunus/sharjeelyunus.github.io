import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsQuote } from 'react-icons/bs';
import { testimonials } from '../../constants/Data';

const Recommendations = () => {
  return (
    <section className="py-20 bg-[#111827] relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `linear-gradient(-45deg, #1a2234 25%, transparent 25%, transparent 75%, #1a2234 75%, #1a2234)`,
          backgroundSize: '20px 20px',
        }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Professional <span className="text-[#4F46E5]">Recommendations</span>
          </h2>
          <p className="text-[#8B8B8B] max-w-2xl mx-auto text-sm md:text-base">
            Feedback from colleagues and industry professionals about my work, leadership, and collaboration style.
          </p>
        </motion.div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[#1a1f2e] rounded-2xl p-8 h-full transition-all duration-300 hover:bg-[#232936] relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <BsQuote className="w-8 h-8 text-[#4F46E5]/30 group-hover:text-[#4F46E5]/50 transition-colors duration-300" />
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#4F46E5]/20">
                    <Image
                      src={testimonial.img}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold group-hover:text-[#4F46E5] transition-colors duration-300">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-[#8B8B8B]">
                      {testimonial.jobTitle}
                    </p>
                  </div>
                </div>

                {/* Recommendation Text */}
                <p className="text-[#8B8B8B] text-sm leading-relaxed">
                  {testimonial.recomendation}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
