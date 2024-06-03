import Image from 'next/image'
import ApplyForm from './apply-form'
import { getArtists } from '@/utils/fetchUtils/ArtistFetchUtils'
import FormBanner from './form-banner'
import { arrowDown } from '@/utils/data/svgData'

export default async function ApplyView() {
  const artists = await getArtists()
  const images = artists.map((artist, index) => {
    return {
      src: artist.image,
      id: index,
    }
  })

  return (
    <main className="">
      <div className="mt-16 sm:mt-24">
        <FormBanner images={images} />
      </div>
      {/* <header className="relative w-full mt-16 sm:mt-12 grid place-items-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/decor.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px)',
          }}
        ></div>
        <div className="z-10 text-center p-20 sm:p-24 xl:p-32 w-full">
          <h1 className="text-8xl text-cjsWhite tracking-wider drop-shadow-md">
            Apply for a session
          </h1>
          <h3 className="text-cjsWhite text-xl tracking-wide">
            Become a part of the cosy family
          </h3>
        </div>
      </header> */}

      <section className="mt-12 p-12" id="form">
        <ApplyForm />
      </section>
    </main>
  )
}
