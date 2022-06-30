// 1. Import React and Layout
import * as React from "react";
import Layout from "../components/layout";
import * as styles from "../styles/teaching.module.css";
import { Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

// 2. Define your component
const TeachingPage = () => {
  return (
    <Layout pageTitle="Teaching">
      <div className={styles.teaching}>
        <div className={styles.philosophy}>
          <h2>My Philosophy</h2>
          <blockquote>
            I believe that all children should have the opportunity to learn and be exposed to music and the arts. Music
            lessons not only teach students a skill, but also develop healthy habits, including diligence and
            perseverance. Through music, students are also challenged to be creative and imaginative. My hope is for all
            students to find joy in playing and sharing the beauty of music with others around them.
          </blockquote>
          <StaticImage src="../images/teaching_1.jpeg" alt="profile" layout="fullWidth" className={styles.image} />
        </div>
        <div className={styles.faq}>
          <h2>FAQ</h2>
          <h3>What instruments do I teach?</h3>
          <ul>
            <li>Flute (all ages, all levels welcome)</li>
            <li>Piano (beginner to intermediate)</li>
          </ul>
          <h3>Why take music lessons?</h3>
          <p>
            By learning an instrument and putting in the required practice hours, students build self-discipline, focus,
            attention to detail, and perseverance. During lessons, we work on building technique, while also emphasizing
            creativity, imagination, and artistry.
          </p>
          <h3>What I expect from my students:</h3>
          <p>
            I require students to practice every single day, 30 minutes-2 hours depending on their age/level. There is
            no such thing as cramming in practice for a lesson the night before; consistency is key. I expect students
            to come prepared to lessons and ready to learn and work hard! <br />
            <br />
            Students must always prepare the following before the lesson: instrument, music stand (for flute lessons),
            pencil, notebook, metronome, lesson books/material/pieces.
          </p>
          <h3>What you can expect from me as a teacher:</h3>
          <p>
            Lessons focus on building a strong foundation for technique and music theory, so that students learn the
            necessary tools to create music. I emphasize the importance of attention to detail, while also learning to
            step back and see the entire picture. All students perform in my studio recitals twice a year.
          </p>
          <h3>My experience</h3>
          <p>
            I have taught privately for more than four years. I have experience preparing both my flute and piano
            students for NYSSMA and ABRSM exams. I love working with students from Pre-K all the way to high school and
            helping students through their musical journey.
          </p>
        </div>
      </div>
      <div className={styles.text}>
        <p>
          For more information about my current rates and availability, please{" "}
          <Link to="/contact" className={styles.link}>
            contact
          </Link>{" "}
          me directly.
        </p>
      </div>
    </Layout>
  );
};

// 3. Export your component
export default TeachingPage;
