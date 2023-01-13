import React from 'react';
import styles from './experience.module.css';

const Experience = () => {
  return (
    <div className={styles.experience}>
      <div>
        <h2>Experience</h2>
      </div>
      <div className={styles.exp}>
        <div className={styles.exp_container}>
          <div className={styles.exp_comp}>
            <div>
              <h3>Software Engineer</h3>
              <p>CareerNetwork</p>
            </div>
            <div>
              <ul className={styles.exp_details}>
                <li>
                  Building a platform to help people excel in thier careers, a
                  platform specifically for learning, opportunities and growth.
                </li>
                <li>
                  Using React and tailwindcss on frontend to build a fast and
                  optimized platform.
                </li>
              </ul>
            </div>
            <div className={styles.exp_timeline}>
              <div>06/2022 - Present</div>
              <div>USA, Remote</div>
            </div>
          </div>
          <div className={styles.exp_comp}>
            <div>
              <h3>Developer Advocate</h3>
              <p>metaschool</p>
            </div>
            <div>
              <ul className={styles.exp_details}>
                <li>
                  Collaboration with local and international Developer
                  Communities
                </li>
                <li>
                  Partnership with companies and communities with shared goals
                </li>
                <li>Gamification of platform for engaging user experience</li>
              </ul>
            </div>
            <div className={styles.exp_timeline}>
              <div>06/2022 - 09/2022</div>
              <div>Singapore, Remote</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
