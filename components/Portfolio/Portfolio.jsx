/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import PortfolioList from './PortfolioList';
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  web_3,
} from '../../constants/Data';
import styles from './portfolio.module.css';
import Link from 'next/link';

const Portfolio = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);
  const projectLinkExist = () => {
    if (data.projectLink) {
      return;
    }
  };

  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'web',
      title: 'Web Dev',
    },
    {
      id: 'mobile',
      title: 'App Dev',
    },
    {
      id: 'web_3',
      title: 'Web 3.0',
    },
    {
      id: 'design',
      title: 'Design',
    },
  ];

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'web':
        setData(webPortfolio);
        break;
      case 'mobile':
        setData(mobilePortfolio);
        break;
      case 'design':
        setData(designPortfolio);
        break;
      case 'web_3':
        setData(web_3);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <section id='Portfolio' className={styles.Portfolio}>
      <h2>Portfolio</h2>
      <div className={styles.work__filter}>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            setAnimateCard={setAnimateCard}
            id={item.id}
          />
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={styles.work__portfolio}
      >
        {data.map((work, index) => (
          <div className={styles.work_item} key={index}>
            <div className={styles.work_img}>
              <img src={work.img} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
                className={styles.work__hover}
              >
                {work.projectLink ? (
                  <LinkDiv link={work.projectLink} Icon={AiFillEye} />
                ) : null}
                {work.codeLink ? (
                  <LinkDiv link={work.codeLink} Icon={AiFillGithub} />
                ) : null}
              </motion.div>
            </div>
            {work.title ? (
              <div className={styles.work__content}>
                <h4 className={styles.work__title}>{work.title}</h4>
                <p className={styles.work__desc}>{work.description}</p>

                {work.tags ? (
                  <div className={styles.work__tag}>
                    <p>{work.tags[0]}</p>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;

function LinkDiv({ link, style, Icon }) {
  return (
    <Link href={link}>
      <a target='_blank'>
        <motion.div
          whileInView={{
            scale: [0, 1],
          }}
          whileHover={{
            scale: [1, 0.9],
          }}
          transition={{
            duration: 0.25,
          }}
          className={styles.projectLink}
        >
          <Icon />
        </motion.div>
      </a>
    </Link>
  );
}
