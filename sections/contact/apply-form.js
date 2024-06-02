'use client'

import { Reveal } from '@/components/animations/Reveal'
import StepProgress from '@/components/tools/step-progress'
import { sendEmail } from '@/utils/fetchUtils/EmailFetchUtils'
// Animate
import { motion } from 'framer-motion'

// Components
import Image from 'next/image'
import { useRouter } from 'next/navigation'

// Hooks
import { useState } from 'react'

export default function ApplyForm() {
  const handleSubmit = async data => {
    try {
      console.log(data)
      await sendEmail(data)
      handleSetStep(1)
    } catch (error) {
      console.error(error)
    }
  }
  const [stepsComplete, setStepsComplete] = useState(0)
  const numSteps = 5

  const handleSetStep = num => {
    if (
      (stepsComplete === 0 && num === -1) ||
      (stepsComplete === numSteps && num === 1)
    ) {
      return
    }
    setStepsComplete(pv => pv + num)
  }

  return (
    <section>
      <p className="text-md mx-auto p-4 w-full md:w-3/5">
        The following questions are very important in the process of selecting
        the upcoming artists for our sessions, please take the time to fill them
        out carefully. We will read every answer carefully and get back to you
        as soon as possible.
      </p>

      <StepProgress steps={stepsComplete} numSteps={numSteps} />

      <div className="w-full md:w-2/3 mx-auto shadow-lg flex rounded-lg">
        <Form
          stepsComplete={stepsComplete}
          onSubmit={handleSubmit}
          onStepChange={handleSetStep}
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
    </section>
  )
}

const Form = ({ className, onSubmit, onStepChange, stepsComplete }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    music_genre: '',
    bio: '',
    tel: '',
    live: '',
    motivation: '',
    news: '',
    instagram: '',
    youtube: '',
    tiktok: '',
    spotify: '',
    collab: false,
    engagement: false,
    calendar: false,
    period: '',
    other: '',
  })
  const stepChange = val => {
    onStepChange(val)
  }
  const handleGetData = data => {
    setFormData({ ...formData, ...data })
  }
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onSubmit(formData)
        setFormData({
          name: '',
          email: '',
          music_genre: '',
          bio: '',
          tel: '',
          live: '',
          motivation: '',
          news: '',
          instagram: '',
          youtube: '',
          tiktok: '',
          spotify: '',
          collab: false,
          engagement: false,
          calendar: false,
          period: '',
          other: '',
        })
      }}
      className={`${className} text-left`}
    >
      {stepsComplete === 0 && (
        <Reveal>
          <StepOne
            data={formData}
            setStep={stepChange}
            submitData={handleGetData}
          />
        </Reveal>
      )}
      {stepsComplete === 1 && (
        <Reveal>
          <StepTwo
            data={formData}
            setStep={stepChange}
            submitData={handleGetData}
          />
        </Reveal>
      )}
      {stepsComplete === 2 && (
        <Reveal>
          <StepThree
            data={formData}
            setStep={stepChange}
            submitData={handleGetData}
          />
        </Reveal>
      )}
      {stepsComplete === 3 && (
        <Reveal>
          <StepFour
            data={formData}
            setStep={stepChange}
            submitData={handleGetData}
          />
        </Reveal>
      )}
      {stepsComplete === 4 && (
        <Reveal>
          <StepFive
            data={formData}
            setStep={stepChange}
            submitData={handleGetData}
          />
        </Reveal>
      )}
      {stepsComplete === 5 && (
        <Reveal>
          <StepFinish setStep={stepChange} />
        </Reveal>
      )}
    </form>
  )
}

