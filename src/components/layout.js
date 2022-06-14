import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  headerLink,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  navbar,
} from "./layout.module.css";

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
    <div className={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <div className={navbar}>
        <header className={siteTitle}>
          <Link className={headerLink} to="/">
            {data.site.siteMetadata.title}
          </Link>
        </header>
        <nav>
          <ul className={navLinks}>
            {/* <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li> */}
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/projects" className={navLinkText}>
                Projects
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/music" className={navLinkText}>
                Music
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/teaching" className={navLinkText}>
                Teaching
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/blog" className={navLinkText}>
                Blog
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/contact" className={navLinkText}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer>
        <ul className={navLinks}>
          <li className={navLinkItem}>Facebook</li>
          <li className={navLinkItem}>YouTube</li>
          <li className={navLinkItem}>Instagram</li>
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
