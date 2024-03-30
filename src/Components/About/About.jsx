import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";
import aboutImage from "../../Assets/about/aboutImage.png";
import cursorIcon from "../../Assets/about/cursorIcon.png";
import serverIcon from "../../Assets/about/serverIcon.png";


function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={aboutImage} alt="laptopImage" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="cursorIcon" />
            <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                    I'm a Frontend developer.
                </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="serverIcon" />
            <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                    I'm a Frontend developer.
                </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;


// import React from "react";
// import AboutImage from "../../Assets/about/aboutImage.png";
// import cursorIcon from "../../Assets/about/cursorIcon.png";
// import serverIcon from "../../Assets/about/serverIcon.png";

