"use client";

import styles from "./HowItWorksSection.module.css";
import Link from "next/link";

const steps = [
  {
    number: "1",
    title: "Daftar Akun",
    description: "Buat akun gratis dan pilih program pembelajaran yang sesuai dengan kebutuhan Anda.",
    icon: "📝",
  },
  {
    number: "2",
    title: "Konsultasi",
    description: "Konsultasi gratis dengan guru untuk assessment level dan rekomendasi program.",
    icon: "💬",
  },
  {
    number: "3",
    title: "Belajar",
    description: "Ikuti kelas reguler dengan native speaker berpengalaman dan metode interaktif.",
    icon: "📚",
  },
  {
    number: "4",
    title: "Sertifikat",
    description: "Dapatkan sertifikat resmi HSK setelah menyelesaikan program dengan tuntas.",
    icon: "🏆",
  },
];

export default function HowItWorksSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Proses Pembelajaran</span>
          <h2 className={styles.title}>Cara Memulai with Tianwaa</h2>
        </div>

        <div className={styles.stepsContainer}>
          <div className={styles.connector} />
          
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepNumber}>
                <span className={styles.stepNumberInner}>{step.number}</span>
                <span className={styles.stepIcon}>{step.icon}</span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaContainer}>
          <Link href="/daftar" className={styles.ctaButton}>
            Mulai Perjalanan Anda
            <span className={styles.ctaArrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}