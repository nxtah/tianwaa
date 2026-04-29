"use client";

import styles from "./TestimonialsSection.module.css";
import content from "@/data/content.json";

const testimonials = content.testimonials.slice(0, 3);

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <div className={styles.quotePattern}>"</div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Testimoni</span>
          <h2 className={styles.title}>Apa Kata Siswa Kami?</h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={styles.card}>
              <span className={styles.quoteIcon}>"</span>
              
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={styles.star}>★</span>
                ))}
              </div>
              
              <p className={styles.text}>"{testimonial.quote}"</p>
              
              <div className={styles.authorInfo}>
                <div className={styles.avatar}>
                  {testimonial.name.charAt(0)}
                </div>
                <div className={styles.authorDetails}>
                  <span className={styles.authorName}>{testimonial.name}</span>
                  <span className={styles.authorRole}>{testimonial.program}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {[0, 1, 2].map((i) => (
            <button 
              key={i} 
              className={`${styles.dot} ${i === 0 ? styles.dotActive : ''}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}