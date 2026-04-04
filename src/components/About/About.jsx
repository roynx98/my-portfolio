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
          Software developer focused on JavaScript, with full-stack experience and a drive for building things that actually matter.
       </p>

        <p className={styles.text}>
          From creating React resoponsive UI interfaces to scalable backend systems using Node.js.
        </p>
        <p className={styles.text}>
          leverage AI tools like Claude Code to move faster without cutting corners.
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
