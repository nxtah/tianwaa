"use client";

import React, { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { WhatsAppFAB } from "@/components/ui/WhatsAppFAB";
import { ArrowRight, Check } from "lucide-react";
import { Toast } from "@/components/ui/Toast";

export default function DaftarPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    nama: "",
    email: "",
    whatsapp: "",
    usia: "",
    // Step 2
    program: "",
    level: "",
    // Step 3
    jadwal: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (step === 1 && (!formData.nama || !formData.email || !formData.whatsapp)) {
      setToast({ type: "error", message: "Lengkapi semua field terlebih dahulu" });
      return;
    }
    if (step === 2 && (!formData.program || !formData.level)) {
      setToast({ type: "error", message: "Lengkapi semua field terlebih dahulu" });
      return;
    }
    setStep(step + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.jadwal) {
      setToast({ type: "error", message: "Pilih jadwal pembelajaran" });
      return;
    }

    setIsSubmitting(true);
    try {
      const message = `Halo, saya ingin mendaftar untuk program Tianwaa.\n\n*Data Diri:*\nNama: ${formData.nama}\nEmail: ${formData.email}\nNo WhatsApp: ${formData.whatsapp}\nUsia: ${formData.usia}\n\n*Program:*\nProgram: ${formData.program}\nLevel: ${formData.level}\n\n*Jadwal:*\nPilihan Jadwal: ${formData.jadwal}`;

      const waUrl = `https://wa.me/62812345678?text=${encodeURIComponent(message)}`;
      window.open(waUrl, "_blank");

      setToast({
        type: "success",
        message: "Pendaftaran berhasil! Silakan lanjutkan via WhatsApp",
      });
    } catch (error) {
      setToast({ type: "error", message: "Gagal mengirim pendaftaran" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { number: 1, title: "Data Diri", description: "Informasi pribadi kamu" },
    { number: 2, title: "Pilih Program", description: "Tentukan program pembelajaran" },
    {
      number: 3,
      title: "Jadwal",
      description: "Atur waktu belajar kamu",
    },
  ];

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-80 bg-gradient-to-br from-bg-dark via-[#1a2418] to-primary/20 pt-32 pb-16 flex items-center">
        <div className="container text-center z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Daftar Sekarang
          </h1>
          <p className="text-lg text-text-light">
            Mulai perjalanan belajar Mandarin kamu bersama Tianwaa
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="container max-w-3xl">
          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-8">
              {steps.map((s, i) => (
                <div
                  key={s.number}
                  className="flex items-center flex-1"
                  onClick={() => s.number <= step && setStep(s.number)}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all cursor-pointer ${
                      step >= s.number
                        ? "bg-primary text-white"
                        : "bg-surface-alt text-text-muted border-2 border-text-light"
                    }`}
                  >
                    {step > s.number ? <Check size={24} /> : s.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 mx-3 transition-colors ${
                        step > s.number ? "bg-primary" : "bg-surface-alt"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step Info */}
            <div className="text-center">
              <h2 className="text-2xl font-display font-bold text-text mb-1">
                {steps[step - 1].title}
              </h2>
              <p className="text-text-muted">{steps[step - 1].description}</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-surface rounded-xl p-8 border border-primary-light/20">
            {toast && <Toast type={toast.type} message={toast.message} />}

            {/* Step 1: Data Diri */}
            {step === 1 && (
              <div className="space-y-6 animate-slideUp">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none"
                    placeholder="Nama kamu"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    No WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none"
                    placeholder="+62812345678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Usia
                  </label>
                  <input
                    type="number"
                    name="usia"
                    value={formData.usia}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none"
                    placeholder="Umur kamu"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Program & Level */}
            {step === 2 && (
              <div className="space-y-6 animate-slideUp">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Pilih Program *
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none"
                  >
                    <option value="">Pilih program...</option>
                    <option value="anak">Mandarin untuk Anak (4-12 tahun)</option>
                    <option value="remaja">Mandarin untuk Remaja & Dewasa</option>
                    <option value="bisnis">Mandarin Bisnis & Profesional</option>
                    <option value="hsk">Persiapan HSK</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Level *
                  </label>
                  <select
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none"
                  >
                    <option value="">Pilih level...</option>
                    <option value="pemula">Pemula (A1)</option>
                    <option value="dasar">Dasar (A2)</option>
                    <option value="menengah">Menengah (B1)</option>
                    <option value="lanjutan">Lanjutan (B2)</option>
                    <option value="mahir">Mahir (C1)</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 3: Jadwal */}
            {step === 3 && (
              <div className="space-y-6 animate-slideUp">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Pilih Waktu Pembelajaran *
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: "pagi", label: "Pagi (08:00 - 12:00)" },
                      { value: "siang", label: "Siang (12:00 - 16:00)" },
                      { value: "malam", label: "Malam (16:00 - 20:00)" },
                      { value: "fleksibel", label: "Fleksibel (sesuai kebutuhan)" },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-3 p-4 border-2 border-text-light rounded-lg hover:border-primary cursor-pointer transition-colors"
                      >
                        <input
                          type="radio"
                          name="jadwal"
                          value={option.value}
                          checked={formData.jadwal === option.value}
                          onChange={handleChange}
                          className="w-5 h-5"
                        />
                        <span className="font-medium text-text">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-primary/10 rounded-lg p-6 border border-primary/30">
                  <h3 className="font-semibold text-text mb-3">Ringkasan Pendaftaran</h3>
                  <div className="space-y-2 text-sm text-text-muted">
                    <p>
                      <span className="font-medium text-text">Nama:</span>{" "}
                      {formData.nama}
                    </p>
                    <p>
                      <span className="font-medium text-text">Email:</span>{" "}
                      {formData.email}
                    </p>
                    <p>
                      <span className="font-medium text-text">Program:</span>{" "}
                      {formData.program}
                    </p>
                    <p>
                      <span className="font-medium text-text">Level:</span>{" "}
                      {formData.level}
                    </p>
                    <p>
                      <span className="font-medium text-text">Jadwal:</span>{" "}
                      {formData.jadwal}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="flex-1 btn btn-secondary"
                >
                  ← Kembali
                </button>
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 btn btn-primary flex items-center justify-center gap-2"
                >
                  Lanjut
                  <ArrowRight size={20} />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 btn btn-primary flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Mengirim..." : "Daftar Sekarang"}
                  <ArrowRight size={20} />
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
