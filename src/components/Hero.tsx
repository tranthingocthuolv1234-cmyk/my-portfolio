import React from 'react';
import styles from '../app/home.module.scss';
import { InfoCard } from './InfoCard';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroPanel}>
        <div className={styles.wordLayer}>
          <p className={styles.wordLeft}>BUSINESS</p>
          <figure className={styles.photoWrap}>
            <img src="/images/avt.png" alt="Thu Janis portrait" className={styles.profileImg} />
          </figure>
          <p className={styles.wordRight}>ANALYST</p>
        </div>

        <div className={styles.textRow}>
          <article className={styles.intro}>
            <p>
              Defining my professional identity through three words: <strong>Analytical</strong>,
              <strong> Systematic</strong>, and <strong>Versatile</strong>. My mission is to
              engineer efficiency by refining business processes and architecting data systems
              that drive measurable impact.
            </p>
          </article>

          <InfoCard />
        </div>
      </div>
    </section>
  );
}
