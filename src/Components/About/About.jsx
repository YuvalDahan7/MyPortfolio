import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
import aboutImage from "../../Assets/about/aboutImage.png";
import cursorIcon from "../../Assets/about/cursorIcon.png";
import uiIcon from "../../Assets/about/uiIcon.png";

function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={aboutImage} alt="laptopImage" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="cursorIcon" className={styles.iconImg} />
            <div className={styles.aboutItemText}>
              <h3> Summary </h3>
              <br />
              <p>
                Skilled in planning and executing tasks, works well under
                pressure and in dynamic environments. A strong team player with
                excellent communication and problem-solving skills.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="serverIcon" className={styles.iconImg} />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <br />
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites.
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
