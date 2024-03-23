import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import resume from "../../../assets/resume/AkashYadav-webDeveloper.pdf";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Akash</h1>
        <p className={styles.description}>
          I'm a full-stack web developer with 2.5 years of experience using
          Javascript, ReactJS, NodeJS and MongoDB. Reach out if you'd like to
          learn more!
        </p>
        <div className={styles.buttonCover}>
          <a
            href="mailto:yadavakash224.ay@email.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactBtn}
          >
            Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
