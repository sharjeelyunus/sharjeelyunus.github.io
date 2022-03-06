import React from 'react';
import styles from './about.module.css';
import AboutCard from './AboutCard';

const About = () => {
  return (
    <section id='About' className={styles.about}>
      <h2>Get To Know</h2>
      <AboutCard />
    </section>
  );
};

export default About;
