"use client";

import React, { useState, useEffect } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { readContent, updateSection } from "@/lib/content-client";
import { Save, RotateCcw } from "lucide-react";
import { Toast } from "@/components/ui/Toast";

interface HeroData {
  headline: string;
  subheadline: string;
  cta_primary: { label: string; href: string };
  cta_secondary: { label: string; href: string };
  stats: Array<{ value: string; label: string }>;
}

export default function AdminHeroPage() {
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const [originalData, setOriginalData] = useState<HeroData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    loadHeroData();
  }, []);

  const loadHeroData = async () => {
    try {
      const content = await readContent();
      setHeroData(content.hero);
      setOriginalData(content.hero);
    } catch (error) {
      console.error("Error loading hero data:", error);
      setToast({ type: "error", message: "Gagal memuat data hero" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    if (!heroData) return;

    setIsSaving(true);
    try {
      await updateSection("hero", heroData);
      setOriginalData(heroData);
      setToast({ type: "success", message: "Hero section berhasil diperbarui" });
    } catch (error) {
      console.error("Error saving hero data:", error);
      setToast({ type: "error", message: "Gagal menyimpan perubahan" });
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = () => {
    setHeroData(originalData);
  };

  if (isLoading || !heroData) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-text-muted">Loading...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div>
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-text mb-2">
            Edit Hero Section
          </h1>
          <p className="text-text-muted">
            Customize the main hero section yang tampil di halaman utama
          </p>
        </div>

        {/* Toast Notification */}
        {toast && <Toast type={toast.type} message={toast.message} />}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Headline */}
            <div className="bg-surface rounded-xl p-6 border border-primary-light/20">
              <label className="block text-sm font-semibold text-text mb-2">
                Headline Utama
              </label>
              <textarea
                value={heroData.headline}
                onChange={(e) =>
                  setHeroData({ ...heroData, headline: e.target.value })
                }
                rows={3}
                className="w-full px-4 py-3 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none"
              />
            </div>

            {/* Subheadline */}
            <div className="bg-surface rounded-xl p-6 border border-primary-light/20">
              <label className="block text-sm font-semibold text-text mb-2">
                Subheadline
              </label>
              <textarea
                value={heroData.subheadline}
                onChange={(e) =>
                  setHeroData({ ...heroData, subheadline: e.target.value })
                }
                rows={3}
                className="w-full px-4 py-3 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none"
              />
            </div>

            {/* CTA Buttons */}
            <div className="bg-surface rounded-xl p-6 border border-primary-light/20">
              <h3 className="font-semibold text-text mb-4">Tombol CTA</h3>

              <div className="space-y-4">
                {/* Primary CTA */}
                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    CTA Utama - Label
                  </label>
                  <input
                    type="text"
                    value={heroData.cta_primary.label}
                    onChange={(e) =>
                      setHeroData({
                        ...heroData,
                        cta_primary: {
                          ...heroData.cta_primary,
                          label: e.target.value,
                        },
                      })
                    }
                    className="w-full px-4 py-2 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    CTA Utama - Link
                  </label>
                  <input
                    type="text"
                    value={heroData.cta_primary.href}
                    onChange={(e) =>
                      setHeroData({
                        ...heroData,
                        cta_primary: {
                          ...heroData.cta_primary,
                          href: e.target.value,
                        },
                      })
                    }
                    className="w-full px-4 py-2 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>

                {/* Secondary CTA */}
                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    CTA Sekunder - Label
                  </label>
                  <input
                    type="text"
                    value={heroData.cta_secondary.label}
                    onChange={(e) =>
                      setHeroData({
                        ...heroData,
                        cta_secondary: {
                          ...heroData.cta_secondary,
                          label: e.target.value,
                        },
                      })
                    }
                    className="w-full px-4 py-2 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    CTA Sekunder - Link
                  </label>
                  <input
                    type="text"
                    value={heroData.cta_secondary.href}
                    onChange={(e) =>
                      setHeroData({
                        ...heroData,
                        cta_secondary: {
                          ...heroData.cta_secondary,
                          href: e.target.value,
                        },
                      })
                    }
                    className="w-full px-4 py-2 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-surface rounded-xl p-6 border border-primary-light/20">
              <h3 className="font-semibold text-text mb-4">Statistik</h3>

              <div className="space-y-4">
                {heroData.stats.map((stat, i) => (
                  <div key={i} className="p-4 border border-primary-light/20 rounded-lg">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-text-muted mb-1">
                          Value
                        </label>
                        <input
                          type="text"
                          value={stat.value}
                          onChange={(e) => {
                            const newStats = [...heroData.stats];
                            newStats[i].value = e.target.value;
                            setHeroData({ ...heroData, stats: newStats });
                          }}
                          className="w-full px-3 py-2 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-text-muted mb-1">
                          Label
                        </label>
                        <input
                          type="text"
                          value={stat.label}
                          onChange={(e) => {
                            const newStats = [...heroData.stats];
                            newStats[i].label = e.target.value;
                            setHeroData({ ...heroData, stats: newStats });
                          }}
                          className="w-full px-3 py-2 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="flex-1 btn btn-primary flex items-center justify-center gap-2 py-3"
              >
                <Save size={20} />
                {isSaving ? "Saving..." : "Simpan Perubahan"}
              </button>
              <button
                onClick={handleReset}
                disabled={isSaving}
                className="flex-1 btn btn-secondary flex items-center justify-center gap-2 py-3"
              >
                <RotateCcw size={20} />
                Reset
              </button>
            </div>
          </div>

          {/* Preview */}
          <div className="lg:col-span-1">
            <div className="bg-surface rounded-xl p-6 border border-primary-light/20 sticky top-4">
              <h3 className="font-semibold text-text mb-4">Preview</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-text-muted mb-2 uppercase">
                    Headline
                  </h4>
                  <p className="text-sm text-text font-display font-bold leading-tight">
                    {heroData.headline}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-text-muted mb-2 uppercase">
                    Subheadline
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {heroData.subheadline}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-text-muted mb-2 uppercase">
                    CTAs
                  </h4>
                  <div className="flex gap-2 flex-wrap">
                    <button className="btn btn-primary py-1 px-3 text-xs">
                      {heroData.cta_primary.label}
                    </button>
                    <button className="btn btn-secondary py-1 px-3 text-xs">
                      {heroData.cta_secondary.label}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
