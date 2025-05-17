import Image from 'next/image';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import styles from './about.module.css';

const AboutMeCard = () => {
  return (
    <div className={styles.AboutMeCard}>
      <div className={styles.AboutMeImageContatiner}>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
        >
          <div className={styles.AboutMeImage}>
            <Image src={images.Artwork} alt='Sharjeel Artwork' />
          </div>
        </motion.div>
      </div>
      <div className={styles.AboutMeTextContatiner}>
        <p className={styles.AboutMeInfo}>
          Hi, I’m Sharjeel Yunus, a Senior Software Engineer specializing in
          full‑stack development. I’ve been deeply involved in tech communities
          – I served as a Google Developer Student Clubs Lead and even founded a
          Hack Club chapter at my university – where I organized workshops and
          hackathons to empower fellow students. I’m passionate about mentoring,
          open-source, and staying at the forefront of emerging tech.
          <br />
          <br /> 💼 Senior Software Engineer @ Ensemble Technologies
          (2024–Present)
          <br /> 🙌 Former Google DSC Lead, IUB (2021–2022)
          <br /> 🚀 Founder & President, Hack Club IUB (2021–2022)
          <br /> ⚡ JavaScript Enthusiast & AI Learner
          <br /> 🦉 Open-Source Contributor
        </p>
        <div className={styles.resumeDiv}>
          <a
            className={styles.resumeBtn}
            href='https://drive.google.com/file/d/1j7XJT8H30Not-d8WYmqXCgNPzdGm6kbP/view?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            Download Résumé
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
