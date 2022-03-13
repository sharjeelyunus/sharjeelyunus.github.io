import React from 'react';
import styles from './about.module.css';
import AboutCard from './AboutCard';

const About = () => {
  return (
    <section id='About' className={styles.about}>
      <h3>Get To Know Me</h3>
      <AboutCard />
    </section>
  );
};

export default About;
