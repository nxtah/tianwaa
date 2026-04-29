"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAdminAuth } from "@/lib/auth";
import { Loader } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const { login } = useAdminAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const result = await login(username, password);
      if (result.success) {
        router.push("/admin");
      } else {
        setError(result.error || "Login failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-dark to-primary/20 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-4xl font-serif font-bold text-primary chinese-text mb-2">
            天蛙
          </div>
          <h1 className="text-3xl font-display font-bold text-white mb-2">
            Tianwaa Admin
          </h1>
          <p className="text-text-light">Panel Kontrol Konten</p>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-surface rounded-xl p-8 shadow-2xl border border-primary-light/20"
        >
          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-danger/10 border border-danger/30 rounded-lg">
              <p className="text-danger text-sm font-medium">{error}</p>
            </div>
          )}

          {/* Username Field */}
          <div className="mb-6">
            <label htmlFor="username" className="block text-sm font-semibold text-text mb-2">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none transition-colors"
              placeholder="Masukkan username"
              required
              disabled={isLoading}
            />
          </div>

          {/* Password Field */}
          <div className="mb-8">
            <label htmlFor="password" className="block text-sm font-semibold text-text mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-text-light rounded-lg focus:border-primary focus:outline-none transition-colors"
              placeholder="Masukkan password"
              required
              disabled={isLoading}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn btn-primary text-lg py-3 flex items-center justify-center gap-2"
          >
            {isLoading && <Loader size={20} className="animate-spin" />}
            {isLoading ? "Logging in..." : "Login"}
          </button>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-primary-muted rounded-lg border border-primary/20">
            <p className="text-xs font-semibold text-text-muted mb-2">Demo Credentials:</p>
            <p className="text-xs text-text-muted">
              Username: <span className="font-mono text-primary">admin</span>
            </p>
            <p className="text-xs text-text-muted">
              Password: <span className="font-mono text-primary">tianwaa2025</span>
            </p>
          </div>
        </form>

        {/* Footer */}
        <p className="text-center text-text-light text-sm mt-6">
          © 2025 Tianwaa. Semua hak dilindungi.
        </p>
      </div>
    </div>
  );
}
