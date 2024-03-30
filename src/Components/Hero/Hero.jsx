import React from "react";
import ProfileImage from "../../Assets/hero/Profile.JPG";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title} id="title-name">
          Hey, I'm Yuval.
        </h1>
        <p className={styles.description}>
          {" "}
          Active | Communicative | Independent learner <br /> Reach out if you'd
          like to see more!{" "}
        </p>
        <a href="mailto:dahan236@gmail.com" className={styles.contactBtn}>
          Contact me
        </a>
      </div>
      <img src={ProfileImage} alt="profileImage" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero;
