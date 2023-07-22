import Image from 'next/image'
export default function Home() {
  return (
    <div>
      <header>
        <div className='banner'>
          <Image
            id='cjs-banner'
            priority
            src="/images/cjs-banner.png"
            alt='cjs-banner'
            width={1710}
            height={751}
          />
        </div>
      </header>
      <div>
        <section>
          <h1>Browse through all our content</h1>
          <div className='concept-section'>
            <div className='concept-card'>
              Videos
            </div>
            <div className='concept-card'>
              interviews
            </div>
            <div className='concept-card'>
              podcasts
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
