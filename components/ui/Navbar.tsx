"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/program", label: "Program" },
  { href: "/blog", label: "Blog" },
  { href: "/tentang", label: "Tentang" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>华</div>
          <span className={styles.logoText}>Tianwaa</span>
        </Link>

        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="/daftar" className={styles.cta}>
          Daftar Gratis
        </Link>

        <button
          className={`${styles.mobileMenuButton} ${mobileMenuOpen ? styles.menuIconOpen : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={styles.menuIcon} />
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.label}
            <span className={styles.mobileArrow}>→</span>
          </Link>
        ))}
        <Link
          href="/daftar"
          className={styles.mobileCta}
          onClick={() => setMobileMenuOpen(false)}
        >
          Daftar Gratis Sekarang
        </Link>
      </div>
    </nav>
  );
}