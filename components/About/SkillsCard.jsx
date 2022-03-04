import React from 'react';
import TechCard from './TechCard';
import { techStack } from '../../constants/Data';
import { images } from '../../constants';
import styles from './about.module.css';
import Image from 'next/image';

const SkillsCard = () => {
  return (
    <div className={styles.skills__card}>
      <h1>Skills</h1>
      <div className={styles.skills__grid}>
        {techStack.map((stack, index) => (
          <TechCard key={index} stack={stack} />
        ))}
      </div>
      <div className={styles.more__skills__container}>
        {[
          images.api,
          images.css,
          images.sass,
          images.html,
          images.python,
          images.redux,
          images.figma,
        ].map((circle, index) => (
          <div className={styles.more__skills} key={`circle-${index}`}>
            <Image src={circle} width='80%' height='80%' alt='' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
