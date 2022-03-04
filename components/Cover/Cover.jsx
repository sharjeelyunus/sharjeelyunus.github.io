import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';
import { images } from '../../constants';

import styles from './cover.module.css';

const scaleVarients = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Cover = () => {
  return (
    <section id='Home' className={styles.app__cover}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={styles.app__cover_info}
      >
        <div className={styles.app__cover_badge}>
          <div className={styles.badge_cmp}>
            <span>👋</span>
            <div>
              <p className={styles.p_text}>Hello, I am</p>
              <h1 className={styles.head_text}>Sharjeel Yunus</h1>
            </div>
          </div>
          <div className={styles.align_flex}>
            <div className={styles.tag_cmp}>
              <p className={styles.p_text}>Fullstack Developer</p>
              <p className={styles.p_text}>React / NextJS Dev</p>
            </div>
            <div className={styles.icons_cmp}>
              <Link href='https://www.linkedin.com/in/sharjeel-yunus'>
                <a target='_blank'>
                  <BsLinkedin />
                </a>
              </Link>
              <Link href='https://github.com/sharjeelyunus'>
                <a target='_blank'>
                  <BsGithub />
                </a>
              </Link>
              <Link href='https://twitter.com/sharjeelyunus'>
                <a target='_blank'>
                  <BsTwitter />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={styles.app__cover_img}
      >
        <div className={styles.profile_image}>
          <Image src={images.ProfilePic} alt='Sharjeel Yunus' />
        </div>
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className={styles.overlay_circle}
        >
          <Image src={images.circle} alt='profile_circle' />
        </motion.div>
      </motion.div>

      <motion.div
        variants={scaleVarients}
        whileInView={scaleVarients.whileInView}
        className={styles.app__cover_circles}
      >
        {[images.react, images.Nextjs, images.node].map((circle, index) => (
          <div className={styles.circle_cmp} key={`circle-${index}`}>
            <Image src={circle} width='80%' height='80%' alt='' />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Cover;
