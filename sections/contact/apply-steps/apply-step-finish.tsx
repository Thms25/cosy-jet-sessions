import Input from '@/components/form/Input'
import { motion } from 'framer-motion'
import { useState } from 'react'

function ApplyStepOne({ register, setStep, data, submitData }) {
  const [formData, setFormData] = useState(data)
  const completeStep = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.music_genre ||
      !formData.bio
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
        type="text"
        label="Artist"
        placeholder="Artist name..."
        required
        onChange={e => setFormData({ ...formData, name: e.target.value })}
      />

      <Input
        id="email"
        type="email"
        label="Email"
        placeholder="Your email..."
        required
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        })}
        // error={errors.email && errors.email.message}
        onChange={e => setFormData({ ...formData, email: e.target.value })}
      />

      <Input
        id="tel"
        type="number"
        label="Phone Number"
        placeholder="Your number..."
        required
        onChange={e => setFormData({ ...formData, tel: e.target.value })}
      />

      <Input
        id="music_genre"
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
        type="textarea"
        label="Short bio"
        placeholder="Feel free to ask any questions"
        required
        onChange={e => setFormData({ ...formData, bio: e.target.value })}
        className="min-h-[100px] resize-none"
      />

      {/* Submit */}
      <motion.button
        type="submit"
        onClick={() => completeStep()}
        whileHover={{
          scale: 1.01,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className={`bg-cjsPink hover:bg-cjsWhite hover:text-cjsBrown transition-colors duration-300 text-md text-center rounded-lg w-full py-2 font-semibold`}
      >
        Complete Step 1
      </motion.button>
    </div>
  )
}
