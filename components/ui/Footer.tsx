import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>华</div>
              <span className={styles.logoText}>Tianwaa</span>
            </div>
            <p className={styles.brandDescription}>
              Platform pembelajaran bahasa Mandarin terpercaya dengan metode interaktif dan native speaker berpengalaman.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.social} aria-label="Instagram">📷</a>
              <a href="#" className={styles.social} aria-label="Facebook">📘</a>
              <a href="#" className={styles.social} aria-label="YouTube">▶️</a>
              <a href="#" className={styles.social} aria-label="TikTok">🎵</a>
            </div>
          </div>

          {/* Program */}
          <div className={styles.linkSection}>
            <h4 className={styles.sectionTitle}>Program</h4>
            <Link href="/program" className={styles.link}>Untuk Anak</Link>
            <Link href="/program" className={styles.link}>Untuk Dewasa</Link>
            <Link href="/program" className={styles.link}>Bisnis Mandarin</Link>
            <Link href="/program" className={styles.link}>Persiapan HSK</Link>
          </div>

          {/* Perusahaan */}
          <div className={styles.linkSection}>
            <h4 className={styles.sectionTitle}>Perusahaan</h4>
            <Link href="/tentang" className={styles.link}>Tentang Kami</Link>
            <Link href="/blog" className={styles.link}>Blog</Link>
            <Link href="/kontak" className={styles.link}>Kontak</Link>
            <a href="#" className={styles.link}>Karir</a>
          </div>

          {/* Dukungan */}
          <div className={styles.linkSection}>
            <h4 className={styles.sectionTitle}>Dukungan</h4>
            <a href="#" className={styles.link}>Pusat Bantuan</a>
            <a href="#" className={styles.link}>FAQ</a>
            <a href="#" className={styles.link}>Kebijakan Privasi</a>
            <a href="#" className={styles.link}>Syarat & Ketentuan</a>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Tianwaa. Semua hak dilindungi.
          </p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}