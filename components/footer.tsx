import { GithubIcon, XIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-6 mt-10 text-center  border-gray-700">
      <p className="text-sm">
        © {new Date().getFullYear()} Manuel Afonso. All rights reserved.
      </p>

      <ul className="flex justify-center items-center gap-6 mt-4">
        <li>
          <Link
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-400 transition"
          >
            <LinkedinIcon className="w-6 h-6" />
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/manuel-afonso/astropaper"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-400 transition"
          >
            <GithubIcon className="w-6 h-6" />
          </Link>
        </li>
        <li>
          <Link
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-400 transition"
          >
            <XIcon className="w-6 h-6" />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
