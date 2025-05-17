import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#Home', label: 'Home' },
    { href: '#About', label: 'About' },
    { href: '#Portfolio', label: 'Portfolio' },
    { href: '#Experience', label: 'Experience' },
    { href: '#Contact', label: 'Contact' },
  ];

  if (!mounted) return null;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-background/80 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link href='/'>
            <a className='flex items-center gap-1'>
              <span className="font-['BestermindRegular'] text-2xl tracking-wider hover:text-[#4F46E5] transition-colors duration-300">
                Sharjeel
              </span>
              <span className="font-['BestermindRegular'] text-2xl tracking-wider text-[#4F46E5]">
                Yunus
              </span>
            </a>
          </Link>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-8'>
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className='text-sm font-medium text-foreground/80 hover:text-primary transition-colors'>
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {toggleMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className='md:hidden glass-card my-4 rounded-2xl overflow-hidden'
          >
            <div className='py-2'>
              {menuItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className='block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-foreground/5 transition-colors'
                    onClick={() => setToggleMenu(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
