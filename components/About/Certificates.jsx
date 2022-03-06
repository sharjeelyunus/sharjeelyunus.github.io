import React from 'react';
import { certificates } from '../../constants/Data';
import styles from './about.module.css';
import CertificatesCard from './CerificatesCard';

const Certificates = () => {
  return (
    <div className={styles.skills__card}>
      <h1>Certificates</h1>
      <div className={styles.skills__grid}>
        {certificates.map((certificates, index) => (
          <CertificatesCard key={index} certificates={certificates} />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
