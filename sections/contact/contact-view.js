'use client'

// section
import ContactForm from '@/app/contact/components/ContactForm'

// Hooks
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactView() {
  const tabs = [
    {
      text: 'Apply for a session',
      content: <div className="text-cjsBrown">Apply for a session</div>,
    },
    {
      text: 'Sponsorship & Partnership',
      content: <div className="text-cjsBrown">Sponsorship & Partnership</div>,
    },
    {
      text: 'Just a question',
      content: <ContactForm />,
    },
  ]
  const [tab, setTab] = useState(0)

  return (
    <section className="my-32 h-screen">
      <div className="px-4 py-14 flex items-center flex-wrap gap-2">
        {tabs.map((t, i) => (
          <motion.button key={i} onClick={() => setTab(i)}>
            <div
              className={`text-xs transition-colors duration-200 font-subtitle text-cjsBrown relative ${
                tab === i ? 'opacity-50' : 'opacity-90 border-b border-1'
              }`}
            >
              {t.text}
            </div>
          </motion.button>
        ))}
      </div>
      <div className="p-12">{tabs[tab].content}</div>
    </section>
  )
}
