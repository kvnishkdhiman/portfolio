import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kanishk — Machine Learning Engineer",
  description:
    "Building intelligent systems. Machine Learning Engineer specializing in deep learning, data science, and quantitative research.",
  keywords: [
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "AI Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Kanishk" }],
  openGraph: {
    title: "Kanishk — Machine Learning Engineer",
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
    <html lang="en" className={`${interTight.variable} antialiased`}>
      <body className="min-h-screen bg-[var(--color-bg)] text-[var(--color-primary)]">{children}</body>
    </html>
  );
}
