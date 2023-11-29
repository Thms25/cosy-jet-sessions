import styles from "../styles/home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import CjsBanner from "@/components/CjsBanner";
import CarousselHome from "@/components/caroussels/CarousselHome";
import RecentVideos from "@/components/videos/RecentVideos";
import Header from "@/components/Header";

export default async function Home() {
  return (
    <Header />
    // <div className={styles.home}>
    //   <header className={styles.header}>
    //     {/* <CjsBanner /> */}
    //     {/* <div className={styles.bannerDesc}>
    //       <h3>
    //         Cosy Jet Sessions is an intimate acoustic live session media based
    //         in Brussels
    //       </h3>
    //       <h4>A cosy and relaxing place to discover new talented artists.</h4>
    //     </div> */}
    //   </header>
    //   <div>
    //     <section className={styles.section}>
    //       <div className={styles.carouselSection}>
    //         <h4>Listen to our most popular videos</h4>
    //         <div className={styles.carouseContainer}>
    //           {/* <CarousselHome /> */}
    //         </div>
    //       </div>
    //       <div className={styles.recent}>
    //         <h4>Check out our most recent uploads</h4>
    //         <div className={styles.recentVideosWrap}>
    //           <FontAwesomeIcon icon={faAngleLeft} className={styles.icon} />
    //           {/* <RecentVideos /> */}
    //           <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // </div>
  );
}
