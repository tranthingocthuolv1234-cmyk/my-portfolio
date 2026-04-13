import React from 'react';
import styles from './Hero.module.scss';

export function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        
        {/* LEFT COLUMN (30% Width) */}
        <div className={styles.leftColumn}>
          <h1 className={styles.heading}>
            BUSINESS
          </h1>
          <div className={styles.leftText}>
            <p>
              Defining my professional identity through three words: 
              <strong className={styles.whiteBold}> Analytical</strong>, 
              <strong className={styles.whiteBold}> Systematic</strong>, and 
              <strong className={styles.whiteBold}> Versatile</strong>. 
              My mission is to engineer efficiency by refining business processes 
              and architecting data systems that drive measurable impact.
            </p>
          </div>
        </div>

        {/* CENTER COLUMN (40% Width) - Explicit overlap via margin */}
        <div className={styles.centerColumn}>
          <div className={styles.imageWrapper}>
            <img 
              src="/images/avt.png" 
              alt="Thu Janis - Technical Business Analyst" 
              className={styles.profileImage}
            />
            <div className={styles.imageGlow} />
          </div>
        </div>

        {/* RIGHT COLUMN (30% Width) */}
        <div className={styles.rightColumn}>
          <h1 className={styles.heading}>
            ANALYST
          </h1>
          <div className={styles.rightText}>
            <p><span className={styles.whiteMedium}>I&apos;m Thu (Janis)</span> | Technical Business Analyst</p>
            <p className={styles.semiTransparent}>UEH University | Technology and Innovation</p>
            <p className={styles.semiTransparent}>Status: <span className={styles.highlightText}>Open for Internships (May 2026)</span></p>
            <p className={styles.semiTransparent}>Location: Ho Chi Minh City, VN</p>
          </div>
        </div>

      </div>
    </section>
  );
}
