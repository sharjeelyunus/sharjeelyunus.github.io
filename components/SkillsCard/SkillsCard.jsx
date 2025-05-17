import React from 'react';
import { motion } from 'framer-motion';
import * as Si from 'react-icons/si';
import { technicalSkills } from '../../constants/Data';

const SkillsCard = () => {
  const getIcon = (iconName) => {
    const Icon = Si[iconName];
    return Icon ? <Icon className="w-5 h-5" /> : null;
  };

  return (
    <section className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {technicalSkills.title.main}{" "}
            <span className="bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] bg-clip-text text-transparent">
              {technicalSkills.title.highlight}
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            {technicalSkills.description}
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technicalSkills.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-[#0ea5e9] font-semibold mb-4">
                {category.title.toUpperCase()}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[#a855f7] group-hover:text-[#0ea5e9] transition-colors duration-300">
                          {getIcon(skill.icon)}
                        </span>
                        <span className="text-white/80 text-sm">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-white/40 text-xs">
                        {skill.proficiency}%
                      </span>
                    </div>
                    
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsCard;
