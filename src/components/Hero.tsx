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
              Analytical. Systematic. Versatile. Engineering<br/>
              efficiency through optimized processes and data<br/>
              architecture
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
              I&apos;m Thư (Janis) | Technical Business Analyst
            </p>
            <p>
              UEH University | Technology and Innovation
            </p>
            <p>
              Location: Ho Chi Minh City, VN
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
