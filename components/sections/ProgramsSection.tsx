"use client";

import styles from "./ProgramsSection.module.css";
import content from "@/data/content.json";
import Link from "next/link";

const programs = content.programs.slice(0, 3);

export default function ProgramsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.bgDecor}>
        <div className={styles.bgLine1} />
        <div className={styles.bgLine2} />
      </div>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Program Kami</span>
          <h2 className={styles.title}>Pilih Program Sesuai Level Anda</h2>
          <p className={styles.description}>
            Kurikulum terstruktur yang dirancang khusus untuk membantu Anda menguasai bahasa Mandarin dengan efektif.
          </p>
        </div>

        <div className={styles.grid}>
          {programs.map((program, index) => (
            <div 
              key={program.id} 
              className={`${styles.card} ${program.featured ? styles.cardFeatured : ''}`}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>{program.icon}</div>
                <h3 className={styles.cardName}>{program.title.split('(')[0].trim()}</h3>
                <p className={styles.cardLevel}>{program.duration}</p>
              </div>
              
              <div className={styles.cardBody}>
                <ul className={styles.features}>
                  {program.highlights.slice(0, 4).map((feature, i) => (
                    <li key={i} className={styles.feature}>
                      <span className={styles.featureIcon}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className={styles.price}>
                  {"Hubungi Kami"}
                  <span className={styles.pricePeriod}>/bulan</span>
                </div>
                
                <Link href="/daftar" className={styles.cta}>
                  Daftar Sekarang
                  <span className={styles.ctaArrow}>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}