"use client";

import styles from "./BlogSection.module.css";
import content from "@/data/content.json";
import Link from "next/link";

const articles = content.blog.slice(0, 3);

export default function BlogSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Blog & Artikel</span>
          <h2 className={styles.title}>Artikel Pembelajaran Terbaru</h2>
        </div>

        <div className={styles.grid}>
          {articles.map((article) => (
            <article key={article.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <span className={styles.imageIcon}>📖</span>
              </div>
              
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.category}>{article.category}</span>
                  <span>{new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>
                <h3 className={styles.cardTitle}>{article.title}</h3>
                <p className={styles.excerpt}>{article.excerpt}</p>
                <Link href={`/blog/${article.slug}`} className={styles.readMore}>
                  Baca Selengkapnya →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}