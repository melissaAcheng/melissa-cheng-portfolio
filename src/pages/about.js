// Step 1: Import React and Link
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import * as styles from "../styles/about.module.css";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <section className={styles.about}>
        <StaticImage alt="profile" src="../images/profile_3.jpg" />
        <div>
          <p>I'm a software developer based in New York, NY. I am proficient in HTML, CSS, JavaScript, and Python.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu ornare ex. Maecenas in lectus neque. In
            mattis libero non urna feugiat sodales. Nunc bibendum elit odio, nec condimentum quam placerat et. Curabitur
            finibus gravida nisi, nec commodo nisl. Fusce dignissim justo et magna laoreet, eu dictum nisl iaculis.
            Pellentesque mattis est a erat mattis porta. Integer tortor mi, vulputate eu augue nec, commodo feugiat
            tortor. Aliquam maximus, lectus vel fringilla mattis, tortor arcu elementum elit, nec imperdiet justo nisl
            non tellus. Duis tempus, erat eget condimentum varius, arcu dui congue odio, sed interdum orci mi at sem.
            Aenean scelerisque a lacus ac feugiat. Ut ac eros sit amet ipsum semper ornare. Nullam erat magna, sodales
            et risus nec, scelerisque interdum ex. Vivamus leo risus, mollis non urna in, venenatis accumsan odio.
            Mauris dignissim ut nisi eget venenatis. Mauris nibh purus, interdum id volutpat vel, placerat et dolor.
            Duis sed efficitur nisl. Praesent tempor vulputate facilisis. Donec vel nunc sit amet nibh condimentum
            consectetur vel auctor nunc. In hac habitasse platea dictumst. Sed pretium eros et magna placerat, id
            ultrices lorem lobortis. Nunc posuere leo in nisi tristique tempus ut non metus. Praesent quis consectetur
            odio. Sed sed consequat arcu, nec molestie arcu. Vestibulum aliquet consectetur dui sed sodales. Aenean
            gravida eros sem, vitae viverra felis eleifend nec. Mauris semper cursus odio, quis vehicula dolor mollis
            interdum.
          </p>
        </div>
      </section>
    </Layout>
  );
};

// Step 3: Export your component
export default AboutPage;
