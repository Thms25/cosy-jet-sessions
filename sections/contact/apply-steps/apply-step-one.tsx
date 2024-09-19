// Components
import Input from '@/components/form/Input'

// Hooks
import { useState } from 'react'

// Animate
import { motion } from 'framer-motion'

export function ApplyStepOne({ setStep, data, submitData }) {
  const [formData, setFormData] = useState(data)
  const [error, setError] = useState(false)
  const completeStep = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.music_genre ||
      !formData.bio ||
      error
    ) {
      return
    }
    setStep(1)
    submitData(formData)
  }

  return (
    <div>
      <h3 className="text-lg font-bold mb-6 text-center">
        Step 1: Artist Information
      </h3>

      <Input
        id="name"
        value={formData.name}
        type="text"
        label="Artist"
        placeholder="Artist name..."
        required
        onChange={e => setFormData({ ...formData, name: e.target.value })}
      />

      <Input
        id="email"
        value={formData.email}
        type="text"
        label="Email"
        placeholder="Your email..."
        required
        error={
          formData.email.match(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
          ) || !formData.email
            ? ''
            : 'Invalid email'
        }
        onChange={e => {
          e.target.value.match(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
          )
            ? setError(false)
            : setError(true)

          setFormData({ ...formData, email: e.target.value })
        }}
      />

      <Input
        id="tel"
        value={formData.tel}
        type="text"
        label="Phone Number"
        placeholder="Your number..."
        required
        error={
          formData.tel.match(/^\+?[0-9\s\-()]{7,15}$/) || !formData.tel
            ? ''
            : 'Invalid phone number'
        }
        onChange={e => {
          e.target.value.match(/^\+?[0-9\s\-()]{7,15}$/)
            ? setError(false)
            : setError(true)

          setFormData({ ...formData, tel: e.target.value })
        }}
      />

      <Input
        id="music_genre"
        value={formData.music_genre}
        type="text"
        label="Music genre"
        placeholder="Your type of music..."
        required
        onChange={e =>
          setFormData({ ...formData, music_genre: e.target.value })
        }
      />

      <Input
        id="bio"
        value={formData.bio}
        type="textarea"
        label="Short bio"
        placeholder="Feel free to ask any questions"
        required
        onChange={e => setFormData({ ...formData, bio: e.target.value })}
        className="min-h-[100px] resize-none"
      />

      {/* Submit */}
      <motion.button
        onClick={() => completeStep()}
        whileHover={{
          scale: 1.01,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className={`bg-cjsPink hover:bg-cjsWhite hover:text-cjsBrown transition-colors duration-300 text-md text-center rounded-lg w-full py-2 font-semibold`}
      >
        {error ? 'Please fill out the form correctly' : 'Complete Step 1'}
      </motion.button>
    </div>
  )
}
