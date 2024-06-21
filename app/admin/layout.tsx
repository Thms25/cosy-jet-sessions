// Auth
// import { getServerSession } from 'next-auth'
// import { authOptions } from '@/utils/auth/auth-options'
// import Provider from '@/components/auth/Provider'

import Container from '@/components/layouts/Container'

// Components
// import { findUser } from '@/utils/fetchUtils/UserFetchUtils'

type Props = {
  children: React.ReactNode
}

export default async function Layout({ children }: Props) {
  // const session = await getServerSession(authOptions)
  // console.log(session)
  //   const user = await findUser(session?.user?.email)

  return (
    <main>
      {/* <Provider session={session}> */}
      <Container>{children}</Container>
      {/* </Provider> */}
    </main>
  )
}
