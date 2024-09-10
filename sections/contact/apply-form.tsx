'use client'

// Hooks
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, FormProvider } from 'react-hook-form'

// Utils
import { sendEmail } from '@/utils/fetchUtils/EmailFetchUtils'

// Animate
import { motion } from 'framer-motion'

// Components
import Image from 'next/image'
import { Reveal } from '@/components/animations/Reveal'
import StepProgress from '@/components/tools/step-progress'
import { ApplyStepOne } from './apply-steps/apply-step-one'
import { ApplyStepTwo } from './apply-steps/apply-step-two'
import { ApplyStepThree } from './apply-steps/apply-step-three'
import { ApplyStepFour } from './apply-steps/apply-step-four'
import { ApplyStepFive } from './apply-steps/apply-step-five'

type ApplyFormProps = {
  content: {
    apply_form_intro: string
  }
}

// ---------------------------------------------------------------------

export default function ApplyForm({ content }: ApplyFormProps) {
  const [emaoilSent, setEmailSent] = useState(false)

  async function handleSubmit(data: any) {
    console.log('Data:', data)
    const email_sent = await sendEmail(data, 'apply')
    if (email_sent) {
      console.log('Email sent ? ', email_sent)
      handleSetStep(1)
      setEmailSent(true)
    } else {
      console.error('Email sending failed!')
    }
  }

  const [stepsComplete, setStepsComplete] = useState(0)
  const numSteps = 5

  const handleSetStep = (num: number) => {
    if (
      (stepsComplete === 0 && num === -1) ||
      (stepsComplete === numSteps && num === 1)
    ) {
      return
    }
    setStepsComplete(pv => pv + num)
  }
  return (
    <section className="">
      <StepProgress steps={stepsComplete} numSteps={numSteps} />

      <div className="w-full md:w-2/3 mx-auto shadow-lg flex rounded-lg overflow-hidden">
        {/* <FormProvider {...methods}> */}
        <Form
          emailSent={emaoilSent}
          stepsComplete={stepsComplete}
          onSubmit={handleSubmit}
          onStepChange={handleSetStep}
          className="p-8 w-full md:w-1/2 text-cjsWhite transition-colors duration-[750ms] bg-cjsBrown"
        />
        {/* </FormProvider> */}

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

const Form = ({
  // register,
  // errors,
  className,
  onSubmit,
  onStepChange,
  stepsComplete,
  emailSent,
}) => {
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

  const stepChange = (val: number) => {
    onStepChange(val)
  }
  const handleGetData = (data: any) => {
    setFormData({ ...formData, ...data })
    if (stepsComplete === 5) {
      onSubmit({ ...formData, ...data })
      if (!emailSent) {
        stepChange(-1)
      }
    }
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
      }}
      className={`${className} text-left`}
    >
      {stepsComplete === 0 && (
        <Reveal>
          <ApplyStepOne
            data={formData}
            setStep={stepChange}
            submitData={handleGetData}
          />
        </Reveal>
      )}
      {stepsComplete === 1 && (
        <Reveal>
          <ApplyStepTwo
            data={formData}
            setStep={stepChange}
            submitData={handleGetData}
          />
        </Reveal>
      )}
      {stepsComplete === 2 && (
        <Reveal>
          <ApplyStepThree
            data={formData}
            setStep={stepChange}
            submitData={handleGetData}
          />
        </Reveal>
      )}
      {stepsComplete === 3 && (
        <Reveal>
          <ApplyStepFour
            data={formData}
            setStep={stepChange}
            submitData={handleGetData}
          />
        </Reveal>
      )}
      {stepsComplete === 4 && (
        <Reveal>
          <ApplyStepFive
            data={formData}
            setStep={stepChange}
            submitData={handleGetData}
          />
        </Reveal>
      )}
      {stepsComplete === 5 && emailSent && (
        <Reveal>
          <StepFinish setStep={stepChange} />
        </Reveal>
      )}
    </form>
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
