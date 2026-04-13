"use client";

import React from "react";
import Link from "next/link";
import styles from "./home.module.scss";

const navItems = [
  { href: "#", icon: "/images/home.png", label: "gateway" },
  { href: "#", icon: "/images/account.png", label: "janis.md" },
  { href: "#", icon: "/images/project.png", label: "Logic Lab" },
  { href: "#", icon: "/images/gallary.png", label: "Satellite View" },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.glassOverlay} />

      <header className={styles.navWrap}>
        <nav className={styles.navPill} aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className={styles.navItem}>
              <img src={item.icon} alt="" aria-hidden="true" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </header>

      <section className={styles.hero}>
        <p className={styles.bgText}>BUSINESS ANALYST</p>

        <div className={styles.contentLayer}>
          <article className={styles.intro}>
            <p>
              Defining my professional identity through three words: <strong>Analytical</strong>,
              <strong> Systematic</strong>, and <strong>Versatile</strong>. My mission is to engineer
              efficiency by refining business processes and architecting data systems that drive
              measurable impact.
            </p>
          </article>

          <figure className={styles.photoWrap}>
            <img src="/images/image_4.jpg" alt="Thu Janis portrait" className={styles.profileImg} />
          </figure>

          <aside className={styles.status}>
            <p>I&apos;m Thu (Janis) | Technical Business Analyst</p>
            <p>UEH University | Technology and Innovation</p>
            <p>Status: Open for Internships (May 2026)</p>
            <p>Location: Ho Chi Minh City, VN</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
