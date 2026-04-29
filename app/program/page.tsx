"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { WhatsAppFAB } from "@/components/ui/WhatsAppFAB";
import content from "@/data/content.json";

const programs = content.programs;

const faqs = [
  {
    q: "Apakah saya perlu pengetahuan Mandarin sebelumnya?",
    a: "Tidak, semua program kami terbuka untuk pemula hingga level advanced. Kami akan melakukan assessment untuk menentukan level yang sesuai dengan kemampuan Anda.",
  },
  {
    q: "Berapa lama program ini berlangsung?",
    a: "Durasi bervariasi dari 2-12 bulan tergantung program dan level Anda. Konsultasi gratis akan membantu menentukan durasi yang tepat.",
  },
  {
    q: "Apakah ada garansi uang kembali?",
    a: "Kami menawarkan jaminan kepuasan 100% atau uang kembali dalam 14 hari pertama setelah pendaftaran.",
  },
  {
    q: "Bisakah saya mengubah jadwal belajar?",
    a: "Ya, jadwal sangat fleksibel dan dapat disesuaikan kapan saja sesuai kebutuhan Anda.",
  },
];

export default function ProgramPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            <span className={styles.badge}>Program Kami</span>
            <h1 className={styles.title}>
              Pilih Program <span className={styles.highlight}>Pembelajaran</span> yang Tepat
            </h1>
            <p className={styles.subtitle}>
              Kurikulum terstruktur dengan metode terbaik untuk membantu Anda menguasai bahasa Mandarin dengan percaya diri.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className={styles.programsSection}>
        <div className={styles.container}>
          <div className={styles.programsGrid}>
            {programs.map((program, index) => (
              <article 
                key={program.id} 
                className={`${styles.programCard} ${program.featured ? styles.featured : ''}`}
              >
                {program.featured && (
                  <div className={styles.featuredBadge}>PILIHAN POPULER</div>
                )}
                
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>{program.icon}</div>
                  <span className={styles.tag}>{program.tag}</span>
                </div>
                
                <div className={styles.cardBody}>
                  <h3 className={styles.programTitle}>{program.title}</h3>
                  <p className={styles.programDescription}>{program.description}</p>
                  
                  <div className={styles.duration}>
                    <span className={styles.durationIcon}>⏱️</span>
                    <span>{program.duration}</span>
                  </div>
                  
                  <div className={styles.divider} />
                  
                  <div className={styles.highlights}>
                    <h4 className={styles.highlightsTitle}>Yang Akan Anda Pelajari:</h4>
                    <ul className={styles.highlightsList}>
                      {program.highlights.map((highlight, i) => (
                        <li key={i} className={styles.highlightItem}>
                          <span className={styles.checkIcon}>✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href="/daftar" className={styles.ctaButton}>
                    Daftar Sekarang
                    <span className={styles.ctaArrow}>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqHeader}>
            <span className={styles.faqBadge}>FAQ</span>
            <h2 className={styles.faqTitle}>Pertanyaan Umum</h2>
            <p className={styles.faqSubtitle}>
              Temukan jawaban untuk pertanyaan yang sering diajukan tentang program kami.
            </p>
          </div>
          
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`${styles.faqItem} ${openFaq === index ? styles.faqOpen : ''}`}
              >
                <button 
                  className={styles.faqQuestion}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{faq.q}</span>
                  <span className={styles.faqIcon}>{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className={styles.faqAnswer}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Masih Ragu? <span className={styles.ctaHighlight}>Konsultasi Gratis!</span>
            </h2>
            <p className={styles.ctaDescription}>
              Tim kami siap membantu Anda memilih program yang tepat. Jangan lewatkan kesempatan ini!
            </p>
            <Link href="/kontak" className={styles.ctaButtonSecondary}>
              Hubungi Kami
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