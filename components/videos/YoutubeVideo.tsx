'use client'

import YouTube from 'react-youtube'
import styles from '@/styles/videos.module.scss'

type YoutubeVideoProps = {
  videoId: string
  iframeClassName?: string
  height?: string | number
  width?: string
  autoplay?: number
  // onVideoLoaded: () => void,
}

export default function YoutubeVideo({
  videoId = 'abc123',
  iframeClassName = 'artistPageVideo',
  height = '360',
  width = '100%',
  autoplay = 0,
  // onVideoLoaded,
}: YoutubeVideoProps) {
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
    playerVars: {
      autoplay: autoplay,
      controls: 1,
      showInfo: 0,
      modestbranding: 0,
    },
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
