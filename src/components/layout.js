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
          <p>Copyright 2022 Melissa Cheng</p>
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
            {/* <li>
              <Link to="https://www.youtube.com/c/MelissaCheng" target="_blank">
                <StaticImage src="../images/socials/youtube-1.svg" alt="YouTube icon" />
              </Link>
            </li> */}
            {/* <li>
              <Link to="https://www.instagram.com/melplaysflute/?hl=en" target="_blank">
                <StaticImage src="../images/socials/instagram.svg" alt="Instagram icon" />
              </Link>
            </li> */}
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
