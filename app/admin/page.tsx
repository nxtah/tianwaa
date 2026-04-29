"use client";

import React, { useState, useEffect } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { readContent } from "@/lib/content-client";
import { formatDate } from "@/lib/utils";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalPrograms: 0,
    totalBlogPosts: 0,
    totalTestimonials: 0,
    totalGallery: 0,
  });

  useEffect(() => {
    readContent()
      .then((content) => {
        setStats({
          totalPrograms: content.programs.length,
          totalBlogPosts: content.blog.length,
          totalTestimonials: content.testimonials.length,
          totalGallery: content.gallery.length,
        });
      })
      .catch((error) => console.error("Error loading stats:", error));
  }, []);

  const StatCard = ({
    icon,
    label,
    value,
  }: {
    icon: string;
    label: string;
    value: number;
  }) => (
    <div className="bg-surface rounded-xl p-6 border border-primary-light/20">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-text-muted text-sm mb-1">{label}</p>
          <p className="text-3xl font-display font-bold text-primary">{value}</p>
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
    </div>
  );

  return (
    <AdminLayout>
      <div>
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-text mb-2">
            Dashboard
          </h1>
          <p className="text-text-muted">
            Selamat datang di panel admin Tianwaa
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon="📚"
            label="Total Program"
            value={stats.totalPrograms}
          />
          <StatCard icon="✍️" label="Total Blog" value={stats.totalBlogPosts} />
          <StatCard
            icon="⭐"
            label="Total Testimoni"
            value={stats.totalTestimonials}
          />
          <StatCard
            icon="🖼️"
            label="Total Galeri"
            value={stats.totalGallery}
          />
        </div>

        {/* Quick Links */}
        <div className="bg-surface rounded-xl p-8 border border-primary-light/20">
          <h2 className="text-xl font-display font-bold mb-6">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              href="/admin/hero"
              className="p-4 border border-primary-light/20 rounded-lg hover:border-primary hover:bg-primary-muted transition-all"
            >
              <h3 className="font-semibold text-text mb-1">Edit Hero Section</h3>
              <p className="text-sm text-text-muted">
                Update headline dan CTA utama
              </p>
            </a>
            <a
              href="/admin/programs"
              className="p-4 border border-primary-light/20 rounded-lg hover:border-primary hover:bg-primary-muted transition-all"
            >
              <h3 className="font-semibold text-text mb-1">Manage Programs</h3>
              <p className="text-sm text-text-muted">Tambah/edit program kursus</p>
            </a>
            <a
              href="/admin/blog"
              className="p-4 border border-primary-light/20 rounded-lg hover:border-primary hover:bg-primary-muted transition-all"
            >
              <h3 className="font-semibold text-text mb-1">Manage Blog</h3>
              <p className="text-sm text-text-muted">Buat & edit artikel blog</p>
            </a>
            <a
              href="/admin/testimonials"
              className="p-4 border border-primary-light/20 rounded-lg hover:border-primary hover:bg-primary-muted transition-all"
            >
              <h3 className="font-semibold text-text mb-1">
                Manage Testimonials
              </h3>
              <p className="text-sm text-text-muted">
                Kelola ulasan pelanggan
              </p>
            </a>
            <a
              href="/admin/gallery"
              className="p-4 border border-primary-light/20 rounded-lg hover:border-primary hover:bg-primary-muted transition-all"
            >
              <h3 className="font-semibold text-text mb-1">Manage Gallery</h3>
              <p className="text-sm text-text-muted">Upload & kelola foto</p>
            </a>
            <a
              href="/admin/settings"
              className="p-4 border border-primary-light/20 rounded-lg hover:border-primary hover:bg-primary-muted transition-all"
            >
              <h3 className="font-semibold text-text mb-1">Site Settings</h3>
              <p className="text-sm text-text-muted">Konfigurasi umum website</p>
            </a>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center text-sm text-text-muted">
          <p>Last updated: {formatDate(new Date())}</p>
        </div>
      </div>
    </AdminLayout>
  );
}
