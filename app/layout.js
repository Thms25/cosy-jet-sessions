import './styles/globals.scss'
import Link from 'next/link'
import styles from './styles/navbar.module.scss'
import style from './styles/home.module.scss'

export const metadata = {
  title: 'Cosy Jet Sessions',
  description: 'The coziest acoutsic sessions',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav className={styles.nav}>
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
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
