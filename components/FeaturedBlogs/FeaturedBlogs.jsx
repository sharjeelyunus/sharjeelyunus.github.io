import React from 'react';
import { motion } from 'framer-motion';
import DevArticles from './DevArticles';

const FeaturedBlogs = () => {
  return (
    <section className="py-20 bg-[#111827]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Featured <span className="text-[#00A6ED]">Blogs</span>
          </h2>
          <p className="text-[#8B8B8B] max-w-2xl mx-auto text-sm md:text-base">
            Sharing insights and experiences through technical writing and tutorials.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <DevArticles />
      </div>
    </section>
  );
};

export default FeaturedBlogs;
