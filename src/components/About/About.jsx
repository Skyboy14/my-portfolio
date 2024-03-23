import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
                I have experience developing responsive web applications with
                technologies such as React.js and Next.js. Additionally, I have
                utilized Redux for state management and Axios for connecting to
                backend services.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
                I have experience developing fast and optimized backend systems
                and APIs using Node.js and the Express.js framework, along with
                NoSQL databases such as MongoDB. Additionally, I have worked on
                document services using Swagger 2.0.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Development Tools</h3>
              <p>
                I have experience with:
                <br />
                Project management tools such as Jira, Git, Confluence,
                Bitbucket.
                <br />
                Issue tracking tools such as Splunk, ALM.
                <br />
                Design tools such as Figma, Storybook.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
