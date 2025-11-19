import { SearchIcon, MoonIcon } from "lucide-react";
import logo from "@/public/assets/AstroPaper.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Books", href: "/Books" },
    { name: "Blog", href: "/bLOGS" },
    { name: <SearchIcon className="w-6 h-6" />, href: "/search" },
    { name: <MoonIcon className="w-6 h-6" />, href: "/" },
  ];

  return (
    <div className="flex justify-between items-center py-9">
      <Link href="/" className="text-2xl font-bold">
        <Image src={logo} alt="Logo" />
      </Link>

      <ul className="flex items-center gap-4">
        {links.map((link, index) => (
          <li key={link.href + index} className="font-medium text-[18px]">
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
