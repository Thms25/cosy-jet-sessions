import { BiSolidChevronRight, BiSolidChevronLeft } from "react-icons/bi";

import styles from "styles/carousel.module.scss";
import { useState } from "react";

export default function Carousel({ imgs }) {
  const [currentIndex, setCurrentIndex] = useState < number > 0;

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? imgs.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === imgs.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselImages}>
        {imgs.map((img, index) => (
          <img
            key={index}
            src={img}
            className={currentIndex === index ? styles.active : styles.inactive}
          />
        ))}
      </div>
      <div className={styles.carouselControls}>
        <button className={styles.leftBtn} onClick={handlePrevious}>
          <BiSolidChevronLeft />
        </button>
        <button className={styles.rightBtn} onClick={handleNext}>
          <BiSolidChevronRight />
        </button>
      </div>
      {/* <div className={styles.carouselIndicator}>
        {imgs.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? styles.active : ""}`}
          ></div>
        ))}
      </div> */}
    </div>
  );
}
