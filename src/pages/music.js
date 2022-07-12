// 1. Import React and Layout
import * as React from "react";
import Layout from "../components/layout";
import * as styles from "../styles/music.module.css";
import { Link } from "gatsby";

// 2. Define your component
const MusicPage = () => {
  return (
    <Layout pageTitle="Music">
      <div className={styles.music}>
        <div className={styles.iframeContainer}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xLyxy2EmzEY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className={styles.iframeContainer}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BbUU1Ud930o"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className={styles.iframeContainer}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Uz0wfdvcSK0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className={styles.iframeContainer}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pPEDnivbKMM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className={styles.text}>
        <p>
          Check out more of my music on{" "}
          <Link to="https://www.youtube.com/c/MelissaCheng" target="_blank" className={styles.link}>
            YouTube
          </Link>
        </p>
        <p>
          Or{" "}
          <Link to="/contact" className={styles.link}>
            contact
          </Link>{" "}
          me to collaborate!
        </p>
      </div>
    </Layout>
  );
};

// 3. Export your component
export default MusicPage;
