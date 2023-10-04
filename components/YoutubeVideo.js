"use client";

import YouTube from "react-youtube";
import styles from "../styles/videos.module.scss";

export default function YoutubeVideo({
  videoId,
  iframeClassName,
  // onVideoLoaded,
}) {
  // const videoOnReady = (event) => {
  //   const player = event.target;
  //   // player.seekTo(0);
  //   // player.playVideo();
  //   // onVideoLoaded(true);
  // };

  // const videoOnPlay = (event) => {
  //   const player = event.target;
  // };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      // onReady={videoOnReady}
      // onPlay={videoOnPlay}
      iframeClassName={styles[iframeClassName]}
    />
  );
}
