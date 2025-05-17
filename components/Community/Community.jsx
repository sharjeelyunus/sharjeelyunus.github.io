import React from 'react';
import { motion } from 'framer-motion';
import { BsCalendar } from 'react-icons/bs';
import { communityRoles } from '../../constants/Data';

const Community = () => {
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
            Leadership & <span className="text-[#00A6ED]">Communities</span>
          </h2>
          <p className="text-[#8B8B8B] max-w-2xl mx-auto text-sm md:text-base">
            My journey in leading and building tech communities, fostering learning and innovation.
          </p>
        </motion.div>

        {/* Community Items */}
        <div className="max-w-4xl mx-auto space-y-8">
          {communityRoles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1a1f2e] rounded-2xl p-6 hover:shadow-xl hover:shadow-[#00A6ED]/5 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {role.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-[#8B8B8B] mb-4">
                <BsCalendar className="w-4 h-4" />
                <span>{role.duration}</span>
              </div>
              <p className="text-[#8B8B8B] text-sm">
                {role.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
