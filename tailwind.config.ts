import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
          light: "var(--color-primary-light)",
          muted: "var(--color-primary-muted)",
          soft: "var(--color-primary-soft)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          light: "var(--color-accent-light)",
          muted: "var(--color-accent-muted)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          light: "var(--color-secondary-light)",
        },
        bg: {
          DEFAULT: "var(--color-bg)",
          dark: "var(--color-bg-dark)",
          warm: "var(--color-bg-warm)",
          surface: "var(--color-surface)",
          "surface-alt": "var(--color-surface-alt)",
        },
        text: {
          DEFAULT: "var(--color-text)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
          light: "var(--color-text-light)",
        },
        danger: "var(--color-danger)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
      },
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        sans: ["'DM Sans'", "sans-serif"],
        serif: ["'Cormorant Garamond'", "serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.0625rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2rem", { lineHeight: "2.5rem" }],
        "5xl": ["2.75rem", { lineHeight: "1.2" }],
        "6xl": ["3.5rem", { lineHeight: "1.1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
      },
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        "2xl": "var(--spacing-2xl)",
        "3xl": "var(--spacing-3xl)",
        "4xl": "var(--spacing-4xl)",
        "5xl": "var(--spacing-5xl)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
        glow: "var(--shadow-glow)",
        "glow-accent": "var(--shadow-glow-accent)",
      },
      transitionDuration: {
        fast: "var(--transition-fast)",
        base: "var(--transition-base)",
        smooth: "var(--transition-smooth)",
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out",
        fadeInUp: "fadeInUp 0.6s ease-out",
        fadeInDown: "fadeInDown 0.6s ease-out",
        scaleIn: "scaleIn 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
        floatSlow: "floatSlow 4s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          from: { opacity: "0", transform: "translateY(-24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;