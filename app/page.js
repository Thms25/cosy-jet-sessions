import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>
            <Link href="/media">
              Media
            </Link>
          </li>
          <li>Contact</li>
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
    </main>
  )
}
