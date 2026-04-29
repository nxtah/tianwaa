import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { WhatsAppFAB } from "@/components/ui/WhatsAppFAB";

const timeline = [
  {
    year: "2015",
    title: "Dimulai",
    desc: "Tianwaa didirikan dengan visi mengubah cara orang belajar Mandarin",
  },
  {
    year: "2018",
    title: "Pertumbuhan",
    desc: "Mencapai 50.000 siswa dan ekspansi ke 15 negara",
  },
  {
    year: "2021",
    title: "Inovasi DTS",
    desc: "Meluncurkan Dual Teacher System untuk hasil pembelajaran optimal",
  },
  {
    year: "2024",
    title: "Hari Ini",
    desc: "200.000+ siswa di 30+ negara dengan rating kepuasan 98%",
  },
];

const benefits = [
  {
    icon: "📈",
    title: "Peluang Karir Global",
    desc: "Mandarin adalah bahasa bisnis terpenting dengan 1+ miliar penutur dan akses ke pasar ekonomi terbesar di dunia.",
  },
  {
    icon: "🧠",
    title: "Pengembangan Kognitif",
    desc: "Belajar Mandarin meningkatkan kemampuan kognitif, memori, dan kreativitas otak secara signifikan.",
  },
  {
    icon: "🌍",
    title: "Koneksi Global",
    desc: "Bergabunglah dengan komunitas global dan terhubung dengan jutaan penutur Mandarin di seluruh dunia.",
  },
  {
    icon: "📚",
    title: "Akses Budaya",
    desc: "Nikmati seni, film, musik, dan literatur Cina dalam bahasa aslinya dengan pemahaman yang lebih mendalam.",
  },
];

export default function TentangPage() {
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
            <span className={styles.badge}>Tentang Tianwaa</span>
            <h1 className={styles.title}>
              Misi Kami: Membuat <span className={styles.highlight}>Belajar Mandarin</span> Lebih Mudah
            </h1>
            <p className={styles.subtitle}>
              Pelajari perjalanan kami dalam mengubah cara orang belajar bahasa Mandarin di seluruh dunia.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.mvSection}>
        <div className={styles.container}>
          <div className={styles.mvGrid}>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}>🎯</div>
              <h2 className={styles.mvTitle}>Misi Kami</h2>
              <p className={styles.mvDesc}>
                Membuat pembelajaran Mandarin menjadi mudah, menyenangkan, dan terjangkau bagi semua kalangan di seluruh dunia dengan metode pembelajaran inovatif dan guru-guru berpengalaman.
              </p>
            </div>
            
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}>👁️</div>
              <h2 className={styles.mvTitle}>Visi Kami</h2>
              <p className={styles.mvDesc}>
                Menjadi platform pembelajaran Mandarin terdepan yang menghubungkan ribuan siswa dengan guru native speaker dan mentor terbaik untuk membuka peluang karir dan budaya global.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mandarin */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.benefitsHeader}>
            <span className={styles.benefitsBadge}>Manfaat</span>
            <h2 className={styles.benefitsTitle}>Mengapa Belajar Mandarin?</h2>
            <p className={styles.benefitsSubtitle}>
              Pelajari manfaat mempelajari bahasa Mandarin untuk masa depan Anda.
            </p>
          </div>
          
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDesc}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timelineSection}>
        <div className={styles.container}>
          <div className={styles.timelineHeader}>
            <span className={styles.timelineBadge}>Perjalanan</span>
            <h2 className={styles.timelineTitle}>Sejarah Tianwaa</h2>
          </div>
          
          <div className={styles.timeline}>
            {timeline.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineDot}>
                  <span>{index + 1}</span>
                </div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineYear}>{item.year}</span>
                  <h3 className={styles.timelineItemTitle}>{item.title}</h3>
                  <p className={styles.timelineDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>200K+</span>
              <span className={styles.statLabel}>Siswa Aktif</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>30+</span>
              <span className={styles.statLabel}>Negara</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>Kepuasan</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Tahun Pengalaman</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Siap Bergabung dengan Kami?
            </h2>
            <p className={styles.ctaDescription}>
              Mulai perjalanan belajar Mandarin Anda bersama Tianwaa hari ini.
            </p>
            <Link href="/daftar" className={styles.ctaButton}>
              Daftar Sekarang
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