import Link from "next/link";
import styles from "../../styles/discover.module.scss";
import Image from "next/image";
import DynamicBanner from "@/components/Banners/DynamicBanner";

async function fetchArtists() {
  const res = await fetch(`${process.env.URL}/api/getArtists`);
  const data = await res.json();
  return data;
}
export default async function Discover() {
  const artists = await fetchArtists();

  return (
    <section className="py-24">
      <DynamicBanner
        title="We love discovering artist"
        subtitle="Our mission is to let those talents be discovered as they should"
        caption="Let yourself go and have a listen to the artists we have hosted"
      />
      <div className="grid p-4 md:p-12 gap-2 lg:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
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
    </section>
  );
}
