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
          I’m a software developer specializing in machine learning and AI solutions.
        </p>

        <p className={styles.text}>
          With a solid background in full-stack development and a deep passion for solving real-world problems, I’ve built everything from indie mobile games to scalable backend systems. Over the years, my focus has expanded to AI.
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
