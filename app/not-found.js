'use client'

import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()
  return (
    <section className="h- h-screen grid items-center p-32 bg-cjsWhite">
      <div className="w-1/2 p-24 m-auto bg-cjsWhite text-cjsBrown border border-cjsBrown rounded shadow-md">
        <h2 className="text-2xl">Page Not Found</h2>
        <p>The page you requested does not exist</p>
        <button
          onClick={() => router.back()}
          className="text-cjsWhite rounded-md shadow-sm px-4 py-2 bg-cjsBrown hover:bg-cjsPink transition duration-250 mt-4"
          href="/"
        >
          Go Back
        </button>
      </div>
    </section>
  )
}
