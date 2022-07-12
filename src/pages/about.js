// Step 1: Import React and Link
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import * as styles from "../styles/about.module.css";
import { Link } from "gatsby";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <section className={styles.about}>
        <StaticImage alt="profile" src="../images/profile_3.jpg" />
        <div className={styles.text}>
          <h2>Hi there!</h2>
          <br />
          <p>
            I'm a <strong>software developer</strong> and <strong>flutist</strong> based in New York, NY.
          </p>
          <br />
          <p>
            I first discovered my passion for technology and programming while working as an arts administrator. I enjoy
            problem-solving and building applications that improve efficiency and productivity. I have experience
            working with languages and technologies including JavaScript, React, HTML/CSS, Python, Java, MySQL, and
            MongoDB.
          </p>
          <br />
          <p>
            Browse through my{" "}
            <Link to="/projects" className={styles.link}>
              projects
            </Link>
            !
          </p>
          <br />
          <p>
            As a professional classical flutist, I have performed with orchestras in venues both local and international
            including Carnegie Hall, Berliner Philharmonie, and Boston Symphony Hall. As an arts administrator, I have
            worked at top arts organizations including Kaufman Music Center and American Ballet Theatre. A dedicated
            educator, I currently maintain an active private studio in Queens, NY.
          </p>
          <br />
          <p>
            Check out my{" "}
            <Link to="/music" className={styles.link}>
              music
            </Link>{" "}
            or learn more about my{" "}
            <Link to="/teaching" className={styles.link}>
              studio
            </Link>
            !
          </p>
        </div>
      </section>
    </Layout>
  );
};

// Step 3: Export your component
export default AboutPage;
