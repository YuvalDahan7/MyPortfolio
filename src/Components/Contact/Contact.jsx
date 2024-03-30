import React from "react";
import styles from "./Contact.module.css";
import emailIcon from "../../Assets/contact/emailIcon.png";
import linkedinIcon from "../../Assets/contact/linkedinIcon.png";
import githubIcon from "../../Assets/contact/githubIcon.png";
import telIcon from "../../Assets/contact/telIcon.png";

function Contact() {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={telIcon} alt="Github icon" />
          <a href="tel:+972523894499">Let's talk</a>
        </li>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:Dahan236@gmail.com">Email address</a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/yuval-dahan-a7b9c99/">
            Linkedin profile
          </a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/YuvalDahan7">Github account</a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact;
