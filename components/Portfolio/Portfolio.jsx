/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsArrowUpRight, BsImage } from 'react-icons/bs';
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
} from '../../constants/Data';

const ProjectSkeleton = () => (
  <div className='bg-[#1a1f2e] rounded-2xl overflow-hidden h-[420px]'>
    <div className='h-48 bg-[#232936] animate-pulse' />
    <div className='p-6 space-y-4'>
      <div className='h-6 bg-[#232936] rounded animate-pulse w-3/4' />
      <div className='space-y-2'>
        <div className='h-4 bg-[#232936] rounded animate-pulse' />
        <div className='h-4 bg-[#232936] rounded animate-pulse w-2/3' />
      </div>
      <div className='flex gap-2'>
        <div className='h-6 w-16 bg-[#232936] rounded-full animate-pulse' />
        <div className='h-6 w-16 bg-[#232936] rounded-full animate-pulse' />
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('featured');
  const [imageError, setImageError] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setProjects(getFilteredProjects());
      setIsLoading(false);
    }, 500);
  }, [activeFilter]);

  const getFilteredProjects = () => {
    switch (activeFilter) {
      case 'featured':
        return featuredPortfolio;
      case 'web':
        return webPortfolio;
      case 'mobile':
        return mobilePortfolio;
      default:
        return featuredPortfolio;
    }
  };

  const filters = [
    { key: 'featured', label: 'Featured' },
    { key: 'web', label: 'Web Apps' },
    { key: 'mobile', label: 'Mobile Apps' },
  ];

  return (
    <section className='py-20 bg-[#111827]' id='Portfolio'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-white'>
            Featured <span className='text-[#00A6ED]'>Projects</span>
          </h2>
          <p className='text-[#8B8B8B] max-w-2xl mx-auto mb-10 text-sm md:text-base'>
            A showcase of my best work, featuring web applications and digital
            experiences that demonstrate my expertise in modern web development.
          </p>

          {/* Filter Buttons */}
          <div className='flex flex-wrap justify-center gap-3'>
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-[#00A6ED] text-white shadow-lg shadow-[#00A6ED]/25'
                    : 'bg-[#1a1f2e] text-[#8B8B8B] hover:bg-[#232936] hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          <AnimatePresence mode='wait'>
            {isLoading ? (
              <>
                {[1, 2, 3].map((n) => (
                  <motion.div
                    key={`skeleton-${n}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <ProjectSkeleton />
                  </motion.div>
                ))}
              </>
            ) : (
              projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='group h-full'
                >
                  <div className='bg-[#1a1f2e] rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-[#00A6ED]/10 h-full flex flex-col'>
                    {/* Project Image */}
                    <div className='relative h-48 w-full shrink-0'>
                      {imageError[project.id] ? (
                        <div className='absolute inset-0 flex items-center justify-center bg-[#232936]'>
                          <BsImage className='w-12 h-12 text-[#8B8B8B]' />
                        </div>
                      ) : (
                        <>
                          <Image
                            src={project.img}
                            alt={project.title}
                            layout='fill'
                            objectFit='cover'
                            className='transition-transform duration-300 group-hover:scale-110'
                            onError={() =>
                              setImageError((prev) => ({
                                ...prev,
                                [project.id]: true,
                              }))
                            }
                            loading='lazy'
                          />
                          <div className='absolute inset-0 bg-gradient-to-t from-[#1a1f2e] to-transparent opacity-90' />
                        </>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className='p-6 flex flex-col flex-grow'>
                      <div className='flex-grow space-y-4'>
                        <h3 className='text-xl font-semibold text-white group-hover:text-[#00A6ED] transition-colors duration-300'>
                          {project.title}
                        </h3>
                        <p className='text-[#8B8B8B] text-sm line-clamp-2'>
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className='flex flex-wrap gap-2'>
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className='text-xs px-3 py-1 rounded-full bg-[#232936] text-[#00A6ED]'
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className='flex items-center justify-between pt-4 mt-4 border-t border-[#232936]'>
                        {project.codeLink && (
                          <Link href={project.codeLink}>
                            <a
                              target='_blank'
                              rel='noopener noreferrer'
                              className='flex items-center gap-2 text-sm text-[#8B8B8B] hover:text-[#00A6ED] transition-colors'
                              aria-label={`View source code for ${project.title}`}
                            >
                              <BsGithub className='w-4 h-4' />
                              Source Code
                            </a>
                          </Link>
                        )}
                        {project.projectLink && (
                          <Link href={project.projectLink}>
                            <a
                              target='_blank'
                              rel='noopener noreferrer'
                              className='flex items-center gap-2 text-sm text-[#8B8B8B] hover:text-[#00A6ED] transition-colors'
                              aria-label={`View live demo for ${project.title}`}
                            >
                              Live Demo
                              <BsArrowUpRight className='w-4 h-4' />
                            </a>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='flex justify-center mt-12'
        >
          <Link href='https://github.com/sharjeelyunus?tab=repositories'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='group inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#00A6ED] text-white hover:bg-[#0090d1] transition-all duration-300 shadow-lg shadow-[#00A6ED]/25 hover:shadow-xl hover:shadow-[#00A6ED]/30'
            >
              View All Projects
              <BsArrowUpRight className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