function StepOne({ setStep, data, submitData }) {
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

      {/* Name input */}
      <div className="mb-6">
        <p className="text-md mb-2">Artist name</p>
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
        <p className="text-md mb-2">Email</p>
        <input
          required
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          type="text"
          placeholder="Your email..."
          className={` bg-cjsPink text-xs placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Tel input */}
      <div className="mb-6">
        <p className="text-md mb-2">Phone Number</p>
        <input
          required
          value={formData.tel}
          onChange={e => setFormData({ ...formData, tel: e.target.value })}
          type="number"
          placeholder="Your number..."
          className={` bg-cjsPink text-xs placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Music Genre input */}
      <div className="mb-6">
        <p className="text-md mb-2">Music genre</p>
        <input
          required
          value={formData.music_genre}
          onChange={e =>
            setFormData({ ...formData, music_genre: e.target.value })
          }
          type="text"
          placeholder="Your type of music..."
          className={` bg-cjsPink text-xs placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Bio */}
      <div className="mb-6">
        <p className="text-md mb-2">Short bio</p>
        <textarea
          required
          value={formData.bio}
          onChange={e => setFormData({ ...formData, bio: e.target.value })}
          placeholder="Feel free to ask any questions"
          className={`bg-cjsPink text-xs min-h-[150px] resize-none placeholder-cjsWhite p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Submit */}
      <div>
        <motion.button
          onClick={() => completeStep()}
          whileHover={{
            scale: 1.01,
          }}
          whileTap={{
            scale: 0.95,
          }}
          // type="submit"
          className={`bg-cjsPink hover:bg-cjsWhite hover:text-cjsBrown transition-colors duration-300 text-md text-center rounded-lg w-full py-2 font-semibold`}
        >
          Complete Step 1
        </motion.button>
      </div>
    </div>
  )
}

