import Image from 'next/image';
import React from 'react';
import styles from './about.module.css';

const TechCard = ({ stack }) => {
  return (
    <div className={styles.techcard}>
      <div className={styles.techImg}>
        <Image src={stack.img} alt='' />
      </div>
      <div className={styles.techData}>
        <div className={styles.tech}>{stack.tech}</div>
        <div className={styles.techLevel}>
          <div
            className={styles.level}
            style={{ width: `${stack.level}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TechCard;
