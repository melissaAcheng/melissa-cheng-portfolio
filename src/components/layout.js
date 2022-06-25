import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navbar from "./Navbar";
import "../styles/layout.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className="layout">
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <Navbar />
      <main>
        {pageTitle !== "Home" && <h1>{pageTitle}</h1>}
        <section>{children}</section>
      </main>
      <footer>
        <p>Copyright 2022 Melissa Cheng</p>
        <ul>
          <li>Facebook</li>
          <li>YouTube</li>
          <li>Instagram</li>
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
