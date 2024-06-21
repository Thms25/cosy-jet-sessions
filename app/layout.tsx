// Styles
import '../styles/globals.scss'

// Auth
import Provider from '@/components/auth/Provider'
import { authOptions } from '@/utils/auth/auth-options'
import { getServerSession } from 'next-auth'

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

export default async function RootLayout({ children }: Props) {
  const session = await getServerSession(authOptions)

  return (
    <html>
      <body>
        <Provider session={session}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
