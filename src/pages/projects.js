// 1. Import React and Layout
import * as React from "react";
import Layout from "../components/layout";
import * as styles from "../styles/projects.module.css";

// 2. Define your component
const ProjectsPage = (props) => {
  return (
    <Layout pageTitle="Projects">
      <div className={styles.portfolio}>
        <p>Here are a couple of my projects</p>
      </div>
    </Layout>
  );
};

// 3. Export your component
export default ProjectsPage;
