import { GithubIcon, XIcon, LinkedinIcon } from "lucide-react";
import BannerLogo from "@/public/assets/Group 2 (3).svg";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 ">
      <div className="flex flex-col items-center justify-center gap-4">
        <Image src={BannerLogo} alt="Banner Logo" width={500} height={500} />
        <p className="text-xl text-white">
          Hello, I’m Manuel Paulo Afonso, a software developer with strong
          attention to detail and a commitment to building high quality,
          scalable, and user centered solutions. I take great pride in my work
          and see every project as a chance to improve and grow. I’m passionate
          about clean code, performance, and problem-solving. I believe
          technology should bring clarity, efficiency, and real impact not just
          work, but make sense. On this blog, I share my journey in software
          development: the mistakes, the wins, the lessons learned, and
          everything I continue to discover along the way.
        </p>
        <p>Read the blog posts or check README for more info.</p>
        <p>Social links:</p>
        <ul className="flex flex-wrap gap-4">
          <li>
            <Link
              href={"https://github.com/manuel-afonso/astropaper"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <LinkedinIcon className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.npmjs.com/package/astropaper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <GithubIcon className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link
              href="https://astropaper.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <XIcon className="w-6 h-6" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
