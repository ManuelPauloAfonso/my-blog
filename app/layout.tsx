import "./globals.css";

import { Montserrat } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Banner from "@/components/banner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manuel Afonso",
  description:
    "Welcome to my blog — a space to share knowledge, ideas, and inspiration about technology, programming, and web development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <div className="max-w-6xl mx-auto px-4 lg:px-0 py-10">
          <Navbar />
          <Banner />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
