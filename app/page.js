"use client";

import Image from "next/image";
import styles from "../styles/home.module.scss";
import videoStyles from "../styles/videos.module.scss";
import YoutubeVideo from "../components/YoutubeVideo";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "@/components/Modal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

async function getRecentVideos() {
  const res = await fetch("api/getRecentVideos");
  return res.json();
}

export default function Home() {
  const [videos, setVideos] = useState([]);

  const [carouLoaded, setCarouLoaded] = useState(false);
  const [recentVidsLoaded, setRecentVidsLoaded] = useState(false);

  // const [firstVideLoaded, setFirstVidLoaded] = useState(false);
  // const handleVideoLoaded = (loaded) => {
  //   setFirstVidLoaded(loaded);
  // };

  const [modalOpen, setMOdalOpen] = useState(false);
  const close = () => setMOdalOpen(false);
  const open = () => setMOdalOpen(true);

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

  useEffect(() => {
    setTimeout(() => {
      setCarouLoaded(true);
    }, 1000);
    async function fetchVideos() {
      const videoData = await getRecentVideos();
      setVideos(videoData);
      setRecentVidsLoaded(true);
    }
    if (carouLoaded) {
      fetchVideos();
    }
  }, [carouLoaded]);

  const customRenderItem = (item, props) => {
    if (props.isSelected) {
      return <item.type {...item.props} {...props} />;
    }
  };

  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <motion.div
          className={styles.banner}
          onClick={() => {
            modalOpen ? close() : open();
          }}
        >
          <Image
            id={styles.cjsBanner}
            priority
            src="/images/cjs-banner.png"
            alt="cjs-banner"
            width={1710}
            height={751}
          />
        </motion.div>
        <AnimatePresence initial={false} mode="wait">
          {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
        </AnimatePresence>
        <div className={styles.bannerDesc}>
          <h3>
            Cosy Jet Sessions is an intimate acoustic live session media based
            in Brussels
          </h3>
          <h4>A cosy and relaxing place to discover new talented artists.</h4>
        </div>
      </header>
      <div>
        <section className={styles.section}>
          <div className={styles.carouselSection}>
            <h4>Listen to our most popular videos</h4>
            <div className={styles.carouseContainer}>
              <Carousel
                showStatus={false}
                className={styles.carousel}
                infiniteLoop={true}
                useKeyboardArrows={true}
                renderItem={customRenderItem}
              >
                {popularVideos.map((video, index) => (
                  <div key={video.key}>
                    <YoutubeVideo
                      videoId={video.videoId}
                      iframeClassName="homeVidFrame"
                      // onVideoLoaded={handleVideoLoaded}
                    />
                  </div>
                  // <div key={video.key}>
                  //   {index === 0 ? (
                  //     <YoutubeVideo
                  //       videoId={video.videoId}
                  //       iframeClassName="homeVidFrame"
                  //       onVideoLoaded={handleVideoLoaded}
                  //     />
                  //   ) : (
                  //     firstVideLoaded && (
                  //       <YoutubeVideo
                  //         videoId={video.videoId}
                  //         iframeClassName="homeVidFrame"
                  //         onVideoLoaded={handleVideoLoaded}
                  //         key={video.videoId}
                  //       />
                  //     )
                  //   )}
                  // </div>
                ))}
              </Carousel>
            </div>
          </div>
          <div className={styles.recent}>
            <h4>Check out our most recent uploads</h4>
            {recentVidsLoaded && (
              <div className={styles.recentVideosWrap}>
                <FontAwesomeIcon icon={faAngleLeft} className={styles.icon} />
                <div className={videoStyles.recentVideos}>
                  {videos.map((video) => (
                    <YoutubeVideo
                      key={video.id}
                      videoId={video.videoId}
                      iframeClassName="homeVidFrame"
                      // onVideoLoaded={handleVideoLoaded}
                    />
                  ))}
                </div>
                <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
