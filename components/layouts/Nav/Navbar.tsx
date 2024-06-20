'use client'

// Styles
import { motion } from 'framer-motion'

// Components
import Link from 'next/link'
import Image from 'next/image'
import NavDropdown from './NavDropdown'
import { usePathname } from 'next/navigation'

import { useWindowSize } from '../../../hooks/useWindowSize'
import ContactDropdown from './ContactDropdown'

// --------------------------------------------------------------

const navItems = [
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Discover',
    link: '/discover',
  },
  {
    title: 'Contact',
    link: '/contact',
    component: ContactDropdown,
    children: [
      {
        title: 'Apply for a session',
        link: '/contact/apply',
      },
      {
        title: 'Sponsorship & Partnership',
        link: '/contact/partnership',
      },
      {
        title: 'Just a quick question',
        link: '/contact/message',
      },
    ],
  },
]

export default function Navbar() {
  const { width } = useWindowSize()
  const smallScreen = width < 640
  const pathname = usePathname()

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
            src={smallScreen ? '/images/cjsLogo.png' : '/images/cjsText.png'}
            alt="cjs_logo_home_link"
            className=""
            width={smallScreen ? 40 : 190}
            height={40}
          />
        </Link>
      </motion.div>

      {smallScreen ? (
        <NavDropdown navItems={navItems} />
      ) : (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="hidden sm:flex justify-evenly"
        >
          {navItems.map(item => (
            <li className="px-3 lg:px-4 2xl:px-6" key={item.title}>
              {item.component ? (
                <item.component />
              ) : (
                <Link
                  aria-disabled={pathname === item.link}
                  href={item.link}
                  className={`font-secondary text-md tracking-wide hover:text-cjsBrown transition duration-250 drop-shadow-sm ${
                    pathname === item.link ? 'text-cjsBrown' : 'text-cjsPink'
                  }`}
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  )
}
