"use client";

import React from "react";
import Link from "next/link";
import styles from "./home.module.scss";

const navItems = [
  { href: "/", icon: "/images/home.png", label: "Home" },
  { href: "#about", icon: "/images/account.png", label: "About me" },
  { href: "#my-work", icon: "/images/project.png", label: "Project" },
  { href: "/gallery", icon: "/images/gallary.png", label: "Gallary" },
];

const workCards = [
  { title: "Project 01", featured: false },
  { title: "Project 02", featured: true },
  { title: "Project 03", featured: false },
  { title: "Project 04", featured: false },
  { title: "Project 05", featured: false },
];

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.pageFrame}>
        <header className={styles.header}>
          <h1 className={styles.logoTitle}>JANIS LAND</h1>
          <nav className={styles.topNav}>
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className={styles.navItem}>
                <div className={styles.iconCircle}>
                  <img src={item.icon} alt={item.label} />
                </div>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </header>

        <section className={styles.heroSection} id="about">
          <div className={styles.heroVisual}>
            <div className={styles.heroOutline}>BUSINESS ANALYST</div>
            <div className={styles.avatarWrapper}>
              <img src="/images/image_4.jpg" alt="Janis Thu Avatar" className={styles.avatar} />
            </div>
          </div>

          <div className={styles.heroContent}>
            <div className={styles.textLeft}>
              Defining my professional identity through three words: analytical, systematic, and
              versatile. My mission is to engineer efficiency by refining business processes and
              architecting data systems that drive measurable impact.
            </div>
            <div className={styles.textRight}>
              I&apos;m Thu (Janis) | Technical Business Analyst
              <br />
              UEH University | Technology and Innovation
              <br />
              Status: Open for Internships (May 2026)
              <br />
              Location: Ho Chi Minh City, VN
            </div>
          </div>
        </section>

        <section className={styles.effectSection} aria-label="Decorative visual effect">
          <div className={styles.effectWave} />
          <div className={styles.effectOrb} />
          <div className={styles.effectWave} />
        </section>

        <section className={styles.myWorkSection} id="my-work">
          <h2>My work</h2>
          <div className={styles.workGrid}>
            {workCards.map((card) => (
              <Link
                href="/work"
                key={card.title}
                className={card.featured ? styles.workCardTall : styles.workCard}
              >
                <span>{card.title}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.timelineSection}>
          <div className={styles.timelineLine} />

          <div className={styles.timelineNode}>
            <div className={styles.nodeDot} />
            <div className={styles.nodeContent}>
              <div className={styles.nodeLabel}>Skills</div>
              <div className={styles.nodeData}>
                <div className={styles.grid2}>
                  <p>Process Modeling (BPMN 2.0)</p>
                  <p>Requirements Engineering</p>
                  <p>User Stories &amp; Mockup Design</p>
                  <p>System Thinking</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.timelineNode}>
            <div className={styles.nodeDot} />
            <div className={styles.nodeContent}>
              <div className={styles.nodeLabel}>Tools</div>
              <div className={styles.toolsIcons}>
                <img src="/images/figma.png" alt="Figma" />
                <img src="/images/sql.png" alt="SQL" />
                <img src="/images/draw.io.png" alt="Draw.io" className={styles.drawioIcon} />
                <img src="/images/python.png" alt="Python" />
                <img src="/images/microsoft.png" alt="Microsoft" />
              </div>
            </div>
          </div>

          <div className={styles.timelineNode}>
            <div className={styles.nodeDot} />
            <div className={styles.nodeContent}>
              <div className={styles.nodeLabel}>Certifications</div>
              <div className={styles.nodeData}>
                <div className={styles.grid1}>
                  <p>
                    <a href="#" aria-label="Crash Course on Python">
                      Crash Course on Python
                    </a>
                  </p>
                  <p>
                    <a href="#" aria-label="Google Project Management Professional">
                      Google Project Management Professional
                    </a>
                  </p>
                  <p>Youth Digital Citizen Challenge (YDCC) 2025</p>
                  <p>Microsoft Office Specialist: Associate</p>
                  <p>Associate Data Analyst in SQL</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.contactSection}>
          <h2>Contact me</h2>
          <div className={styles.contactPill}>
            <Link href="https://linkedin.com" target="_blank">
              <img src="/images/Likedin.png" alt="LinkedIn" />
            </Link>
            <Link href="https://github.com/tranthingocthuolv1234-cmyk" target="_blank">
              <img src="/images/github.png" alt="GitHub" />
            </Link>
            <Link href="mailto:hello@ngocthu.space">
              <img src="/images/gmaiil.png" alt="Gmail" />
            </Link>
            <Link href="tel:+84">
              <img src="/images/phone.png" alt="Phone" />
            </Link>
          </div>
        </section>
      </div>

      <div className={styles.starsLayer}>
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </main>
  );
}
