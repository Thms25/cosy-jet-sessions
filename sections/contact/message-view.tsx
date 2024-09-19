'use client'

import ContactForm from './contact-form'
import ContactBanner from './contact-banner'
import { useState } from 'react'

export default function MessageView({ content }) {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      {showForm ? (
        <section className="mt-24 mb-16" id="form">
          <ContactForm
            type="message"
            title="Leave us a message"
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
            title: content.msg_title,
            subtitle: content.msg_subtitle,
            cta: content.msg_cta,
            form_intro: content.msg_sponsor_intro,
          }}
        />
      )}
    </>
  )
}
