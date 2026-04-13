import React from 'react';
import styles from './Hero.module.scss';

export function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroGrid}>

        {/* ── LEFT COLUMN: BUSINESS + paragraph ── */}
        <div className={styles.leftColumn}>
          <h1 className={styles.word}>BUSINESS</h1>
          <div className={styles.textBlock}>
            <p>
              Defining my professional identity through three words:{' '}
              <strong>Analytical</strong>, <strong>Systematic</strong>, and{' '}
              <strong>Versatile</strong>. My mission is to engineer efficiency
              by refining business processes and architecting data systems that
              drive measurable impact.
            </p>
          </div>
        </div>

        {/* ── CENTER COLUMN: profile image (tall, dominant) ── */}
        <div className={styles.centerColumn}>
          <img
            src="/images/avt.png"
            alt="Thu (Janis) – Technical Business Analyst"
            className={styles.profileImage}
          />
        </div>

        {/* ── RIGHT COLUMN: ANALYST + info block ── */}
        <div className={styles.rightColumn}>
          <h1 className={styles.word}>ANALYST</h1>
          <div className={styles.textBlock}>
            <p>
              I&apos;m Thu (Janis){' '}
              <span className={styles.accent}>| Technical Business Analyst</span>
            </p>
            <p>
              UEH University{' '}
              <span className={styles.accent}>| Technology and Innovation</span>
            </p>
            <p>
              Status:{' '}
              <span className={styles.accent}>Open for Internships (May 2026)</span>
            </p>
            <p>
              Location:{' '}
              <span className={styles.accent}>Ho Chi Minh City, VN</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
