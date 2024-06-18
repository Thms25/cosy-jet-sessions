'use client'

import VideoAccordeon from '@/components/Accordeons/VideoAccordeon'
import { Reveal } from '@/components/animations/Reveal'
import SpotifyPlayer from '@/components/spotify/spotify-player'

export default function ArtistView({ artist }) {
  return (
    <div>
      <Reveal initY={50} initX={0}>
        <h1 className="text-8xl font-subtitle my-10 tracking-wider">
          {artist.name}
        </h1>
      </Reveal>
      <div className="lg:flex justify-between mx-auto lg:mx-12 sm:px-2 md:px-4 lg:px-8">
        <div className="w-full lg:w-2/3 2xl:w-1/2 mx-auto">
          <VideoAccordeon videos={artist.videos} />
        </div>

        <div className="mt-4  w-full lg:w-1/3 2xl:w-1/2 mx-auto px-4">
          <h4 className="text-xl font-subtitle mb-4">
            {artist.name} on Spotify
          </h4>
          <SpotifyPlayer artist={artist} />
          {/* <SpotifyLogin /> */}
        </div>
      </div>
    </div>
  )
}
