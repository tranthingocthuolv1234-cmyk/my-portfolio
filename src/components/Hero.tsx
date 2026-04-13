import React from 'react';
import styles from './Hero.module.scss';

export function Hero() {
  return (
    <section className={styles.heroSection}>

      {/* ── ROW 1: BUSINESS | image | ANALYST (grid overlap) ── */}
      <div className={styles.wordLayer}>
        <p className={styles.wordLeft}>BUSINESS</p>

        <figure className={styles.photoWrap}>
          <img
            src="/images/avt.png"
            alt="Thu (Janis) – Technical Business Analyst"
            className={styles.profileImage}
          />
        </figure>

        <p className={styles.wordRight}>ANALYST</p>
      </div>

      {/* ── ROW 2: description left | info right ── */}
      <div className={styles.textRow}>
        {/* Left text block */}
        <article className={styles.introBlock}>
          <p>
            Defining my professional identity through three words:{' '}
            <strong>Analytical</strong>, <strong>Systematic</strong>, and{' '}
            <strong>Versatile</strong>. My mission is to engineer efficiency
            by refining business processes and architecting data systems that
            drive measurable impact.
          </p>
        </article>

        {/* Right info block */}
        <aside className={styles.infoBlock}>
          <p>
            <span>I&apos;m Thu (Janis)</span>{' '}
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
            Location: <span className={styles.accent}>Ho Chi Minh City, VN</span>
          </p>
        </aside>
      </div>

    </section>
  );
}
