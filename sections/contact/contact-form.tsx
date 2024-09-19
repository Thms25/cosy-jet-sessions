'use client'

import { Reveal } from '@/components/animations/Reveal'
import Input from '@/components/form/Input'
import { sendEmail } from '@/utils/fetchUtils/EmailFetchUtils'
// Animate
import { motion } from 'framer-motion'

// Components
import Image from 'next/image'

// Hooks
import { useState } from 'react'

export default function ContactForm({ type, fields, title }) {
  const handleSubmit = async (data: any) => {
    const email_sent = await sendEmail(data, type)
    if (email_sent) {
      console.log('Email sent!')
    } else {
      console.error('Email sending failed!')
    }
  }

  return (
    <Reveal>
      <div className="w-full h-full md:w-2/3 mx-auto shadow-lg flex rounded-lg overflow-hidden">
        <Form
          onSubmit={handleSubmit}
          fields={fields}
          title={title}
          className="p-8 w-full md:w-1/2 text-cjsWhite transition-colors duration-[750ms] bg-cjsBrown"
        />
        <Image
          priority
          className="w-1/2 hidden md:block object-cover"
          src="/images/lights.png"
          alt="cjs-lights"
          width={366}
          height={603}
        />
      </div>
    </Reveal>
  )
}

const Form = ({ className, onSubmit, fields, title }) => {
  const formDataState = fields.map((field, index) => {
    return {
      [field.name]: '',
    }
  })

  const [formData, setFormData] = useState(Object.assign({}, ...formDataState))
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onSubmit(formData)
        alert("Thanks for your message! We'll be in touch soon.")
      }}
      className={`${className} text-left`}
    >
      <h3 className="text-lg font-bold mb-6 text-center">{title}</h3>

      {/* Name input */}
      {fields?.map((field, index) => (
        <Input
          key={index}
          id={field.name}
          value={formData[field.name]}
          type={field.type}
          label={field.label}
          placeholder={field.placeholder}
          required
          error={
            field.regex
              ? formData[field.name].match(field.regex) ||
                formData[field.name] === ''
                ? ''
                : 'Invalid input'
              : ''
          }
          onChange={e =>
            setFormData({ ...formData, [field.name]: e.target.value })
          }
          className={field.className}
        />
      ))}

      {/* Submit */}
      <div>
        <motion.button
          whileHover={{
            scale: 1.01,
          }}
          whileTap={{
            scale: 0.95,
          }}
          type="submit"
          className={`bg-cjsPink hover:bg-cjsWhite hover:text-cjsBrown transition-colors duration-300 text-md text-center rounded-lg w-full py-2 font-semibold`}
        >
          Submit
        </motion.button>
      </div>
    </form>
  )
}
