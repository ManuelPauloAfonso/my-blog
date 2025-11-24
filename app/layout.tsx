import "./globals.css";

import { Montserrat } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Banner from "@/components/banner";
import type { Metadata } from "next";
import Script from "next/script";

const baseUrl = "https://www.manuelafonso.tech/";
const heroImageUrl = `${baseUrl}/assets/icon.png`;

export const metadata: Metadata = {
  title: "Manuel Afonso  Software Developer & Tech Writer",
  description:
    "Hello, I'm Manuel Paulo Afonso  a software developer passionate about clean code, scalable architecture, and meaningful technology. On this blog, I share insights, lessons learned, and my journey in software development.",
  keywords: [
    "software development",
    "clean code",
    "web development",
    "backend development",
    "programming blog",
    "technology articles",
    "typescript",
    "react",
    "node.js",
    "developer journey",
    "coding best practices",
  ],
  applicationName: "Manuel Afonso Blog",
  openGraph: {
    title: "Manuel Afonso  Software Developer & Technical Blog",
    description:
      "A space where I share what I learn while building scalable, user focused, and high-quality software  including mistakes, wins, and everything in between.",
    url: baseUrl,
    type: "website",
    images: [
      {
        url: heroImageUrl,
        width: 1200,
        height: 630,
        alt: "Manuel Afonso  Software Development Blog",
      },
    ],
    siteName: "Manuel Afonso",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ManuelAfonso",
    creator: "@ManuelAfonso",
    title: "Manuel Afonso  Software Developer & Tech Writer",
    description:
      "Sharing insights about technology, clean code, software engineering, and the journey of becoming a better developer.",
    images: heroImageUrl,
  },
  icons: {
    icon: "/assets/icon.png",
    apple: "/assets/icon.png",
    shortcut: "/assets/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          data-website-id="dfid_SCfhMc0Gz1WtV8tz3pTDk"
          data-domain="https://www.manuelafonso.tech/"
          src="https://datafa.st/js/script.js"
          data-allow-localhost="true"
        ></Script>
      </head>
      <body className={`antialiased`}>
        <div className="max-w-6xl mx-auto px-4 lg:px-0 py-10">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
