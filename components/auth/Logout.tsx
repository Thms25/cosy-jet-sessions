'use client'

import { signOut } from 'next-auth/react'
import { Button } from '../animations/Button'

export default function Logout() {
  return (
    <Button>
      <button onClick={() => signOut()} className="btn">
        Sign Out
      </button>
    </Button>
  )
}
