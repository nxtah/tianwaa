"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle, AlertCircle, X } from "lucide-react";
import styles from "./Toast.module.css";

interface ToastProps {
  type: "success" | "error";
  message: string;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  type,
  message,
  duration = 3000,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  const toastClass = type === "success" ? styles.toastSuccess : styles.toastError;

  return (
    <div className={`${styles.toast} ${toastClass}`}>
      {type === "success" ? (
        <CheckCircle size={20} className={styles.icon} />
      ) : (
        <AlertCircle size={20} className={styles.icon} />
      )}
      <p className={styles.message}>{message}</p>
      <button
        onClick={() => setIsVisible(false)}
        className={styles.closeButton}
      >
        <X size={18} />
      </button>
    </div>
  );
};
