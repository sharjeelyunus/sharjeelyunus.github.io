import React, { useState } from 'react';
import styles from './about.module.css';
import AboutMeCard from './AboutMeCard';
import Certificates from './Certificates';
import SkillsCard from './SkillsCard';

const AboutCard = () => {
  const [activeDetail, setActiveDetail] = useState('#AboutMe');
  if (activeDetail === '#AboutMe') {
    return (
      <div className={styles.about__container}>
        <div className={styles.AboutCard}>
          <a
            href='#AboutMe'
            onClick={() => setActiveDetail('#AboutMe')}
            className={activeDetail === '#AboutMe' ? styles.active : ''}
          >
            About
          </a>
          <a
            href='#Skills'
            onClick={() => setActiveDetail('#Skills')}
            className={activeDetail === '#Skills' ? styles.active : ''}
          >
            Skills
          </a>
          <a
            href='#Ceriticates'
            onClick={() => setActiveDetail('#Ceriticates')}
            className={activeDetail === '#Ceriticates' ? styles.active : ''}
          >
            Ceriticates
          </a>
        </div>
        <AboutMeCard />
      </div>
    );
  }
  if (activeDetail === '#Skills') {
    return (
      <div className={styles.about__container}>
        <div className={styles.AboutCard}>
          <a
            href='#AboutMe'
            onClick={() => setActiveDetail('#AboutMe')}
            className={activeDetail === '#AboutMe' ? styles.active : ''}
          >
            About
          </a>
          <a
            href='#Skills'
            onClick={() => setActiveDetail('#Skills')}
            className={activeDetail === '#Skills' ? styles.active : ''}
          >
            Skills
          </a>
          <a
            href='#Ceriticates'
            onClick={() => setActiveDetail('#Ceriticates')}
            className={activeDetail === '#Ceriticates' ? styles.active : ''}
          >
            Ceriticates
          </a>
        </div>
        <SkillsCard />
      </div>
    );
  }
  if (activeDetail === '#Ceriticates') {
    return (
      <div className={styles.about__container}>
        <div className={styles.AboutCard}>
          <a
            href='#AboutMe'
            onClick={() => setActiveDetail('#AboutMe')}
            className={activeDetail === '#AboutMe' ? styles.active : ''}
          >
            About
          </a>
          <a
            href='#Skills'
            onClick={() => setActiveDetail('#Skills')}
            className={activeDetail === '#Skills' ? styles.active : ''}
          >
            Skills
          </a>
          <a
            href='#Ceriticates'
            onClick={() => setActiveDetail('#Ceriticates')}
            className={activeDetail === '#Ceriticates' ? styles.active : ''}
          >
            Ceriticates
          </a>
        </div>
        <Certificates />
      </div>
    );
  }
  return (
    <div className={styles.AboutCard}>
      <a
        href='#AboutMe'
        onClick={() => setActiveDetail('#AboutMe')}
        className={activeDetail === '#AboutMe' ? styles.active : ''}
      >
        About
      </a>
      <a
        href='#Skills'
        onClick={() => setActiveDetail('#Skills')}
        className={activeDetail === '#Skills' ? styles.active : ''}
      >
        Skills
      </a>
      <a
        href='#Ceriticates'
        onClick={() => setActiveDetail('#Ceriticates')}
        className={activeDetail === '#Ceriticates' ? styles.active : ''}
      >
        Ceriticates
      </a>
    </div>
  );
};

export default AboutCard;
