import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsCode, BsServer, BsLightbulb } from 'react-icons/bs';
import { aboutContent } from '../../constants/Data';

const About = () => {
  const iconComponents = {
    BsCode,
    BsServer,
    BsLightbulb
  };

  return (
    <section id="About" className="py-20 px-4 md:px-8 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9]/20 to-[#a855f7]/20 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden">
                <Image
                  src={aboutContent.image}
                  alt="About Me"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {aboutContent.title.main}{" "}
              <span className="bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] bg-clip-text text-transparent">
                {aboutContent.title.highlight}
              </span>
            </h2>
            
            <div className="space-y-4">
              {aboutContent.description.map((paragraph, index) => {
                if (typeof paragraph === 'string') {
                  return (
                    <p key={index} className="text-white/60 text-lg">
                      {paragraph}
                    </p>
                  );
                }
                return (
                  <p key={index} className="text-white/80 text-lg">
                    {paragraph.text}{" "}
                    <a 
                      href={paragraph.company.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#6366f1] hover:text-[#6366f1]/80 transition-colors"
                    >
                      {paragraph.company.name}
                    </a>
                    {paragraph.continuation}
                  </p>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-32"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-16 text-white">
            {aboutContent.expertise.title.main}{" "}
            <span className="bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] bg-clip-text text-transparent">
              {aboutContent.expertise.title.highlight}
            </span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutContent.expertise.skills.map((skill, index) => {
              const Icon = iconComponents[skill.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-[#6366f1] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-white">{skill.title}</h4>
                  <p className="text-white/60 mb-4">{skill.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-sm px-3 py-1 rounded-full bg-[#6366f1]/10 text-[#6366f1]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
