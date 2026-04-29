"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { WhatsAppFAB } from "@/components/ui/WhatsAppFAB";
import content from "@/data/content.json";

const categories = [...new Set(content.blog.map((p) => p.category))];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = content.blog.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.orb1} />
          <div className={styles.orb2} />
          <div className={styles.gridPattern} />
        </div>
        
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Blog & Artikel</span>
            <h1 className={styles.title}>
              Tips & Tricks <span className={styles.highlight}>Mandarin</span>
            </h1>
            <p className={styles.subtitle}>
              Pelajari strategi dan insights untuk mempercepat perjalanan belajar Mandarin Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className={styles.filterSection}>
        <div className={styles.container}>
          <div className={styles.filterWrapper}>
            <div className={styles.searchBox}>
              <span className={styles.searchIcon}>🔍</span>
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
            </div>
            
            <div className={styles.categories}>
              <button
                onClick={() => setSelectedCategory(null)}
                className={`${styles.categoryBtn} ${!selectedCategory ? styles.active : ''}`}
              >
                Semua
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`${styles.categoryBtn} ${selectedCategory === category ? styles.active : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className={styles.blogSection}>
        <div className={styles.container}>
          {filteredPosts.length === 0 ? (
            <div className={styles.emptyState}>
              <span className={styles.emptyIcon}>📭</span>
              <p>Tidak ada artikel yang ditemukan</p>
            </div>
          ) : (
            <div className={styles.blogGrid}>
              {filteredPosts.map((post) => (
                <article key={post.id} className={styles.blogCard}>
                  <div className={styles.cardImage}>
                    <div className={styles.imagePlaceholder}>
                      <span>📖</span>
                    </div>
                  </div>
                  
                  <div className={styles.cardContent}>
                    <div className={styles.cardMeta}>
                      <span className={styles.categoryTag}>{post.category}</span>
                      <span className={styles.date}>
                        {new Date(post.date).toLocaleDateString('id-ID', { 
                          day: 'numeric', 
                          month: 'short', 
                          year: 'numeric' 
                        })}
                      </span>
                    </div>
                    
                    <h3 className={styles.cardTitle}>{post.title}</h3>
                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                    
                    <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                      Baca Selengkapnya
                      <span>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Ingin belajar Mandarin lebih cepat?
            </h2>
            <p className={styles.ctaDescription}>
              Bergabung dengan program pembelajaran terbaik dari native speaker berpengalaman.
            </p>
            <Link href="/program" className={styles.ctaButton}>
              Lihat Program
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />
    </main>
  );
}