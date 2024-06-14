import React from 'react'

import { CiInstagram, CiYoutube, CiMail } from 'react-icons/ci'
import { FaTiktok } from 'react-icons/fa'

import Link from 'next/link'

import Image from 'next/image'

const socialLinks = [
  {
    icon: <CiInstagram />,
    link: 'https://www.instagram.com/cosyjetsessions',
  },
  {
    icon: <CiYoutube />,
    link: 'https://www.youtube.com/@cosyjetsessions',
  },
  {
    icon: <FaTiktok />,
    link: 'https://www.tiktok.com/@cosyjetsessions',
  },
  {
    icon: <CiMail />,
    link: 'mailto:contact@cosyjetsessions.com',
  },
]

export default function Footer() {
  return (
    <footer className="z-20 w-full px-6 border-t border-cjsBrown flex items-center justify-between">
      <Link href="/contact/message" className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-cjsBrown"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>

        <p className="text-cjsBrown ml-4 hover:underline transition duration-200 hidden md:block text-sm">
          Contact us
        </p>
      </Link>
      <ul className="flex justify-evenly items-center text-xs w-full md:w-1/2 lg:w-1/3">
        {socialLinks.map((social, index) => (
          <li key={index}>
            <Link
              target="_blank"
              href={social.link}
              className="text-cjsBrown px-3 "
            >
              {social.icon}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}
