'use client'

import { motion } from 'framer-motion'

export function Button({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      exit={{ scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
