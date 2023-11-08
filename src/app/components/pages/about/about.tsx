import React from "react";
import SwiperGallery from "../../common/swiper/swiper";
import styles from "./about.module.css";
const About = () => {
  const backgroungs = [];
  return (
    <div className={styles.main_container}>
      <SwiperGallery />
    </div>
  );
};

export default About;
