'use client'

import { useState, useEffect } from 'react'

export default function useSpotifyauth(code) {
  const [accessToken, setAccessToken] = useState('')
  const [refreshToken, setRefreshToken] = useState('')
  const [expiresIn, setExpiresIn] = useState('')

  useEffect(() => {
    async function login() {
      try {
        const res = await fetch('/api/spotify/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code }),
        })
        const data = await res.json()
        setAccessToken(data.access_token)
        setRefreshToken(data.refresh_token)
        setExpiresIn(data.expires_in)
      } catch (error) {
        console.error(error)
        window.location = '/'
      }
    }
    login()
  }, [code])

  return {
    accessToken,
    refreshToken,
    expiresIn,
  }
}
