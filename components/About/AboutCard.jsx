import React, { useState } from 'react';
import styles from './about.module.css';
import AboutMeCard from './AboutMeCard';
import Certificates from './Certificates';
import SkillsCard from './SkillsCard';

function AboutList({ setActiveDetail, activeDetail }) {
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
}

const AboutCard = () => {
  const [activeDetail, setActiveDetail] = useState('#AboutMe');
  if (activeDetail === '#AboutMe') {
    return (
      <div className={styles.about__container}>
        <AboutList
          setActiveDetail={setActiveDetail}
          activeDetail={activeDetail}
        />
        <AboutMeCard />
      </div>
    );
  }
  if (activeDetail === '#Skills') {
    return (
      <div className={styles.about__container}>
        <AboutList
          setActiveDetail={setActiveDetail}
          activeDetail={activeDetail}
        />
        <SkillsCard />
      </div>
    );
  }
  if (activeDetail === '#Ceriticates') {
    return (
      <div className={styles.about__container}>
        <AboutList
          setActiveDetail={setActiveDetail}
          activeDetail={activeDetail}
        />
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
