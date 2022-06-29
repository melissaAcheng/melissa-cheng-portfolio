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
          <li>
            <Link to="https://www.facebook.com/melissaaaaaacheng/" target="_blank">
              Facebook
            </Link>
          </li>
          <li>
            <Link to="https://www.youtube.com/c/MelissaCheng" target="_blank">
              YouTube
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/melplaysflute/?hl=en" target="_blank">
              Instagram
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
