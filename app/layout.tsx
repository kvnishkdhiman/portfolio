import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kanishk — AI/ML Engineer",
  description:
    "Building intelligent systems. AI/ML Engineer specializing in deep learning, systematic trading, and edge AI.",
  keywords: [
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "AI Engineer",
    "Systematic Trading",
    "Portfolio",
  ],
  authors: [{ name: "Kanishk Dhiman" }],
  openGraph: {
    title: "Kanishk — AI/ML Engineer",
    description: "Building intelligent systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${courierPrime.variable} antialiased`}>
      <body className="min-h-screen bg-[var(--color-bg-dark)] text-[var(--color-text-light)]">
        {/* Force hot reload check */}
        <div className="dot-grid-overlay" />
        {children}
      </body>
    </html>
  );
}
