import React from 'react';
import styles from '../app/home.module.scss';

export function InfoCard() {
  return (
    <aside className={styles.status}>
      <p>I&apos;m Thu (Janis) | Technical Business Analyst</p>
      <p>UEH University | Technology and Innovation</p>
      <p>Status: Open for Internships (May 2026)</p>
      <p>Location: Ho Chi Minh City, VN</p>
    </aside>
  );
}
