import type { Metadata, Viewport } from "next";
import { DM_Sans, Syne, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tianwaa - Kursus Mandarin Online & Offline",
  description:
    "Kuasai Bahasa Mandarin dengan Native Teacher. 200.000+ murid di 30+ negara. Kursus privat online & offline dengan Dual Teacher System.",
  keywords:
    "kursus mandarin, belajar mandarin, mandarin online, HSK, bahasa mandarin",
  authors: [{ name: "Tianwaa" }],
  openGraph: {
    title: "Tianwaa - Kursus Mandarin Online & Offline",
    description:
      "Kuasai Bahasa Mandarin dengan Native Teacher. 200.000+ murid di 30+ negara.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D5C45",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${dmSans.variable} ${syne.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans bg-bg text-text min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}