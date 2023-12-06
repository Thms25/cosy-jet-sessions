"use client";

import YoutubeVideo from "../videos/YoutubeVideo";
import styles from "styles/home.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// Utils
import { popularVideos } from "@/utils/data/videoData";

// -----------------------------------------------------

export default function CarousselHome() {
  const customRenderItem = (item, props) => {
    if (props.isSelected) {
      return <item.type {...item.props} {...props} />;
    }
  };
  return (
    <Carousel
      showStatus={false}
      className={styles.carousel}
      infiniteLoop={true}
      useKeyboardArrows={true}
      renderItem={customRenderItem}
      showThumbs={false}
    >
      {popularVideos?.map((video) => (
        <div key={video.key}>
          <YoutubeVideo
            videoId={video.videoId}
            iframeClassName="homeVidFrame"
          />
        </div>
      ))}
    </Carousel>
  );
}
