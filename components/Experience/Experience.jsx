import React from 'react';
import { motion } from 'framer-motion';
import { BsBriefcase, BsCalendar, BsGeoAlt, BsArrowRight } from 'react-icons/bs';
import { professionalExperience } from '../../constants/Data';

const Experience = () => {
  return (
    <section className="py-20 bg-[#111827]" id='Experience'>
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
            {professionalExperience.title.main}{" "}
            <span className="bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] bg-clip-text text-transparent">
              {professionalExperience.title.highlight}
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            {professionalExperience.description}
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto">
          {professionalExperience.experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== professionalExperience.experiences.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-px bg-gradient-to-b from-[#0ea5e9] to-transparent" />
              )}

              <div className="relative flex gap-6">
                {/* Timeline Icon */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-4 flex items-center justify-center">
                  <BsBriefcase className="w-6 h-6 text-[#0ea5e9]" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {experience.title}
                        </h3>
                        <a
                          href={experience.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0ea5e9] hover:text-[#a855f7] transition-colors duration-300"
                        >
                          {experience.company}
                        </a>
                      </div>
                      <div className="space-y-1 text-right">
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                          <BsCalendar className="w-4 h-4" />
                          <span>{experience.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                          <BsGeoAlt className="w-4 h-4" />
                          <span>{experience.location}</span>
                          <span className="px-2 py-0.5 rounded-full bg-white/10 text-xs">
                            {experience.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-3 mb-4">
                      {experience.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="flex items-start gap-2 text-white/60"
                        >
                          <BsArrowRight className="w-4 h-4 mt-1 flex-shrink-0 text-[#0ea5e9]" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 rounded-full text-xs bg-[#0ea5e9]/10 text-[#0ea5e9]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
