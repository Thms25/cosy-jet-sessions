// Components
import Input from '@/components/form/Input'

// Hooks
import { useState } from 'react'

// Animate
import { motion } from 'framer-motion'

export function ApplyStepFive({ setStep, data, submitData }) {
  const [formData, setFormData] = useState(data)
  const completeStep = () => {
    if (!formData.period) {
      return
    }
    setStep(1)
    submitData(formData)
  }

  return (
    <div>
      <h3 className="text-lg font-bold mb-6 text-center">
        Step 5: Last Details
      </h3>

      {/* Period input */}
      <Input
        id="period"
        value={formData.period}
        type="text"
        required
        onChange={e => setFormData({ ...formData, period: e.target.value })}
        placeholder="Type in dates here..."
        label="Ideal Date periods to share the videos"
      />

      {/* Other */}
      <Input
        id="other"
        value={formData.other}
        type="textarea"
        required
        onChange={e => setFormData({ ...formData, other: e.target.value })}
        placeholder="Feel free to add anything you want to share with us"
        label="Something to add ?"
        className="min-h-[150px]"
      />

      {/* Submit */}
      <div className="grid grid-cols-1 gap-3">
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
          Complete Application !
        </motion.button>
      </div>
    </div>
  )
}
