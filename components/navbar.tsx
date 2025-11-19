"use client";

import { SearchIcon, MoonIcon } from "lucide-react";
import logo from "@/public/assets/AstroPaper.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Books", href: "/books" },
    { name: "Blog", href: "/blogs" },
    { name: <SearchIcon className="w-5 h-5" />, href: "/search" },
    { name: <MoonIcon className="w-5 h-5" />, href: "/" },
  ];

  return (
    <header className="w-full py-4 mb-6">
      <nav className="flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="flex items-center">
          <span className="font-bold md:text-xl ml-2 rtl:ml-0 rtl:mr-2 self-center text-2xl whitespace-nowrap">
            Manuel Afonso
          </span>
        </Link>

        <ul className="flex flex-wrap items-center gap-4 text-[16px]">
          {links.map((link, index) => (
            <li key={link.href + index}>
              <Link href={link.href} className="hover:underline">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
