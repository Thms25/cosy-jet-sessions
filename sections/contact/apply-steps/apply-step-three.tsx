// Components
import Input from '@/components/form/Input'

// Hooks
import { useState } from 'react'

// Animate
import { motion } from 'framer-motion'

export function ApplyStepThree({ setStep, data, submitData }) {
  const [formData, setFormData] = useState(data)
  const completeStep = () => {
    if (
      !formData.instagram ||
      !formData.youtube ||
      !formData.tiktok ||
      !formData.spotify
    ) {
      return
    }
    setStep(1)
    submitData(formData)
  }
  return (
    <div>
      <h3 className="text-lg font-bold mb-6 text-center">
        Step 3: Social Medias
      </h3>

      {/* Instagram */}
      <Input
        id="instagram"
        value={formData.instagram}
        type="text"
        label="Instagram"
        placeholder="Paste link here..."
        required
        onChange={e => setFormData({ ...formData, instagram: e.target.value })}
      />

      {/* Youtube */}
      <Input
        id="youtube"
        value={formData.youtube}
        type="text"
        label="Youtube"
        placeholder="Paste link here..."
        required
        onChange={e => setFormData({ ...formData, youtube: e.target.value })}
      />

      {/* Tiktok */}
      <Input
        id="tiktok"
        value={formData.tiktok}
        type="text"
        label="TikTok"
        placeholder="Paste link here..."
        required
        onChange={e => setFormData({ ...formData, tiktok: e.target.value })}
      />

      {/* Spotify */}
      <Input
        id="spotify"
        value={formData.spotify}
        type="text"
        label="Spotify"
        placeholder="Paste link here..."
        required
        onChange={e => setFormData({ ...formData, spotify: e.target.value })}
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
          Complete Step 3
        </motion.button>
      </div>
    </div>
  )
}
