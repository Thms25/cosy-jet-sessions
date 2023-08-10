"use client";

import Image from "next/image";
import Link from "next/link";
import stylesOne from "../styles/home.module.scss";
import stylesTwo from "../styles/videos.module.scss";
import YoutubeVideo from "../components/YoutubeVideo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

async function getVideos() {
  const res = await fetch("api/getVideos");
  return res.json();
}

export default function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const videoData = await getVideos();
      setVideos(videoData);
    }

    fetchVideos();
  }, []);

  return (
    <div className={stylesOne.home}>
      <header className={stylesOne.header}>
        <div className={stylesOne.banner}>
          <Image
            id={stylesOne.cjsBanner}
            priority
            src="/images/cjs-banner.png"
            alt="cjs-banner"
            width={1710}
            height={751}
          />
        </div>
        <div className={stylesOne.bannerDesc}>
          <h3>
            Cosy Jet Sessions is an intimate acoustic live session media based
            in Brussels
          </h3>
          <h4>A cosy and relaxing place to discover new talented artists. </h4>
        </div>
      </header>
      <div>
        <section className={stylesOne.section}>
          <div className={stylesTwo.videos}>
            {videos.map((video) => (
              <YoutubeVideo
                key={video["id"]}
                videoId={video["videoId"]}
                iframeClassName="homeVid"
              />
            ))}
          </div>
        </section>
      </div>
      <footer className={stylesOne.footer}>
        <ul className={stylesOne.icons}>
          <Link
            href="https://www.instagram.com/cosyjetsessions/"
            target="_blank"
          >
            <li>
              <FontAwesomeIcon icon={faInstagram} className={stylesOne.icon} />
            </li>
          </Link>
          <Link href="https://www.youtube.com/@cosyjetsessions" target="_blank">
            <li>
              <FontAwesomeIcon icon={faYoutube} className={stylesOne.icon} />
            </li>
          </Link>
          <Link href="https://www.tiktok.com/@cosyjetsessions/" target="_blank">
            <li>
              <FontAwesomeIcon icon={faTiktok} className={stylesOne.icon} />
            </li>
          </Link>
          <Link href="/">
            <li>
              <FontAwesomeIcon icon={faEnvelope} className={stylesOne.icon} />
            </li>
          </Link>
        </ul>
      </footer>
    </div>
  );
}
