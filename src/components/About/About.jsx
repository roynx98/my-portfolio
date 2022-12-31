import React from 'react';

import styles from './About.module.css';

const links = [
  { icon: 'fa fa-envelope', url: 'mailto:roynx98@gmail.com' },
  { icon: 'fa fa-github', url: 'https://github.com/roynx98' },
  { icon: 'fa fa-linkedin', url: 'https://www.linkedin.com/in/roy-rodriguez-7985a6172/' }
];

export const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          I am a software developer with a passion for learning and problem solving.
        </p>

        <p className={styles.text}>
          I started my development journey making mobile apps and games on my own, since then I have worked with many technologies, from game engines, JS frameworks to backend services.
        </p>

        <p className={styles.text}>
          Contact me on
        </p>

        <div className={styles.iconsContainer}>
          {
            links.map(({ url, icon }) =>
              <a key={url} href={url} target="_blank">
                <i className={`${icon} ${styles.icon}`} />
              </a>
            )
          }
        </div>

      </div>
    </div>
  );
};
