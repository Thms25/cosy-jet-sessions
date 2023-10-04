"use client";

import YoutubeVideo from "../YoutubeVideo";
import styles from "styles/home.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function CarousselHome() {
  const popularVideos = [
    { key: "rms", videoId: "XzcQ57UC_to" },
    { key: "mewhy", videoId: "z_xtKDmpf-g" },
    { key: "doriaD", videoId: "Yy5O8y-oQvY" },
    // { key: "sundayCharmers", videoId: "6zC4i1Yk4mw" },
    { key: "colineBlf", videoId: "N8u9388y_z4" },
    // { key: "ozya", videoId: "V6jLw0yO_DI" },
    // { key: "samBosman", videoId: "9fohTKZe4f8" },
    // { key: "milla", videoId: "0AaN7NkujJE" },
    { key: "tyanaP", videoId: "gty3SR2XJ_s" },
    { key: "colt", videoId: "1lvytCVdqjE" },
    // { key: "amyMorrey", videoId: "lGZDjhryorY" },
    // { key: "essyla", videoId: "agUYbCeuzdY" },
    { key: "satchel", videoId: "2g7VMpnYlQ4" },
    // { key: "laBailly", videoId: "q9B_gC4Hoqc" },
    // { key: "Wayi", videoId: "-uNRs5BL4zA" },
    // { key: "juneRoad", videoId: "YTsN2L4SrD8" },
  ];
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
    >
      {popularVideos.map((video) => (
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