function StepTwo({ setStep, data, submitData }) {
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
        Step 2: Build your case
      </h3>

      {/* Live perf input */}
      <div className="mb-6">
        <p className="text-md mb-2">Link to a live performance</p>
        <input
          required
          value={formData.live}
          onChange={e => setFormData({ ...formData, live: e.target.value })}
          type="text"
          placeholder="Paste link here..."
          className={` bg-cjsPink text-xs placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Motivatiojs */}
      <div className="mb-6">
        <p className="text-md mb-2">Artist's motivations & intentions</p>
        <textarea
          value={formData.motivation}
          onChange={e =>
            setFormData({ ...formData, motivation: e.target.value })
          }
          placeholder="Tell us why you want to join the family"
          className={`bg-cjsPink text-xs min-h-[150px] resize-none placeholder-cjsWhite p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* news */}
      <div className="mb-6">
        <p className="text-md mb-2">
          News: upcoming shows / releases, or any relevant event
        </p>
        <textarea
          value={formData.news}
          onChange={e => setFormData({ ...formData, news: e.target.value })}
          placeholder="What's coming up ?"
          className={`bg-cjsPink text-xs min-h-[150px] resize-none placeholder-cjsWhite p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

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

function StepThree({ setStep, data, submitData }) {
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
        Step 3: Social Medias
      </h3>

      {/* Instagram */}
      <div className="mb-6">
        <p className="text-md mb-2">Instagram</p>
        <input
          required
          value={formData.instagram}
          onChange={e =>
            setFormData({ ...formData, instagram: e.target.value })
          }
          type="text"
          placeholder="Paste link here..."
          className={` bg-cjsPink text-xs placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Youtube */}
      <div className="mb-6">
        <p className="text-md mb-2">Youtube</p>
        <input
          required
          value={formData.youtube}
          onChange={e => setFormData({ ...formData, youtube: e.target.value })}
          type="text"
          placeholder="Paste link here..."
          className={` bg-cjsPink text-xs placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Tiktok */}
      <div className="mb-6">
        <p className="text-md mb-2">TikTok</p>
        <input
          required
          value={formData.tiktok}
          onChange={e => setFormData({ ...formData, tiktok: e.target.value })}
          type="text"
          placeholder="Paste link here..."
          className={` bg-cjsPink text-xs placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Spotify */}
      <div className="mb-6">
        <p className="text-md mb-2">Spotify</p>
        <input
          required
          value={formData.spotify}
          onChange={e => setFormData({ ...formData, spotify: e.target.value })}
          type="text"
          placeholder="Paste link here..."
          className={` bg-cjsPink text-xs placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

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

function StepFour({ setStep, data, submitData }) {
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
        Step 4: Our Requirements
      </h3>

      {/* collab */}
      <div className="mb-6">
        <p className="text-md mb-2">
          We ask the artist to do collab posts on instagram
        </p>
        <div className="flex items-center mb-6 bg-cjsPink p-2 rounded-lg">
          <input
            required
            value={formData.collab}
            onChange={e => setFormData({ ...formData, collab: e.target.value })}
            type="checkbox"
            className="form-checkbox h-5 w-5 text-cjsWhite bg-cjsWhite"
          />
          <label className="ml-2 text-md text-cjsWhite">
            I accept to collaborate on instagram posts
          </label>
        </div>
      </div>

      {/* engagement */}
      <div className="mb-6">
        <p className="text-md mb-2">
          We need the artist to communicate on their social medias and engage
          with audience (comments)
        </p>
        <div className="flex items-center mb-6 bg-cjsPink p-2 rounded-lg">
          <input
            required
            value={formData.engagement}
            onChange={e =>
              setFormData({ ...formData, engagement: e.target.value })
            }
            type="checkbox"
            className="form-checkbox h-5 w-5 text-cjsWhite bg-cjsWhite"
          />
          <label className="ml-2 text-md text-cjsWhite">
            I accept to collaborate on instagram posts
          </label>
        </div>
      </div>

      {/* calendar */}
      <div className="mb-6">
        <p className="text-md mb-2">
          The artist's social media calendar must keep a week dedicated to the
          sessions and its promotion
        </p>
        <div className="flex items-center mb-6 bg-cjsPink p-2 rounded-lg">
          <input
            required
            value={formData.calendar}
            onChange={e =>
              setFormData({ ...formData, calendar: e.target.value })
            }
            type="checkbox"
            className="form-checkbox h-5 w-5 text-cjsWhite bg-cjsWhite"
          />
          <label className="ml-2 text-md text-cjsWhite">
            I accept tokeep my calendar for cosy room
          </label>
        </div>
      </div>

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

function StepFive({ setStep, data, submitData }) {
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
    // setStep(1)
    submitData(formData)
  }
  return (
    <div>
      <h3 className="text-lg font-bold mb-6 text-center">
        Step 4: Last Details
      </h3>

      {/* Period input */}
      <div className="mb-6">
        <p className="text-md mb-2">Ideal Date periods to share the videos</p>
        <input
          required
          value={formData.period}
          onChange={e => setFormData({ ...formData, period: e.target.value })}
          type="text"
          placeholder="Your name..."
          className={` bg-cjsPink text-xs placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Other */}
      <div className="mb-6">
        <p className="text-md mb-2">Something to add ?</p>
        <textarea
          required
          value={formData.other}
          onChange={e => setFormData({ ...formData, other: e.target.value })}
          placeholder="Feel free to add anything you want to share with us"
          className={`bg-cjsPink text-xs min-h-[150px] resize-none placeholder-cjsWhite p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

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

function StepFinish({ setStep }) {
  const router = useRouter()
  return (
    <div>
      <h1 className="text-xl font-semibold font-subtitle my-6 text-center">
        Thanks a lot for taking the time to fill out the form ! 😊
      </h1>
      <h4 className="text-sm font-subtitle text-center">
        We will read every answer carefully and get back to you asap !
      </h4>

      {/* Submit */}
      <div className="mt-8">
        <motion.button
          onClick={() => router.push('/')}
          whileHover={{
            scale: 1.01,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className={`bg-cjsPink hover:bg-cjsWhite hover:text-cjsBrown transition-colors duration-300 text-md text-center rounded-lg w-full py-2 font-semibold`}
        >
          Go Back Home
        </motion.button>
      </div>
    </div>
  )
}
