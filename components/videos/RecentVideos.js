"use client";

import { useEffect, useState } from "react";
import styles from "../../styles/videos.module.scss";
import YoutubeVideo from "../YoutubeVideo";

async function getRecentVideos() {
  const res = await fetch("api/getRecentVideos");
  const data = await res.json();
  return data;
}

export default function RecentVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const videoData = await getRecentVideos();
      setVideos(videoData);
      // setRecentVidsLoaded(true);
    }
    fetchVideos();
  }, []);

  return (
    <div className={styles.recentVideos}>
      {videos?.map((video) => (
        <YoutubeVideo
          key={video.id}
          videoId={video.videoId}
          iframeClassName="homeVidFrame"
        />
      ))}
    </div>
  );
}
