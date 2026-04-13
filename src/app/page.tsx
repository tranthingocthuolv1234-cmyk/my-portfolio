"use client";

import React from "react";
import styles from "./home.module.scss";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.glassOverlay} />
      <Navbar />
      <Hero />
    </main>
  );
}
