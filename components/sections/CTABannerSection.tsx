"use client";

import styles from "./CTABannerSection.module.css";
import Link from "next/link";

export default function CTABannerSection() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.gridPattern} />
      </div>
      
      <div className={styles.container}>
        <div className={styles.badge}>
          <span>🎉</span>
          <span>Gratis Konsultasi</span>
        </div>
        
        <h2 className={styles.title}>
          Siap Memulai Perjalanan <br />
          <span className={styles.highlight}>Belajar Mandarin</span> Anda?
        </h2>
        
        <p className={styles.description}>
          Bergabunglah dengan 200.000+ siswa yang telahsuccessfully menguasai bahasa Mandarin. 
          Daftar sekarang dan mulai perjalanan Anda hari ini!
        </p>
        
        <div className={styles.buttons}>
          <Link href="/daftar" className={styles.btnPrimary}>
            Daftar Gratis Sekarang
            <span>→</span>
          </Link>
          <Link href="/kontak" className={styles.btnSecondary}>
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  );
}