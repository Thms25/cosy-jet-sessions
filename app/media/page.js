// import React from "react";
// import YouTube from "react-youtube";

import Image from "next/image";

// export default class YoutubeVideo
// extends React.Component {
// render() {
// 	const opts = {
// 	height: "390",
// 	width: "640",
// 	playerVars: {
// 		autoplay: 1,
// 	},
// 	};

// 	return (
// 	<div>
// 		<h3>Luidji - Gisèle | Cover by Orlane</h3>
// 		<YouTube videoId="jZrB_2hL0bk"
// 			opts={opts} onReady={this._onReady} />
// 	</div>
// 	);
// }

// _onReady(event) {
// 	event.target.pauseVideo();
// }
// }

export default function Media() {
  return (
    <div className="media">
      <div className="title">
        <h1>Hello Cosy Jet-er</h1>
      </div>
      <div className="images">
        <Image
          src="/images/decor.png"
          alt='cjs-decor'
          width={1850}
          height={1044}
        />
      </div>
    </div>
  )
}
