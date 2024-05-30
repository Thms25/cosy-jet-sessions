import Image from 'next/image'
import ApplyForm from './apply-form'

export default function ApplyView() {
  return (
    <main className="h-screen">
      <header className="relative w-full mt-32 grid place-items-center">
        <div className="absolute inset-0">
          <Image
            priority
            className="w-full h-full object-cover blur-3xl"
            src="/images/decor.png"
            alt="cjs-decor"
            layout="fill"
          />
        </div>
        <div className="z-10 text-center p-24 w-full">
          <h1 className="text-4xl text-cjsWhite tracking-wider drop-shadow-md">
            Apply for a session
          </h1>
          <h3 className="text-cjsWhite text-lgxl tracking-wide">
            Become a part of the cosy family
          </h3>
        </div>
      </header>

      <section className="my-12">
        <ApplyForm />
      </section>
    </main>
  )
}
