import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Hamburger from "hamburger-react";

const Navbar = ({ pageTitle, children }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
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
    <nav className={`${navbarOpen ? "showMenu" : ""}`}>
      <h1>
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </h1>

      <div className="hamburger">
        <Hamburger direction="left" toggled={navbarOpen} toggle={setNavbarOpen} color="#818181" />
      </div>

      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/music">Music</Link>
        </li>
        <li>
          <Link to="/teaching">Teaching</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
