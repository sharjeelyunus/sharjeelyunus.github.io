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

// Rashid Wassan profile picture
// Rashid WassanRashid Wassan
// · 1stFirst degree connection
// Founder & CEO KaamSay | Flutter Dev | GDSC Lead | MLSA | Blockchain Geek & Cryptomaniac | Community Builder | Tech EvangelistFounder & CEO KaamSay | Flutter Dev | GDSC Lead | MLSA | Blockchain Geek & Cryptomaniac | Community Builder | Tech Evangelist
// April 25, 2022, Rashid worked with Sharjeel on the same teamApril 25, 2022, Rashid worked with Sharjeel on the same team
// All LinkedIn members

// The smart & multitalented guy and a genuine person. Sharjeel is the person to reach out for the technical help or tasks. I was really inspired to see the work of this person on GitHub and got very inspired. Highly recommended person to work with!
