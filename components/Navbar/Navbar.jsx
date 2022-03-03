import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

import styles from './navbar.module.css';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <div>
      <nav className={styles.nav}>
        <a
          href='#'
          onClick={() => setActiveNav('#')}
          className={activeNav === '#' ? styles.active : ''}
        >
          <AiOutlineHome />
        </a>
        <a
          href='#About'
          onClick={() => setActiveNav('#About')}
          className={activeNav === '#About' ? styles.active : ''}
        >
          <AiOutlineUser />
        </a>
        <a
          href='#Portfolio'
          onClick={() => setActiveNav('#Portfolio')}
          className={activeNav === '#Portfolio' ? styles.active : ''}
        >
          <RiServiceLine />
        </a>
        <a
          href='#Blogs'
          onClick={() => setActiveNav('#Blogs')}
          className={activeNav === '#Blogs' ? styles.active : ''}
        >
          <BiBook />
        </a>
        <a
          href='#Contact'
          onClick={() => setActiveNav('#Contact')}
          className={activeNav === '#Contact' ? styles.active : ''}
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
