import type { Metadata } from "next";
import { Cormorant_Garamond, Syne, Syne_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const syneMono = Syne_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-syne-mono",
});

export const metadata: Metadata = {
  title: "GDP Talks — World Models :: AI · 17 May 2026",
  description: "A gathering where participants share their views, ongoing research, and ideas they found too interesting to keep to themselves.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${syne.variable} ${syneMono.variable} antialiased noise-overlay`}>
        {children}
      </body>
    </html>
  );
}
