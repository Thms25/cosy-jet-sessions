'use client'

// section
import ContactForm from './contact-form'

// Hooks
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactView() {
  const tabs = [
    {
      text: 'Just a question',
      content: <ContactForm />,
    },
    {
      text: 'Apply for a session',
      content: <div>Apply for a session</div>,
    },
    {
      text: 'Sponsorship & Partnership',
      content: <div>Sponsorship & Partnership</div>,
    },
  ]
  const [tab, setTab] = useState(0)

  return (
    <section className="p-4 lg:p-8">
      <div className="px-4 py-14 flex items-center flex-wrap gap-2">
        {tabs.map((t, i) => (
          <div className="group relative w-full md:w-fit m-2" key={i}>
            <button
              onClick={() => setTab(i)}
              className="relative z-0 flex w-full transition-colors md:flex-col mb-1"
            >
              <span
                className={`max-w-full text-start text-sm font-main tracking-wider transition-colors ${
                  tab === i
                    ? 'text-cjsBrown'
                    : 'text-cjsPink group-hover:text-cjsBrown'
                }`}
              >
                {t.text}
              </span>
            </button>
            {tab === i && (
              <motion.span
                layoutId="horizontal-slide-feature-slider"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-cjsBrown"
              />
            )}
          </div>
        ))}
      </div>
      <div className="p-12">{tabs[tab].content}</div>
    </section>
  )
}
