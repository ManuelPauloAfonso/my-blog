import "./globals.css";

import { IBM_Plex_Mono } from "next/font/google";
import type { Metadata } from "next";

const geistSans = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manuel Afonso",
  description:
    "Welcome to my blog — a space to share knowledge, ideas, and inspiration about technology, programming, and web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>{children}</body>
    </html>
  );
}
