import { fakeMerch } from '@/utils/data/fakeData'
import { ratingStar } from '@/utils/data/svgData'
import Image from 'next/image'
import Link from 'next/link'

// Auth
import { getServerSession } from 'next-auth'

export default async function Shop() {
  const session = await getServerSession()

  return (
    <section>
      <div className="h-screen p-24 text-md">
        <h1>
          {session?.user ? `Hello ${session.user.name}, ` : ''}Check out our
          cozy merch
        </h1>
        <div className="my-8 grid grid-cols-3 gap-6">
          {fakeMerch.map((merch, index) => (
            <div
              className="w-full max-w-sm bg-cjsBrown border border-cjsWhite rounded-lg shadow-md"
              key={index}
            >
              <Link href="#">
                <Image
                  priority
                  className="w-full h-1/2"
                  src={merch.image}
                  alt="merchandise_image"
                  width={1600}
                  height={1200}
                />
              </Link>
              <div className="px-4 py-4 text-sm">
                <a href="#">
                  <h5 className="font-semibold tracking-tight text-cjsWhite">
                    {merch.name}
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    {Array(merch.rate)
                      .fill()
                      .map((star, index) => (
                        <div className="w-4 h-4 text-cjsYellow" key={index}>
                          {ratingStar}
                        </div>
                      ))}
                  </div>
                  <span className="bg-cjwWhite text-cjsBrown text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                    {merch.rate}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className=" font-bold text-cjsWhite">
                    {merch.price}€
                  </span>
                  <a
                    href="#"
                    className="text-cjsBrown bg-cjsWhite hover:bg-cjsPink font-medium rounded-lg text-xs px-5 py-2.5 text-center transition duration-250"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
