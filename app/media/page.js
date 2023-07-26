'use client'

// import Image from "next/image";
import styles from "../../styles/media.module.scss";
import YoutubeVideo from '../../components/YoutubeVideo';
import { useEffect, useState } from "react";

const API_KEY = "AIzaSyAtYwtBDtC4KYMmBt3MiC1_MsjWElk3cho"
const URL = "https://www.googleapis.com/youtube/v3/search?"
const CHANNEL = "UCdlvOT8isQcuCrxzWgroGZQ"

const fetchUrl = `${URL}key=${API_KEY}&channelId=${CHANNEL}&part=snippet&maxResults=10&order=viewCount`

// "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAtYwtBDtC4KYMmBt3MiC1_MsjWElk3cho&channelId=UCdlvOT8isQcuCrxzWgroGZQ&part=snippet&maxResults=10&order=viewCount"



export default function Media() {

  const [videosId, setVideosId] = useState([])

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
        .then((resJson) => {
          const results = resJson.items.map(result => ({
            videoId: result.id.videoId
          }))
          console.log(results);
            setVideosId(results)
        })
    })

  console.log(videosId);

  return (
    <div className={styles.media}>
      <div className={styles.title}>
        <h1>Hello Cosy Jetter</h1>
        <p>Welcme to the media page</p>
      </div>
      <div className={styles.videos}>
        <div className={styles.videos}>

          {videosId.map((ids) => {
            return (
              <YoutubeVideo videoId={ids} />
            )
          })}

          {/* <YoutubeVideo videoId="bUnNzb-Floo"/>
          <YoutubeVideo videoId="1lvytCVdqjE"/>
          <YoutubeVideo videoId="lGZDjhryorY"/> */}
          {/* {allVideos.map} */}
        </div>
      </div>
      <div className={styles.images}>
        {/* <Image
          src="/images/decor.png"
          alt='cjs-decor'
          width={1850}
          height={1044}
        /> */}
      </div>
    </div>
  )
}
