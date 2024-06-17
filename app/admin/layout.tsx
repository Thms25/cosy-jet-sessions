// Auth
// import { getServerSession } from 'next-auth'
// import { AuthOptions } from '../api/auth/[...nextauth]/route'
// import Provider from '@/components/auth/Provider'

// Components
// import { findUser } from '@/utils/fetchUtils/UserFetchUtils'

type Props = {
  children: React.ReactNode
}

export default async function Layout({ children }: Props) {
  // const session = await getServerSession(AuthOptions)
  // console.log(session)
  //   const user = await findUser(session?.user?.email)

  return (
    <main>
      {/* <Provider session={session}> */}
      {children}
      {/* </Provider> */}
    </main>
  )
}
