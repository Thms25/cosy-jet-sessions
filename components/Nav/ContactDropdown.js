'use client'

import { useEffect, useState } from 'react'
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
} from 'react-icons/fi'
import { LuListMusic } from 'react-icons/lu'
import { MdOutlineQuestionAnswer } from 'react-icons/md'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'

export default function ContactDropdown() {
  const [selected, setSelected] = useState(null)
  const [dir, setDir] = useState(null)

  const handleSetSelected = val => {
    if (typeof selected === 'number' && typeof val === 'number') {
      setDir(selected > val ? 'r' : 'l')
    } else if (val === null) {
      setDir(null)
    }

    setSelected(val)
  }
  return (
    <div className="flex bg-cjsWhite  text-cjsBrown justify-center">
      <div
        onMouseLeave={() => handleSetSelected(null)}
        className="relative flex h-fit"
      >
        {TABS.map(t => {
          return (
            <Tab
              key={t.id}
              selected={selected}
              handleSetSelected={handleSetSelected}
              tab={t.id}
            >
              Contact
            </Tab>
          )
        })}

        <AnimatePresence>
          {selected && <ContactContent dir={dir} selected={selected} />}
        </AnimatePresence>
      </div>
    </div>
  )
}

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  const pathname = usePathname()

  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center font-secondary text-md tracking-wide hover:text-cjsBrown transition duration-250 drop-shadow-sm ${
        pathname.includes('contact') ? 'text-cjsBrown' : 'text-cjsPink'
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? 'rotate-180' : ''
        }`}
      />
    </button>
  )
}

const ContactContent = ({ selected, dir }) => {
  const subMenus = [
    {
      text: 'Apply for a session',
      icon: <LuListMusic />,
      Link: '/contact/apply',
    },
    {
      text: 'Sponsorship & Partnership',
      icon: <FiBarChart2 />,
      Link: '/contact/partnership',
    },
    {
      text: 'Just a quick question',
      icon: <MdOutlineQuestionAnswer />,
      Link: '/contact/message',
    },
  ]
  const router = useRouter()
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute right-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-cjsBrown bg-cjsWhite p-4"
    >
      <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />

      {TABS.map(t => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === 'l' ? 100 : dir === 'r' ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <div className="grid grid-cols-3 gap-4 divide-x divide-cjsBrown">
                  {subMenus.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => router.push(s.Link)}
                      className="flex w-full flex-col items-center justify-center py-2 transition duration-200 hover:font-bold text-cjsBrown"
                    >
                      {s.icon}
                      <span className="text-xs">{s.text}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        )
      })}
    </motion.div>
  )
}

const TABS = [
  {
    title: 'Contact',
    Component: ContactContent,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }))
