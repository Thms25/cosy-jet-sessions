import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Media</li>
            <li>Contact</li>
          </ul>
        </nav>
        <Image
          priority
          src="/images/cjs-banner.png"
          alt='cjs-banner'
          width={1710}
          height={751}
        />
      </header>
    </main>
  )
}
