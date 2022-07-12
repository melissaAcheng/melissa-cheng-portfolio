// 1. Import React and Layout
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import * as styles from "../styles/projects.module.css";

// 2. Define your component
const ProjectsPage = ({ data }) => {
  console.log(data);
  const projects = data.allMarkdownRemark.nodes;
  console.log(projects[1].frontmatter.thumb);
  return (
    <Layout pageTitle="Projects">
      <div className={styles.portfolio}>
        <div className={styles.projects}>
          {projects.map((project) => (
            <div>
              <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
                <div>
                  <GatsbyImage image={project.frontmatter.thumb.childImageSharp.gatsbyImageData} alt="project image" />
                  <h3>{project.frontmatter.title}</h3>
               </div>
              </Link>
              <p>{project.frontmatter.stack}</p>
              <p>
                <Link to={`${project.frontmatter.github}`} target="_blank" className={styles.link}>
                  GitHub Code
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

// 3. Export your component
export default ProjectsPage;

export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
          stack
          slug
          github
        }
      }
    }
  }
`;
