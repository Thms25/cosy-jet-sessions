import Link from "next/link";
import styles from "../../styles/discover.module.scss";
import Image from "next/image";

async function fetchArtists() {
  const res = await fetch(`${process.env.URL}/api/getArtists`);
  const data = await res.json();
  return data;
}
export default async function Discover() {
  const artists = await fetchArtists();

  return (
    <div className={styles.discover}>
      <div className={styles.title}>
        <h1>Hello Cosy Jetter</h1>
        <p>Discover some of the artists that we hosted</p>
      </div>
      <div className={styles.artistList}>
        {artists?.map((artist) => {
          return (
            <div key={artist.id} className={styles.artistCard}>
              <Link href={`/artist/${artist.id}`}>
                <div className={styles.backgroundDiv}>
                  <h3>{artist.name}</h3>
                  {artist.videos[0]?.thumbnail && (
                    <Image
                      priority
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
          );
        })}
      </div>
    </div>
  );
}
