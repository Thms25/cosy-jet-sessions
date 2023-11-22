"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "/styles/artistPage.module.scss";
import YoutubeVideo from "../../components/YoutubeVideo";

export default function CarousselArtist({ videos }) {
  const customRenderItem = (item, props) => {
    if (props.isSelected) {
      return <item.type {...item.props} {...props} />;
    }
  };

  return (
    <Carousel
      className={styles.caroussel}
      showStatus={false}
      useKeyboardArrows={true}
      renderItem={customRenderItem}
    >
      {videos?.map((video) => (
        <div>
          <YoutubeVideo
            key={video.id}
            videoId={video.videoId}
            iframeClassName="video"
          />
          {/* <h3>{video.title}</h3> */}
        </div>
      ))}
    </Carousel>
  );
}