import React from 'react';
import { AiFillYoutube } from 'react-icons/ai';
import { webinars } from '../../constants/Data';

import styles from './Webinar.module.css';

const Webinar = () => {
  return (
    <div className={styles.webinar_comp}>
      <h2>Recent Talks / Webinars</h2>
      <div className={styles.webinar_grid}>
        {webinars.map((webinar) => (
          <div className={styles.webinar} key={webinar.id}>
            <h2>{webinar.title}</h2>
            <div className={styles.webinar_details}>
              {webinar.link ? (
                <a
                  href={webinar.link}
                  className={styles.webinar_link}
                  target='_blank'
                  rel='noreferrer'
                >
                  <p>{webinar.platform}: Link</p>&nbsp;
                  <AiFillYoutube />
                </a>
              ) : (
                <p>{webinar.platform}</p>
              )}
              <p>Date: {webinar.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Webinar;
