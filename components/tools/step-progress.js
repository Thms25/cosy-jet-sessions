'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function StepProgress({ numSteps = 4, steps = 0 }) {
  const [stepsComplete, setStepsComplete] = useState(steps)

  useEffect(() => {
    setStepsComplete(steps)
  }, [steps])

  return (
    <div className="p-8  w-full max-w-2xl mx-auto">
      <Steps numSteps={numSteps} stepsComplete={stepsComplete} />
    </div>
  )
}

const Steps = ({ numSteps, stepsComplete }) => {
  const stepArray = Array.from(Array(numSteps).keys())

  return (
    <div className="flex items-center justify-between gap-3">
      {stepArray.map(num => {
        const stepNum = num + 1
        const isActive = stepNum <= stepsComplete
        return (
          <div key={stepNum}>
            <div className="relative">
              <div
                className={`w-10 h-10 flex items-center justify-center shrink-0 border-2 rounded-full font-semibold text-sm relative  transition-colors duration-300 ${
                  isActive
                    ? 'border-cjsBrown bg-cjsBrown text-cjsWhite'
                    : 'border-cjsBrown text-cjsBrown'
                }`}
              >
                <AnimatePresence mode="wait">
                  {isActive ? (
                    <motion.svg
                      key="icon-marker-check"
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="1.6em"
                      width="1.6em"
                      xmlns="http://www.w3.org/2000/svg"
                      initial={{ rotate: 180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -180, opacity: 0 }}
                      transition={{ duration: 0.125 }}
                    >
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
                    </motion.svg>
                  ) : (
                    <motion.span
                      key="icon-marker-num"
                      initial={{ rotate: 180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -180, opacity: 0 }}
                      transition={{ duration: 0.125 }}
                    >
                      {stepNum}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
