import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';
import { HiDownload, HiMail } from 'react-icons/hi';
import { images } from '../../constants';
import { coverContent } from '../../constants/Data';

const Cover = () => {
  // Map icon components
  const iconComponents = {
    BsLinkedin,
    BsGithub,
    BsTwitter,
    HiDownload,
    HiMail
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-12 md:py-20 overflow-hidden bg-[#0a192f]" id='Home'>
      {/* Gradient Background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#0a192f] via-[#0a192f]/95 to-[#0a192f]/90" />

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {coverContent.backgroundEffects.gradientOrbs.map((orb, index) => (
          <div
            key={index}
            className={`absolute ${orb.position} ${orb.size} ${orb.color} rounded-full filter blur-[100px] animate-pulse will-change-transform opacity-20`}
            style={{ willChange: 'transform' }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left w-full"
          >
            <div className="space-y-6 md:space-y-8">
              <div className="inline-block">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-2 rounded-full inline-flex items-center gap-2">
                  <span role="img" aria-label="Waving hand" className="text-xl">👋</span>
                  <span className="text-white/80 text-sm">Hello, I am</span>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] bg-clip-text text-transparent">
                    {coverContent.name}
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl text-white/80 font-light">
                  {coverContent.title}
                </p>
              </div>

              <div className="space-y-6 md:space-y-8">
                <p className="text-base md:text-lg text-white/60 max-w-lg mx-auto lg:mx-0">
                  {coverContent.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href={coverContent.cta.primary.href}>
                    <a 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-[#6366f1] text-white rounded-lg hover:bg-[#6366f1]/90 transition-all duration-300 gap-2 hover:scale-[1.02] focus:ring-2 focus:ring-[#6366f1]/50 focus:outline-none text-base md:text-lg"
                    >
                      <HiDownload className="w-5 h-5" />
                      Download Resume
                    </a>
                  </Link>
                  <Link href={coverContent.cta.secondary.href}>
                    <a 
                      className="inline-flex items-center justify-center px-6 py-3 border border-[#6366f1] text-white rounded-lg hover:bg-[#6366f1]/10 transition-all duration-300 gap-2 hover:scale-[1.02] focus:ring-2 focus:ring-[#6366f1]/50 focus:outline-none text-base md:text-lg"
                    >
                      <HiMail className="w-5 h-5" />
                      Get in Touch
                    </a>
                  </Link>
                </div>

                <div className="flex items-center gap-6 justify-center lg:justify-start">
                  {coverContent.socialLinks.map((link, index) => {
                    const Icon = iconComponents[link.icon];
                    return (
                      <Link key={index} href={link.url}>
                        <a 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`Visit ${link.platform} profile`}
                          className="text-white/60 hover:text-white text-2xl transition-all duration-300 hover:scale-110"
                        >
                          <Icon />
                        </a>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center justify-center w-full"
          >
            <div className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-[#1e40af]/30 shadow-2xl">
              <Image
                src={images.ProfilePic}
                alt={`${coverContent.name}'s profile picture`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-[1.02]"
                priority
                quality={90}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cover;
