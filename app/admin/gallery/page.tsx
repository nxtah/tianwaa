"use client";

import React, { useState, useEffect } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { readContent, updateSection } from "@/lib/content-client";
import { Save, Plus, Trash2 } from "lucide-react";
import { Toast } from "@/components/ui/Toast";

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

export default function AdminGalleryPage() {
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = async () => {
    try {
      const content = await readContent();
      setGallery(content.gallery);
    } catch (error) {
      setToast({ type: "error", message: "Gagal memuat galeri" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddImage = () => {
    if (newImageUrl.trim()) {
      setGallery([
        ...gallery,
        {
          id: Math.max(...gallery.map((g) => g.id), 0) + 1,
          url: newImageUrl,
          alt: "Gallery image",
        },
      ]);
      setNewImageUrl("");
    }
  };

  const handleDelete = (id: number) => {
    setGallery(gallery.filter((g) => g.id !== id));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await updateSection("gallery", gallery);
      setToast({ type: "success", message: "Galeri berhasil disimpan" });
    } catch (error) {
      setToast({ type: "error", message: "Gagal menyimpan galeri" });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
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
            Manage Gallery
          </h1>
          <p className="text-text-muted">Kelola galeri foto website</p>
        </div>

        {toast && <Toast type={toast.type} message={toast.message} />}

        {/* Add Image Form */}
        <div className="bg-surface rounded-xl p-6 border border-primary-light/20 mb-8">
          <h3 className="font-semibold text-text mb-4">Tambah Gambar</h3>
          <div className="flex gap-3">
            <input
              type="url"
              placeholder="Paste image URL..."
              value={newImageUrl}
              onChange={(e) => setNewImageUrl(e.target.value)}
              className="flex-grow px-4 py-3 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none"
            />
            <button
              onClick={handleAddImage}
              className="btn btn-primary flex items-center gap-2"
            >
              <Plus size={20} />
              Add
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {gallery.map((image) => (
            <div
              key={image.id}
              className="bg-surface rounded-xl overflow-hidden border border-primary-light/20 hover:border-primary transition-colors group"
            >
              <div className="relative w-full h-48 bg-surface-alt overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <input
                  type="text"
                  value={image.alt}
                  onChange={(e) => {
                    const newGallery = gallery.map((g) =>
                      g.id === image.id ? { ...g, alt: e.target.value } : g
                    );
                    setGallery(newGallery);
                  }}
                  className="flex-grow px-3 py-1 text-xs border border-text-light rounded focus:border-primary focus:outline-none"
                />
                <button
                  onClick={() => handleDelete(image.id)}
                  className="ml-2 btn border-danger text-danger hover:bg-danger/10 py-1 px-2"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleSave}
          disabled={isSaving}
          className="btn btn-primary flex items-center gap-2"
        >
          <Save size={20} />
          {isSaving ? "Saving..." : "Simpan Perubahan"}
        </button>
      </div>
    </AdminLayout>
  );
}
