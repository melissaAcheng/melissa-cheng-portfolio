import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navbar from "./Navbar";
import { StaticImage } from "gatsby-plugin-image";
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
      <meta name="viewport" content="width=device-width"></meta>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <Navbar />
      <main>
        {pageTitle !== "Home" && <h1>{pageTitle}</h1>}
        <section>{children}</section>
      </main>
      <footer>
        <div>
          <ul>
            <li>
              <Link to="https://www.linkedin.com/in/melissaacheng/" target="_blank">
                <StaticImage src="../images/socials/linkedin-1.svg" alt="LinkedIn icon" />
              </Link>
            </li>
            <li>
              <a href="mailto: melcheng12@gmail.com" target="_blank">
                <StaticImage src="../images/socials/mail.svg" alt="Email icon" />
              </a>
            </li>
            <li>
              <Link to="https://github.com/melissaAcheng" target="_blank">
                <StaticImage src="../images/socials/github-1.svg" alt="GitHub icon" />
              </Link>
            </li>
          </ul>
          <p>© Copyright Melissa Cheng. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
