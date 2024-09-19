'use client'

import { Button } from '@/components/animations/Button'
import { Link as ScrollLink } from 'react-scroll'

type FromBannerProps = {
  content: {
    title: string
    subtitle: string
    cta: string
    form_intro: string
  }
  handleShowForm: () => void
}

export default function ContactBanner({
  content,
  handleShowForm,
}: FromBannerProps) {
  return (
    <header className=" h-screen mx-auto p-16 flex flex-col justify-center items-center">
      <div>
        <h3 className="text-3xl md:text-5xl font-semibold font-subtitle tracking-wide">
          {content.title}
        </h3>
        <p className="md:text-lg text-cjsPink font-caption  my-2">
          {content.subtitle}
        </p>
        <ScrollLink to="form" smooth={true} duration={500}>
          <Button>
            <button
              onClick={() => handleShowForm()}
              className="border border-cjsBrown text-cjsBrown bg-cjsBrown bg-opacity-0 hover:bg-opacity-10 font-medium py-2 px-4 mt-4 rounded-lg  shadow-sm hover:shadow-md transition duration-300"
            >
              {content.cta}
            </button>
          </Button>
        </ScrollLink>
      </div>
      <p className="text-cjsPink text-md mx-auto my-12 p-4 w-full md:w-3/5">
        {content.form_intro}
      </p>
    </header>
  )
}
