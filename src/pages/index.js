// Step 1: Import
import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "../styles/home.module.css";
import Img from "gatsby-image";

// Step 2: Define your component
const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle="Home">
      <section className={styles.header}>
        {/* <div></div> */}
        <StaticImage src="../images/profile_1.jpg" alt="profile" layout="fullWidth" className={styles.image} />
        {/* <Img fluid={data.file.childImageSharp.fluid} /> */}
        <div className={styles.textbox}>
          <h2>Software Engineer & Flutist</h2>
          <p>
            Creating art in different forms and dimensions. As a professional flutist and educator, I look to music for
            beauty and inspiration. As a software engineer, I strive for efficiency and innovative design.{" "}
          </p>
          <Link className={styles.btn} to="/about">
            About Me
          </Link>
        </div>
      </section>
    </Layout>
  );
};

// Step 3: Export your component
export default IndexPage;

export const query = graphql`
  query Home {
    file(relativePath: { eq: "profile_1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
