"use client";

import React, { useState, useEffect } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { readContent, updateSection } from "@/lib/content-client";
import { Save } from "lucide-react";
import { Toast } from "@/components/ui/Toast";

interface Settings {
  siteTitle: string;
  tagline: string;
  logoUrl: string;
  whatsappNumber: string;
  email: string;
  instagram: string;
  tiktok: string;
  youtube: string;
  maintenanceMode: boolean;
  metaTitle: string;
  metaDescription: string;
}

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const content = await readContent();
      setSettings(content.settings);
    } catch (error) {
      setToast({ type: "error", message: "Gagal memuat pengaturan" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    if (!settings) return;

    setIsSaving(true);
    try {
      await updateSection("settings", settings);
      setToast({ type: "success", message: "Pengaturan berhasil disimpan" });
    } catch (error) {
      setToast({ type: "error", message: "Gagal menyimpan pengaturan" });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading || !settings) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-text mb-2">
            Site Settings
          </h1>
          <p className="text-text-muted">Konfigurasi umum website</p>
        </div>

        {toast && <Toast type={toast.type} message={toast.message} />}

        <div className="max-w-2xl space-y-6">
          {/* Basic Info */}
          <div className="bg-surface rounded-xl p-6 border border-primary-light/20">
            <h3 className="font-semibold text-text mb-4">Informasi Dasar</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  Site Title
                </label>
                <input
                  type="text"
                  value={settings.siteTitle}
                  onChange={(e) =>
                    setSettings({ ...settings, siteTitle: e.target.value })
                  }
                  className="w-full px-4 py-2 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  Tagline
                </label>
                <input
                  type="text"
                  value={settings.tagline}
                  onChange={(e) =>
                    setSettings({ ...settings, tagline: e.target.value })
                  }
                  className="w-full px-4 py-2 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  Logo URL
                </label>
                <input
                  type="url"
                  value={settings.logoUrl}
                  onChange={(e) =>
                    setSettings({ ...settings, logoUrl: e.target.value })
                  }
                  className="w-full px-4 py-2 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-surface rounded-xl p-6 border border-primary-light/20">
            <h3 className="font-semibold text-text mb-4">Kontak</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={settings.email}
                  onChange={(e) =>
                    setSettings({ ...settings, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  value={settings.whatsappNumber}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      whatsappNumber: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none"
                  placeholder="+62812345678"
                />
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-surface rounded-xl p-6 border border-primary-light/20">
            <h3 className="font-semibold text-text mb-4">Social Media</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  Instagram
                </label>
                <input
                  type="text"
                  value={settings.instagram}
                  onChange={(e) =>
                    setSettings({ ...settings, instagram: e.target.value })
                  }
                  className="w-full px-4 py-2 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none"
                  placeholder="@tianwaaindonesia"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  TikTok
                </label>
                <input
                  type="text"
                  value={settings.tiktok}
                  onChange={(e) =>
                    setSettings({ ...settings, tiktok: e.target.value })
                  }
                  className="w-full px-4 py-2 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none"
                  placeholder="@tianwaa"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  YouTube
                </label>
                <input
                  type="text"
                  value={settings.youtube}
                  onChange={(e) =>
                    setSettings({ ...settings, youtube: e.target.value })
                  }
                  className="w-full px-4 py-2 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none"
                  placeholder="@TianwaaOfficial"
                />
              </div>
            </div>
          </div>

          {/* SEO */}
          <div className="bg-surface rounded-xl p-6 border border-primary-light/20">
            <h3 className="font-semibold text-text mb-4">SEO</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  Meta Title
                </label>
                <input
                  type="text"
                  value={settings.metaTitle}
                  onChange={(e) =>
                    setSettings({ ...settings, metaTitle: e.target.value })
                  }
                  className="w-full px-4 py-2 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  Meta Description
                </label>
                <textarea
                  value={settings.metaDescription}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      metaDescription: e.target.value,
                    })
                  }
                  rows={3}
                  className="w-full px-4 py-2 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Maintenance Mode */}
          <div className="bg-surface rounded-xl p-6 border border-primary-light/20">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={settings.maintenanceMode}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    maintenanceMode: e.target.checked,
                  })
                }
                className="w-5 h-5 rounded border-2 border-text-light"
              />
              <span className="text-sm font-medium text-text">
                Maintenance Mode
              </span>
            </label>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="btn btn-primary flex items-center gap-2 w-full justify-center py-3"
          >
            <Save size={20} />
            {isSaving ? "Saving..." : "Simpan Pengaturan"}
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}
