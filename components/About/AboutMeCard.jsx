import Image from 'next/image';
import React from 'react';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import styles from './about.module.css';

const AboutMeCard = () => {
  return (
    <div className={styles.AboutMeCard}>
      <div className={styles.AboutMeImageContatiner}>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
        >
          <div className={styles.AboutMeImage}>
            <Image src={images.Artwork} alt='Sharjeel Artwork' />
          </div>
        </motion.div>
      </div>
      <motion.div
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={styles.app__cover_info}
      >
        <div className={styles.AboutMeTextContatiner}>
          <p className={styles.AboutMeInfo}>
            Hi, I’m Sharjeel Yunus, a React, NextJS developer and a Technical
            Writer. I’m currently pursuing Computer Science Major at The Islamia
            University of Bahawalpur.
            <br />
            <br />
            🙌 Google Developers Student Clubs Lead
            <br /> ⚙️IEEE Joint Secretary (Faculty of Computing)
            <br /> 🚀 Hack Club Leader
            <br /> ⚡JavaScript Enthusiast
            <br /> 🦉 Open-Source Contributor
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMeCard;
