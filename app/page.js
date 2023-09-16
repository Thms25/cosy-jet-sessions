"use client";

import Image from "next/image";
import styles from "../styles/home.module.scss";
import videoStyles from "../styles/videos.module.scss";
import YoutubeVideo from "../components/YoutubeVideo";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "@/components/Modal";

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
          <div className={videoStyles.videos}>
            {videos.map((video) => (
              <YoutubeVideo
                key={video.id}
                videoId={video.videoId}
                iframeClassName="homeVidFrame"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
