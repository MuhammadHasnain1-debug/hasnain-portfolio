import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Hasnain — Creative Developer",
  description:
    "Muhammad Hasnain — a creative developer crafting striking, fast, unforgettable web experiences with React, Next.js and Python.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={kanit.variable}>
      <body className="bg-cream font-kanit text-ink">{children}</body>
    </html>
  );
}
