// Styles
import '../styles/globals.scss'

// Auth
// import { getServerSession } from 'next-auth'
// import { AuthOptions } from './api/auth/[...nextauth]/route'
// import Provider from '@/components/auth/Provider'

// Components
import Navbar from '../components/layouts/Nav/Navbar'
import Footer from '../components/layouts/Footer'
import { type } from 'os'
// import { findUser } from "@/utils/fetchUtils/UserFetchUtils";

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
  // const session = await getServerSession(AuthOptions)
  // const user = await findUser(session?.user?.email);

  return (
    <html>
      <body>
        {/* <Provider session={session}> */}
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* </Provider> */}
      </body>
    </html>
  )
}
