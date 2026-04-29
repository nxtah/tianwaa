"use client";

import React, { useState, useEffect } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { readContent, updateSection } from "@/lib/content-client";
import { Save, Plus, Trash2 } from "lucide-react";
import { Toast } from "@/components/ui/Toast";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  author: string;
  date: string;
  excerpt: string;
  coverImage: string;
  content: string;
}

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    loadBlog();
  }, []);

  const loadBlog = async () => {
    try {
      const content = await readContent();
      setPosts(content.blog);
    } catch (error) {
      setToast({ type: "error", message: "Gagal memuat blog" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await updateSection("blog", posts);
      setToast({ type: "success", message: "Blog berhasil disimpan" });
    } catch (error) {
      setToast({ type: "error", message: "Gagal menyimpan blog" });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = (id: number) => {
    if (confirm("Hapus post ini?")) {
      setPosts(posts.filter((p) => p.id !== id));
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
              Manage Blog
            </h1>
            <p className="text-text-muted">Kelola artikel blog website</p>
          </div>
          <button className="btn btn-primary flex items-center gap-2">
            <Plus size={20} />
            Tambah Post
          </button>
        </div>

        {toast && <Toast type={toast.type} message={toast.message} />}

        {/* Blog Table */}
        <div className="bg-surface rounded-xl border border-primary-light/20 overflow-hidden">
          <table className="w-full">
            <thead className="bg-surface-alt border-b border-primary-light/20">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, i) => (
                <tr
                  key={post.id}
                  className={`border-b border-primary-light/20 ${
                    i % 2 === 0 ? "bg-surface" : "bg-surface-alt"
                  }`}
                >
                  <td className="px-6 py-4">
                    <h3 className="font-semibold text-text line-clamp-1">
                      {post.title}
                    </h3>
                    <p className="text-xs text-text-muted">{post.slug}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-text-muted">{post.category}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-text-muted">{post.date}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="btn btn-secondary py-1 px-3 text-xs">
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="btn border-danger text-danger hover:bg-danger/10 py-1 px-3 text-xs"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
