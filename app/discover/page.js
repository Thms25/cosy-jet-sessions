"use client";

import Link from "next/link";
import styles from "../../styles/discover.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
import LazyLoad from "react-lazyload";

async function getArtists() {
  const res = await fetch("api/getArtists");
  return res.json();
}

export default function Discover() {
  const [artists, setArtists] = useState([]);

  const artistHoverOn = (e) => {
    // console.log(e.currentTarget);
  };

  useEffect(() => {
    async function fetchArtists() {
      const artistData = await getArtists();
      setArtists(artistData);
    }

    fetchArtists();
  }, []);

  return (
    <div className={styles.discover}>
      <div className={styles.title}>
        <h1>Hello Cosy Jetter</h1>
        <p>Discover some of the artists that we hosted</p>
      </div>
      <div className={styles.artistList}>
        {artists.map((artist) => {
          return (
            <LazyLoad height={200} offset={100}>
              <div
                key={artist.id}
                className={styles.artistCard}
                onMouseEnter={(e) => {
                  artistHoverOn(e);
                }}
              >
                <Link href={`/artist/${artist.id}`}>
                  <div className={styles.backgroundDiv}>
                    <h3>{artist.name}</h3>
                    {artist.videos[0]?.thumbnail && (
                      <Image
                        src={artist.videos[0].thumbnail}
                        alt={`${artist.name} - thumbnail`}
                        width={480}
                        height={360}
                        className={styles.backgroundImage}
                      />
                    )}
                  </div>
                </Link>
              </div>
            </LazyLoad>
          );
        })}
      </div>
    </div>
  );
}
