"use client";

import React, { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { readContent } from "@/lib/content-client";
import styles from "./WhatsAppFAB.module.css";

export const WhatsAppFAB = () => {
  const [whatsappNumber, setWhatsappNumber] = useState("+62812345678");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    readContent()
      .then((content) => {
        setWhatsappNumber(content.settings.whatsappNumber);
      })
      .catch((error) => console.error("Error loading settings:", error));
  }, []);

  const phoneNumber = whatsappNumber.replace(/\+/g, "");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Halo%20Tianwaa!%20Saya%20tertarik%20untuk%20belajar%20Mandarin.`;

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.fabButton} ${isVisible ? styles.fabButtonVisible : styles.fabButtonHidden}`}
        aria-label="Chat with WhatsApp"
        title="Hubungi kami via WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Always-visible WhatsApp Button for Mobile */}
      <div className={styles.mobileButton}>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mobileButtonContent}
          aria-label="Chat with WhatsApp"
        >
          <MessageCircle size={20} />
          <span className={styles.mobileButtonText}>Hubungi</span>
        </a>
      </div>
    </>
  );
};
