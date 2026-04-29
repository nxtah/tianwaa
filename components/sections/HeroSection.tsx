"use client";

import styles from "./HeroSection.module.css";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
        <div className={styles.gridPattern} />
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Text Column */}
          <div className={styles.textColumn}>
            <div className={styles.badge}>
              <div className={styles.badgeIcon}>✓</div>
              <span>Platform Pembelajaran Mandarin Terpercaya</span>
            </div>
            
            <h1 className={styles.headline}>
              Kuasai Bahasa Mandarin,{' '}
              <span className={styles.headlineAccent}>Buka Peluang Baru</span>
            </h1>
            
            <p className={styles.subheadline}>
              Bersama Tianwaa, raih fluency bahasa Mandarin dengan metode pembelajaran interaktif dari native speaker berpengalaman. 200.000+ siswa di 30+ negara telah membuktikan keektifan kami.
            </p>
            
            <div className={styles.ctaGroup}>
              <Link href="/daftar" className={styles.ctaPrimary}>
                Mulai Belajar Gratis
                <span className={styles.arrowIcon}>→</span>
              </Link>
              <Link href="/program" className={styles.ctaSecondary}>
                Lihat Program
              </Link>
            </div>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>200K+</div>
                <div className={styles.statLabel}>Siswa Aktif</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>98%</div>
                <div className={styles.statLabel}>Tingkat Kepuasan</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>30+</div>
                <div className={styles.statLabel}>Negara</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>Tahun Pengalaman</div>
              </div>
            </div>
          </div>
          
          {/* Visual Column */}
          <div className={styles.visualColumn}>
            <div className={styles.visualWrapper}>
              <div className={styles.mainCard}>
                <div className={styles.cardPattern} />
                <div className={styles.cardContent}>
                  <div className={styles.cardIcon}>华</div>
                  <div className={styles.cardTitle}>Belajar Mandarin</div>
                  <div className={styles.cardSubtitle}>Sekarang juga</div>
                </div>
              </div>
              
              {/* Floating Badges */}
              <div className={styles.floatingElements}>
                <div className={`${styles.floatBadge} ${styles.floatBadge1}`}>
                  <span>🎯</span>
                  <span>Native Speaker</span>
                </div>
                <div className={`${styles.floatBadge} ${styles.floatBadge2}`}>
                  <span>📚</span>
                  <span>HSK Ready</span>
                </div>
                <div className={`${styles.floatBadge} ${styles.floatBadge3}`}>
                  <div className={styles.floatBadgeIcon}>✓</div>
                  <span>Sertifikat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}