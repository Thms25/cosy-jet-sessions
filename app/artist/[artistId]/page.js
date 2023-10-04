"use client";

import YoutubeVideo from "../../../components/YoutubeVideo";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoaded = (loaded) => {
    setVideoLoaded(loaded);
  };

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
              {artist.videos.map((video, index) => (
                <div key={video.id}>
                  {index === 0 ? (
                    <YoutubeVideo
                      videoId={video.videoId}
                      iframeClassName="video"
                      onVideoLoaded={handleVideoLoaded}
                    />
                  ) : (
                    videoLoaded && (
                      <YoutubeVideo
                        videoId={video.videoId}
                        iframeClassName="video"
                        onVideoLoaded={handleVideoLoaded}
                      />
                    )
                  )}
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
