import Image from 'next/image'

export default function Loading() {
  return (
    <div className="h-screen grid items-center">
      <Image
        priority
        className="opacity-30 m-auto animate-pulse p-12 object-contain"
        src="/images/cjsIcon.png"
        alt="cjs-banner"
        width={334}
        height={335}
      />
    </div>
  )
}
