import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        {/* <h1>Contact</h1> */}
        <h3>Feel free to reach out!</h3>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a
            href="mailto:yadavakash224.ay@email.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            {/* <h2>yadavakash224.ay@email.com</h2> */}
          </a>
        </li>
        <li className={styles.link}>
          <a href="tel:+918788775922" target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("contact/phoneIcon.png")} alt="Phone icon" />
            {/* +91 878 877 5822 */}
          </a>
        </li>
        <li className={styles.link}>
          <a
            href="https://www.linkedin.com/in/akash-yadav-382008181/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* linkedin.com/AkashYadav
             */}
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
          </a>
        </li>
        <li className={styles.link}>
          <a
            href="https://github.com/Skyboy14"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
            {/* github.com/AkashYadav */}
          </a>
        </li>
      </ul>
      <h4>Created by Akash Yadav || 2024</h4>
    </footer>
  );
};
