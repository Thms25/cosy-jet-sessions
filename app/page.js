import Image from "next/image";
import styles from "../styles/home.module.scss";
import videoStyles from "../styles/videos.module.scss";
import YoutubeVideo from "../components/YoutubeVideo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import CjsBanner from "@/components/CjsBanner";
import CarousselHome from "@/components/caroussels/CarousselHome";

async function getRecentVideos() {
  const res = await fetch("api/getRecentVideos");
  consle.log(res);
  const data = await res.json();
  console.log(data);
  return data;
}

export default async function Home() {
  // const [videos, setVideos] = useState([]);
  // const videos = await getRecentVideos();
  const videos = [];
  // console.log(videos);

  // const [carouLoaded, setCarouLoaded] = useState(false);
  // const [recentVidsLoaded, setRecentVidsLoaded] = useState(false);

  // const [firstVideLoaded, setFirstVidLoaded] = useState(false);
  // const handleVideoLoaded = (loaded) => {
  //   setFirstVidLoaded(loaded);
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCarouLoaded(true);
  //   }, 500);
  //   async function fetchVideos() {
  //     // const videoData = await getRecentVideos();
  //     // setVideos(videoData);
  //     setRecentVidsLoaded(true);
  //   }
  //   if (carouLoaded) {
  //     fetchVideos();
  //   }
  // }, [carouLoaded]);

  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <CjsBanner />
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
              <CarousselHome />
            </div>
          </div>
          <div className={styles.recent}>
            <h4>Check out our most recent uploads</h4>
            <div className={styles.recentVideosWrap}>
              <FontAwesomeIcon icon={faAngleLeft} className={styles.icon} />
              <div className={videoStyles.recentVideos}>
                {videos?.map((video) => (
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
