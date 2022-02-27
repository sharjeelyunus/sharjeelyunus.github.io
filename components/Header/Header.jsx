import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './header.module.css';

export default function Header() {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark');
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute('data-theme');
        window.localStorage.setItem('theme', 'light');
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === 'dark');
  }, []);

  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.myname}>
          <Link href='/'>SharjeelYunus</Link>
        </div>
        <div>
          {darkTheme !== undefined && (
            <form action='#'>
              <label className={styles.switch}>
                <input
                  type='checkbox'
                  checked={darkTheme}
                  onChange={handleToggle}
                  className={styles.input}
                />
                <span className={styles.slider}></span>
              </label>
            </form>
          )}
        </div>
      </nav>
    </div>
  );
}
