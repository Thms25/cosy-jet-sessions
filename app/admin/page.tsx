// Utils
import {
  getArtists,
  getShorts,
  getVideos,
} from '@/utils/fetchUtils/ArtistFetchUtils'

// Auth
import { getServerSession } from 'next-auth'
import { authOptions } from '@/utils/auth/auth-options'

// Components
import Login from '@/components/auth/Login'
import Logout from '@/components/auth/Logout'
import AdminView from '@/sections/admin/admin-view'
import AccessDenied from '@/components/layouts/error/acces-denied'

export const revalidate = 60 * 60 * 24 // 24 hours

// ----------------------------------------------------------

export default async function page() {
  const session = (await getServerSession(authOptions)) as any
  const isAdmin = session?.user?.role === 'admin'

  const artists = isAdmin ? await getArtists() : []
  const videos = isAdmin ? await getVideos() : []
  const shorts = isAdmin ? await getShorts() : []

  return (
    <div className="p-8 md:p-16">
      {session ? (
        <>
          {isAdmin ? (
            <AdminView artists={artists} videos={videos} shorts={shorts} />
          ) : (
            <AccessDenied />
          )}
          <Logout />
        </>
      ) : (
        <Login />
      )}
    </div>
  )
}
