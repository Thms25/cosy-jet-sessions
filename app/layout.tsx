// Styles
import '../styles/globals.scss'

// Components
import Navbar from '../components/layouts/Nav/Navbar'
import Footer from '../components/layouts/Footer'

export const metadata = {
  title: 'Cosy Jet Sessions',
  description: 'The coziest acoutsic sessions',
  icons: {
    icon: '/images/cjsIcon.png',
    width: 'auto',
    height: 'auto',
  },
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
