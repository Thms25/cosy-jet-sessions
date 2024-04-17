'use client'

// Styles
import { motion } from 'framer-motion'

// Components
import Link from 'next/link'
import Image from 'next/image'
import NavDropdown from './NavDropdown'
import { usePathname } from 'next/navigation'

import { useWindowSize } from '@/hooks/useWindowSize'

// Auth
// import { signIn, signOut, useSession } from 'next-auth/react'

// --------------------------------------------------------------

const navItems = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Discover',
    link: '/discover',
  },
  // {
  //   title: 'Playlists',
  //   link: '/',
  // },
  // {
  //   title: "Events",
  //   link: "/events",
  // },
  // {
  //   title: 'Shop',
  //   link: '/shop',
  // },
  {
    title: 'Contact',
    link: '/contact',
  },
]

export default function Navbar() {
  // const { data: session } = useSession()
  // const smallScreen = window.innerWidth < 640
  const { width } = useWindowSize()
  const smallScreen = width < 640
  const pathname = usePathname()

  return (
    <nav className="bg-cjsWhite bg-opacity-80 w-full fixed top-0 z-10 flex justify-between items-center text-cjsBorwn px-8 py-3">
      {!smallScreen && (
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
              alt="cjs_text_title"
              className=""
              width={190}
              height={40}
            />
          </Link>
        </motion.div>
      )}
      {smallScreen ? (
        <Link href="/">
          <Image
            src="/images/cjsLogo.png"
            alt="cjs icon"
            width={50}
            height={50}
            priority
          />
        </Link>
      ) : (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="hidden sm:flex justify-evenly"
        >
          {navItems.map(item => (
            <li className="px-3 lg:px-4" key={item.title}>
              <Link
                aria-disabled={pathname === item.link}
                href={item.link}
                className={`font-secondary text-md tracking-wide hover:text-cjsBrown transition duration-250 drop-shadow-sm ${
                  pathname === item.link ? 'text-cjsBrown' : 'text-cjsPink'
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
          {/* <li>
          {session ? (
            <button
              onClick={() => signOut()}
              className="text-cjsPink font-secondary text-xs tracking-wide hover:text-cjsBrown transition duration-250 drop-shadow-sm"
            >
              Signout
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="text-cjsPink font-secondary text-xs tracking-wide hover:text-cjsBrown transition duration-250 drop-shadow-sm"
            >
              Signin
            </button>
          )}
        </li> */}
        </motion.ul>
      )}
      {smallScreen ? (
        <NavDropdown navItems={navItems} />
      ) : (
        <div className="w-1/5 flex justify-end">
          <Image
            src="/images/cjsLogo.png"
            alt="cjs icon"
            width={50}
            height={50}
            className="hidden md:block"
            priority
          />
        </div>
      )}
    </nav>
  )
}
