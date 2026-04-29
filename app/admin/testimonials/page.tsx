"use client";

import React, { useState, useEffect } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { readContent, updateSection } from "@/lib/content-client";
import { Save, Plus, Trash2, Star } from "lucide-react";
import { Toast } from "@/components/ui/Toast";

interface Testimonial {
  id: number;
  name: string;
  program: string;
  rating: number;
  quote: string;
  avatar: string;
}

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    try {
      const content = await readContent();
      setTestimonials(content.testimonials);
    } catch (error) {
      setToast({ type: "error", message: "Gagal memuat testimonial" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await updateSection("testimonials", testimonials);
      setToast({ type: "success", message: "Testimonial berhasil disimpan" });
    } catch (error) {
      setToast({ type: "error", message: "Gagal menyimpan testimonial" });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = (id: number) => {
    if (confirm("Hapus testimonial ini?")) {
      setTestimonials(testimonials.filter((t) => t.id !== id));
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
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-display font-bold text-text mb-2">
              Manage Testimonials
            </h1>
            <p className="text-text-muted">Kelola testimoni dari siswa</p>
          </div>
          <button className="btn btn-primary flex items-center gap-2">
            <Plus size={20} />
            Tambah Testimonial
          </button>
        </div>

        {toast && <Toast type={toast.type} message={toast.message} />}

        <div className="space-y-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-surface rounded-xl p-6 border border-primary-light/20"
            >
              <div className="flex justify-between gap-4">
                <div className="flex gap-4 flex-grow">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-text">{testimonial.name}</h3>
                    <p className="text-xs text-text-muted">{testimonial.program}</p>
                    <div className="flex gap-1 my-2">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-accent text-accent"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-text-muted italic line-clamp-2">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(testimonial.id)}
                  className="btn border-danger text-danger hover:bg-danger/10 py-2 px-4 h-fit"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleSave}
          disabled={isSaving}
          className="mt-8 btn btn-primary flex items-center gap-2"
        >
          <Save size={20} />
          {isSaving ? "Saving..." : "Simpan Perubahan"}
        </button>
      </div>
    </AdminLayout>
  );
}
