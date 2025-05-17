import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BsLinkedin,
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsTwitter,
} from 'react-icons/bs';

const Footer = () => {
  const menuItems = [
    { href: '#Home', label: 'Home' },
    { href: '#About', label: 'About' },
    { href: '#Portfolio', label: 'Portfolio' },
    { href: '#Experience', label: 'Experience' },
    { href: '#Contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://facebook.com/sharjeelyunus1', icon: <BsFacebook />, label: 'Facebook' },
    { href: 'https://www.instagram.com/sharjeelyunus', icon: <BsInstagram />, label: 'Instagram' },
    { href: 'https://twitter.com/sharjeelyunus', icon: <BsTwitter />, label: 'Twitter' },
    { href: 'https://www.linkedin.com/in/sharjeel-yunus/', icon: <BsLinkedin />, label: 'LinkedIn' },
    { href: 'https://github.com/sharjeelyunus', icon: <BsGithub />, label: 'GitHub' },
  ];

  return (
    <footer className="bg-[#111827] pt-20 pb-10 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `linear-gradient(-45deg, #1a2234 25%, transparent 25%, transparent 75%, #1a2234 75%, #1a2234)`,
          backgroundSize: '20px 20px',
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Link href="/">
              <a className="text-2xl font-bold text-white mb-4 block">
                <span className="font-['BestermindRegular'] text-3xl tracking-wider hover:text-[#4F46E5] transition-colors duration-300">Sharjeel</span>
                <span className="font-['BestermindRegular'] text-3xl tracking-wider text-[#4F46E5]">Yunus</span>
              </a>
            </Link>
            <p className="text-[#8B8B8B] text-sm leading-relaxed max-w-md">
              A passionate Full Stack Developer crafting beautiful web experiences with modern technologies.
              Always eager to learn and contribute to innovative projects.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <a className="text-[#8B8B8B] text-sm hover:text-[#4F46E5] transition-colors duration-300">
                      {item.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-[#1a1f2e] text-[#8B8B8B] hover:bg-[#4F46E5]/10 hover:text-[#4F46E5] flex items-center justify-center transition-all duration-300"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1a1f2e]">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[#8B8B8B] text-sm text-center"
          >
            © {new Date().getFullYear()} Sharjeel Yunus. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
