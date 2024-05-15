'use client'

import YouTube from 'react-youtube'
import styles from '@/styles/videos.module.scss'

export default function YoutubeVideo({
  videoId,
  iframeClassName,
  height = '360',
  width = '520',
  // onVideoLoaded,
}) {
  // const videoOnReady = event => {
  //   // console.log(event.target)
  //   event.target.pauseVideo()
  //   // player.seekTo(0);
  //   // player.playVideo();
  // }

  // const videoOnPlay = event => {
  //   event.target.playVideo()
  // }

  const opts = {
    height: height,
    width: width,
    // playerVars: {
    //   autoplay: 0,
    // },
  }

  return (
    <YouTube
      id="yt-video"
      videoId={videoId}
      opts={opts}
      // onReady={videoOnReady}
      // onPlay={videoOnPlay}
      iframeClassName={styles[iframeClassName]}
      loading="lazy"
    />
  )
}
