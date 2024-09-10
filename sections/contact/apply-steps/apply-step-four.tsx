// Components
import Input from '@/components/form/Input'

// Hooks
import { useState } from 'react'

// Animate
import { motion } from 'framer-motion'
import InputChecbox from '@/components/form/Input-checkbox'

export function ApplyStepFour({ setStep, data, submitData }) {
  const [formData, setFormData] = useState(data)
  const completeStep = () => {
    setStep(1)
    submitData(formData)
  }

  return (
    <div>
      <h3 className="text-lg font-bold mb-6 text-center">
        Step 4: Our Requirements
      </h3>

      {/* collab */}
      <InputChecbox
        value={formData.collab}
        label="We ask the artist to do collab posts on instagram"
        placeholder="I accept to collaborate on instagram posts"
        onChange={e => setFormData({ ...formData, collab: e.target.value })}
      />

      {/* engagement */}
      <InputChecbox
        value={formData.engagement}
        label="We need the artist to communicate on their social medias and engage with audience"
        placeholder="I accept to collaborate on instagram posts"
        onChange={e => setFormData({ ...formData, engagement: e.target.value })}
      />

      {/* calendar */}
      <InputChecbox
        value={formData.calendar}
        label="The artist's social media calendar must keep a week dedicated to the sessions and its promotion"
        placeholder="I accept tokeep my calendar for cosy room"
        onChange={e => setFormData({ ...formData, calendar: e.target.value })}
      />

      {/* Submit */}
      <div className="grid grid-cols-2 gap-3">
        <motion.button
          onClick={() => setStep(-1)}
          whileHover={{
            scale: 1.01,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className={`bg-cjsPink hover:bg-cjsWhite hover:text-cjsBrown transition-colors duration-300 text-md text-center rounded-lg w-full py-2 font-semibold`}
        >
          Go Back
        </motion.button>
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
          Complete Step 4
        </motion.button>
      </div>
    </div>
  )
}
