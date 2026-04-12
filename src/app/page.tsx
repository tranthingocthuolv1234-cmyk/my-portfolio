"use client";

import React from "react";
import Link from "next/link";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <main className={styles.container}>
      {/* Top Header */}
      <div className={styles.logoTitle}>JANIS LAND</div>
      
      <nav className={styles.topNav}>
        <Link href="/" className={styles.navItem}>
          <div className={styles.iconCircle}>
            <img src="/images/home.png" alt="Home" />
          </div>
          <span>Home</span>
        </Link>
        <Link href="#about" className={styles.navItem}>
          <div className={styles.iconCircle}>
            <img src="/images/account.png" alt="About me" />
          </div>
          <span>About me</span>
        </Link>
        <Link href="/work" className={styles.navItem}>
          <div className={styles.iconCircle}>
            <img src="/images/project.png" alt="Project" />
          </div>
          <span>Project</span>
        </Link>
        <Link href="/gallery" className={styles.navItem}>
          <div className={styles.iconCircle}>
            <img src="/images/gallary.png" alt="Gallary" />
          </div>
          <span>Gallary</span>
        </Link>
      </nav>

      {/* Hero Overlap Section */}
      <section className={styles.heroSection}>
        <div className={styles.overlapTitle}>
          <div className={styles.titleText}>BUSINESS</div>
          <div className={styles.avatarWrapper}>
            <img src="/images/avt.png" alt="Janis Thu Avatar" className={styles.avatar} />
          </div>
          <div className={styles.titleText}>ANALYST</div>
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.textLeft}>
            Defining my professional identity through three words: Analytical, Systematic, and Versatile. 
            My mission is to engineer efficiency by refining business processes and architecting 
            data systems that drive measurable impact.
          </div>
          <div className={styles.textRight}>
            I'm Thu (Janis) | Technical Business Analyst<br />
            UEH University | Technology and Innovation<br />
            Status: Open for Internships (May 2026)<br />
            Location: Ho Chi Minh City, VN
          </div>
        </div>
      </section>

      {/* Effect placeholder space */}
      <div className={styles.effectSpace}>
        Chỗ này để hiệu ứng đi
      </div>

      {/* My Work Section */}
      <section className={styles.myWorkSection}>
        <h2>My work</h2>
        <div className={styles.workGrid}>
          <div className={styles.workCard}>Dự án</div>
          <div className={styles.workCardTall}>Dự án</div>
          <div className={styles.workCard}>Dự án</div>
          <div className={styles.workCard}>Dự án</div>
          <div className={styles.workCard}>Dự án</div>
        </div>
      </section>

      <div className={styles.effectSpace}>
        Chỗ này để hiệu ứng đi
      </div>

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <div className={styles.timelineLine}></div>

        {/* Node 1: Skills */}
        <div className={styles.timelineNode}>
          <div className={styles.nodeDot}></div>
          <div className={styles.nodeContent}>
            <div className={styles.nodeLabel}>Skills</div>
            <div className={styles.nodeData}>
              <div className={styles.grid2}>
                <p>Process Modeling (BPMN 2.0)</p>
                <p>Requirements Engineering</p>
                <p>User Stories & Mockup Design</p>
                <p>System Thinking</p>
              </div>
            </div>
          </div>
        </div>

        {/* Node 2: Tools */}
        <div className={styles.timelineNode}>
          <div className={styles.nodeDot}></div>
          <div className={styles.nodeContent}>
            <div className={styles.nodeLabel}>Tools</div>
            <div className={styles.toolsIcons}>
              <img src="/images/figma.png" alt="Figma" />
              <img src="/images/sql.png" alt="SQL" className={styles.medIcon} />
              <img src="/images/draw.io.png" alt="Draw.io" className={styles.wideIcon} />
              <img src="/images/python.png" alt="Python" />
              <img src="/images/microsoft.png" alt="Microsoft" />
            </div>
          </div>
        </div>

        {/* Node 3: Certifications */}
        <div className={styles.timelineNode}>
          <div className={styles.nodeDot}></div>
          <div className={styles.nodeContent}>
            <div className={styles.nodeLabel}>Certifications</div>
            <div className={styles.nodeData}>
              <div className={styles.grid1}>
                <p><a>Crash Course on Python</a></p>
                <p><a>Google Project Management Professional</a></p>
                <p>Youth Digital Citizen Challenge (YDCC) 2025</p>
                <p>Microsoft Office Specialist: Associate</p>
                <p>Associate Data Analyst in SQL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
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
    </main>
  );
}
