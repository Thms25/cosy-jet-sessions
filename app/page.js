import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <nav>
        <ul>
          <li>
          <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/media">
              Media
            </Link>
          </li>
          <li>
          <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
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
      <main>
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
      </main>
    </main>
  )
}
