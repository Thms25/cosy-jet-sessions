import styles from "/styles/artistPage.module.scss";
import CarousselArtist from "@/components/caroussels/CarousselArtist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

async function getArtist(id) {
  const res = await fetch(`${process.env.URL}/api/getArtist?artistId=${id}`);
  return res.json();
}

export default async function Page({ params }) {
  const artist = await getArtist(params.artistId);

  return (
    <div>
      {artist?.videos && (
        <div>
          <div>
            <h1>{artist.name}</h1>
          </div>
          <div className={styles.carousselContainer}>
            <div className={styles.carousselText}>
              <p>
                Listen to the live sessions perfomed by {artist.name}
                <FontAwesomeIcon icon={faShare} rotation={90} />
              </p>
            </div>
            <CarousselArtist videos={artist?.videos} />
          </div>
        </div>
      )}
    </div>
  );
}
