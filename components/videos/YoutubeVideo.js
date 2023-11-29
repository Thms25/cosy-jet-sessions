"use client";

import YouTube from "react-youtube";
import styles from "styles/videos.module.scss";

export default function YoutubeVideo({
  videoId,
  iframeClassName,
  height,
  width,
  // onVideoLoaded,
}) {
  const videoOnReady = (event) => {
    const player = event.target;
    console.log(event.target);
    // player.seekTo(0);
    // player.playVideo();
    // onVideoLoaded(true);
  };

  // const videoOnPlay = (event) => {
  //   const player = event.target;
  // };

  const opts = {
    height: height,
    width: width,
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <YouTube
      id="yt-video"
      videoId={videoId}
      opts={opts}
      onReady={videoOnReady}
      // onPlay={videoOnPlay}
      iframeClassName={styles[iframeClassName]}
    />
  );
}
