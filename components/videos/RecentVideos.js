"use client";

import { useEffect, useState } from "react";
import styles from "../../styles/videos.module.scss";
import YoutubeVideo from "../YoutubeVideo";

// Utils
import { getRecentVideos } from "@/utils/fetchUtils";

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
