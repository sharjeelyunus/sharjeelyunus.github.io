import Image from 'next/image';
import React from 'react';
import { images } from '../../constants';

import styles from './about.module.css';

const AboutMeCard = () => {
  return (
    <div className={styles.AboutMeCard}>
      <div className={styles.AboutMeImageContatiner}>
        <div className={styles.AboutMeImage}>
          <Image src={images.Artwork} alt='Sharjeel Artwork' />
        </div>
      </div>
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
    </div>
  );
};

export default AboutMeCard;
