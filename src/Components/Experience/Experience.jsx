import React from "react";
import skills from "../../Data/skills.json";
import styles from "./Experience.module.css";
import reactIcon from "../../Assets/skills/react.png";
import nodeIcon from "../../Assets/skills/node.png";
import mongoDbIcon from "../../Assets/skills/mongodb.png";
import javaScriptIcon from "../../Assets/skills/JavaScript.png";
import htmlIcon from "../../Assets/skills/html.png";
import cssIcon from "../../Assets/skills/css.png";

function Experience() {
  const icons = {
    react: reactIcon,
    node: nodeIcon,
    mongodb: mongoDbIcon,
    javaScript: javaScriptIcon,
    html: htmlIcon,
    css: cssIcon
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={icons[skill.icon]} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
