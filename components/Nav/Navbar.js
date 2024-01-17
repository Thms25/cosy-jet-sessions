"use client";

// Styles
import { motion } from "framer-motion";

// Components
import Link from "next/link";
import Image from "next/image";
import NavDropdown from "./NavDropdown";

// Auth
import { signIn, signOut, useSession } from "next-auth/react";

// --------------------------------------------------------------

const navItems = [
  {
    title: "Home",
    link: "/",
  },
  // {
  //   title: "About",
  //   link: "/about",
  // },
  {
    title: "Discover",
    link: "/discover",
  },
  {
    title: "Playlists",
    link: "/",
  },
  {
    title: "Events",
    link: "/events",
  },
  // {
  //   title: "Shop",
  //   link: "/shop",
  // },
  {
    title: "Contact",
    link: "/contact",
  },
];

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-cjsWhite bg-opacity-80 w-full fixed top-0 z-10 flex justify-between items-center text-cjsBorwn px-8 py-3">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-1/5"
      >
        <Link href="/" className="flex">
          <Image
            priority
            src="/images/cjsText.png"
            alt="cjs text title"
            className=""
            width={190}
            height={40}
          />
        </Link>
      </motion.div>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="hidden sm:flex justify-evenly"
      >
        {navItems.map((item) => (
          <li className="px-3 lg:px-4" key={item.title}>
            <Link
              href={item.link}
              className="text-cjsPink font-secondary text-md lg:text-lg tracking-wide hover:text-cjsBrown transition duration-250 drop-shadow-sm"
            >
              {item.title}
            </Link>
          </li>
        ))}
        <li>
          {session ? (
            <button onClick={() => signOut()}>Signout</button>
          ) : (
            <button onClick={() => signIn()}>Signin</button>
          )}
        </li>
      </motion.ul>
      <div className="w-1/5 lg:flex justify-end hidden">
        <Image
          src="/images/cjsLogo.png"
          alt="cjs icon"
          width={50}
          height={50}
          className="hidden md:block"
          priority
        />
      </div>
      <div className="sm:hidden">
        <NavDropdown navItems={navItems} />
      </div>
    </nav>
  );
}
