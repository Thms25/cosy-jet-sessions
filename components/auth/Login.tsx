'use client'

import { signIn } from 'next-auth/react'
import { Button } from '../animations/Button'

export default function Login() {
  return (
    <Button>
      <button onClick={() => signIn('google')} className="btn">
        Sign In
      </button>
    </Button>
  )
}
