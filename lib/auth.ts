"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const useAdminAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("admin_token");
        if (token) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      localStorage.setItem("admin_token", data.token);
      setIsAuthenticated(true);
      return { success: true };
    } catch (error) {
      return { success: false, error: "Invalid credentials" };
    }
  };

  const logout = () => {
    localStorage.removeItem("admin_token");
    setIsAuthenticated(false);
    router.push("/admin/login");
  };

  return { isAuthenticated, isLoading, login, logout };
};
