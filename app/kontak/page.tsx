"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { WhatsAppFAB } from "@/components/ui/WhatsAppFAB";

const contactInfo = [
  {
    icon: "📧",
    title: "Email",
    value: "hello@tianwaa.com",
    href: "mailto:hello@tianwaa.com",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    value: "+62 812 3456 78",
    href: "https://wa.me/62812345678",
  },
  {
    icon: "📍",
    title: "Alamat",
    value: "Jakarta, Indonesia",
    href: null,
  },
  {
    icon: "🕐",
    title: "Jam Operasional",
    value: "Senin - Minggu: 08:00 - 20:00",
    href: null,
  },
];

const programs = [
  { value: "", label: "Pilih program..." },
  { value: "anak", label: "Mandarin untuk Anak" },
  { value: "remaja", label: "Mandarin Remaja & Dewasa" },
  { value: "bisnis", label: "Mandarin Bisnis" },
  { value: "hsk", label: "Persiapan HSK" },
];

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    program: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const message = `Halo Tianwaa!\n\nNama: ${formData.name}\nEmail: ${formData.email}\nNo WhatsApp: ${formData.whatsapp}\nProgram Diminati: ${formData.program}\n\nPesan:\n${formData.message}`;
      const waUrl = `https://wa.me/62812345678?text=${encodeURIComponent(message)}`;
      window.open(waUrl, "_blank");

      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        program: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <span className={styles.badge}>Hubungi Kami</span>
            <h1 className={styles.title}>
              Punya <span className={styles.highlight}>Pertanyaan?</span>
            </h1>
            <p className={styles.subtitle}>
              Tim kami siap membantu Anda. Jangan ragu untuk menghubungi kami kapan saja.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Contact Info */}
            <div className={styles.infoColumn}>
              <h2 className={styles.infoTitle}>Informasi Kontak</h2>
              
              <div className={styles.infoList}>
                {contactInfo.map((info, index) => (
                  <div key={index} className={styles.infoCard}>
                    <div className={styles.infoIcon}>{info.icon}</div>
                    <div className={styles.infoContent}>
                      <span className={styles.infoLabel}>{info.title}</span>
                      {info.href ? (
                        <a href={info.href} className={styles.infoValue}>
                          {info.value}
                        </a>
                      ) : (
                        <span className={styles.infoValue}>{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formColumn}>
              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Kirim Pesan</h2>
                
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Nama Lengkap</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={styles.input}
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={styles.input}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>No WhatsApp</label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        required
                        className={styles.input}
                        placeholder="+62812345678"
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Program Diminati</label>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        className={styles.select}
                      >
                        {programs.map((prog) => (
                          <option key={prog.value} value={prog.value}>
                            {prog.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Pesan</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={styles.textarea}
                      placeholder="Tulis pesan Anda di sini..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={styles.submitBtn}
                  >
                    <span>{isSubmitting ? "Mengirim..." : "Kirim Pesan"}</span>
                    <span>→</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Decorative */}
      <section className={styles.mapSection}>
        <div className={styles.container}>
          <div className={styles.mapCard}>
            <div className={styles.mapPlaceholder}>
              <span>🗺️</span>
              <p>Lokasi Kami di Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />
    </main>
  );
}