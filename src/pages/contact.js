// 1. Import React and Layout from components (for the navbar)
import * as React from "react";
import Layout from "../components/layout";
import * as styles from "../styles/contact.module.css";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// 2. Define your component
const ContactPage = () => {
  return (
    <Layout pageTitle="Contact Me">
      <div className={styles.contact}>
        <p>Whether you'd like to connect with me about coding, music, or teaching, I'd love to hear from you!</p>
        <ul className={styles.socials}>
          <li>
            <a href="mailto: melcheng12@gmail.com" target="_blank">
              <StaticImage src="../images/socials/mail-3.png" alt="Mail icon" className={styles.linkIcon} />
            </a>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/melissaacheng/" target="_blank">
              <StaticImage className={styles.linkIcon} src="../images/socials/linkedin-2.png" alt="LinkedIn icon" />
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/melplaysflute/" target="_blank">
              <StaticImage className={styles.linkIcon} src="../images/socials/instagram-2.png" alt="Instagram icon" />
            </Link>
          </li>
          <li>
            <Link to="https://github.com/melissaAcheng/" target="_blank">
              <StaticImage className={styles.linkIcon} src="../images/socials/github-2.png" alt="GitHub icon" />
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

// 3. Export your component
export default ContactPage;
