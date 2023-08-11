"use client";

import Link from "next/link";
import styles from "../../styles/media.module.scss";
import { useEffect, useState } from "react";

async function getArtists() {
  const res = await fetch("api/getArtists");
  // console.log(res);
  return res.json();
}

export default function Media() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    async function fetchArtists() {
      const artistData = await getArtists();
      setArtists(artistData);
    }

    fetchArtists();
  }, []);

  return (
    <div className={styles.media}>
      <div className={styles.title}>
        <h1>Hello Cosy Jetter</h1>
        <p>Welcme to the media page</p>
      </div>
      <div className={styles.artistList}>
        {artists.map((artist) => {
          return (
            <div key={artist.id} className={styles.artistCard}>
              <h3>{artist.name}</h3>
              <Link href={`/artist/${artist.id}`}>
                <p>Click to discover this arist</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
