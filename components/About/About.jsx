import React, { useState } from 'react';
import styles from './about.module.css';
import AboutCard from './AboutCard';

const About = () => {
  return (
    <section id='About' className={styles.about}>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <AboutCard />
    </section>
  );
};

export default About;
