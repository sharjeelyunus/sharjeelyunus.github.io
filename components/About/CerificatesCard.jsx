import Link from 'next/link';
import React from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import styles from './about.module.css';

const CertificatesCard = ({ certificates }) => {
  return (
    <div className={styles.certificatescard}>
      <div className={styles.certificate__name}>
        <h3>{certificates.name}</h3>
      </div>
      <div className={styles.certificate__data}>
        <div className={styles.certificate__platform}>
          <p>{certificates.platform}</p>
        </div>
        <div className={styles.certificate__verify}>
          <Link href={certificates.verify}>
            <a target='_blank'>
              <AiOutlineLink />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CertificatesCard;
