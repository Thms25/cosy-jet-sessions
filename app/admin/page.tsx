import Login from '@/components/auth/Login'
import Logout from '@/components/auth/Logout'
import Container from '@/components/layouts/Container'
import AdminView from '@/sections/admin/admin-view'
import {
  getArtists,
  getShorts,
  getVideos,
} from '@/utils/fetchUtils/ArtistFetchUtils'

// Auth
import { getServerSession } from 'next-auth'
import { authOptions } from '@/utils/auth/auth-options'
// import { useRouter } from 'next/router'
import AccessDenied from '@/components/layouts/error/acces-denied'

export const revalidate = 60 * 60 * 24 // 24 hours

// ----------------------------------------------------------

export default async function page() {
  const session = (await getServerSession(authOptions)) as any
  const isAdmin = session?.user?.role === 'admin'

  const artists = isAdmin ? await getArtists() : []
  // const videos = await getVideos()
  // const shorts = await getShorts()

  return (
    <div className="p-8 md:p-16">
      {session && <h1>{session.user.name}</h1>}
      {session ? (
        <>
          <Logout />
          {isAdmin ? (
            <AdminView
              artists={artists}
              // videos={videos}
              // shorts={shorts}
            />
          ) : (
            <AccessDenied />
          )}
        </>
      ) : (
        <Login />
      )}
    </div>
  )
}
