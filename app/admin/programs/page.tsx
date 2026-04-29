"use client";

import React, { useState, useEffect } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { readContent, updateSection } from "@/lib/content-client";
import { Save, Plus, Trash2 } from "lucide-react";
import { Toast } from "@/components/ui/Toast";

interface Program {
  id: number;
  title: string;
  description: string;
  tag: string;
  duration: string;
  icon: string;
  highlights: string[];
  featured: boolean;
}

export default function AdminProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    loadPrograms();
  }, []);

  const loadPrograms = async () => {
    try {
      const content = await readContent();
      setPrograms(content.programs);
    } catch (error) {
      setToast({ type: "error", message: "Gagal memuat program" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await updateSection("programs", programs);
      setToast({ type: "success", message: "Program berhasil disimpan" });
      setEditingId(null);
    } catch (error) {
      setToast({ type: "error", message: "Gagal menyimpan program" });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = (id: number) => {
    if (confirm("Hapus program ini?")) {
      setPrograms(programs.filter((p) => p.id !== id));
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
              Manage Programs
            </h1>
            <p className="text-text-muted">
              Edit atau tambah program kursus Mandarin
            </p>
          </div>
          <button className="btn btn-primary flex items-center gap-2">
            <Plus size={20} />
            Tambah Program
          </button>
        </div>

        {toast && <Toast type={toast.type} message={toast.message} />}

        <div className="space-y-4">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-surface rounded-xl p-6 border border-primary-light/20 hover:border-primary transition-colors"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{program.icon}</span>
                    <div>
                      <h3 className="text-lg font-display font-bold text-text">
                        {program.title}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                        {program.tag}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-text-muted mb-3">
                    {program.description}
                  </p>
                  <p className="text-xs text-text-muted">Durasi: {program.duration}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setEditingId(program.id)}
                    className="btn btn-secondary py-2 px-4 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(program.id)}
                    className="btn border-danger text-danger hover:bg-danger/10 py-2 px-4 text-sm"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
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
