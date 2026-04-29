"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, Menu, X } from "lucide-react";
import { useAdminAuth } from "@/lib/auth";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated, isLoading, logout } = useAdminAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/admin/login");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-bg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-text-muted">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const navItems = [
    { label: "Dashboard", href: "/admin" },
    { label: "Hero Section", href: "/admin/hero" },
    { label: "Program", href: "/admin/programs" },
    { label: "Testimoni", href: "/admin/testimonials" },
    { label: "Blog", href: "/admin/blog" },
    { label: "Galeri", href: "/admin/gallery" },
    { label: "Pengaturan", href: "/admin/settings" },
  ];

  return (
    <div className="flex h-screen bg-bg overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed md:static w-64 bg-surface border-r border-primary-light/20 transition-transform duration-300 z-40 h-full overflow-y-auto ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-primary-light/20">
          <div className="text-center">
            <div className="text-3xl font-serif font-bold text-primary chinese-text mb-1">
              天蛙
            </div>
            <p className="text-xs font-semibold text-text-muted">ADMIN PANEL</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 rounded-lg text-sm font-medium text-text-muted hover:bg-primary-muted hover:text-primary transition-colors"
              onClick={() => setIsSidebarOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-primary-light/20 bg-surface">
          <button
            onClick={() => {
              logout();
              router.push("/admin/login");
            }}
            className="w-full btn btn-ghost text-danger border-danger/30 hover:bg-danger/10 flex items-center justify-center gap-2"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-surface border-b border-primary-light/20 px-4 md:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-display font-bold text-text hidden md:block">
            Admin Panel
          </h1>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden p-2 hover:bg-surface-alt rounded-lg"
          >
            {isSidebarOpen ? (
              <X size={24} className="text-text" />
            ) : (
              <Menu size={24} className="text-text" />
            )}
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-8">{children}</div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};
