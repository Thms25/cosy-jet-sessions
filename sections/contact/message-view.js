import Container from '@/components/layouts/Container'
import MessageForm from './message-form'

export default function MessageView() {
  return (
    <section className="">
      <header className="relative w-full mt-16 sm:mt-12 grid place-items-center mb-16">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/decor.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px)',
          }}
        ></div>
        <div className="z-10 text-center p-20 sm:p-24 xl:p-32 w-full">
          <h1 className="text-8xl text-cjsWhite tracking-wider drop-shadow-md">
            Leave us a message
          </h1>
          <h3 className="text-cjsWhite text-xl tracking-wide">
            We will get back to you as soon as possible
          </h3>
        </div>
      </header>
      <MessageForm />
    </section>
  )
}
