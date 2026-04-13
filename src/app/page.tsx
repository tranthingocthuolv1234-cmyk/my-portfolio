"use client";

import React from "react";
import Link from "next/link";
import styles from "./home.module.scss";

const navItems = [
  { href: "#", icon: "/images/home.png", label: "Home" },
  { href: "#", icon: "/images/account.png", label: "About me" },
  { href: "#", icon: "/images/project.png", label: "Project" },
  { href: "#", icon: "/images/gallary.png", label: "Gallary" },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.glassOverlay} />

      <section className={styles.hero}>
        <div className={styles.heroPanel}>
          <h1 className={styles.title}>JANIS LAND</h1>

          <nav className={styles.panelNav} aria-label="Primary">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className={styles.panelNavItem}>
                <span className={styles.panelIconCircle}>
                  <img src={item.icon} alt="" aria-hidden="true" />
                </span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

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

            <aside className={styles.status}>
              <p>I&apos;m Thu (Janis) | Technical Business Analyst</p>
              <p>UEH University | Technology and Innovation</p>
              <p>Status: Open for Internships (May 2026)</p>
              <p>Location: Ho Chi Minh City, VN</p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
