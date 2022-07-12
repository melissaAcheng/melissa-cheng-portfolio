import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";
import * as styles from "../styles/project-details.module.css";

const projectDetails = ({ data }) => {
  const { html } = data.markdownRemark;
  const { title, stack, github, thumb } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <div className={styles.project}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.stack}>{stack}</h3>
        <Link to={github} target="_blank" className={styles.link}>
          GitHub Code
        </Link>
        <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
        <div className={styles.featured}>
          <GatsbyImage image={thumb.childImageSharp.gatsbyImageData} />
        </div>
      </div>
    </Layout>
  );
};

export default projectDetails;

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        github
        thumb {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
