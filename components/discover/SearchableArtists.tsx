'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/discover.module.scss'
import { Reveal } from '@/components/animations/Reveal'

interface Artist {
  id: string
  name: string
  image?: string
}

interface SearchableArtistsProps {
  artists: Artist[]
}

export function SearchableArtists({ artists }: SearchableArtistsProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredArtists = artists.filter(artist =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <>
      {/* Search Section */}
      <div className={styles.searchSection}>
        <Reveal initY={20} dly={0.3} duration={0.7}>
          <div className={styles.searchContainer}>
            <svg
              className={styles.searchIcon}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search for an artist..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className={styles.clearButton}
                aria-label="Clear search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </Reveal>
        {searchTerm && (
          <Reveal initY={10} dly={0.1} duration={0.5}>
            <p className={styles.searchResults}>
              {filteredArtists.length === 0
                ? 'No artists found'
                : `Found ${filteredArtists.length} ${
                    filteredArtists.length === 1 ? 'artist' : 'artists'
                  }`}
            </p>
          </Reveal>
        )}
      </div>

      {/* Artists Grid */}
      <div className="grid p-4 md:p-12 gap-2 lg:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {filteredArtists.length === 0 ? (
          <div className={styles.noResults}>
            <p>No artists match your search</p>
          </div>
        ) : (
          filteredArtists.map((artist, index) => {
            return (
              <Reveal
                key={artist.id}
                initY={20}
                dly={0.05 * Math.min(index, 8)}
                duration={0.6}
                initS={0.95}
              >
                <div className={styles.artistCard}>
                  <Link href={`/artist/${artist.id}`}>
                    <div className={styles.backgroundDiv}>
                      <h3 className="">{artist.name}</h3>
                      {artist.image && (
                        <Image
                          priority={index < 4}
                          src={artist.image}
                          alt={`${artist.name}_thumbnail`}
                          width={480}
                          height={360}
                          className={styles.backgroundImage}
                        />
                      )}
                    </div>
                  </Link>
                </div>
              </Reveal>
            )
          })
        )}
      </div>
    </>
  )
}
