'use client'

import { sendEmail } from '@/utils/fetchUtils/EmailFetchUtils'
// Animate
import { motion } from 'framer-motion'

// Components
import Image from 'next/image'

// Hooks
import { useState } from 'react'

export default function MessageForm() {
  const handleSubmit = async data => {
    try {
      await sendEmail(data)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="w-full h-full md:w-2/3 mx-auto shadow-lg flex rounded-lg overflow-hidden">
      <Form
        onSubmit={handleSubmit}
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
  )
}

const Form = ({ className, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    email: '',
  })
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onSubmit(formData)
        alert("Thanks for your message! We'll be in touch soon.")
      }}
      className={`${className} text-left`}
    >
      <h3 className="text-lg font-bold mb-6 text-center">Leave us a message</h3>

      {/* Name input */}
      <div className="mb-6">
        <p className="text-md mb-2">Hi 👋! My name is...</p>
        <input
          required
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          type="text"
          placeholder="Your name..."
          className={` bg-cjsPink text-xs placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Mail input */}
      <div className="mb-6">
        <p className="text-md mb-2">My email is...</p>
        <input
          required
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          type="text"
          placeholder="Your email..."
          className={` bg-cjsPink text-xs placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Message */}
      <div className="mb-6">
        <p className="text-md mb-2">Your message...</p>
        <textarea
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
          placeholder="Feel free to ask any questions"
          className={`bg-cjsPink text-xs min-h-[150px] resize-none placeholder-cjsWhite p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

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
