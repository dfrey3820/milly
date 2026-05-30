import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Milly Munala // Security Analyst",
  description:
    "Milly Munala — Security Analyst | SOC Analyst | Cybersecurity Professional based in Nairobi, Kenya.",
  keywords: [
    "Security Analyst",
    "SOC Analyst",
    "Cybersecurity",
    "Nairobi",
    "Kenya",
    "Milly Munala",
  ],
  authors: [{ name: "Milly Munala" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
