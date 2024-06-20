'use client'

import { Button } from '@/components/animations/Button'
import Logout from '@/components/auth/Logout'
import { useRouter } from 'next/navigation'

export default function AccessDenied() {
  const router = useRouter()
  return (
    <div className="mx-auto my-24 p-8 md:p-24 w-full md:w-1/2 border border-cjsBrown shadow-md rounded-lg">
      <h1 className="text-2xl">Access Denied</h1>
      <p className="text-lg my-4">
        You do not have permissions to access this page
      </p>
      <div className="w-full flex justify-center gap-4">
        <Button>
          <button className="btn" onClick={() => router.push('/')}>
            Home
          </button>
        </Button>
        <Logout />
      </div>
    </div>
  )
}
