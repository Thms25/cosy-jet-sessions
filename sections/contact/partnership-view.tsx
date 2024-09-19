'use client'

import ContactForm from './contact-form'
import ContactBanner from './contact-banner'
import { useState } from 'react'

export default function PartnershipView({ content }) {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      {showForm ? (
        <section className="mt-24 mb-16" id="form">
          <ContactForm
            type="partnership"
            title="How can we work together ?"
            fields={[
              {
                name: 'name',
                type: 'text',
                placeholder: 'Your name',
                label: 'Hi 👋! My name is...',
                className: '',
              },
              {
                name: 'email',
                type: 'text',
                placeholder: 'Your email',
                label: 'My email is...',
                className: '',
                regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              },
              {
                name: 'company',
                type: 'text',
                placeholder: 'Your company',
                label: 'And I represent...',
                className: '',
              },
              {
                name: 'message',
                type: 'textarea',
                placeholder: 'Your message',
                label: 'Your message...',
                className: ' min-h-[150px]',
              },
            ]}
          />
        </section>
      ) : (
        <ContactBanner
          handleShowForm={() => setShowForm(true)}
          content={{
            title: content.sponsor_title,
            subtitle: content.sponsor_subtitle,
            cta: content.sponsor_cta,
            form_intro: content.sponsor_form_intro,
          }}
        />
      )}
    </>
  )
}
