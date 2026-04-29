"use client";

import styles from "./GallerySection.module.css";

const galleryItems = [
  { emoji: "📖", label: "Belajar" },
  { emoji: "👥", label: "Komunitas" },
  { emoji: "🏆", label: "Prestasi" },
  { emoji: "🌍", label: "Global" },
];

export default function GallerySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Galeri</span>
          <h2 className={styles.title}>Momen Pembelajaran</h2>
        </div>

        <div className={styles.grid}>
          {galleryItems.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{item.emoji}</span>
                <span className={styles.label}>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}