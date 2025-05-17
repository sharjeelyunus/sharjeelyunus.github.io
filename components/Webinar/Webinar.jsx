import React from 'react';
import { motion } from 'framer-motion';
import { AiFillYoutube } from 'react-icons/ai';
import { BsCalendar, BsMicFill } from 'react-icons/bs';
import { webinars } from '../../constants/Data';

const Webinar = () => {
  return (
    <section className="py-20 bg-[#111827]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Recent <span className="text-[#4F46E5]">Talks</span>
          </h2>
          <p className="text-[#8B8B8B] max-w-2xl mx-auto text-sm md:text-base">
            Sharing knowledge and experiences through talks, workshops, and webinars at various
            tech communities and events.
          </p>
        </motion.div>

        {/* Webinars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {webinars.map((webinar, index) => (
            <motion.div
              key={webinar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="bg-[#1a1f2e] rounded-lg p-4 h-full transition-all duration-300 hover:bg-[#232936] group">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center shrink-0">
                    <BsMicFill className="w-5 h-5 text-[#4F46E5]" />
                  </div>
                  
                  <div className="min-w-0 flex-grow">
                    <h3 className="text-white font-medium mb-2 line-clamp-1 group-hover:text-[#4F46E5] transition-colors duration-300">
                      {webinar.title}
                    </h3>
                    
                    <div className="flex items-center text-sm text-[#8B8B8B] mb-2">
                      <BsCalendar className="w-4 h-4 mr-2 shrink-0" />
                      <span>{webinar.date}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#8B8B8B]">
                        {webinar.platform}
                      </span>
                      {webinar.link && (
                        <a
                          href={webinar.link}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 text-[#4F46E5] text-sm hover:text-[#4F46E5]/80 transition-colors"
                        >
                          <AiFillYoutube className="w-5 h-5" />
                          <span>Watch</span>
                        </a>
                      )}
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

export default Webinar;
