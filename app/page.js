"use client";

import Image from "next/image";
import styles from "../styles/home.module.scss";
import videoStyles from "../styles/videos.module.scss";
import YoutubeVideo from "../components/YoutubeVideo";
import { useState, useEffect } from "react";

async function getVideos() {
  const res = await fetch("api/getRecentVideos");
  // const res = await fetch("api/getVideos");
  return res.json();
}

export default function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const videoData = await getVideos();
      setVideos(videoData);
    }

    fetchVideos();
  }, []);

  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <div className={styles.banner}>
          <Image
            id={styles.cjsBanner}
            priority
            src="/images/cjs-banner.png"
            alt="cjs-banner"
            width={1710}
            height={751}
          />
        </div>
        <div className={styles.bannerDesc}>
          <h3>
            Cosy Jet Sessions is an intimate acoustic live session media based
            in Brussels
          </h3>
          <h4>A cosy and relaxing place to discover new talented artists. </h4>
        </div>
      </header>
      <div>
        <section className={styles.section}>
          <div className={videoStyles.videos}>
            {videos.map((video) => (
              <YoutubeVideo
                key={video["id"]}
                videoId={video["videoId"]}
                iframeClassName="homeVidFrame"
                ClassName="homeVid"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
