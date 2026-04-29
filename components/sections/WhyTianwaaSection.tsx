"use client";

import styles from "./WhyTianwaaSection.module.css";
import content from "@/data/content.json";

const features = content.why_us.map((item, index) => ({ ...item, number: index + 1 }));

export default function WhyTianwaaSection() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <div className={styles.orb} />
      </div>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Keunggulan Kami</span>
          <h2 className={styles.title}>Mengapa Memilih Tianwaa?</h2>
          <p className={styles.description}>
            Kami menyediakan pengalaman belajar bahasa Mandarin terbaik dengan metode yang telah terbukti efektif untuk ribuan siswa di seluruh dunia.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.cardNumber}>0{feature.number}</span>
              <div className={styles.cardIcon}>
                <span>{feature.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}