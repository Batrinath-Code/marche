import { useEffect, useState } from "react";
import "./css/videopage.css";
import { Layouts } from "../Layouts/Layouts";
import VideoPlayer from "../components/VideoPlayer";
import { useLocation } from 'react-router-dom';
import SwiperCarousel from "../components/SwiperCarousel";
import { motion } from "framer-motion";

const VIDEODATA = {
  product: {
    src: "./home/background-video.mp4",
  },
  training: {
    src: "./videos/videobg.mp4",
  },
  surgery: {
    src: "./home/background-video.mp4",
  },
};
const VideoPage = () => {
  const [videoLink, setVideoLink] = useState("surgery");

  function videoTabHandle(selectedButton) {
    setVideoLink(selectedButton);
  }

  // navigaiton
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <Layouts title={"Video-Page"}>
      <section className="banner">
        <video src="./videos/videobg.mp4" autoPlay muted loop></video>
        <div className="banner-text">
          <h3>Videos</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
      </section>
      <section className="video-gallery">
        <div className="category">
          <div className="category-container">
            <button
              className={
                videoLink === "product"
                  ? "btn-outline-rounded active"
                  : "btn-outline-rounded "
              }
              onClick={() => {
                videoTabHandle("product");
              }}
            >
              Product Video
            </button>
            <button
              className={
                videoLink === "training"
                  ? "btn-outline-rounded active"
                  : "btn-outline-rounded "
              }
              onClick={() => {
                videoTabHandle("training");
              }}
            >
              Training Video
            </button>
            <button
              className={
                videoLink === "surgery"
                  ? "btn-outline-rounded active"
                  : "btn-outline-rounded "
              }
              onClick={() => {
                videoTabHandle("surgery");
              }}
            >
              Surgery Video
            </button>
          </div>
        </div>
        <div className="sub-category">
          <h2>{videoLink} List</h2>
          <p>
            Describe exactly what your product or service does and how it makes
            your customers lives better. Avoid using verbose words or phrases.
          </p>
          <div className="button-group">
            <motion.button
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.1, delay: 1 * 0.5 }}
              className="btn-outline-rounded active"
            >
              Stomach
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.1, delay: 2 * 0.5 }}
              className="btn-outline-rounded"
            >
              Hernia
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.1, delay: 3 * 0.5 }}
              className="btn-outline-rounded"
            >
              Thyroid
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.1, delay: 4 * 0.5 }}
              className="btn-outline-rounded active"
            >
              Lung
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.1, delay: 5 * 0.5 }}
              className="btn-outline-rounded"
            >
              Lung
            </motion.button>
          </div>
        </div>
        <div className="video-section">
          <div className="video-section-header">
            <h2>Video Title</h2>
            <p>
              Gain insights into our products functionality and benefits via our
              video showcase
            </p>
          </div>
          <div className="video-player">
            <div className="video-wrapper">
              <VideoPlayer src={VIDEODATA[videoLink].src} />
            </div>
          </div>

          <div className="card-group">
            <SwiperCarousel news={false} />
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default VideoPage;
