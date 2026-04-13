import React from 'react';
import { FiHome, FiUser, FiLayers, FiImage } from 'react-icons/fi';
import styles from '../app/home.module.scss';

export function Navbar() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>JANIS LAND</h1>
      <nav className={styles.nav}>
        <a href="#" className={styles.navItem}>
          <div className={styles.iconWrapper}>
            <FiHome className={styles.navIcon} />
          </div>
          <span>Home</span>
        </a>
        <a href="#about" className={styles.navItem}>
          <div className={styles.iconWrapper}>
            <FiUser className={styles.navIcon} />
          </div>
          <span>About me</span>
        </a>
        <a href="#project" className={styles.navItem}>
          <div className={styles.iconWrapper}>
            <FiLayers className={styles.navIcon} />
          </div>
          <span>Project</span>
        </a>
        <a href="#gallery" className={styles.navItem}>
          <div className={styles.iconWrapper}>
            <FiImage className={styles.navIcon} />
          </div>
          <span>Gallery</span>
        </a>
      </nav>
    </header>
  );
}
