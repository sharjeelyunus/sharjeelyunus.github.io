import React from 'react';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import one from '../../assets/highlights/1.jpg';
import two from '../../assets/highlights/2.jpeg';
import three from '../../assets/highlights/3.jpg';
import four from '../../assets/highlights/4.jpeg';
import five from '../../assets/highlights/5.jpeg';
import six from '../../assets/highlights/6.jpeg';

const highlights = [
  {
    image: one,
    title: 'Cloud Study Jams at 10Pearls by GDG Cloud Lahore',
    alt: 'Sharjeel Yunus at 10Pearls Lahore'
  },
  {
    image: two,
    title: 'HacktobestFest workshop at The Islamia University of Bahawalpur',
    alt: 'Sharjeel Yunus at The Islamia University of Bahawalpur'
  },
  {
    image: three,
    title: 'Cloud Study Jams at 10Pearls by GDG Cloud Lahore',
    alt: 'Sharjeel Yunus at 10Pearls Lahore with GDG Cloud Lahore team'
  },
  {
    image: four,
    title: 'AWS Community Day - Lahore',
    alt: 'Sharjeel Yunus at AWS Community Day 2022'
  },
  {
    image: five,
    title: 'HacktobestFest workshop at The Islamia University of Bahawalpur',
    alt: 'Sharjeel Yunus at The Islamia University of Bahawalpur'
  },
  {
    image: six,
    title: 'AWS Community Day - Lahore',
    alt: 'Sharjeel Yunus at AWS Community Day with AWS Community Day team'
  }
];

const Highlights = () => {
  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 40,
    height: 40,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(15, 23, 42, 0.7)',
    borderRadius: '50%',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(4px)',
    transition: 'all 0.3s ease'
  };

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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Event <span className="text-[#4F46E5]">Highlights</span>
          </h2>
          <p className="text-[#8B8B8B] max-w-2xl mx-auto text-sm md:text-base">
            Memorable moments from tech events, workshops, and community gatherings where I&apos;ve had the opportunity to share knowledge and connect with fellow developers.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Carousel
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            transitionTime={500}
            stopOnHover={true}
            renderArrowPrev={(onClickHandler, hasPrev) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  style={{ ...arrowStyles, left: 15 }}
                  className="hover:bg-[#4F46E5]/20 hover:border-[#4F46E5]/50"
                  aria-label="Previous slide"
                >
                  <BsChevronLeft className="w-5 h-5 text-white" />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  style={{ ...arrowStyles, right: 15 }}
                  className="hover:bg-[#4F46E5]/20 hover:border-[#4F46E5]/50"
                  aria-label="Next slide"
                >
                  <BsChevronRight className="w-5 h-5 text-white" />
                </button>
              )
            }
            renderIndicator={(onClickHandler, isSelected, index) => (
              <button
                type="button"
                onClick={onClickHandler}
                className={`inline-block h-2 w-2 mx-1 rounded-full transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#4F46E5] w-6'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            )}
          >
            {highlights.map((item, index) => (
              <div key={index} className="relative aspect-video rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <Image
                  src={item.image}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                  priority={index === 0}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-white text-lg md:text-xl font-medium">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
