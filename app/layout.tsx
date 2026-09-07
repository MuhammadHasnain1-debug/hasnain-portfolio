import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hasnaindev.me"),
  title: "Muhammad Hasnain — Creative Developer",
  description:
    "Muhammad Hasnain — freelance developer building fast, clean interfaces, 3D web experiences and data tools across React, Next.js and Python.",
  openGraph: {
    title: "Muhammad Hasnain — Creative Developer",
    description:
      "Freelance developer building fast, clean interfaces, 3D web experiences and data tools with React, Next.js and Python.",
    url: "https://hasnaindev.me",
    siteName: "Muhammad Hasnain",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hasnain — Creative Developer",
    description:
      "Freelance developer building fast, clean interfaces, 3D web experiences and data tools with React, Next.js and Python.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
