import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import one from '../../assets/highlights/1.jpg';
import two from '../../assets/highlights/2.jpeg';
import three from '../../assets/highlights/3.jpg';
import four from '../../assets/highlights/4.jpeg';
import five from '../../assets/highlights/5.jpeg';
import six from '../../assets/highlights/6.jpeg';

import styles from './highlights.module.css';
import Image from 'next/image';

const Highlights = () => {
  return (
    <div className={styles.highlights_comp}>
      <h2>Highlights</h2>
      <div className={styles.comp}>
        <div className={styles._comp}>
          <Carousel showThumbs={false}>
            <div className={styles.imageDiv}>
              <Image
                src={one}
                alt='Sharjeel Yunus at 10Pearls Lahore'
                width='800px'
                height='500px'
                className={styles.image}
              />
              <p className='legend'>
                Cloud Study Jams at 10Pearls by GDG Cloud Lahore
              </p>
            </div>
            <div className={styles.imageDiv}>
              <Image
                src={two}
                alt='Sharjeel Yunus at The Islamia University of Bahawalpur'
                width='400px'
                height='500px'
                className={styles._image}
              />
              <p className='legend'>
                HacktobestFest workshop at The Islamia University of Bahawalpur
              </p>
            </div>
            <div className={styles.imageDiv}>
              <Image
                src={three}
                alt='Sharjeel Yunus at 10Pearls Lahore with GDG Cloud Lahore team'
                width='800px'
                height='500px'
                className={styles.image}
              />
              <p className='legend'>
                Cloud Study Jams at 10Pearls by GDG Cloud Lahore
              </p>
            </div>
            <div className={styles.imageDiv}>
              <Image
                src={four}
                alt='Sharjeel Yunus at AWS Community Day 2022'
                width='400px'
                height='500px'
                className={styles._image}
              />
              <p className='legend'>AWS Community Day - Lahore</p>
            </div>
            <div className={styles.imageDiv}>
              <Image
                src={five}
                alt='Sharjeel Yunus at The Islamia University of Bahawalpur'
                width='800px'
                height='500px'
                className={styles._image}
              />
              <p className='legend'>
                HacktobestFest workshop at The Islamia University of Bahawalpur
              </p>
            </div>
            <div className={styles.imageDiv}>
              <Image
                src={six}
                alt='Sharjeel Yunus at AWS Community Day with AWS Community Day team'
                width='800px'
                height='500px'
                className={styles._image}
              />
              <p className='legend'>AWS Community Day - Lahore</p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
