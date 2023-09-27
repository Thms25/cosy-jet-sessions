"use client";

import Image from "next/image";
import styles from "../styles/home.module.scss";
import videoStyles from "../styles/videos.module.scss";
import YoutubeVideo from "../components/YoutubeVideo";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "@/components/Modal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

async function getVideos() {
  const res = await fetch("api/getRecentVideos");
  return res.json();
}

export default function Home() {
  const [videos, setVideos] = useState([]);

  const [modalOpen, setMOdalOpen] = useState(false);
  const close = () => setMOdalOpen(false);
  const open = () => setMOdalOpen(true);

  useEffect(() => {
    async function fetchVideos() {
      const videoData = await getVideos();
      setVideos(videoData);
    }
    fetchVideos();
  }, []);

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
              >
                <div>
                  <YoutubeVideo
                    key="rms"
                    videoId="XzcQ57UC_to"
                    iframeClassName="homeVidFrame"
                  />
                </div>
                <div>
                  <YoutubeVideo
                    key="Mewhy"
                    videoId="z_xtKDmpf-g"
                    iframeClassName="homeVidFrame"
                  />
                </div>
                <div>
                  <YoutubeVideo
                    key="doriaD"
                    videoId="Yy5O8y-oQvY"
                    iframeClassName="homeVidFrame"
                  />
                </div>
                <div>
                  <YoutubeVideo
                    key="sundayCharmers"
                    videoId="6zC4i1Yk4mw"
                    iframeClassName="homeVidFrame"
                  />
                </div>
                <div>
                  <YoutubeVideo
                    key="colineBLF"
                    videoId="N8u9388y_z4"
                    iframeClassName="homeVidFrame"
                  />
                </div>
                <div>
                  <YoutubeVideo
                    key="ozya"
                    videoId="V6jLw0yO_DI"
                    iframeClassName="homeVidFrame"
                  />
                </div>
                <div>
                  <YoutubeVideo
                    key="samBosman"
                    videoId="9fohTKZe4f8"
                    iframeClassName="homeVidFrame"
                  />
                </div>
                <div>
                  <YoutubeVideo
                    key="milla"
                    videoId="0AaN7NkujJE"
                    iframeClassName="homeVidFrame"
                  />
                </div>
                <div>
                  <YoutubeVideo
                    key="tyanaP"
                    videoId="gty3SR2XJ_s"
                    iframeClassName="homeVidFrame"
                  />
                </div>
                <div>
                  <YoutubeVideo
                    key="colt"
                    videoId="1lvytCVdqjE"
                    iframeClassName="homeVidFrame"
                  />
                </div>
                <div>
                  <YoutubeVideo
                    key="amyMorrey"
                    videoId="lGZDjhryorY"
                    iframeClassName="homeVidFrame"
                  />
                </div>
                <div>
                  <YoutubeVideo
                    key="essyla"
                    videoId="agUYbCeuzdY"
                    iframeClassName="homeVidFrame"
                  />
                </div>
                <div>
                  <YoutubeVideo
                    key="satchel"
                    videoId="2g7VMpnYlQ4"
                    iframeClassName="homeVidFrame"
                  />
                </div>
                <div>
                  <YoutubeVideo
                    key="loBailly"
                    videoId="q9B_gC4Hoqc"
                    iframeClassName="homeVidFrame"
                  />
                </div>
                <div>
                  <YoutubeVideo
                    key="wayi"
                    videoId="-uNRs5BL4zA"
                    iframeClassName="homeVidFrame"
                  />
                </div>
                <div>
                  <YoutubeVideo
                    key="juneRoad"
                    videoId="YTsN2L4SrD8"
                    iframeClassName="homeVidFrame"
                  />
                </div>
              </Carousel>
            </div>
          </div>
          <div className={styles.recent}>
            <h4>Check out our most recent uploads</h4>
            <div className={styles.recentVideosWrap}>
              <FontAwesomeIcon icon={faAngleLeft} className={styles.icon} />
              <div className={videoStyles.recentVideos}>
                {videos.map((video) => (
                  <YoutubeVideo
                    key={video.id}
                    videoId={video.videoId}
                    iframeClassName="homeVidFrame"
                  />
                ))}
              </div>
              <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
