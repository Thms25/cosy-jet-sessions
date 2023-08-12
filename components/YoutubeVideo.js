import { Component } from "react";
import YouTube from "react-youtube";
import styles from "../styles/videos.module.scss";

class YoutubeVideo extends Component {
  videoOnReady(event) {
    const player = event.target;
    // player.seekTo(0);
  }

  videoOnPlay(event) {
    const player = event.target;
  }

  // videoStateChange (event) {
  //   const player = event.target
  // }

  render() {
    const { videoId, iframeClassName } = this.props;

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
        onReady={this.videoOnReady}
        onPlay={this.videoOnPlay}
        onStateChange={this.videoStateChange}
        iframeClassName={styles[iframeClassName]}
      />
    );
  }
}

export default YoutubeVideo;
