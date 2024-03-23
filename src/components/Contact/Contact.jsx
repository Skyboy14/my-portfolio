import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a
            href="mailto:myemail@email.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            yadavakash224.ay@email.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/phoneIcon.png")} alt="Phone icon" />
          <a href="tel:+918788775922" target="_blank" rel="noopener noreferrer">
            +91 878 877 5822
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            href="https://www.linkedin.com/in/akash-yadav-382008181/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/AkashYadav
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a
            href="https://github.com/Skyboy14"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/AkashYadav
          </a>
        </li>
      </ul>
    </footer>
  );
};
