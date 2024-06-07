import { FiEdit, FiChevronDown } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

// Auth
// import { useSession } from 'next-auth/react'

export default function NavDropdown({ navItems }) {
  // const { data: session } = useSession()

  const [open, setOpen] = useState(false)
  const router = useRouter()

  return (
    <div className="flex items-center justify-center bg-cjsWhite z-50">
      <motion.div animate={open ? 'open' : 'closed'} className="relative">
        <button
          onClick={() => setOpen(pv => !pv)}
          className="flex items-center gap-2 text-cjsBrown bg-cjsBrown bg-opacity-0 hover:bg-opacity-20 transition duration-250"
        >
          <motion.span variants={iconVariants}>
            <GiHamburgerMenu />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: 'top', translateX: '-50%' }}
          className="flex flex-col gap-2 p-4 rounded-lg bg-cjsWhite shadow-xl absolute left-[50%] w-96  overflow-hidden text-cjsBrown"
        >
          {navItems.map(item => (
            <>
              {item.children ? (
                <>
                  {item.children.map(child => (
                    <motion.li
                      key={child.title}
                      variants={itemVariants}
                      onClick={() => {
                        router.push(child.link)
                        setOpen(false)
                      }}
                      className="text-sm flex items-center gap-2 w-full p-4 font-medium whitespace-nowrap rounded-md transition cursor-pointer"
                    >
                      <span>{child.title}</span>
                    </motion.li>
                  ))}
                </>
              ) : (
                <motion.li
                  key={item.title}
                  variants={itemVariants}
                  onClick={() => {
                    router.push(item.link)
                    setOpen(false)
                  }}
                  className="text-sm flex items-center gap-2 w-full p-4 font-medium whitespace-nowrap rounded-md transition cursor-pointer"
                >
                  <span>{item.title}</span>
                </motion.li>
              )}
            </>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  )
}

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.05,
    },
  },
}

const iconVariants = {
  open: { rotate: 90 },
  closed: { rotate: 0 },
}

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: 'afterChildren',
    },
  },
}

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
}
