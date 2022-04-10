import React from 'react';
import Avatar from '@mui/material/Avatar';
import { testimonials } from '../../constants/Data';

import styles from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <div className={styles.testimonials__comp}>
      <h2>Recommendations</h2>
      <div className={styles.testimonials__grid}>
        {testimonials.map((testimonial) => (
          <div className={styles.testimonial} key={testimonial.id}>
            <Avatar alt={testimonial.name} src={testimonial.img} />
            <h3>{testimonial.name}</h3>
            <p className={styles.job__title}>{testimonial.jobTitle}</p>
            <p className={styles.recomendation}>{testimonial.recomendation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
