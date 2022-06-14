// Step 1: Import
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>
        Creating art in different forms and dimensions. As a professional flutist and educator, I look to music for
        beauty and inspiration. As a software engineer, I strive for efficiency and innovative design.{" "}
      </p>
      <StaticImage alt="profile" src="../images/profile_1.jpg" />
    </Layout>
  );
};

// Step 3: Export your component
export default IndexPage;
