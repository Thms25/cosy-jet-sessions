"use client";

import YoutubeVideo from "../../../components/YoutubeVideo";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "/styles/artistPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

async function getArtist(id) {
  const res = await fetch(`../api/getArtist?artistId=${id}`);
  return res.json();
}

export default function Page({ params }) {
  const [artist, setArtist] = useState([]);

  useEffect(() => {
    async function fetchArtist() {
      const result = await getArtist(params.artistId);
      setArtist(result);
    }
    fetchArtist();
  }, [params.artistId]);

  return (
    <div>
      {artist.videos ? (
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
            <Carousel className={styles.caroussel} showStatus={false}>
              {artist.videos.map((video) => (
                <div key={video.id}>
                  <YoutubeVideo
                    videoId={video.videoId}
                    iframeClassName="video"
                  />
                  {/* <h2>{video.title}</h2> */}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
