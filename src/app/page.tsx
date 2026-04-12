"use client";

import React from "react";
import Link from "next/link";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <main className={styles.spaceVibe}>
      {/* Top Nav */}
      <nav className={styles.glassNav}>
        <Link href="/" className={styles.navItem}>
          <img src="/images/home.png" alt="Home" />
          <span>Home</span>
        </Link>
        <Link href="#account" className={styles.navItem}>
          <img src="/images/account.png" alt="Account" />
          <span>Account</span>
        </Link>
        <Link href="/work" className={styles.navItem}>
          <img src="/images/project.png" alt="Project" />
          <span>Project</span>
        </Link>
        <Link href="/gallery" className={styles.navItem}>
          <img src="/images/gallary.png" alt="Gallery" />
          <span>Gallery</span>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className={styles.mainHero}>
        <div className={styles.textSection}>
          <h1 className={styles.bogartText1}>JANIS LAND</h1>
          <h2 className={styles.bogartText2}>Business Analyst</h2>
          <div className={styles.glassIntro}>
            Passionate about digital transformation and optimizing workflows. 
            Unique expertise in data systems, business logic, and creating seamless bridges 
            between technical and business teams.
          </div>
        </div>
        
        <div className={styles.imageSection}>
          <div className={styles.glassFrame}>
            <img src="/images/avt.png" alt="Janis Thu Avatar" />
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className={styles.toolsRow}>
        <h3>Tools & Technologies</h3>
        <div className={styles.glassTray}>
          <div className={styles.iconWrapper}>
            <img src="/images/figma.png" alt="Figma" />
            <span>Figma</span>
          </div>
          <div className={styles.iconWrapper}>
            <img src="/images/sql.png" alt="SQL" />
            <span>SQL</span>
          </div>
          <div className={styles.iconWrapper}>
            <img src="/images/draw.io.png" alt="Draw.io" />
            <span>Draw.io</span>
          </div>
          <div className={styles.iconWrapper}>
            <img src="/images/python.png" alt="Python" />
            <span>Python</span>
          </div>
          <div className={styles.iconWrapper}>
            <img src="/images/microsoft.png" alt="Microsoft" />
            <span>Microsoft</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactRow}>
        <h3>Contact Me</h3>
        <div className={styles.glassTray}>
          <Link href="https://linkedin.com" target="_blank" className={styles.iconWrapper}>
            <img src="/images/Likedin.png" alt="LinkedIn" />
            <span>LinkedIn</span>
          </Link>
          <Link href="https://github.com/tranthingocthuolv1234-cmyk" target="_blank" className={styles.iconWrapper}>
            <img src="/images/github.png" alt="GitHub" />
            <span>GitHub</span>
          </Link>
          <Link href="mailto:hello@ngocthu.space" className={styles.iconWrapper}>
            <img src="/images/gmaiil.png" alt="Gmail" />
            <span>Gmail</span>
          </Link>
          <Link href="tel:+84" className={styles.iconWrapper}>
            <img src="/images/phone.png" alt="Phone" />
            <span>Phone</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
