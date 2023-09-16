import { Component } from "react";
import YouTube from "react-youtube";
import styles from "../styles/videos.module.scss";

class YoutubeVideo extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log(this);
  //   this.state = {
  //     isVideoVisible: false,
  //   };

  //   this.videoRef = React.createRef();
  // }
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

// import React, { Component } from "react";
// import YouTube from "react-youtube";
// import styles from "../styles/videos.module.scss";

// class YoutubeVideo extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isVideoVisible: false,
//     };

//     this.videoRef = React.createRef();
//   }

//   componentDidMount() {
//     window.addEventListener("scroll", this.handleScroll);
//     this.handleScroll(); // Check initial visibility
//   }

//   componentWillUnmount() {
//     window.removeEventListener("scroll", this.handleScroll);
//   }

//   handleScroll = () => {
//     if (!this.state.isVideoVisible && this.isInViewport()) {
//       this.setState({ isVideoVisible: true });
//     }
//   };

//   isInViewport() {
//     const rect = this.videoRef.current.getBoundingClientRect();
//     return rect.top >= 0 && rect.bottom <= window.innerHeight;
//   }

//   render() {
//     const { videoId, iframeClassName } = this.props;
//     const { isVideoVisible } = this.state;

//     const opts = {
//       height: "390",
//       width: "640",
//       playerVars: {
//         autoplay: 0,
//       },
//     };

//     return (
//       <div className={styles[iframeClassName]} ref={this.videoRef}>
//         {isVideoVisible ? (
//           <YouTube
//             videoId={videoId}
//             opts={opts}
//             onReady={this.videoOnReady}
//             onPlay={this.videoOnPlay}
//             onStateChange={this.videoStateChange}
//           />
//         ) : (
//           <div className="video-placeholder">Loading Video...</div>
//         )}
//       </div>
//     );
//   }
// }

// export default YoutubeVideo;
