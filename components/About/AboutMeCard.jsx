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
      <div className={styles.AboutMeTextContatiner}>
        <p className={styles.AboutMeInfo}>
          Hi, I’m Sharjeel Yunus, a Software Engineer, React - NextJS developer
          and a Technical Writer. I’m a former Google DSC Lead and also worked
          with multiple tech communities. I’m currently pursuing Computer
          Science Major at The Islamia University of Bahawalpur.
          <br />
          <br /> 💻 Software Engineer at CareerNetwork
          <br /> &nbsp;☁ &nbsp;Community Manager at GDG Cloud Lahore
          <br /> 🙌 Former Google DSC Lead
          <br /> ⚡ JavaScript Enthusiast
          <br /> 🦉 Open-Source Contributor
        </p>
        <div className={styles.resumeDiv}>
          <a
            className={styles.resumeBtn}
            href='https://drive.google.com/file/d/1j7XJT8H30Not-d8WYmqXCgNPzdGm6kbP/view?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            Downlod Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
