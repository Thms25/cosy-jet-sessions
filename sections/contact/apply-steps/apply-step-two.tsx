// Components
import Input from '@/components/form/Input'

// Hooks
import { useState } from 'react'

// Animate
import { motion } from 'framer-motion'

export function ApplyStepTwo({ setStep, data, submitData }) {
  const [formData, setFormData] = useState(data)

  const completeStep = () => {
    if (!formData.live || !formData.motivation || !formData.news) {
      return
    }
    setStep(1)
    submitData(formData)
  }
  return (
    <div>
      <h3 className="text-lg font-bold mb-6 text-center">
        Step 2: Build your case
      </h3>

      {/* Live perf input */}
      <Input
        id="live"
        value={formData.live}
        type="text"
        label="Link to a live performance"
        placeholder="Paste link here..."
        required
        onChange={e => setFormData({ ...formData, live: e.target.value })}
      />

      {/* Motivatiojs */}
      <Input
        id="motivation"
        value={formData.motivation}
        type="textarea"
        label="Motivations & intentions"
        placeholder="Tell us why you want to join the family"
        required
        onChange={e => setFormData({ ...formData, motivation: e.target.value })}
        className="min-h-[150px]"
      />

      {/* news */}
      <Input
        id="news"
        value={formData.news}
        type="textarea"
        label="Upcoming shows / releases, or any relevant event"
        placeholder="What's coming up ?"
        required
        onChange={e => setFormData({ ...formData, news: e.target.value })}
        className="min-h-[150px]"
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
          Complete Step 2
        </motion.button>
      </div>
    </div>
  )
}
