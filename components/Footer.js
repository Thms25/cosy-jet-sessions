import { CiInstagram, CiYoutube, CiMail } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";

import Link from "next/link";

import Image from "next/image";

const socialLinks = [
  {
    icon: <CiInstagram />,
    link: "https://www.instagram.com/cosyjetsessions",
  },
  {
    icon: <CiYoutube />,
    link: "https://www.youtube.com/@cosyjetsessions",
  },
  {
    icon: <FaTiktok />,
    link: "https://www.tiktok.com/@cosyjetsessions",
  },
  {
    icon: <CiMail />,
    link: "mailto:contact@cosyjetsessions.com",
  },
];

export default function Footer() {
  return (
    <footer className="z-20 w-full px-8 py-1 border-t border-cjsBrown shadow flex items-center justify-between ">
      <Link href="/" className="flex items-center">
        <Image
          src="/images/cjsLogo.png"
          alt="cjs icon"
          width={30}
          height={30}
          className="mr-4 hidden md:block"
        />
        <Image
          src="/images/cjsText.png"
          alt="cjs text title"
          className="w-full object-contain hidden md:block"
          width={190}
          height={40}
        />
      </Link>
      <ul className="flex justify-evenly items-center text-3xl w-full md:w-1/2 lg:w-1/3">
        {socialLinks.map((social, index) => (
          <li key={index}>
            <Link
              target="_blank"
              href={social.link}
              className="text-cjsBrown px-3"
            >
              {social.icon}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
