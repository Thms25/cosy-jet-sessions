import React, { Component } from 'react'
import YouTube from 'react-youtube'

class YoutubeVideo extends Component {
  videoOnReady (event) {
    const player = event.target;
    // player.seekTo(0);
    // console.log(player.videoTitle);
  }

  videoOnPlay (event) {
    const player = event.target
  }

  // videoStateChange (event) {
  //   const player = event.target
  // }

  // componentWillUnmount () {
  //   const {playerObj} = this.state
  // }

  render () {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 0
      }
    }

    const {videoId} = this.props

    return (
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={this.videoOnReady}
          onPlay={this.videoOnPlay}
          onStateChange={this.videoStateChange}
          iframeClassName='yt-vid'
        />
    )
  }
}

export default YoutubeVideo
